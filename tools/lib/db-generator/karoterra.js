import path from "path";
import fs from "fs";

import misc from "../misc.js";
import github from "../github.js";
import githubrepo from "../githubrepo.js";

const GITHUB_ID = "karoterra";

async function appendGitHubReleases(dist, repo, file, name) {
  const assetNameRe = new RegExp(`^${repo}_.*\\.zip$`);
  for await (const response of github.listReleases(GITHUB_ID, repo)) {
    for (const release of response.data) {
      for (const asset of release.assets) {
        if (assetNameRe.test(asset.name)) {
          const assetPath = path.join("temp", GITHUB_ID, repo, asset.name);
          if (!fs.existsSync(assetPath)) {
            await misc.downloadFile(asset.browser_download_url, assetPath);
          }

          const zipSha256 = await misc.calcZipSha256(assetPath, [file]);
          if (file in zipSha256) {
            dist.push({
              filename: file,
              name,
              author: GITHUB_ID,
              version: release.tag_name,
              build: "",
              url: release.html_url,
              sha256: zipSha256[file],
            });
          }
        }
      }
    }
  }
}

export default async () => {
  const dist = [];

  const arr = [
    ["aviutl_ShowLimit", [{ filename: "ShowLimit.auf", name: "上限確認" }]],
    [
      "aviutl_WaveformPreview",
      [{ filename: "WaveformPreview.auf", name: "波形プレビュー" }],
    ],
  ];

  const ghR = new githubrepo.GithubReleases("karoterra", "かろてら");

  for (let i = 0; i < arr.length; i++) {
    dist.push(...(await ghR.appendGitHubReleases(arr[i][0], arr[i][1])));
  }

  const CONFIRMCLOSE_FILE = "auls_confirmclose.auf";
  const CONFIRMCLOSE_NAME = "Auls上限確認";
  const CONFIRMCLOSE_URL =
    "https://scrapbox.io/karoterra/%E6%94%B9%E5%A4%89%E7%89%88Auls%E7%B5%82%E4%BA%86%E7%A2%BA%E8%AA%8D";
  dist.push(
    {
      filename: CONFIRMCLOSE_FILE,
      name: CONFIRMCLOSE_NAME,
      author: GITHUB_ID,
      version: "v1.2",
      build: "",
      url: CONFIRMCLOSE_URL,
      sha256:
        "AC83C837C557950CF48D9E8EC26F961E6F48A92E1702EE77F6B015C5AF131614",
    },
    {
      filename: CONFIRMCLOSE_FILE,
      name: CONFIRMCLOSE_NAME,
      author: GITHUB_ID,
      version: "v1.1",
      build: "",
      url: CONFIRMCLOSE_URL,
      sha256:
        "84693AC7EEB2778C86891F050C1459F14D1E79911EBE7AEA19B0600A424F9C59",
    }
  );

  return dist;
};
