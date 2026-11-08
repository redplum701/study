/**
 * @file Episode 28: Closures and Higher-Order Functions
 *
 * Episode Number : Episode 28 (Chapter 8: Functions)
 * Episode Title  : Closures and Higher-Order Functions
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Keep private state with closures and build a higher-order function for composition.
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
 * Creates a counter.
 * @returns {{inc: () => number, get: () => number}}
 */
function counter() {
  let c = 0; // Not reachable from the outside
  return { inc: () => ++c, get: () => c };
}

/**
 * A higher-order function that composes functions right to left.
 * @param {...function(any): any} fns
 * @returns {function(any): any}
 */
const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

const c1 = counter();
c1.inc();
c1.inc();
console.log(c1.get(), compose((x) => x + 1, (x) => x * 2)(5)); // 2 11
