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

  const data = [
    {
      author: "POP",
      version: "r940",
      build: "POP",
      url: "https://pop.4-bit.jp/?page_id=7929",
      input: "B3B6BFEEF3096B6A760D6D95410D712E3CD838F8ADD9DAB8269EF3DBCD7A4075",
      dumper:
        "A1B64AA41672519DCF70BAEBCB1179DCAC5D1D2E3BD933F8F2554FCA0FA613FE",
      muxer: "5B5A72AF3FC60DE1B5F9C6E29F5E785D8A69BCC15F1CEEE18DC2CB6BE9D97650",
      color: "C7E251DED2F821CB1BC6B19A6643D30DA4EBD6971E341AB211D9411DCCBF9A18",
    },
    {
      author: "POP",
      version: "r940 mod1",
      build: "POP",
      url: "https://pop.4-bit.jp/?page_id=7929",
      input: "D41562B52E19A5D85D2F1C81609C4954A4D5E701A4ADAC7AC457F6DC114B7114",
      dumper:
        "A24EF0B74A9CFE1963BD700A5B18F925DD9F7BD762BD9C3F9B87347A32AED6A2",
      muxer: "E00F9B4B918B88DCBFE0E9440F4E0C99932CBFFE6EBD1282566508364E41D949",
      color: "1773ADB99CF7DF0F789DCE882DD2148FFE8896592E4EE2546FA9DABCBD974FD9",
    },
    {
      author: "Maverick Tse",
      version: "r733",
      build: "2014/12/25",
      url: "https://onedrive.live.com/?authkey=%21AHg31ARXSfIHQUc&id=26840CDF9818EB8E%21245&cid=26840CDF9818EB8E",
      input: "8192441F6E16C23E75FE44609D625E95A12E671BC2ABD8BF00EA0A4A78EDD963",
      dumper:
        "C4C8E52E365DD3CBE0DDE8A143C1349F191EEBBCDCB0EB698B3C06FB1833239D",
      muxer: "BF7CA665B9713A8AD163C88076CF4C61B914A1ED34119FB995E63C819AD123D3",
      color: "C7EEDC1016B576C3C344046B6CE0CF642E5CB19EF3F2A8D19FD8D658432A0E90",
    },
  ];
  for (const x of data) {
    dist.push(
      {
        filename: "lwinput.aui",
        name: "L-SMASH Works File Reader",
        author: x.author,
        version: x.version,
        build: x.build,
        url: x.url,
        sha256: x.input,
      },
      {
        filename: "lwdumper.auf",
        name: "L-SMASH Works Dumper",
        author: x.author,
        version: x.version,
        build: x.build,
        url: x.url,
        sha256: x.dumper,
      },
      {
        filename: "lwmuxer.auf",
        name: "L-SMASH Works Muxer",
        author: x.author,
        version: x.version,
        build: x.build,
        url: x.url,
        sha256: x.muxer,
      },
      {
        filename: "lwcolor.auc",
        name: "L-SMASH Works Color Space Converter",
        author: x.author,
        version: x.version,
        build: x.build,
        url: x.url,
        sha256: x.color,
      }
    );
  }

  return dist;
};
