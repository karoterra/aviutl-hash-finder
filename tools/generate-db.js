const fs = require("fs");

const aviutl = require("./lib/db-generator-aviutl");

async function main() {
  const data = await aviutl();
  fs.writeFileSync("./src/assets/db.json", JSON.stringify(data, null, 2));
}

main();
