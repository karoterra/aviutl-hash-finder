export default async () => {
  const data = [
    {
      filename: "Boost.auf",
      name: "Boost",
      url: "https://www.nicovideo.jp/watch/sm40499092",
      v: [
        {
          version: "v0.7",
          sha256:
            "ADC819487755D585FF6285346D3BD723B6685D107E578BA5B305CC253E83C60A",
        },
        {
          version: "v0.6",
          sha256:
            "E9302CA10FB8D793DB1635C13F6A8EB036A4761D69A917EABB815DC9C675E61E",
        },
        {
          version: "v0.5",
          sha256:
            "107430B09679AFA140F934C3703B11B4C0EDAE62FAC81FED5716471FBCA8E0EC",
        },
        {
          version: "v0.4",
          sha256:
            "290D8D1A99F0B486A32DD1A2F77EE6F698777B5CA8299730350D0E58656A8685",
        },
        {
          version: "v0.2",
          sha256:
            "E521AE4A5BDAEF68738FFB097CC21569C59394376EF7446F6C6DB552E2462644",
        },
        {
          version: "v0.1",
          sha256:
            "BBEFE0343A9B12837072C1AE09388255C851FAE39F5FD145645CDED8CC2CB860",
        },
      ],
    },
    {
      filename: "ContentsTree.auf",
      name: "ContentsTree",
      url: "https://www.nicovideo.jp/watch/sm40465457",
      v: [
        {
          version: "v0.2",
          sha256:
            "CD41F7B6ADF0A679A144493593E518EB7DA424E27FB0E9172379EFCC03168486",
        },
        {
          version: "v0.1",
          sha256:
            "95CCDA2C7174AA21F4B590CDA53A026D12CA4E10A31A594887B28C5CBBE00101",
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
        author: "柳",
        version: v.version,
        build: v.build ?? "",
        url: x.url,
        sha256: v.sha256,
      });
    }
  }

  return dist;
};
