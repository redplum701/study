/**
 * @file Episode 61: Writing Tests with Jest
 *
 * Episode Number : Episode 61 (Chapter 17: JavaScript Tools and Extensions)
 * Episode Title  : Writing Tests with Jest
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Learn Jest's test/expect style with a tiny stand-in that also runs on its own.
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

// Under Jest, use test and expect directly; when run alone, we use simple stand-ins.
const runTest =
  globalThis.test ??
  ((name, fn) => {
    try {
      fn();
      console.log("✓", name);
    } catch (e) {
      console.log("✗", name, e.message);
    }
  });

const check =
  globalThis.expect ??
  ((actual) => ({
    toBe(expected) {
      if (!Object.is(actual, expected)) throw new Error(`${actual} !== ${expected}`);
    },
  }));

/**
 * The function under test.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const add = (a, b) => a + b;

runTest("1 + 2 equals 3", () => check(add(1, 2)).toBe(3));
runTest("a deliberately failing example", () => check(add(1, 1)).toBe(3));
