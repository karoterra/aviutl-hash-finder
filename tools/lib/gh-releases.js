import misc from "./misc.js";

class GitHubReleases {
  constructor(ghId, author) {
    this.ghId = ghId;
    this.author = author;
  }

  async get(repo, items, opt) {
    const dist = [];
    await misc.appendGitHubReleases(
      dist,
      this.author,
      this.ghId,
      repo,
      items,
      opt
    );
    return dist;
  }
}

export default GitHubReleases;
