/**
 * @file Episode 62: Managing Packages with npm
 *
 * Episode Number : Episode 62 (Chapter 17: JavaScript Tools and Extensions)
 * Episode Title  : Managing Packages with npm
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Read the structure of package.json and decode version ranges like ^ and ~.
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

/** A sample package.json */
const pkg = {
  name: "lesson-app",
  version: "1.0.0",
  scripts: { test: "jest", lint: "eslint ." },
  dependencies: { lodash: "^4.17.21" },
  devDependencies: { jest: "^29.0.0" },
};

/**
 * Splits a version range into its prefix and number.
 * @param {string} range For example: "^4.17.21"
 * @returns {{prefix: string, version: string}}
 */
const parseRange = (range) => ({
  prefix: /^[\^~]/.exec(range)?.[0] ?? "",
  version: range.replace(/^[\^~]/, ""),
});

for (const [name, range] of Object.entries(pkg.dependencies)) {
  console.log(name, parseRange(range)); // ^ allows updates within the same major version
}
