import crypto from "crypto";
import path from "path";
import fs, { createReadStream } from "fs";
import unzipper from "unzipper";
import Seven from "node-7z";
import fetch from "node-fetch";

import github from "./github.js";

async function calcSha256(stream) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");

    hash.on("finish", () => resolve(hash.read().toString("hex").toUpperCase()));
    stream.on("error", (err) => reject(err));

    stream.pipe(hash);
  });
}

async function downloadFile(url, outputPath) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const res = await fetch(url);
  const fileStream = fs.createWriteStream(outputPath);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on("error", reject);
    fileStream.on("finish", resolve);
  });
}

async function parseZipEntry(filepath, callback) {
  const zip = fs
    .createReadStream(filepath)
    .pipe(unzipper.Parse({ forceStream: true }));
  for await (const entry of zip) {
    await callback(entry);
  }
}

async function calcZipSha256(zipPath, filenames) {
  const result = {};

  const zip = fs
    .createReadStream(zipPath)
    .pipe(unzipper.Parse({ forceStream: true }));
  for await (const entry of zip) {
    const entryName = path.basename(entry.path);
    if (!filenames || filenames.includes(entryName)) {
      const sha256 = await calcSha256(entry);
      result[entryName] = sha256;
    } else {
      entry.autodrain();
    }
  }

  return result;
}

async function extract7z(archive, output, opt = {}) {
  fs.mkdirSync(output, { recursive: true });
  return new Promise((resolve, reject) => {
    const stream = Seven.extractFull(archive, output, opt);

    stream.on("end", () => {
      resolve();
    });

    stream.on("error", (err) => {
      console.error(`failed to extract ${archive}`);
      console.error(err);
      reject();
    });
  });
}

async function calcDirSha256(dir, filenames, result = []) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const direntPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      calcDirSha256(direntPath, filenames, result);
    }
    if (dirent.isFile() && (!filenames || filenames.includes(dirent.name))) {
      result[dirent.name] = await calcSha256(fs.createReadStream(direntPath));
    }
  }
  return result;
}

async function calc7zSha256(archive, filenames) {
  const archivePath = path.parse(archive);
  const output = path.join(archivePath.dir, archivePath.name);
  await extract7z(archive, output, {
    $cherryPick: filenames.map((x) => "*" + x),
  });
  return await calcDirSha256(output, filenames);
}

async function appendGitHubReleases(dist, author, ghId, repo, items, opt = {}) {
  const defaultOpt = {
    downloadSource: false,
    authorNamer: () => author,
    versionNamer: (data) => data.release.tag_name,
    buildNamer: () => "",
  };
  opt = Object.assign(defaultOpt, opt);

  const data = {};
  for await (const response of github.listReleases(ghId, repo)) {
    for (const release of response.data) {
      const tasks = release.assets.map((a) => {
        return { name: a.name, url: a.browser_download_url };
      });
      if (opt.downloadSource) {
        tasks.push({ name: "src.zip", url: release.zipball_url });
      }

      for (const task of tasks) {
        const assetExt = path.extname(task.name).toLowerCase();
        const assetPath = path.join(
          "temp",
          ghId,
          repo,
          release.tag_name,
          task.name
        );
        if (!fs.existsSync(assetPath)) {
          await downloadFile(task.url, assetPath);
        }

        let hash = {};
        if (items.some((x) => x.filename === task.name)) {
          hash[task.name] = await calcSha256(createReadStream(assetPath));
        } else if (assetExt === ".zip") {
          hash = await calcZipSha256(
            assetPath,
            items.map((item) => item.filename)
          );
        } else if (assetExt === ".7z") {
          hash = await calc7zSha256(
            assetPath,
            items.map((item) => item.filename)
          );
        }
        for (const item of items) {
          if (item.filename in hash) {
            const key = hash[item.filename] + item.filename;
            const namerData = {
              response,
              release,
              task,
              item,
            };
            data[key] = {
              filename: item.filename,
              name: item.name,
              author: opt.authorNamer(namerData),
              version: opt.versionNamer(namerData),
              build: opt.buildNamer(namerData),
              url: release.html_url,
              sha256: hash[item.filename],
            };
          }
        }
      }
    }
  }

  for (const x of Object.values(data)) {
    dist.push(x);
  }
}

export default {
  calcSha256,
  downloadFile,
  parseZipEntry,
  calcZipSha256,
  extract7z,
  calcDirSha256,
  calc7zSha256,
  appendGitHubReleases,
};
