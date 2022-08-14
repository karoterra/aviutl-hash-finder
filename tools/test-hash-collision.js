import fs from "fs";

const db = JSON.parse(fs.readFileSync("./src/assets/db.json"));
const hash = {};

for (const row of db) {
  if (row.sha256 in hash) {
    hash[row.sha256].push(row);
  } else {
    hash[row.sha256] = [row];
  }
}

let collision = false;
for (const key in hash) {
  if (hash[key].length > 1) {
    collision = true;
    console.log(`${key} ${hash[key].length}`);
    for (const x of hash[key]) {
      console.log(x);
    }
  }
}
if (!collision) {
  console.log("No collision!");
}
