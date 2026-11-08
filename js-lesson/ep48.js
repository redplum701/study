/**
 * @file Episode 48: Symbols and Tagged Templates
 *
 * Episode Number : Episode 48 (Chapter 14: Metaprogramming)
 * Episode Title  : Symbols and Tagged Templates
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Create unique keys with Symbols and see how tagged template literals work.
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

const id = Symbol("id");
/** @type {Record<symbol|string, number>} */
const o = { [id]: 1, x: 2 };

console.log(o[id], Object.keys(o), id.description);
console.log(Symbol.for("a") === Symbol.for("a")); // The global symbol registry

/**
 * A tag function that wraps each inserted value in [].
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @returns {string}
 */
const highlight = (strings, ...values) =>
  strings.reduce((r, s, i) => r + s + (i < values.length ? `[${values[i]}]` : ""), "");

console.log(highlight`Name: ${"Emma"}, Score: ${95}`);
