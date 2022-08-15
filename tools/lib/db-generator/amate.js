import path from "path";
import fs from "fs";

import misc from "../misc.js";
import github from "../github.js";
import githubrepo from "../githubrepo.js";

const GITHUB_ID = "amate";

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

  const ghR = new githubrepo.GithubReleases("amate", "amate");

  for (let i = 0; i < arr.length; i++) {
    dist.push(await ghR.appendGitHubReleases(arr[i][0], arr[i][1]));
  }

  return dist;
};
