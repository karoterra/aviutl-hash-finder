import GitHubReleases from "../gh-releases.js";

const AUTHOR = "謎の生物(さうなさうな)";
const GITHUB_ID = "nazonoSAUNA";

export default async () => {
  const dist = [];

  const ghrArgs = [
    {
      repo: "SortEffect",
      items: [{ filename: "SortEffect.auf", name: "エフェクト並び替え" }],
    },
    {
      repo: "patch.aul",
      items: [{ filename: "patch.aul", name: "patch.aul" }],
    },
    {
      repo: "switch_drawfilter_gui",
      items: [{ filename: "switch_drawfilter_gui.auf", name: "描画GUI非表示" }],
    },
    {
      repo: "mousehwheel",
      items: [{ filename: "mousehwheel.auf", name: "マウス横ホイール" }],
    },
    {
      repo: "buttonsc",
      items: [{ filename: "buttonsc.auf", name: "ボタンショートカット追加" }],
    },
    {
      repo: "SceneLayerCopy",
      items: [{ filename: "SceneLayerCopy.auf", name: "レイヤー情報コピペ" }],
    },
  ];
  const ghr = new GitHubReleases(GITHUB_ID, AUTHOR);
  for (const args of ghrArgs) {
    await ghr.get(args.repo, args.items).then((x) => dist.push(...x));
  }

  const data = [
    {
      filename: "Redo.auf",
      name: "Redo",
      url: "https://www.nicovideo.jp/watch/sm39263447",
      v: [
        {
          version: "v2.7",
          build: "ランタイム不要",
          sha256:
            "7C8A22AE57267378F220E1862E33C1EAB5EE9A6907829FD877B34F0AD90C9236",
        },
        {
          version: "v2.6",
          build: "ランタイム不要",
          sha256:
            "3BA4C6864802AC4267D8B5E330A04DCEBD55590C401F5D9550A55FE431E52B50",
        },
        {
          version: "v2.5",
          build: "ランタイム不要",
          sha256:
            "6503FFA749937CC8AD7C7BDF43EED94C71021930F397A47966C349011F36F3C3",
        },
        {
          version: "v2.4",
          build: "ランタイム不要",
          sha256:
            "41AEEE41EF80A486F2A17336686B84AD4892E29B0AC46EB4185FB16517DA8E2D",
        },
        {
          version: "v2.7",
          build: "要ランタイム",
          sha256:
            "F5B3DFC4E541DC42828FD538BC74C376546225BD6C335A6553B9BD71CB06B231",
        },
        {
          version: "v2.6",
          build: "要ランタイム",
          sha256:
            "33D42E2FEEC4648AAADC5C46924C979E84D4F23890DE5FF72CA96E8D907BC76C",
        },
        {
          version: "v2.5",
          build: "要ランタイム",
          sha256:
            "D9B4BF20AEDCE5524E6A8FE514521050EA48CB022AB69548978AED1E87DBF16F",
        },
        {
          version: "v2.4",
          build: "要ランタイム",
          sha256:
            "1861BB216963D2C1CEB8CEBC1295FCCA9A73435BC88EC6486D43AE357D3CA4DE",
        },
      ],
    },
    {
      filename: "xCameraAssist.auf",
      name: "カメラ補助",
      url: "https://www.nicovideo.jp/watch/sm39701988",
      v: [
        {
          version: "v1.7",
          build: "ランタイム不要",
          sha256:
            "F84A2E9354435B87229EEEF6FE39F1359C55C49BA632006D9B776D89A9C7F42E",
        },
        {
          version: "v1.7",
          build: "要ランタイム",
          sha256:
            "5B9E4379812D655FB70BC44F1B6EBC9AEF3F49A587BB889F5DD4A2D0E1E8C975",
        },
      ],
    },
    {
      filename: "auls_framesound_fix.auf",
      name: "編集中フレーム移動時に音を鳴らす",
      url: "https://drive.google.com/drive/folders/1CxvZLgsrjsBXDZS14k8UC7Oz17j74Zl9",
      v: [
        {
          version: "2022/05/04",
          build: "ランタイム不要",
          sha256:
            "5E8F2615A02B2F8943756FACF520DEAB5249E4AC87B3D995AF4F9C12C6BF1FE7",
        },
        {
          version: "2022/05/04",
          build: "要ランタイム",
          sha256:
            "46F763EA40124ACEC993D4F8CDBBE2DF2C44925FE4746877C5EA76B29AEFB407",
        },
      ],
    },
    {
      filename: "BottomClickCtrl.auf",
      name: "ボタン周囲の判定無効",
      url: "https://www.nicovideo.jp/watch/sm39078844",
      v: [
        {
          version: "v0.3",
          build: "ランタイム不要",
          sha256:
            "6E2718C2DCF8595A8697CBD3F39BCAA5158635DA3BE1AE1BE9F5D21F364D3664",
        },
        {
          version: "v0.3",
          build: "要ランタイム",
          sha256:
            "7D0EF5D4DE43F546A5F83D370DC806C7556BAA9761B0DBAEA0325FCE13F1DAB8",
        },
      ],
    },
    {
      filename: "0_MaxWnd.auf",
      name: "最大化時メインウィンドウのみ",
      url: "https://www.nicovideo.jp/watch/sm38900149",
      v: [
        {
          version: "v0.3",
          build: "ランタイム不要",
          sha256:
            "EBFF039E2131A1672E75991182A36CCBF9A03BE2C069E760E838EA659628E232",
        },
        {
          version: "v0.3",
          build: "要ランタイム",
          sha256:
            "AAE1FCE58D74422C279CD3E420B5F8B4471EBFFE3AF4F1311712378E51C4299C",
        },
      ],
    },
    {
      filename: "objLayerDisp.auf",
      name: "消えたオブジェ表示",
      url: "https://drive.google.com/drive/folders/1CxvZLgsrjsBXDZS14k8UC7Oz17j74Zl9",
      v: [
        {
          version: "v0.2",
          sha256:
            "FD342D42F243908899D9DBF086D95689659C2E4C25A8A470F0844D84F9757325",
        },
      ],
    },
  ];
  for (const x of data) {
    for (const v of x.v) {
      dist.push({
        filename: x.filename,
        name: x.name,
        author: AUTHOR,
        version: v.version,
        build: v.build ?? "",
        url: x.url,
        sha256: v.sha256,
      });
    }
  }

  return dist;
};
