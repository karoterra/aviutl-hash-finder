import GhReleases from "../gh_releases.js";

const AUTHOR = "oov";

export default async () => {
  const dist = [];

  const ghR = new GhReleases("oov", "oov");

  const arr = [
    [
      "aviutl_psdtoolkit",
      [
        { filename: "PSDToolKit.auf", name: "PSDToolKit" },
        { filename: "PSDToolKitBridge.dll", name: "PSDToolKit" },
      ],
    ],
    ["aviutl_audiomixer", [{ filename: "AudioMixer.auf", name: "AudioMixer" }]],
    [
      "aviutl_gcmzdrops",
      [{ filename: "GCMZDrops.auf", name: "ごちゃまぜドロップス" }],
    ],
    [
      "aviutl_textassist",
      [{ filename: "textassist.auf", name: "テキスト編集補助プラグイン" }],
    ],
    [
      "aviutl_bridge",
      [
        { filename: "bridge.dll", name: "bridge.dll" },
        { filename: "bridge.auf", name: "bridge.dll" },
      ],
    ],
    [
      "aviutl_rampreview",
      [
        { filename: "ZRamPreview.auf", name: "拡張編集RAMプレビュー" },
        { filename: "ZRamPreview.auo", name: "拡張編集RAMプレビュー" },
        { filename: "Extram.dll", name: "拡張編集RAMプレビュー Extram" },
      ],
    ],
    [
      "aviutl_relmoviehandle",
      [{ filename: "RelMovieHandle.auf", name: "動画ハンドル開放" }],
    ],
    ["aviutl_prima", [{ filename: "prima.aui", name: "PRIMA File Reader" }]],
  ];

  for (const elem of arr) {
    await ghR.get(elem[0], elem[1]).then((x) => dist.push(...x));
  }

  dist.push({
    filename: "loudness.auf",
    name: "ラウドネスメーター",
    author: AUTHOR,
    version: "v0.1",
    build: "",
    url: "https://www.nicovideo.jp/watch/sm34877728",
    sha256: "E80BD1E0BEDD087876263ABA08C7B89D60F372C2B734A87C8442F0F87A2AE7DE",
  });

  return dist;
};
