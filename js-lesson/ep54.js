/**
 * @file Episode 54: Web Workers and Other Browser APIs
 *
 * Episode Number : Episode 54 (Chapter 15: JavaScript in Web Browsers)
 * Episode Title  : Web Workers and Other Browser APIs
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Offload work to a Web Worker and detect which browser APIs are available.
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

/** @type {string[]} The API names we want to check for */
const apis = ["Worker", "IntersectionObserver", "requestAnimationFrame", "BroadcastChannel"];
console.log(apis.map((name) => [name, name in globalThis]));

if (typeof Worker !== "undefined") {
  // Run code built from a Blob in a Worker, so the math happens on another thread.
  const src = "onmessage = (e) => postMessage(e.data * 2)";
  const w = new Worker(URL.createObjectURL(new Blob([src])));
  w.onmessage = (e) => {
    console.log("Worker result:", e.data);
    w.terminate();
  };
  w.postMessage(21);
}
