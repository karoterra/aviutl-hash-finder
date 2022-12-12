import GitHubReleases from "../gh-releases.js";

export default async () => {
  const args = [
    {
      repo: "aviutl-plugin-curve_editor",
      items: [{ filename: "curve_editor.auf", name: "Curve Editor" }],
    },
    {
      repo: "aviutl-plugin-loupe361",
      items: [
        {
          filename: "loupe361.auf",
          name: "loupe361",
        },
      ],
    },
  ];

  const ghr = new GitHubReleases("mimaraka", "みまらか");
  const dist = [];
  for (const x of args) {
    await ghr.get(x.repo, x.items).then((x) => dist.push(...x));
  }

  return dist;
};
