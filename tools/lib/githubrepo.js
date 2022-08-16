import path from "path";
import fs from "fs";

import misc from "./misc.js";
import github from "./github.js";

class GithubReleases {
  constructor(ghId, owner) {
    this.ghId = ghId;
    this.owner = owner;
  }

  async appendGitHubReleases(repo, items) {
    const dist = [];
    await misc.appendGitHubReleases(dist, this.owner, this.ghId, repo, items);
    return dist;
  }
}

export default {
  GithubReleases: GithubReleases,
};
