const crypto = require("crypto");

async function calcSha256(stream) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");

    hash.once("finish", () =>
      resolve(hash.read().toString("hex").toUpperCase())
    );
    stream.once("error", (err) => reject(err));

    stream.pipe(hash);
  });
}

module.exports = {
  calcSha256,
};
