/*
temp/aviutlフォルダに置いたaviutlとexeditのzipファイルからDB用データを生成
*/

const fs = require("fs");
const path = require("path");
const unzipper = require("unzipper");

const misc = require("./misc");

const AVIUTL_AUTHOR = "ＫＥＮくん";
const AVIUTL_URL = "http://spring-fragrance.mints.ne.jp/aviutl/";

const AVIUTL_VERSION_RE = /aviutl(?<num>\d+)(?<pre>\w*)\.zip/;
const EXEDIT_VERSION_RE = /exedit(?<num>\d+)(?<pre>\w*)\.zip/;

const ARCHIVE_DIR = "temp/aviutl";

function buildVersion(num, pre) {
  const verNum = (parseInt(num) / 100).toFixed(2);
  return verNum + pre;
}

module.exports = async () => {
  const res = [];

  for (const dirent of fs.readdirSync(ARCHIVE_DIR, { withFileTypes: true })) {
    if (!dirent.isFile()) continue;

    // AviUtl 本体
    let match = AVIUTL_VERSION_RE.exec(dirent.name);
    if (match) {
      const zip = fs
        .createReadStream(path.join(ARCHIVE_DIR, dirent.name))
        .pipe(unzipper.Parse({ forceStream: true }));
      for await (const entry of zip) {
        const filename = path.basename(entry.path);
        if (filename === "aviutl.exe") {
          const sha256 = await misc.calcSha256(entry);
          res.push({
            filename: filename,
            name: "AviUtl",
            author: AVIUTL_AUTHOR,
            version: buildVersion(match.groups.num, match.groups.pre),
            build: "",
            url: AVIUTL_URL,
            sha256: sha256,
          });
        } else {
          entry.autodrain();
        }
      }
      continue;
    }

    // 拡張編集Plugin
    match = EXEDIT_VERSION_RE.exec(dirent.name);
    if (match) {
      const zip = fs
        .createReadStream(path.join(ARCHIVE_DIR, dirent.name))
        .pipe(unzipper.Parse({ forceStream: true }));
      for await (const entry of zip) {
        const filename = path.basename(entry.path);
        if (filename === "exedit.auf") {
          const sha256 = await misc.calcSha256(entry);
          res.push({
            filename: filename,
            name: "拡張編集Plugin",
            author: AVIUTL_AUTHOR,
            version: buildVersion(match.groups.num, match.groups.pre),
            build: "",
            url: AVIUTL_URL,
            sha256: sha256,
          });
        } else {
          entry.autodrain();
        }
      }
      continue;
    }
  }

  return res;
};
