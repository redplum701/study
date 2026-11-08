/**
 * @file Episode 33: Using Node.js Modules
 *
 * Episode Number : Episode 33 (Chapter 10: Modules)
 * Episode Title  : Using Node.js Modules
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Load Node.js built-in modules (path and os) with require.
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

// CommonJS style (the default for .js files). If package.json has "type": "module", use import instead.
const path = require("node:path");
const os = require("node:os");

/**
 * Joins path pieces and pulls out the file extension.
 * @param {...string} parts Path segments
 * @returns {{full: string, ext: string}}
 */
function inspectPath(...parts) {
  const full = path.join(...parts);
  return { full, ext: path.extname(full) };
}

console.log(inspectPath("a", "b", "c.txt"), os.platform());
// To export your own module: module.exports = { inspectPath };
