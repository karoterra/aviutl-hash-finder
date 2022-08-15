import misc from "../misc.js";

const AUTHOR = "khsk";

export default async () => {
  const dist = [];

  await misc.appendGitHubReleases(dist, AUTHOR, "AviUtl-LocalFontPlugin", [
    { filename: "localfont.aul", name: "LocalFontPlugin" },
  ]);

  return dist;
};
