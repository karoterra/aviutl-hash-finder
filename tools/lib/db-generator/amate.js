import path from "path";
import fs from "fs";

import misc from "../misc.js";
import github from "../github.js";

const GITHUB_ID = "amate";

async function appendGitHubReleases(dist, repo, items) {
  const assetNameRe = new RegExp(`^${repo}.*\\.zip$`);
  for await (const response of github.listReleases(GITHUB_ID, repo)) {
    for (const release of response.data) {
      for (const asset of release.assets) {
        if (assetNameRe.test(asset.name)) {
          const assetPath = path.join("temp", GITHUB_ID, repo, asset.name);
          if (!fs.existsSync(assetPath)) {
            await misc.downloadFile(asset.browser_download_url, assetPath);
          }

          const zipSha256 = await misc.calcZipSha256(
            assetPath,
            items.map((item) => item.filename)
          );
          for (const item of items) {
            if (item.filename in zipSha256) {
              dist.push({
                filename: item.filename,
                name: item.name,
                author: GITHUB_ID,
                version: release.tag_name,
                build: "",
                url: release.html_url,
                sha256: zipSha256[item.filename],
              });
            }
          }
        }
      }
    }
  }
}

export default async () => {
  const dist = [];

  await appendGitHubReleases(dist, "InputPipePlugin", [
    { filename: "InputPipePlugin.aui", name: "InputPipePlugin" },
  ]);

  await appendGitHubReleases(dist, "PropertyWindowFixerPlugin", [
    {
      filename: "PropertyWindowFixerPlugin.auf",
      name: "設定ダイアログ画面サイズ固定化プラグイン",
    },
  ]);

  await appendGitHubReleases(dist, "MFVideoReader", [
    {
      filename: "MFVideoReaderPlugin.aui",
      name: "MFVideoReaderPlugin",
    },
  ]);

  return dist;
};
