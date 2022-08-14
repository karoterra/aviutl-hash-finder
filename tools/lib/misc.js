import crypto from "crypto";
import path from "path";
import fs from "fs";
import unzipper from "unzipper";
import Seven from "node-7z";
import fetch from "node-fetch";

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

async function extract7z(archive, output) {
  return new Promise((resolve, reject) => {
    const stream = Seven.extractFull(archive, output);

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
  await extract7z(archive, output);
  return await calcDirSha256(output, filenames);
}

export default {
  calcSha256,
  downloadFile,
  parseZipEntry,
  calcZipSha256,
  extract7z,
  calcDirSha256,
  calc7zSha256,
};
