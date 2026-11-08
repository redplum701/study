/**
 * @file Episode 43: Meet Async with Events and Callbacks
 *
 * Episode Number : Episode 43 (Chapter 13: Asynchronous JavaScript)
 * Episode Title  : Meet Async with Events and Callbacks
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Meet asynchronous code through callbacks and events, and see the order things run in.
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

/** A minimal event emitter. */
class Emitter {
  #handlers = {};
  /** @param {string} e @param {Function} f @returns {this} */
  on(e, f) {
    (this.#handlers[e] ??= []).push(f);
    return this;
  }
  /** @param {string} e @param {...any} args */
  emit(e, ...args) {
    (this.#handlers[e] ?? []).forEach((f) => f(...args));
  }
}

const em = new Emitter().on("done", (r) => console.log("Done:", r));

console.log("1: Start");
setTimeout(() => {
  console.log("3: Timer fired");
  em.emit("done", 42);
}, 0);
console.log("2: Synchronous code finished"); // Runs before the callback
