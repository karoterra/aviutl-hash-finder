import misc from "../misc.js";

const AUTHOR = "ePi5131";

export default async () => {
  const dist = [];

  dist.push(
    {
      filename: "discord_rp.auf",
      name: "Discord Rich Presence",
      author: AUTHOR,
      version: "2021/01/21",
      build: "",
      url: "https://scrapbox.io/ePi5131/%E3%80%90AviUtl%E3%80%91Discord_Rich_Presence_Plugin",
      sha256:
        "84F997A569F622761F5DBBFAD357F06F5FF6F6DCA2C4DC033FF72740F1AFD4C2",
    },
    {
      filename: "export2clipboard.auf",
      name: "export2clipboard",
      author: AUTHOR,
      version: "2020/09/04",
      build: "",
      url: "https://scrapbox.io/ePi5131/export2clipboard",
      sha256:
        "8941F6335547D18349B387488CB69D0FBF51E1AE7192992CAE00BA8796540081",
    },
    {
      filename: "auls_memref.auf",
      name: "Aulsメモリ参照 for 1.00~/0.92",
      author: AUTHOR,
      version: "2021/05/23",
      build: "",
      url: "https://scrapbox.io/ePi5131/Auls%E3%83%A1%E3%83%A2%E3%83%AA%E5%8F%82%E7%85%A7%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3",
      sha256:
        "C6A4E2AC843B8B9B054CA6B581214D88566D27B2DDC4201E569F467913B33100",
    },
    {
      filename: "auls_outputpng.auf",
      name: "AulsPNG出力 (unofficial fixed by ePi)",
      author: AUTHOR,
      version: "2020/10/12",
      build: "",
      url: "https://discordapp.com/channels/411450989040893952/466184911355772930/764891011478323250",
      sha256:
        "5D1F57E112C007D4C750756156EA93BB0F3E216080BFD990B9829634F66BADD5",
    },
    {
      filename: "auls_outputpng.auf",
      name: "AulsPNG出力 (unofficial fixed by ePi)",
      author: AUTHOR,
      version: "2022/01/22",
      build: "",
      url: "https://scrapbox.io/ePi5131/AulsPNG%E5%87%BA%E5%8A%9B_%E3%83%90%E3%82%B0%E4%BF%AE%E6%AD%A3",
      sha256:
        "ACE42EE71FEA87289AEC7F262BE29E0D37CCC1AB147820AEB9DC395C90A3F117",
    },
    {
      filename: "lua51.dll",
      name: "LuaJIT",
      author: AUTHOR,
      version: "2.1.0-beta3",
      build: "2020/12/30",
      url: "https://scrapbox.io/ePi5131/LuaJIT",
      sha256:
        "D4DCF173AD5D2762A0ECA229A0191C17C57D79F09FEC6B4A555CDC3E896C97BF",
    }
  );

  // patch.aul (old) r1 - r15
  const patchOldHash = [
    "D034F672A97A8FCFE2EFF8BC51E38069C7032BDCD69C4396A72426B95DB7EFF8",
    "246A59660786286B32E4B2A45F9A678A19D942BD544350F9174DFB02C50BE4D4",
    "5DCD2F7C8525628D0D031A6B22BBE6FE6C8476019CFF1BAD4F68EDAD01D9AD9D",
    "B11E8A87AE837C57C0E5FDF9C180085DA2F5673AC56B983339D5BB8F9904E1B4",
    "98F339E8181546CBD2FCA68DDF7A5BAD33F04350F48BC41D1BB03664C7F7F64E",
    "43018AB43D7037DDBCAB25F24DF8BD9CF32F5A68F739BF37888C4E4D10EA6DC5",
    "1D8FEA7BE375ED91F15E7D1DEB2CA16B33E09BE0982F1EB3A72DD93E505E61CC",
    "B40527FA9E8691C010FC8DAD908C9C37CF28558F95451F39D4BCE4278AFA5AF8",
    "2C8E895DE2AD167AB426E7C22BA0124467860608E79CDB581A1C636FCF1F640A",
    "0A5F7F5301220A289800EDABA2428504551931DC0995ECE0C6A6B2AA20488206",
    "486D93125BEDA6771F662E43B740771D8A71C9C49D349E8F72AD17B58DEF22B3",
    "4F051FD67A70224DC85EB692317F24B556EB716A1C06ABAC1666DB060DE09004",
    "154058E6C6CDC99E34F706CEE1911D18A352586B62F90DC47DACBFB85079FB06",
    "E9EE64BE2E86069EF49BF2274A664617A76A313C3AEBA20B0F39BDA134F6A8B4",
    "AFA93FC903E937D78DF46BB8D400603EAA6F91A47C1E1C092FE625437B150A9D",
  ];
  patchOldHash.forEach((sha256, index) => {
    dist.push({
      filename: "patch.aul",
      name: "patch.aul",
      author: AUTHOR,
      version: `r${index + 1}`,
      build: "",
      url: "https://scrapbox.io/ePi5131/patch.aul_%E6%97%A7%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3",
      sha256: sha256,
    });
  });

  // patch.aul
  await misc.appendGitHubReleases(dist, "ePi5131", "patch.aul", [
    { filename: "patch.aul", name: "patch.aul" },
  ]);

  return dist;
};
