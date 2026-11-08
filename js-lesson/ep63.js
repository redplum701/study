/**
 * @file Episode 63: The Roles of Bundling and Transpiling
 *
 * Episode Number : Episode 63 (Chapter 17: JavaScript Tools and Extensions)
 * Episode Title  : The Roles of Bundling and Transpiling
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Build a tiny bundler to see how bundling works, and learn what transpiling does.
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

/** What bundled output looks like: each file becomes a function */
const modules = {
  "./add.js": (exports) => {
    exports.add = (a, b) => a + b;
  },
  "./main.js": (exports, require) => {
    const { add } = require("./add.js");
    exports.result = add(1, 2);
  },
};

const cache = {};
/** @param {string} id @returns {any} */
function req(id) {
  if (cache[id]) return cache[id].exports;
  const m = (cache[id] = { exports: {} });
  modules[id](m.exports, req);
  return m.exports;
}

console.log(req("./main.js").result);

// Transpiling, conceptually: newer syntax → syntax that older environments can run
console.log("Before: a?.b", "→ After: a == null ? void 0 : a.b");
