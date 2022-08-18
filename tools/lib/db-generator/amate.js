import GitHubReleases from "../gh-releases.js";

export default async () => {
  const dist = [];

  const arr = [
    [
      "InputPipePlugin",
      [{ filename: "InputPipePlugin.aui", name: "InputPipePlugin" }],
    ],
    [
      "PropertyWindowFixerPlugin",
      [
        {
          filename: "PropertyWindowFixerPlugin.auf",
          name: "設定ダイアログ画面サイズ固定化プラグイン",
        },
      ],
    ],
    [
      "MFVideoReader",
      [
        {
          filename: "MFVideoReaderPlugin.aui",
          name: "MFVideoReaderPlugin",
        },
      ],
    ],
  ];

  const ghR = new GitHubReleases("amate", "amate");

  for (const elem of arr) {
    await ghR.get(elem[0], elem[1]).then((x) => dist.push(...x));
  }

  return dist;
};
