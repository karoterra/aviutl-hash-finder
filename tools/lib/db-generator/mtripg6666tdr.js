import misc from "../misc.js";

const AUTHOR = "mtripg6666tdr";

export default async () => {
  const dist = [];

  await misc.appendGitHubReleases(dist, AUTHOR, AUTHOR, "AviUtl-RPC", [
    { filename: "aviutl_rpc.auf", name: "AviUtl Discord RPC" },
    { filename: "aviutl_rpc_en.auf", name: "AviUtl Discord RPC" },
  ]);

  return dist;
};
