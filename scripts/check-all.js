"use strict";

/**
 * Syntax-checks every episode file with `node --check`.
 * Usage: npm run check
 */
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const dir = path.join(__dirname, "..", "js-lesson");
const files = fs.readdirSync(dir).filter((f) => /^ep\d{2}\.js$/.test(f)).sort();

let failed = 0;
for (const f of files) {
  const r = spawnSync(process.execPath, ["--check", path.join(dir, f)], { encoding: "utf8" });
  if (r.status !== 0) {
    failed++;
    console.error(`✗ ${f}\n${r.stderr}`);
  }
}

console.log(`${files.length - failed}/${files.length} files passed the syntax check.`);
process.exit(failed ? 1 : 0);
