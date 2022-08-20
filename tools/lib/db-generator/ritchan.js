export default async () => {
  const data = [
    {
      filename: "vsthost_1.auf",
      name: "VST Hosting #1",
      version: "v0.1",
      sha256:
        "68D73E69F6BF1B529DD60EF6F00BED239D2112805A01115F62FE8757D62B83C7",
    },
    {
      filename: "vsthost_2.auf",
      name: "VST Hosting #2",
      version: "v0.1",
      sha256:
        "AC66B050E5EBA198C4E24B0E1F6E5F349E6D280339DD49783A66DBD9C8201870",
    },
    {
      filename: "vsthost_3.auf",
      name: "VST Hosting #3",
      version: "v0.1",
      sha256:
        "BE86AFA7C3E872FFCFDF6B8942FC14E06A78BED7264D45CB903A237332FD9A18",
    },
    {
      filename: "vsthost_4.auf",
      name: "VST Hosting #4",
      version: "v0.1",
      sha256:
        "FA14582F365197EC97F2CA9DA3DBC0585706776D568BB5A3DF43F09273A92344",
    },
    {
      filename: "wavpatch.auf",
      name: "音声パッチャー",
      version: "v1.0",
      sha256:
        "DCE9A3CEBD1078D3C32046800D4E0ADB046CC35DE713580B75F347856D53C990",
    },
  ];

  const dist = [];
  for (const x of data) {
    dist.push({
      filename: x.filename,
      name: x.name,
      author: "しし/りっちゃん",
      version: x.version,
      build: "",
      url: "https://www.nicovideo.jp/watch/sm29926034",
      sha256: x.sha256,
    });
  }

  return dist;
};
