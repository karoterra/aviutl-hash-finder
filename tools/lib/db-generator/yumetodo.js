import GitHubReleases from "../gh-releases.js";

const AUTHOR = "yumetodo";
const GITHUB_ID = "yumetodo";

export default async () => {
  const dist = [];

  const ghrArgs = [
    {
      repo: "SigContrastFastAviUtl",
      items: [
        { filename: "SigColorFastAviUtl.auf", name: "SigColorFastAviUtl" },
      ],
      opt: {
        authorNamer: (data) => data.release.author.login,
      },
    },
  ];
  const ghr = new GitHubReleases(GITHUB_ID, AUTHOR);
  for (const args of ghrArgs) {
    await ghr.get(args.repo, args.items, args.opt).then((x) => dist.push(...x));
  }

  return dist;
};
