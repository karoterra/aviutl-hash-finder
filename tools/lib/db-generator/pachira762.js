import GitHubReleases from "../gh-releases.js";

const AUTHOR = "Pachira762";
const GITHUB_ID = "Pachira762";

export default async () => {
  const dist = [];

  const ghrArgs = [
    {
      repo: "Real-xxxGAN-filter",
      items: [
        { filename: "Real-xxxGAN-filter.auf", name: "Real-xxxGAN-filter" },
      ],
    },
  ];
  const ghr = new GitHubReleases(GITHUB_ID, AUTHOR);
  for (const args of ghrArgs) {
    await ghr.get(args.repo, args.items).then((x) => dist.push(...x));
  }

  return dist;
};
