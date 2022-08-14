import path from "path";
import fs from "fs";

import misc from "../misc.js";
import github from "../github.js";

const GITHUB_ID = "hebiiro";

async function appendGitHubReleases(dist, repo, items) {
  for await (const response of github.listReleases(GITHUB_ID, repo)) {
    for (const release of response.data) {
      for (const asset of release.assets) {
        const assetExt = path.extname(asset.name).toLowerCase();
        if (![".zip", ".7z"].includes(assetExt)) {
          continue;
        }

        const assetPath = path.join(
          "temp",
          GITHUB_ID,
          repo,
          release.tag_name,
          asset.name
        );
        if (!fs.existsSync(assetPath)) {
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
              author: GITHUB_ID,
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

export default async () => {
  const dist = [];

  await appendGitHubReleases(dist, "AviUtl-Plugin-AddColorCode", [
    { filename: "AddColorCode.auf", name: "カラーコード追加" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-AdjustDialogPosition", [
    { filename: "AdjustDialogPosition.auf", name: "ダイアログ位置調整" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-AdjustLastFrame", [
    { filename: "AdjustLastFrame.auf", name: "最終フレーム自動調整" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-BigDialog", [
    { filename: "BigDialog.aul", name: "ダイアログ巨大化" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-BuildStairs", [
    { filename: "BuildStairs.auf", name: "アイテムずらし" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-CopyFilter", [
    { filename: "CopyFilter.auf", name: "フィルタのコピペ" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-DarkenWindow", [
    { filename: "DarkenWindow.aul", name: "黒窓" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-DragFilter", [
    { filename: "DragFilter.auf", name: "フィルタドラッグ移動" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-LevelMeter", [
    { filename: "LevelMeter.auf", name: "レベルメーター" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-ManyView", [
    { filename: "ManyView.auf", name: "複数ビューア" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-ObjectExplorer", [
    { filename: "ObjectExplorer.auf", name: "オブジェクトエクスプローラ" },
    {
      filename: "セカンドエクスプローラ.auf",
      name: "オブジェクトエクスプローラ",
    },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-OptimizeEditBox", [
    { filename: "OptimizeEditBox.auf", name: "エディットボックス最適化" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-script_sort_patch", [
    { filename: "script_sort_patch.auf", name: "スクリプト並び替えパッチ" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-SelectAliasFolder", [
    { filename: "SelectAliasFolder.auf", name: "エイリアスフォルダ選択" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-SelectEasing", [
    { filename: "SelectEasing.auf", name: "イージング簡単選択" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-SelectFavoriteFont", [
    { filename: "SelectFavoriteFont.auf", name: "お気に入りフォント選択" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-SelectScene", [
    { filename: "SelectScene.auf", name: "シーン簡単選択" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-SetZoom", [
    { filename: "SetZoom.auf", name: "ズーム変更" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-ShowWaveform", [
    { filename: "ShowWaveform.auf", name: "アイテム内音声波形" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-SplitText", [
    { filename: "SplitText.auf", name: "テキスト分解" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-SplitWindow", [
    { filename: "SplitWindow.auf", name: "SplitWindow" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-SwitchSettings", [
    { filename: "SwitchSettings.dll", name: "設定切り替え" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-Toumei", [
    { filename: "Toumei.auf", name: "拡張編集透明化" },
  ]);

  await appendGitHubReleases(dist, "AviUtl-Plugin-UniteWindow", [
    { filename: "UniteWindow.aul", name: "UniteWindow" },
  ]);

  return dist;
};
