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
import kumrnm from "./lib/db-generator/kumrnm.js";
import lsmash from "./lib/db-generator/lsmash.js";
import maverickTse from "./lib/db-generator/maverick-tse.js";
import mrOjii from "./lib/db-generator/mr-ojii.js";
import mtripg6666tdr from "./lib/db-generator/mtripg6666tdr.js";
import n099 from "./lib/db-generator/n099.js";
import nazonoSauna from "./lib/db-generator/nazono-sauna.js";
import oov from "./lib/db-generator/oov.js";
import rigaya from "./lib/db-generator/rigaya.js";
import rikky from "./lib/db-generator/rikky.js";
import ritchan from "./lib/db-generator/ritchan.js";
import yanagi from "./lib/db-generator/yanagi.js";

async function runGenerators(dist, generators) {
  const keys = Object.keys(generators).sort();
  for (const key of keys) {
    console.log(`-- ${key} --`);
    await generators[key]().then((x) => dist.push(...x));
  }
}

async function main() {
  const data = [];
  await runGenerators(data, { aviutl });

  await runGenerators(data, {
    amate,
    aoytsk,
    auls,
    aviutllab,
    epi,
    hebiiro,
    karoterra,
    khsk,
    kumrnm,
    lsmash,
    maverickTse,
    mrOjii,
    mtripg6666tdr,
    n099,
    nazonoSauna,
    oov,
    rigaya,
    rikky,
    ritchan,
    yanagi,
  });

  console.log("writing...");
  fs.writeFileSync("./src/assets/db.json", JSON.stringify(data, null, 2));
}

main();
