/**
 * @file Episode 57: Working with Files and Processes
 *
 * Episode Number : Episode 57 (Chapter 16: Server-Side JavaScript with Node)
 * Episode Title  : Working with Files and Processes
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Read and write files with the fs module, and listen for process events.
 */

/*
 * MIT License
 *
 * Copyright (c) 2026 紅梅
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * References
 * - MDN Web Docs (en-US)
 *     https://developer.mozilla.org/en-US/docs/Web/JavaScript
 * - The Modern JavaScript Tutorial
 *     https://javascript.info/
 * - JavaScript: The Definitive Guide, 7th Edition
 *     David Flanagan, O'Reilly Media, 2020
 */

"use strict";

const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");

/**
 * Writes a temp file, reads it back, and cleans up.
 * @returns {Promise<void>}
 */
async function main() {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "lesson-"));
  const file = path.join(dir, "memo.txt");

  await fs.writeFile(file, "Hello\n");
  await fs.appendFile(file, "Appended\n");
  console.log((await fs.readFile(file, "utf8")).trim().split("\n"));
  console.log("Size:", (await fs.stat(file)).size);

  await fs.rm(dir, { recursive: true });
}

process.on("exit", (code) => console.log("exit:", code));
main();
