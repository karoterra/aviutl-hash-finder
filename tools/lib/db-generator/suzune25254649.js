import GitHubReleases from "../gh-releases.js";

const AUTHOR = "鈴音";
const GITHUB_ID = "suzune25254649";

export default async () => {
  const dist = [];

  const ghrArgs = [
    {
      repo: "bakusoku_aviutl_plugin",
      items: [{ filename: "bakusoku.auf", name: "爆速" }],
      opt: { downloadSource: true },
    },
    {
      repo: "WideDialog_aviutl_plugin",
      items: [{ filename: "WideDialog.auf", name: "ワイドダイアログ" }],
      opt: { downloadSource: true },
    },
    {
      repo: "TalkEditorUtilPlugin",
      items: [{ filename: "TalkEditorUtil.auf", name: "TalkEditorUtil" }],
      opt: { downloadSource: true },
    },
  ];
  const ghr = new GitHubReleases(GITHUB_ID, AUTHOR);
  for (const args of ghrArgs) {
    await ghr.get(args.repo, args.items, args.opt).then((x) => dist.push(...x));
  }

  return dist;
};
