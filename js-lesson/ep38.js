/**
 * @file Episode 38: Working with Dates, Errors, and JSON
 *
 * Episode Number : Episode 38 (Chapter 11: The JavaScript Standard Library)
 * Episode Title  : Working with Dates, Errors, and JSON
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Work with Date, custom Error classes, and JSON parse/stringify.
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

const d = new Date(Date.UTC(2026, 10, 8)); // Months are zero-based
console.log(d.getUTCFullYear(), d.getUTCMonth() + 1, d.toISOString().slice(0, 10));

/** An input validation error. */
class ValidationError extends Error {
  /** @param {string} message */
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  JSON.parse("{bad");
} catch (e) {
  console.log(e.name); // SyntaxError
}

try {
  throw new ValidationError("Invalid value");
} catch (e) {
  console.log(e instanceof ValidationError, e.message);
}

console.log(JSON.stringify({ a: 1, d: new Date(0) }, null, 2));
