import fs from "fs";

import aviutl from "./lib/db-generator/aviutl.js";

import amate from "./lib/db-generator/amate.js";
import aoytsk from "./lib/db-generator/aoytsk.js";
import auls from "./lib/db-generator/auls.js";
import aviutllab from "./lib/db-generator/aviutllab.js";
import hebiiro from "./lib/db-generator/hebiiro.js";
import karoterra from "./lib/db-generator/karoterra.js";
import lsmash from "./lib/db-generator/lsmash.js";

async function main() {
  console.log("-- aviutl --");
  const data = await aviutl();

  console.log("-- amate --");
  data.push(...(await amate()));
  console.log("-- aoytsk --");
  data.push(...(await aoytsk()));
  console.log("-- auls --");
  data.push(...(await auls()));
  console.log("-- aviutl lab --");
  data.push(...(await aviutllab()));
  console.log("-- hebiiro --");
  data.push(...(await hebiiro()));
  console.log("-- karoterra --");
  data.push(...(await karoterra()));
  console.log("-- L-SMASH --");
  data.push(...(await lsmash()));

  console.log("writing...");
  fs.writeFileSync("./src/assets/db.json", JSON.stringify(data, null, 2));
}

main();
