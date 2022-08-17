import GhReleases from "../gh_releases.js";

const AUTHOR = "かろてら";

export default async () => {
  const dist = [];

  const arr = [
    ["aviutl_ShowLimit", [{ filename: "ShowLimit.auf", name: "上限確認" }]],
    [
      "aviutl_WaveformPreview",
      [{ filename: "WaveformPreview.auf", name: "波形プレビュー" }],
    ],
  ];

  const ghR = new GhReleases("karoterra", "かろてら");

  for (const elem of arr) {
    await ghR.get(elem[0], elem[1]).then((x) => dist.push(...x));
  }

  const CONFIRMCLOSE_FILE = "auls_confirmclose.auf";
  const CONFIRMCLOSE_NAME = "Auls上限確認";
  const CONFIRMCLOSE_URL =
    "https://scrapbox.io/karoterra/%E6%94%B9%E5%A4%89%E7%89%88Auls%E7%B5%82%E4%BA%86%E7%A2%BA%E8%AA%8D";
  dist.push(
    {
      filename: CONFIRMCLOSE_FILE,
      name: CONFIRMCLOSE_NAME,
      author: AUTHOR,
      version: "v1.2",
      build: "",
      url: CONFIRMCLOSE_URL,
      sha256:
        "AC83C837C557950CF48D9E8EC26F961E6F48A92E1702EE77F6B015C5AF131614",
    },
    {
      filename: CONFIRMCLOSE_FILE,
      name: CONFIRMCLOSE_NAME,
      author: AUTHOR,
      version: "v1.1",
      build: "",
      url: CONFIRMCLOSE_URL,
      sha256:
        "84693AC7EEB2778C86891F050C1459F14D1E79911EBE7AEA19B0600A424F9C59",
    }
  );

  return dist;
};
