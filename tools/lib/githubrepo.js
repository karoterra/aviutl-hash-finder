import path from "path";
import fs from "fs";

import misc from "./misc.js";
import github from "./github.js";

class GithubReleases {
  constructor(GithubID, owner) {
    this.ghID = GithubID;
    this.owner = owner;
  }

  async appendGitHubReleases(repo, items) {
    for await (const response of github.listReleases(this.ghId, repo)) {
      for (const release of response.data) {
        for (const asset of release.assets) {
          const assetExt = path.extname(asset.name).toLowerCase();
          if (![".zip", ".7z"].includes(assetExt)) {
            continue;
          }

          const assetPath = path.join(
            "temp",
            this.owner,
            repo,
            release.tag_name,
            asset.name
          );
          if (!fs.existsSync(assetPath)) {
            await downloadFile(asset.browser_download_url, assetPath);
          }

          let hash = {};
          if (assetExt === ".zip") {
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
              dist.push({
                filename: item.filename,
                name: item.name,
                author: this.owner,
                version: release.tag_name,
                build: "",
                url: release.html_url,
                sha256: hash[item.filename],
              });
            }
          }
        }
      }
    }
  }
}

export default {
  GithubReleases: GithubReleases,
};
