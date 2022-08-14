/*
temp/aviutlフォルダに置いたaviutlとexeditのzipファイルからDB用データを生成
*/

import path from "path";
import fs from "fs";

import misc from "../misc.js";

const AVIUTL_AUTHOR = "ＫＥＮくん";
const AVIUTL_URL = "http://spring-fragrance.mints.ne.jp/aviutl/";

const AVIUTL_VERSION_RE = /aviutl(?<num>\d+)(?<pre>\w*)\.zip/;
const EXEDIT_VERSION_RE = /exedit(?<num>\d+)(?<pre>\w*)\.zip/;

const ARCHIVE_DIR = "temp/aviutl";

function buildVersion(num, pre) {
  const verNum = (parseInt(num) / 100).toFixed(2);
  return verNum + pre;
}

function getExeditInputVersion(sha256, num, pre) {
  switch (sha256) {
    case "C12B3726E447B66D562CB294D17C1CDFC35423F0B8772149A9CA5740AF797929":
      return ["0.01", "exedit.auf <= 0.70a"];
    case "CF6F57E33F662CE6C7D4BE43ACA72303D0B86323A11BF6C244D78BFE1ED0FAC9":
      return ["0.01", "0.71 <= exedit.auf <= 0.92"];
    case "38DC2E541D4BEA24F283BC2E7108CEE96C042018D38A5D06DAF9F87ECABBCA44":
      return ["0.02", "exedit.auf >= 0.93rc1"];
    default:
      return ["", `exedit.auf = ${buildVersion(num, pre)}`];
  }
}

function getExeditOutputVersion(sha256, num, pre) {
  switch (sha256) {
    case "E930E0751A72FD996C9BCA71EF2EDBA868D8B2433EFA4526072E7ED283CFAE6E":
      return ["0.01", "exedit.auf <= 0.70a"];
    case "EE3C6E0217681ADBA63B6B7B738D1D57230AC66BB5C721F06546C633734587E2":
      return ["0.01", "0.71 <= exedit.auf <= 0.84b"];
    case "D1CF24CF3EF6572CCDC197E0B03C8F18B3983EEDE792B89CBB250104A49ED37B":
      return ["0.02", "0.84c <= exedit.auf <= 0.87e"];
    case "B021B4E6F93140CB15121C064F7410D5D41FA078D70040EA3DD5A119955970DE":
      return ["0.03", "0.87f <= exedit.auf <= 0.92"];
    case "8B9C9D4D0D19961803FA578751E480E52A554AD8BF0DBAFB301CC5EC917208F7":
      return ["0.04", "exedit.auf >= 0.93rc1"];
    default:
      return ["", `exedit.auf = ${buildVersion(num, pre)}`];
  }
}

export default async () => {
  const aviutl = [];
  const exeditFilter = [];
  const exeditInput = {};
  const exeditOutput = {};

  for (const dirent of fs.readdirSync(ARCHIVE_DIR, { withFileTypes: true })) {
    if (!dirent.isFile()) continue;

    const archivePath = path.join(ARCHIVE_DIR, dirent.name);

    // AviUtl 本体
    let match = AVIUTL_VERSION_RE.exec(dirent.name);
    if (match) {
      const zipSha256 = await misc.calcZipSha256(archivePath, ["aviutl.exe"]);
      if ("aviutl.exe" in zipSha256) {
        aviutl.push({
          filename: "aviutl.exe",
          name: "AviUtl",
          author: AVIUTL_AUTHOR,
          version: buildVersion(match.groups.num, match.groups.pre),
          build: "",
          url: AVIUTL_URL,
          sha256: zipSha256["aviutl.exe"],
        });
      }
      continue;
    }

    // 拡張編集Plugin
    match = EXEDIT_VERSION_RE.exec(dirent.name);
    if (match) {
      const zipSha256 = await misc.calcZipSha256(archivePath, [
        "exedit.auf",
        "exedit.aui",
        "exedit.auo",
      ]);
      if ("exedit.auf" in zipSha256) {
        exeditFilter.push({
          filename: "exedit.auf",
          name: "拡張編集Plugin",
          author: AVIUTL_AUTHOR,
          version: buildVersion(match.groups.num, match.groups.pre),
          build: "",
          url: AVIUTL_URL,
          sha256: zipSha256["exedit.auf"],
        });
      }
      if ("exedit.aui" in zipSha256) {
        const [version, build] = getExeditInputVersion(
          zipSha256["exedit.aui"],
          match.groups.num,
          match.groups.pre
        );
        exeditInput[zipSha256["exedit.aui"]] = {
          filename: "exedit.aui",
          name: "拡張編集 File Reader",
          author: AVIUTL_AUTHOR,
          version: version,
          build: build,
          url: AVIUTL_URL,
          sha256: zipSha256["exedit.aui"],
        };
      }
      if ("exedit.auo" in zipSha256) {
        const [version, build] = getExeditOutputVersion(
          zipSha256["exedit.auo"],
          match.groups.num,
          match.groups.pre
        );
        exeditOutput[zipSha256["exedit.auo"]] = {
          filename: "exedit.auo",
          name: "拡張編集AVI/BMP出力 (RGBA)",
          author: AVIUTL_AUTHOR,
          version: version,
          build: build,
          url: AVIUTL_URL,
          sha256: zipSha256["exedit.auo"],
        };
      }
      continue;
    }
  }

  return aviutl.concat(
    exeditFilter,
    Object.values(exeditInput),
    Object.values(exeditOutput)
  );
};
