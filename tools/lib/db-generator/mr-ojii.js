import GitHubReleases from "../gh-releases.js";

export default async () => {
  const ghrArgs = [
    {
      repo: "MotionTracking_MKII_Plus",
      items: [
        {
          filename: "MotionTrackingMKIIPlus.auf",
          name: "MotionTracking MK-II Plus",
        },
      ],
    },
    {
      repo: "AviUtl-Shutdown-Plugin",
      items: [{ filename: "shutdown_plugin.auf", name: "Shutdown" }],
      opt: {
        buildNamer: (data) =>
          /AviUtl-Shutdown-Plugin-(.+)\.zip/.exec(data.task.name)[1],
      },
    },
  ];

  const ghr = new GitHubReleases("Mr-Ojii", "Mr-Ojii");
  const dist = [];
  for (const args of ghrArgs) {
    await ghr.get(args.repo, args.items, args.opt).then((x) => dist.push(...x));
  }

  return dist;
};
