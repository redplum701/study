"use strict";

/**
 * Runs one lesson episode by number.
 * Usage: npm run ep -- 5   (or: node scripts/run-episode.js 5)
 */
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const arg = process.argv[2];
const n = Number(arg);

if (!Number.isInteger(n) || n < 1 || n > 64) {
  console.error("Usage: npm run ep -- <episode number 1-64>");
  process.exit(1);
}

const file = path.join(__dirname, "..", "js-lesson", `ep${String(n).padStart(2, "0")}.js`);
const result = spawnSync(process.execPath, [file], { stdio: "inherit" });
process.exit(result.status ?? 1);
