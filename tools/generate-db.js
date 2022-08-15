import fs from "fs";

import aviutl from "./lib/db-generator/aviutl.js";

import amate from "./lib/db-generator/amate.js";
import aoytsk from "./lib/db-generator/aoytsk.js";
import auls from "./lib/db-generator/auls.js";
import aviutllab from "./lib/db-generator/aviutllab.js";
import epi from "./lib/db-generator/epi.js";
import hebiiro from "./lib/db-generator/hebiiro.js";
import karoterra from "./lib/db-generator/karoterra.js";
import khsk from "./lib/db-generator/khsk.js";
import lsmash from "./lib/db-generator/lsmash.js";
import mtripg6666tdr from "./lib/db-generator/mtripg6666tdr.js";
import oov from "./lib/db-generator/oov.js";

async function main() {
  console.log("-- aviutl --");
  const data = await aviutl();
  const data = [];

  console.log("-- amate --");
  data.push(...(await amate()));
  console.log("-- aoytsk --");
  data.push(...(await aoytsk()));
  console.log("-- auls --");
  data.push(...(await auls()));
  console.log("-- aviutl lab --");
  data.push(...(await aviutllab()));
  console.log("-- ePi --");
  data.push(...(await epi()));
  console.log("-- hebiiro --");
  data.push(...(await hebiiro()));
  console.log("-- karoterra --");
  data.push(...(await karoterra()));
  console.log("-- khsk --");
  data.push(...(await khsk()));
  console.log("-- L-SMASH --");
  data.push(...(await lsmash()));
  console.log("-- mtripg6666tdr --");
  data.push(...(await mtripg6666tdr()));
  console.log("-- oov --");
  data.push(...(await oov()));

  console.log("writing...");
  fs.writeFileSync("./src/assets/db.json", JSON.stringify(data, null, 2));
}

main();
