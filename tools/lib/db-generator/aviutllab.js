const AUTHOR = "AviUtl実験室";
const URL = "http://videoinfo.tenchi.ne.jp";

export default async () => {
  return [
    // DirectShow File Reader
    {
      filename: "ds_input.auf",
      name: "DirectShow File Reader",
      author: AUTHOR,
      version: "0.26a",
      build: "",
      url: URL,
      sha256:
        "FEEE689B5EFC666D767526EF6C23181D81B65F1D3094FFF75D3E9650A119F8A8",
    },
    // アニメーション編集
    {
      filename: "animate.auf",
      name: "アニメーション編集",
      author: AUTHOR,
      version: "1.4",
      build: "",
      url: URL,
      sha256:
        "CBFF873599E338F1BE4EC79184A46FC4346CD7B5F57F93BF2B8A0DE28136F757",
    },
    // クロマキー画像作成
    {
      filename: "croma.auf",
      name: "クロマキー画像作成",
      author: AUTHOR,
      version: "0.1",
      build: "",
      url: URL,
      sha256:
        "B046B9B6C7AD46C42A51530B6FB887859C2E109007C8EEDE0BC359C9F5656CD4",
    },
    // コマンド実行
    {
      filename: "cmdex.auo",
      name: "コマンド実行",
      author: AUTHOR,
      version: "0.3",
      build: "",
      url: URL,
      sha256:
        "7B40FD03C2C7D230CDD37DFC80B40EE9898CE102D9FA616E62219794173744C9",
    },
    // チャプター編集
    {
      filename: "chapter.auf",
      name: "チャプター編集",
      author: AUTHOR,
      version: "0.6",
      build: "",
      url: URL,
      sha256:
        "15CECBB1AD3AA1E189945CDCDE1AA4EEA8B4BA919223D9C09B697EEA6B488E10",
    },
    // 可変フレームレート出力
    {
      filename: "itvfr.auf",
      name: "可変フレームレート 逆テレシネプラグイン",
      author: AUTHOR,
      version: "0.9",
      build: "",
      url: URL,
      sha256:
        "8791221929760B9E6D01E8F7BD47B08F6DB1080B28680EC5B366FBA8C35DF504",
    },
    {
      filename: "itvfr_deint.auf",
      name: "可変フレームレート 逆テレシネプラグイン インターレース解除 ",
      author: AUTHOR,
      version: "0.9",
      build: "",
      url: URL,
      sha256:
        "8791221929760B9E6D01E8F7BD47B08F6DB1080B28680EC5B366FBA8C35DF504",
    },
    {
      filename: "x264out.auo",
      name: "可変フレームレート出力 x264出力(mp4/mkv)",
      author: AUTHOR,
      version: "0.9",
      build: "",
      url: URL,
      sha256:
        "58D22D3D1FCA5EA840CEC7D00EA85BACCAB261D3507F0397432789B2094730F2",
    },
    {
      filename: "vfrout.auo",
      name: "可変フレームレート出力 AVI出力(VFR)",
      author: AUTHOR,
      version: "0.5",
      build: "",
      url: URL,
      sha256:
        "D0CA8421C19359574FE372A90E7504561EC72C3E4ECF33ACD58863EEE8EF2CC4",
    },
    {
      filename: "wmvout_vfr.auo",
      name: "可変フレームレート出力 WMV出力(VFR)",
      author: AUTHOR,
      version: "0.5a",
      build: "",
      url: URL,
      sha256:
        "AE636D41861CF907F44C224D003A0C8284090F01A09AFF0E20B10F0109C78EA1",
    },
  ];
};
