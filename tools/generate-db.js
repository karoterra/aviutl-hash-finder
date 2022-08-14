import fs from "fs";

import aviutl from "./lib/db-generator/aviutl.js";

import amate from "./lib/db-generator/amate.js";
import aoytsk from "./lib/db-generator/aoytsk.js";
import aviutllab from "./lib/db-generator/aviutllab.js";
import karoterra from "./lib/db-generator/karoterra.js";

async function main() {
  const data = await aviutl();

  data.push(...(await amate()));
  data.push(...(await aoytsk()));
  data.push(...(await aviutllab()));
  data.push(...(await karoterra()));

  fs.writeFileSync("./src/assets/db.json", JSON.stringify(data, null, 2));
}

main();
