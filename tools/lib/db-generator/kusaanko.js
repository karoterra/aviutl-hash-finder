import GitHubReleases from "../gh-releases.js";

export default async () => {
  const args = [
    {
      repo: "AviUtlFFmpegDecoder",
      items: [
        {
          filename: "AviUtlFFmpegDecoder.aui",
          name: "AviUtlFFmpegDecoder",
        },
      ],
    },
  ];

  const ghr = new GitHubReleases("kusaanko", "草あんこ");
  const dist = [];
  for (const x of args) {
    await ghr.get(x.repo, x.items).then((x) => dist.push(...x));
  }

  return dist;
};
