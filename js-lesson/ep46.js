/**
 * @file Episode 46: Making Async Code Readable with async/await
 *
 * Episode Number : Episode 46 (Chapter 13: Asynchronous JavaScript)
 * Episode Title  : Making Async Code Readable with async/await
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Write async code that reads like synchronous code with async/await.
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

/**
 * @param {number} ms
 * @param {any} v
 * @returns {Promise<any>}
 */
const wait = (ms, v) => new Promise((resolve) => setTimeout(() => resolve(v), ms));

/**
 * Shows sequential and parallel awaits, plus error handling.
 * @returns {Promise<void>}
 */
async function main() {
  try {
    const a = await wait(10, 1); // Sequential
    const [b, c] = await Promise.all([wait(10, 2), wait(10, 3)]); // Parallel
    console.log("Total:", a + b + c);
    await Promise.reject(new Error("Failed"));
  } catch (e) {
    console.log("Caught:", e.message);
  } finally {
    console.log("Done");
  }
}

main();
