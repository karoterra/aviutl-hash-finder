import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  userAgent: "aviutl-hash-finder v0.0.0",
});

function listReleases(owner, repo) {
  return octokit.paginate.iterator(octokit.rest.repos.listReleases, {
    owner: owner,
    repo: repo,
  });
}

export default {
  octokit,
  listReleases,
};
