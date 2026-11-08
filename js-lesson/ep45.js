/**
 * @file Episode 45: Coordinating Multiple Promises
 *
 * Episode Number : Episode 45 (Chapter 13: Asynchronous JavaScript)
 * Episode Title  : Coordinating Multiple Promises
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Coordinate multiple Promises with Promise.all, race, allSettled, and any.
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
 * A Promise that resolves with a value after a delay.
 * @param {number} ms
 * @param {any} v
 * @returns {Promise<any>}
 */
const wait = (ms, v) => new Promise((resolve) => setTimeout(() => resolve(v), ms));

Promise.all([wait(30, "A"), wait(10, "B")]).then((v) => console.log("all", v));
Promise.race([wait(30, "slow"), wait(10, "fast")]).then((v) => console.log("race", v));
Promise.allSettled([wait(5, 1), Promise.reject(new Error("x"))]).then((r) =>
  console.log("allSettled", r.map((x) => x.status))
);
Promise.any([Promise.reject(1), wait(5, "any")]).then((v) => console.log("any", v));
