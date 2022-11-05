import GitHubReleases from "../gh-releases.js";

export default async () => {
  const dist = [];

  const ghR = new GitHubReleases("hebiiro", "蛇色");

  const arr = [
    [
      "AviUtl-Plugin-AddColorCode",
      [{ filename: "AddColorCode.auf", name: "カラーコード追加" }],
    ],
    [
      "AviUtl-Plugin-AdjustDialogPosition",
      [{ filename: "AdjustDialogPosition.auf", name: "ダイアログ位置調整" }],
    ],
    [
      "AviUtl-Plugin-AdjustLastFrame",
      [{ filename: "AdjustLastFrame.auf", name: "最終フレーム自動調整" }],
    ],
    [
      "AviUtl-Plugin-BigDialog",
      [{ filename: "BigDialog.aul", name: "ダイアログ巨大化" }],
    ],
    [
      "AviUtl-Plugin-BuildStairs",
      [{ filename: "BuildStairs.auf", name: "アイテムずらし" }],
    ],
    [
      "AviUtl-Plugin-CopyFilter",
      [{ filename: "CopyFilter.auf", name: "フィルタのコピペ" }],
    ],
    [
      "AviUtl-Plugin-DarkenWindow",
      [{ filename: "DarkenWindow.aul", name: "黒窓" }],
    ],
    [
      "AviUtl-Plugin-DragFilter",
      [{ filename: "DragFilter.auf", name: "フィルタドラッグ移動" }],
    ],
    [
      "AviUtl-Plugin-LevelMeter",
      [{ filename: "LevelMeter.auf", name: "レベルメーター" }],
    ],
    [
      "AviUtl-Plugin-ManyView",
      [{ filename: "ManyView.auf", name: "複数ビューア" }],
    ],
    [
      "AviUtl-Plugin-ObjectExplorer",
      [
        { filename: "ObjectExplorer.auf", name: "オブジェクトエクスプローラ" },
        {
          filename: "セカンドエクスプローラ.auf",
          name: "オブジェクトエクスプローラ",
        },
      ],
    ],
    [
      "AviUtl-Plugin-OptimizeEditBox",
      [{ filename: "OptimizeEditBox.auf", name: "エディットボックス最適化" }],
    ],
    [
      "AviUtl-Plugin-OutputSeq",
      [{ filename: "OutputSeq.auo", name: "連番出力" }],
    ],
    [
      "AviUtl-Plugin-script_sort_patch",
      [{ filename: "script_sort_patch.auf", name: "スクリプト並び替えパッチ" }],
    ],
    [
      "AviUtl-Plugin-SaveImage",
      [{ filename: "SaveImage.auf", name: "画像保存" }],
    ],
    [
      "AviUtl-Plugin-SelectAliasFolder",
      [{ filename: "SelectAliasFolder.auf", name: "エイリアスフォルダ選択" }],
    ],
    [
      "AviUtl-Plugin-SelectEasing",
      [{ filename: "SelectEasing.auf", name: "イージング簡単選択" }],
    ],
    [
      "AviUtl-Plugin-SelectFavoriteFont",
      [{ filename: "SelectFavoriteFont.auf", name: "お気に入りフォント選択" }],
    ],
    [
      "AviUtl-Plugin-SelectScene",
      [{ filename: "SelectScene.auf", name: "シーン簡単選択" }],
    ],
    [
      "AviUtl-Plugin-SetZoom",
      [{ filename: "SetZoom.auf", name: "ズーム変更" }],
    ],
    [
      "AviUtl-Plugin-ShowWaveform",
      [{ filename: "ShowWaveform.auf", name: "アイテム内音声波形" }],
    ],
    [
      "AviUtl-Plugin-SplitText",
      [{ filename: "SplitText.auf", name: "テキスト分解" }],
    ],
    [
      "AviUtl-Plugin-SplitWindow",
      [{ filename: "SplitWindow.aul", name: "SplitWindow" }],
    ],
    [
      "AviUtl-Plugin-SwitchSettings",
      [{ filename: "SwitchSettings.dll", name: "設定切り替え" }],
    ],
    [
      "AviUtl-Plugin-Toumei",
      [{ filename: "Toumei.auf", name: "拡張編集透明化" }],
    ],
    [
      "AviUtl-Plugin-UniteWindow",
      [{ filename: "UniteWindow.aul", name: "UniteWindow" }],
    ],
  ];

  for (const elem of arr) {
    await ghR.get(elem[0], elem[1]).then((x) => dist.push(...x));
  }
  return dist;
};
