import path from "path";
import fs from "fs";

import misc from "../misc.js";
import github from "../github.js";

const GITHUB_ID = "Mr-Ojii";
const AUTOBUILD_REPO = "L-SMASH-Works-Auto-Builds";

async function lsmashWorksAutoBuilds(dist) {
  for await (const response of github.listReleases(GITHUB_ID, AUTOBUILD_REPO)) {
    for (const release of response.data) {
      for (const asset of release.assets) {
        if (path.extname(asset.name) !== ".zip") {
          continue;
        }

        const assetPath = path.join(
          "temp",
          "lsmash",
          "Mr-Ojii_AutoBuilds",
          release.tag_name,
          asset.name
        );
        if (!fs.existsSync(assetPath)) {
          await misc.downloadFile(asset.browser_download_url, assetPath);
        }

        const re = /L-SMASH-Works_rev(?<rev>\d+)_(?<config>.+)_AviUtl\.zip/;
        const match = re.exec(asset.name);
        const version = "r" + match.groups.rev;
        const build = match.groups.config + " " + release.tag_name;

        const items = [
          { filename: "lwinput.aui", name: "L-SMASH Works File Reader" },
          { filename: "lwdumper.auf", name: "L-SMASH Works Dumper" },
          { filename: "lwmuxer.auf", name: "L-SMASH Works Muxer" },
          {
            filename: "lwcolor.auc",
            name: "L-SMASH Works Color Space Converter",
          },
        ];
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
              version: version,
              build: build,
              url: release.html_url,
              sha256: zipSha256[item.filename],
            });
          }
        }
      }
    }
  }
}

export default async () => {
  const dist = [];

  await lsmashWorksAutoBuilds(dist);

  // POP
  dist.push(
    // r940
    {
      filename: "lwinput.aui",
      name: "L-SMASH Works File Reader",
      author: "POP",
      version: "r940",
      build: "POP",
      url: "https://pop.4-bit.jp/?page_id=7929",
      sha256:
        "B3B6BFEEF3096B6A760D6D95410D712E3CD838F8ADD9DAB8269EF3DBCD7A4075",
    },
    {
      filename: "lwdumper.auf",
      name: "L-SMASH Works Dumper",
      author: "POP",
      version: "r940",
      build: "POP",
      url: "https://pop.4-bit.jp/?page_id=7929",
      sha256:
        "A1B64AA41672519DCF70BAEBCB1179DCAC5D1D2E3BD933F8F2554FCA0FA613FE",
    },
    {
      filename: "lwmuxer.auf",
      name: "L-SMASH Works Muxer",
      author: "POP",
      version: "r940",
      build: "POP",
      url: "https://pop.4-bit.jp/?page_id=7929",
      sha256:
        "5B5A72AF3FC60DE1B5F9C6E29F5E785D8A69BCC15F1CEEE18DC2CB6BE9D97650",
    },
    {
      filename: "lwcolor.auc",
      name: "L-SMASH Works Color Space Converter",
      author: "POP",
      version: "r940",
      build: "POP",
      url: "https://pop.4-bit.jp/?page_id=7929",
      sha256:
        "C7E251DED2F821CB1BC6B19A6643D30DA4EBD6971E341AB211D9411DCCBF9A18",
    },
    // r940 mod1
    {
      filename: "lwinput.aui",
      name: "L-SMASH Works File Reader",
      author: "POP",
      version: "r940 mod1",
      build: "POP",
      url: "https://pop.4-bit.jp/?page_id=7929",
      sha256:
        "D41562B52E19A5D85D2F1C81609C4954A4D5E701A4ADAC7AC457F6DC114B7114",
    },
    {
      filename: "lwdumper.auf",
      name: "L-SMASH Works Dumper",
      author: "POP",
      version: "r940 mod1",
      build: "POP",
      url: "https://pop.4-bit.jp/?page_id=7929",
      sha256:
        "A24EF0B74A9CFE1963BD700A5B18F925DD9F7BD762BD9C3F9B87347A32AED6A2",
    },
    {
      filename: "lwmuxer.auf",
      name: "L-SMASH Works Muxer",
      author: "POP",
      version: "r940 mod1",
      build: "POP",
      url: "https://pop.4-bit.jp/?page_id=7929",
      sha256:
        "E00F9B4B918B88DCBFE0E9440F4E0C99932CBFFE6EBD1282566508364E41D949",
    },
    {
      filename: "lwcolor.auc",
      name: "L-SMASH Works Color Space Converter",
      author: "POP",
      version: "r940 mod1",
      build: "POP",
      url: "https://pop.4-bit.jp/?page_id=7929",
      sha256:
        "1773ADB99CF7DF0F789DCE882DD2148FFE8896592E4EE2546FA9DABCBD974FD9",
    }
  );

  return dist;
};
