import GitHubReleases from "../gh-releases.js";

export default async () => {
  const args = [
    {
      repo: "aviutl-authentic-grouping",
      items: [{ filename: "authentic_grouping.auf", name: "真・グループ制御" }],
    },
    {
      repo: "aviutl-easing-quick-setup",
      items: [
        {
          filename: "easing_quick_setup.auf",
          name: "イージング設定時短プラグイン",
        },
      ],
    },
    {
      repo: "aviutl-advanced-mouse-operation",
      items: [
        {
          filename: "AdvancedMouseOperation.auf",
          name: "マウスオペレーション改",
        },
      ],
    },
  ];

  const ghr = new GitHubReleases("kumrnm", "蝙蝠の目");
  const dist = [];
  for (const x of args) {
    await ghr.get(x.repo, x.items).then((x) => dist.push(...x));
  }

  return dist;
};
