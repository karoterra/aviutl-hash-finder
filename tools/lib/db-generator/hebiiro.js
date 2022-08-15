import misc from "../misc.js";

const GITHUB_ID = "hebiiro";

export default async () => {
  const dist = [];

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-AddColorCode",
    [{ filename: "AddColorCode.auf", name: "カラーコード追加" }]
  );

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-AdjustDialogPosition",
    [{ filename: "AdjustDialogPosition.auf", name: "ダイアログ位置調整" }]
  );

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-AdjustLastFrame",
    [{ filename: "AdjustLastFrame.auf", name: "最終フレーム自動調整" }]
  );

  await misc.appendGitHubReleases(dist, GITHUB_ID, "AviUtl-Plugin-BigDialog", [
    { filename: "BigDialog.aul", name: "ダイアログ巨大化" },
  ]);

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-BuildStairs",
    [{ filename: "BuildStairs.auf", name: "アイテムずらし" }]
  );

  await misc.appendGitHubReleases(dist, GITHUB_ID, "AviUtl-Plugin-CopyFilter", [
    { filename: "CopyFilter.auf", name: "フィルタのコピペ" },
  ]);

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-DarkenWindow",
    [{ filename: "DarkenWindow.aul", name: "黒窓" }]
  );

  await misc.appendGitHubReleases(dist, GITHUB_ID, "AviUtl-Plugin-DragFilter", [
    { filename: "DragFilter.auf", name: "フィルタドラッグ移動" },
  ]);

  await misc.appendGitHubReleases(dist, GITHUB_ID, "AviUtl-Plugin-LevelMeter", [
    { filename: "LevelMeter.auf", name: "レベルメーター" },
  ]);

  await misc.appendGitHubReleases(dist, GITHUB_ID, "AviUtl-Plugin-ManyView", [
    { filename: "ManyView.auf", name: "複数ビューア" },
  ]);

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-ObjectExplorer",
    [
      { filename: "ObjectExplorer.auf", name: "オブジェクトエクスプローラ" },
      {
        filename: "セカンドエクスプローラ.auf",
        name: "オブジェクトエクスプローラ",
      },
    ]
  );

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-OptimizeEditBox",
    [{ filename: "OptimizeEditBox.auf", name: "エディットボックス最適化" }]
  );

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-script_sort_patch",
    [{ filename: "script_sort_patch.auf", name: "スクリプト並び替えパッチ" }]
  );

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-SelectAliasFolder",
    [{ filename: "SelectAliasFolder.auf", name: "エイリアスフォルダ選択" }]
  );

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-SelectEasing",
    [{ filename: "SelectEasing.auf", name: "イージング簡単選択" }]
  );

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-SelectFavoriteFont",
    [{ filename: "SelectFavoriteFont.auf", name: "お気に入りフォント選択" }]
  );

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-SelectScene",
    [{ filename: "SelectScene.auf", name: "シーン簡単選択" }]
  );

  await misc.appendGitHubReleases(dist, GITHUB_ID, "AviUtl-Plugin-SetZoom", [
    { filename: "SetZoom.auf", name: "ズーム変更" },
  ]);

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-ShowWaveform",
    [{ filename: "ShowWaveform.auf", name: "アイテム内音声波形" }]
  );

  await misc.appendGitHubReleases(dist, GITHUB_ID, "AviUtl-Plugin-SplitText", [
    { filename: "SplitText.auf", name: "テキスト分解" },
  ]);

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-SplitWindow",
    [{ filename: "SplitWindow.auf", name: "SplitWindow" }]
  );

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-SwitchSettings",
    [{ filename: "SwitchSettings.dll", name: "設定切り替え" }]
  );

  await misc.appendGitHubReleases(dist, GITHUB_ID, "AviUtl-Plugin-Toumei", [
    { filename: "Toumei.auf", name: "拡張編集透明化" },
  ]);

  await misc.appendGitHubReleases(
    dist,
    GITHUB_ID,
    "AviUtl-Plugin-UniteWindow",
    [{ filename: "UniteWindow.aul", name: "UniteWindow" }]
  );

  for (let i = 0; i < arr.length; i++) {
    dist.push(await ghR.appendGitHubReleases(arr[i][0], arr[i][1]));
  }
  return dist;
};
