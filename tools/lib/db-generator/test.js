import githubrepo from "../githubrepo.js";
import hebiiro_githubrepo from "./hebiiro.js";
import amate from "./amate.js";
import misc from "../misc.js";

async function a() {
  const dist = [];
  await misc.appendGitHubReleases(dist, "amate", "PropertyWindowFixerPlugin", [
    {
      filename: "PropertyWindowFixerPlugin.auf",
      name: "設定ダイアログ画面サイズ固定化プラグイン",
    },
  ]);
  console.log(dist);
}
a();
