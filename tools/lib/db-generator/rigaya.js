import GitHubReleases from "../gh-releases.js";

const AUTHOR = "rigaya";
const GITHUB_ID = "rigaya";

export default async () => {
  const dist = [];

  const ghrArgs = [
    {
      repo: "x264guiEx",
      items: [{ filename: "x264guiEx.auo", name: "拡張 x264 出力(GUI) Ex" }],
    },
    {
      repo: "x265guiEx",
      items: [{ filename: "x265guiEx.auo", name: "拡張 x265 出力(GUI) Ex" }],
    },
    {
      repo: "QSVEnc",
      items: [{ filename: "QSVEnc.auo", name: "拡張 QSV 出力" }],
    },
    {
      repo: "NVEnc",
      items: [{ filename: "NVEnc.auo", name: "拡張 NVEnc 出力" }],
    },
    {
      repo: "VCEEnc",
      items: [{ filename: "VCEEnc.auo", name: "拡張 VCE 出力" }],
    },
    {
      repo: "svtAV1guiEx",
      items: [
        { filename: "svtAV1guiEx.auo", name: "拡張 SVT-AV1 出力(GUI) Ex" },
      ],
    },
    {
      repo: "ffmpegOut",
      items: [{ filename: "ffmpegOut.auo", name: "ffmpeg 出力" }],
    },
    {
      repo: "Aviutl-clfilters",
      items: [{ filename: "clfilters.auf", name: "clfilters" }],
    },
    {
      repo: "pmd_mt",
      items: [{ filename: "pmd_mt.auf", name: "PMD_MT" }],
    },
  ];
  const ghr = new GitHubReleases(GITHUB_ID, AUTHOR);
  for (const args of ghrArgs) {
    await ghr.get(args.repo, args.items).then((x) => dist.push(...x));
  }

  const data = [
    // AviutlColor
    {
      filename: "color_bt2020nc.auc",
      name: "AviutlColor BT.2020nc (st)",
      url: "https://rigaya34589.blog.fc2.com/blog-category-25.html",
      v: [
        {
          version: "0.02",
          sha256:
            "0B4287E6CB8698C694E43A25D0853079FE48C1F744B9B57526E97E83DDF62C43",
        },
        {
          version: "0.01",
          sha256:
            "D895A5E0AEE112318BADD1A9B23CCAD4C11D761E8F673C6C70B409E5FCBD9FA3",
        },
        {
          version: "0.00",
          sha256:
            "38F9B6013975F89075071907670545279BA62A3EFAF7AE9F52A03C40E944823E",
        },
      ],
    },
    {
      filename: "color_bt601.auc",
      name: "AviutlColor BT.601 (st)",
      url: "https://rigaya34589.blog.fc2.com/blog-category-25.html",
      v: [
        {
          version: "0.02",
          sha256:
            "EE3B8C98E9CE09E1155EDDDE81CC13F5847404263CD92074CF4878E8767542E9",
        },
        {
          version: "0.01",
          sha256:
            "85642DB9175200DBDF85893CAD23B9C7AE16F81795ACE1323BDF7BD7554343D6",
        },
        {
          version: "0.00",
          sha256:
            "356B18FF66EB160E49A565BDB184CDCA932AD80C0C2DAEC848D584E7856A9E50",
        },
      ],
    },
    {
      filename: "color_bt709.auc",
      name: "AviutlColor BT.709 (st)",
      url: "https://rigaya34589.blog.fc2.com/blog-category-25.html",
      v: [
        {
          version: "0.02",
          sha256:
            "C2AE4E64A2266B3E3BD52191B971508FFEB9086360E1D9AB4DC2C0CD80F1B5B7",
        },
        {
          version: "0.01",
          sha256:
            "F25E699DE94F57AE41FD82E91DAB30429CFAAAE9812CACBE63A22950E20B6CB7",
        },
        {
          version: "0.00",
          sha256:
            "73236B356A5B0F855C3085FF3CDC6D3162A14DFA56DAAAD3B39935D12EE99AAA",
        },
      ],
    },
    // 自動フィールドシフト
    {
      filename: "afs.auf",
      name: "自動フィールドシフト",
      url: "https://rigaya34589.blog.fc2.com",
      v: [
        {
          version: "7.5a+22",
          sha256:
            "EF5C01DD5D03D26AD51CE09D36C0525FCE02535F07C20A52D7DFD34DBFD3F6E1",
        },
        {
          version: "7.5a+19",
          sha256:
            "FA6EB6FA45DCACAB9709FDF51F317594A551DF2102E33EF724BA4252508AC6FD",
        },
        {
          version: "7.5a+18",
          sha256:
            "02787EC84955FB2259E8FF9F29379F8CB59687E25A66AD8E7CC5294A20CDDB3F",
        },
        {
          version: "7.5a+17",
          sha256:
            "9EAF8F007D66D2AC1150A49A4EB05EE1EB8C3BDA07B79A92EB7A28D12A43DFBA",
        },
        {
          version: "7.5a+16",
          sha256:
            "7B65D7D8221F229F70CE7AB078083D734E88E0B1AC49A1116E200BF4DF48F9FC",
        },
        {
          version: "7.5a+14",
          sha256:
            "AEA00E69380B7A65E7994FFF6EA26DBA469134AFF0967A6BEB9A33586EF9E6B8",
        },
        {
          version: "7.5a+13",
          sha256:
            "4BB28A164DC67E161159745AF2B6C6EDDF4426224869AC5470F4432579574BBA",
        },
        {
          version: "7.5a+12",
          sha256:
            "15611F91BB890D8F5E0448A5EF2B890BCD2925370A833B08EB00B2576A8B035F",
        },
        {
          version: "7.5a+10",
          sha256:
            "63EFC723F122264D7E89806ADE625510183936A7DADC0453E79FF016C458BF0B",
        },
        {
          version: "7.5a+8",
          sha256:
            "707E7280B73F3D92F0F5710B7105A2BBD5484CF59CE8B9F67D6B11E1B5FB1322",
        },
        {
          version: "7.5a+7",
          sha256:
            "C1DD5A7CEE10A5AFAC961B4644B703946C0083C1A9E3F780011531FC919D09AF",
        },
        {
          version: "7.5a+6",
          sha256:
            "C1DD5A7CEE10A5AFAC961B4644B703946C0083C1A9E3F780011531FC919D09AF",
        },
        {
          version: "7.5a+5",
          sha256:
            "F6CF2B48198BBA44E2B52C3E820CC6E523D649F7A98DA6006638E20E2D9558BA",
        },
        {
          version: "7.5a+4",
          sha256:
            "8580E969CECC048B3EFF1468DCCAC505A91ABEDD176B4E7A978A518E1359DF50",
        },
        {
          version: "7.5a+3",
          sha256:
            "6247AC9E05FEBE9691DDE2B8512C5FE243EF0E82262B9789A21172039FF32160",
        },
        {
          version: "7.5a+2",
          sha256:
            "AD2CFFC126C8013AE5CD7A3A032CA5B206207CD91F0A8AA064AB25FFCB4DDA6E",
        },
      ],
    },
    {
      filename: "afsvf.auf",
      name: "自動フィールドシフトVF",
      url: "https://rigaya34589.blog.fc2.com",
      v: [
        {
          version: "7.5a+22",
          sha256:
            "7E96240E03C2EE7089DF9F39EC997FF624B1D856B83ACDA05B4BBEDE1214D69A",
        },
        {
          version: "7.5a+19",
          sha256:
            "F4FB6CDA9F96D62DB6F41E31923C60832EE85CD31D2BCF27A087C05CE05F99D5",
        },
        {
          version: "7.5a+18",
          sha256:
            "1272C2FAFFBCC559413F8B724503F63DFCC89ED0832B2E1C8BBAE21A36BFA13C",
        },
        {
          version: "7.5a+17",
          sha256:
            "D5415981C00404B01CB4D78FE9D1FDCF00B12DC1A2A84379273670E5C5FC34F5",
        },
        {
          version: "7.5a+16",
          sha256:
            "1705EFCE648660C586990610DF5532C101C96F3B253AA047F93FC661F2CAEBAC",
        },
        {
          version: "7.5a+14",
          sha256:
            "D99E241CCEA6D50CAA0C926D5A06DABE0E01BC639F183041F19BE6248F64A66C",
        },
        {
          version: "7.5a+13",
          sha256:
            "A92803F890957012CC490E030D9D91E28F6F89FA920B285C10DBABC5FE719677",
        },
        {
          version: "7.5a+12",
          sha256:
            "C03FC09AE305835C4E34514DB4DE7B2BB2463B642CB952CA6D64DC52B62D7957",
        },
        {
          version: "7.5a+10",
          sha256:
            "1A98018B053E680C06086605ACDF04D1C6B8C2633A2C8D2566E79A70F2AA29AB",
        },
        {
          version: "7.5a+8",
          sha256:
            "13EA9A042226F73F086B57FBC2170D853BFA489ADB7515C985262DC32F39FBFB",
        },
        {
          version: "7.5a+7",
          sha256:
            "6274219272DF2E8C463F1A259CA66B83145D16D6DCFE393199B698FAF39D668C",
        },
        {
          version: "7.5a+6",
          sha256:
            "6274219272DF2E8C463F1A259CA66B83145D16D6DCFE393199B698FAF39D668C",
        },
        {
          version: "7.5a+5",
          sha256:
            "3B899EFA2236D5A4EF6FA248CFD2B868CED3134E7ACAE85E7E1FA268B02D6BE6",
        },
        {
          version: "7.5a+4",
          sha256:
            "94D790651B7B4B16743BFE421664008BC1A2AA606D4E4CB15DD71BBED4A02C10",
        },
        {
          version: "7.5a+3",
          sha256:
            "E8C794289BD943B518E56E5D6C46DCB7BB878A2CD432CFE3DFDFB3E22F9B1EA0",
        },
        {
          version: "7.5a+2",
          sha256:
            "7F3CB9DE1FC18B633D21B3FAEEECF7B7A7EEA137EFCE91EE5EF9369018AD8D72",
        },
      ],
    },
    // エッジレベル調整MT
    {
      filename: "edgelevelMT.auf",
      name: "エッジレベル調整 MT",
      url: "https://rigaya34589.blog.fc2.com",
      v: [
        {
          version: "0.7v9",
          sha256:
            "704725E485E77BE01F3EED8908316DD1135107368D908F1622A8FC4F393345AD",
        },
        {
          version: "0.7v8",
          sha256:
            "1361BBD8BEDACC1789BBB9558C3F310178C469EA2DCAE5E76A45CAB7F8F4C859",
        },
        {
          version: "0.7v7",
          sha256:
            "F510F5543F692753946A054D91EDF56B158D490563D1D571E2EEDF59A9AF5E58",
        },
        {
          version: "0.7v5",
          sha256:
            "308BA1D88B8A6FF2F3B6B8BCFA757095D28B4D1D308AC09A0FBC94CEE6732C0D",
        },
        {
          version: "0.7v4",
          sha256:
            "97A76BDAFE9C05FC1AAB853B63BB4D2D3F415AA85961634F9FBB5FECBE282CAA",
        },
        {
          version: "0.7v3",
          sha256:
            "AE2BAE8809C918494172E4C66E1FEBA3001B82347F8EEB306B43FCA5E4483AF1",
        },
        {
          version: "0.7",
          sha256:
            "82CA1E1C634A0C6CEE51D6F79BB58ACCFC5E4C6C5AEB858DAC71CD85FD06FDDD",
        },
      ],
    },
    // バンディング低減MT
    {
      filename: "bandingMT_simd.auf",
      name: "バンディング低減MT SIMD",
      url: "https://rigaya34589.blog.fc2.com",
      v: [
        {
          version: "0.7v17+8",
          sha256:
            "B9F0F9A14DDEDF67006AE0C6F4F29D18C7D49A15876C6AE2B00FC6D5A97EA0FA",
        },
        {
          version: "0.7v17+7",
          sha256:
            "01BC16A77EF3A266D3DCE5ADE1A84B5427F7D14F0C6883131840C1BD9498ED66",
        },
        {
          version: "0.7v17+6",
          sha256:
            "815E1E10F261535741088C5C1419DBC4C8BB9B6ABCCEDD6D71FB3B30A159E21E",
        },
        {
          version: "0.7v17+5",
          sha256:
            "2C57374875374A7A4938116FDB9874314C194567B788EB480F215835C8AB670C",
        },
        {
          version: "0.7v17+4",
          sha256:
            "4416FE13749AC70F3D4825E1CD706F5D58DFB72A97395EB390F1F6EBEBFF8639",
        },
        {
          version: "0.7v17+2",
          sha256:
            "CAD6CF9F9F7608A96AAE542F554D2811BBF655177BB89E0DDD8A0E47798FBA97",
        },
      ],
    },
    // 透過性ロゴ
    {
      filename: "delogo.auf",
      name: "透過性ロゴ",
      url: "https://rigaya34589.blog.fc2.com",
      v: [
        {
          version: "r17",
          sha256:
            "CE7AD015606B347F34EE1656A46FE365F14055DBBDC77C606944656DC78AB068",
        },
        {
          version: "r16",
          sha256:
            "E44207AE668A5FAFDF121D58B3E4FDFCBDB1773F8BA270F22F331DFA5C518160",
        },
        {
          version: "r15",
          sha256:
            "76BE3C64DDBD6EEB76E7BC883E6291289B7AC981D70A5CDE0EF9902E0AC334CE",
        },
        {
          version: "r14",
          sha256:
            "DDFFED66EFC290913E2DE6582FF4A0A9E03795028FF915290492743D9B5BC891",
        },
        {
          version: "r13",
          sha256:
            "A57317D4F586656B5F8C10512801C3707D11C7D209C7D2C0B87BF02EC777158D",
        },
        {
          version: "r12",
          sha256:
            "8BCB052AA4583A05A25B15F7C13AAF4433283D6C83EBB9784669BD43839C98E7",
        },
        {
          version: "r10",
          sha256:
            "D46312222B803324E7BFA1E3C502FC80DDBEB9936F5DC098C819F2C683AACF85",
        },
        {
          version: "r08",
          sha256:
            "F719F659EEB98BEC2400B97A9CBEF90CF7753F8A880E6602453F4180E2EBBC78",
        },
        {
          version: "r07",
          sha256:
            "4C22598F4DEDA72D1F03D92AE53B1AB1FEF8EC5080235E805064F9197F93C529",
        },
        {
          version: "r06",
          sha256:
            "9F45B144C8F1D5ADC86BCA3872F74E2EAFDAA7915CD82BF629D0F85465DFEF7B",
        },
        {
          version: "r05",
          sha256:
            "3F23F89968296417391ABF48F0DF420A211D3ACFF1621E01CDFB32EF6949E22B",
        },
        {
          version: "r04",
          sha256:
            "9E173992A02B9585112D24D53567D2B2DE67C7F9F17321A183D3B042A0B1DF88",
        },
        {
          version: "20150110",
          sha256:
            "7AFE7D0879F7A2830EAA401F38EEAF9A7300FE340B79B57E4AB1369AEEF565C8",
        },
        {
          version: "20150108",
          sha256:
            "97A0045FDC940BC51A9844D4033E3F39D0FCD9481F69FC2472B63902F090811C",
        },
        {
          version: "20141006",
          sha256:
            "B8F9A45C81C8747386B168B7C3DA2CD549B902BA6BC2418B34A3B71C8F8432C2",
        },
      ],
    },
    {
      filename: "logoscan.auf",
      name: "ロゴ解析",
      url: "https://rigaya34589.blog.fc2.com",
      v: [
        {
          version: "透過性ロゴr17",
          sha256:
            "500BB69A26F2C985CB76532E90080E38F42968E107F95CDFBA2CACB2BB1F17DD",
        },
        {
          version: "透過性ロゴr16",
          sha256:
            "5F2B581973CBFF859CBEC2B56AC1A73B88C488E981DA6AD9B64E6D548EBAAD5A",
        },
        {
          version: "透過性ロゴr15",
          sha256:
            "6BCE1A10F676D933063DFE872738DC9DF8E4AE8A9707C326BCE3D0CA18EF7140",
        },
        {
          version: "透過性ロゴr14",
          sha256:
            "6C4AB82BE04A40836E2533F91076629770FBAFE1B23F8525A34CC3FDC14DF140",
        },
        {
          version: "透過性ロゴr13",
          sha256:
            "974A62153617CDC22DD19A4BF484DB658D778B7D823EC65D7C5266F672926214",
        },
        {
          version: "透過性ロゴr12",
          sha256:
            "82936F976FD0B346E36C569B010CA0BC756AFED11E3ACFB685694DBEF4EFA774",
        },
        {
          version: "透過性ロゴr10",
          sha256:
            "82936F976FD0B346E36C569B010CA0BC756AFED11E3ACFB685694DBEF4EFA774",
        },
        {
          version: "透過性ロゴr08",
          sha256:
            "3B2B3ED2E0111C09B62CAE982E110B9938001ADC0654DEA78FDD51AFEA027AB2",
        },
        {
          version: "透過性ロゴr07",
          sha256:
            "3B2B3ED2E0111C09B62CAE982E110B9938001ADC0654DEA78FDD51AFEA027AB2",
        },
        {
          version: "透過性ロゴr06",
          sha256:
            "48DD809801404A642B1C302D4E6F234E69D7002A9AB0966C631E9BFE0C58131C",
        },
        {
          version: "透過性ロゴr05",
          sha256:
            "E8A8BA14F2BE443C8B635CC710EC700DD0945613A61767CEB8D46F0B47E9B04A",
        },
        {
          version: "透過性ロゴr04",
          sha256:
            "6664FEB4DBCBC977BC39D098833F98323EB561119AA40FBD2D94016A5C64C0FF",
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
