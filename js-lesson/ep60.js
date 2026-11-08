/**
 * @file Episode 60: Tidying Code with ESLint and Prettier
 *
 * Episode Number : Episode 60 (Chapter 17: JavaScript Tools and Extensions)
 * Episode Title  : Tidying Code with ESLint and Prettier
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description See sample ESLint and Prettier settings alongside code that needs fixing.
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

/** Sample ESLint rules (the rules section of eslint.config.js, roughly) */
const eslintRules = { eqeqeq: "error", "no-unused-vars": "warn", "prefer-const": "error" };

/** Sample Prettier settings (.prettierrc) */
const prettierConfig = { semi: true, singleQuote: false, printWidth: 80 };

// Code that ESLint would flag
const bad = (a, b) => { var r = a == b; return r }

/** The version that follows ESLint and Prettier. */
const good = (a, b) => a === b;

console.log(eslintRules, prettierConfig);
console.log(bad(1, "1"), good(1, "1")); // true false: the == vs. === difference
