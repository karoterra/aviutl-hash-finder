import crypto from "crypto";
import path from "path";
import fs from "fs";
import unzipper from "unzipper";
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
    if (!filenames || filenames.find((x) => x === entryName)) {
      const sha256 = await calcSha256(entry);
      result[entryName] = sha256;
    } else {
      entry.autodrain();
    }
  }

  return result;
}

export default {
  calcSha256,
  downloadFile,
  parseZipEntry,
  calcZipSha256,
};
