import { Octokit } from "@octokit/rest";
import secret from "../../secret.js";

const octokit = new Octokit({
  auth: secret.githubAuth,
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
