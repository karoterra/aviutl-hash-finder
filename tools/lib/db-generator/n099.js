export default async () => {
  const data = [
    {
      filename: "auftrace.auf",
      name: "Aufトレーサ",
      v: [
        {
          version: "v1.3",
          sha256:
            "29E9D94CA7F283C2A0DF81190E3319C93CD444A6FB07205C8CC6F3D356A10981",
        },
        {
          version: "v1.2",
          sha256:
            "55504C76B78E52256486FE39AA257252B615F049F65EDA8AF2273550408DCB12",
        },
      ],
    },
    {
      filename: "auo_mt.auo",
      name: "出力 別スレッド化",
      v: [
        {
          version: "v0.9",
          sha256:
            "1553A8C710C6F0280E7D0665E87C58267C7CE37CF0F366747C70308AB1CE2C08",
        },
      ],
    },
    {
      filename: "cspline.auf",
      name: "Cスプライン補間",
      v: [
        {
          version: "v1.4",
          sha256:
            "DDF57E50133E3A6B005CA771ADF374F07D7403082865A35A95956C0AB8694A23",
        },
      ],
    },
    {
      filename: "getclock.auf",
      name: "クロック計測",
      v: [
        {
          version: "v1.1",
          sha256:
            "DD2424FC145A5CC3F04AF8A22DDD6807A903EF61BC8E518B70DCC466B0349A28",
        },
      ],
    },
    {
      filename: "getclk_p.auf",
      name: "クロック計測FP",
      v: [
        {
          version: "v1.1",
          sha256:
            "875C9CED4999EBB5CF0A52833586E6B8EABEDE421BCC86F334C6DBB33F5BF372",
        },
      ],
    },
    {
      filename: "gpu_custom.auf",
      name: "GPUカスタム",
      v: [
        {
          version: "v1.0a",
          sha256:
            "ACF170C2CE66484CEE4A0567431949628CD90CC2B6EE26733C00C375E80D0AA2",
        },
        {
          version: "v1.0",
          sha256:
            "284BF173C378CA40BEB932AB31A7C6A34F939EF917576FAACB944A8CB298EA1E",
        },
      ],
    },
    {
      filename: "gpu_lancx.auf",
      name: "GPU Lanczos Resize",
      v: [
        {
          version: "v0.6",
          sha256:
            "7761C824C6B08D49B0A95CD5CDD0439A62177821E5FCD64EEE901605C9F46588",
        },
      ],
    },
    {
      filename: "gpu_resize.auf",
      name: "GPU Resize",
      v: [
        {
          version: "v0.9",
          sha256:
            "BBE925DD20002640D1437C1C6D0B8A11C7602D0EC36BA771C9F30E60036F31C7",
        },
        {
          version: "v0.8",
          sha256:
            "057752B7910DE2FCF77D60625DC03FD99C9D164E7348AFECFB5665082F98726C",
        },
      ],
    },
    {
      filename: "lpfd_pp.auf",
      name: "インタレ縞低減＋＋",
      v: [
        {
          version: "v1.4.3",
          sha256:
            "99F9FBE70EC0365BA294F9BE51107E0F0A0622C7DB2B7D693C48376C53442065",
        },
      ],
    },
    {
      filename: "mm_srv.auo",
      name: "MM Server",
      v: [
        {
          version: "v0.5",
          sha256:
            "A17A133C49CC7BE08B7E58A9C203756F03FE97D7E2A0C1A3B63EF46D075300D3",
        },
      ],
    },
    {
      filename: "wait.auo",
      name: "出力ウェイト",
      v: [
        {
          version: "v1.2.0",
          sha256:
            "4661C9A44BD73E763EF404222DFB7B71304FB11A949D6125D542BBE87E012F6B",
        },
      ],
    },
  ];

  const dist = [];
  for (const x of data) {
    for (const v of x.v) {
      dist.push({
        filename: x.filename,
        name: x.name,
        author: "N099",
        version: v.version,
        build: v.build ?? "",
        url: "http://www.geocities.jp/mosd7500/index.html",
        sha256: v.sha256,
      });
    }
  }

  return dist;
};
