import path from "path";
import fs from "fs";

import misc from "./misc.js";
import github from "./github.js";

class GithubReleases {
  constructor(GithubID, owner) {
    this.ghID = GithubID;
    this.owner = owner;
  }

  async appendGitHubReleases(repo, items) {
    const dist = [];
    await misc.appendGitHubReleases(dist, this.ghID, repo, items);
    return dist;
  }
}

export default {
  GithubReleases: GithubReleases,
};
