import path from "path";
import fs from "fs";

import misc from "./misc.js";
import github from "./github.js";

class GithubReleases {
  constructor(GithubID, assertNameRegExp) {
    this.ghID = GithubID;
    this.assertName = assertNameRegExp;
  }

  async appendGitHubReleases(repo, items) {
    const dist = [];
    //const assetNameRe = new RegExp(`^${repo}_.*\\.zip$`);
    const assetNameRe = new RegExp(this.assertName.replace("${repo}", repo));
    for await (const response of github.listReleases(this.ghID, repo)) {
      for (const release of response.data) {
        for (const asset of release.assets) {
          if (assetNameRe.test(asset.name)) {
            const assetExt = path.extname(asset.name).toLowerCase();
            if (![".zip", ".7z"].includes(assetExt)) {
              continue;
            }

            const assetPath = path.join(
              "temp",
              this.ghID,
              repo,
              release.tag_name,
              asset.name
            );

            if (!fs.existsSync(assetPath)) {
              console.log(assetPath);
              await misc.downloadFile(asset.browser_download_url, assetPath);
            }

            let hash = {};
            if (assetExt === ".zip") {
              hash = await misc.calcZipSha256(
                assetPath,
                items.map((item) => item.filename)
              );
            } else if (assetExt === ".7z") {
              hash = await misc.calc7zSha256(
                assetPath,
                items.map((item) => item.filename)
              );
            }

            for (const item of items) {
              if (item.filename in hash) {
                dist.push({
                  filename: item.filename,
                  name: item.name,
                  author: this.ghID,
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
    return dist;
  }
}

export default {
  GithubReleases: GithubReleases,
};
