import GitHubReleases from "../gh-releases.js";

const AUTHOR = "YSR";
const GITHUB_ID = "YSRKEN";

export default async () => {
  const dist = [];

  const ghrArgs = [
    {
      repo: "aviutl-waifu2x-cpu",
      items: [
        { filename: "aviutl-waifu2x-cpu-avx.auf", name: "waifu2x-cpu[AVX]" },
        { filename: "aviutl-waifu2x-cpu-fma.auf", name: "waifu2x-cpu[FMA]" },
        { filename: "aviutl-waifu2x-cpu-sse.auf", name: "waifu2x-cpu[SSE]" },
      ],
    },
    {
      repo: "aviutl-waifu2x-cpu_kai",
      items: [
        {
          filename: "aviutl-waifu2x-cpu_kai-avx.auf",
          name: "waifu2x-cpu_kai[AVX]",
        },
        {
          filename: "aviutl-waifu2x-cpu_kai-fma.auf",
          name: "waifu2x-cpu_kai[FMA]",
        },
        {
          filename: "aviutl-waifu2x-cpu_kai-sse.auf",
          name: "waifu2x-cpu_kai[SSE]",
        },
      ],
    },
    {
      repo: "aviutl-waifu2x-w2xc",
      items: [{ filename: "aviutl-waifu2x-w2xc.auf", name: "waifu2x-w2xc" }],
    },
  ];
  const ghr = new GitHubReleases(GITHUB_ID, AUTHOR);
  for (const args of ghrArgs) {
    await ghr.get(args.repo, args.items).then((x) => dist.push(...x));
  }

  return dist;
};
