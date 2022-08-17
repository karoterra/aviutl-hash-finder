import misc from "./misc.js";

class GhReleases {
  constructor(ghId, author) {
    this.ghId = ghId;
    this.author = author;
  }

  async get(repo, items) {
    const dist = [];
    await misc.appendGitHubReleases(dist, this.author, this.ghId, repo, items);
    return dist;
  }
}

export default GhReleases;
