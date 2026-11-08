/**
 * @file Episode 24: Searching, Transforming, and Sorting
 *
 * Episode Number : Episode 24 (Chapter 7: Arrays)
 * Episode Title  : Searching, Transforming, and Sorting
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Search, transform, and sort arrays with find, some, every, flat, and sort.
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

/** @type {{n: string, a: number}[]} */
const people = [
  { n: "A", a: 30 },
  { n: "B", a: 20 },
  { n: "C", a: 25 },
];

console.log(people.find((p) => p.a < 26));
console.log(people.findIndex((p) => p.n === "C"));
console.log(people.some((p) => p.a > 29), people.every((p) => p.a > 29));
console.log([1, [2, [3]]].flat(Infinity));

const sorted = [...people].sort((x, y) => x.a - y.a); // Leaves the original untouched
console.log(sorted.map((p) => p.n));
console.log([10, 9, 1].sort(), [10, 9, 1].sort((a, b) => a - b)); // Default sort is alphabetical
