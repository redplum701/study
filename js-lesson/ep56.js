/**
 * @file Episode 56: Events, Async Work, and Streams
 *
 * Episode Number : Episode 56 (Chapter 16: Server-Side JavaScript with Node)
 * Episode Title  : Events, Async Work, and Streams
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description Get hands-on with EventEmitter, the event loop, and streams in Node.js.
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

const { EventEmitter } = require("node:events");
const { Readable, Transform, pipeline } = require("node:stream");

const e = new EventEmitter();
e.once("hi", (n) => console.log("hi", n));
e.emit("hi", 1);

process.nextTick(() => console.log("nextTick: right after the current operation"));
setImmediate(() => console.log("setImmediate: after the I/O phase"));

/** A Transform stream that uppercases text. */
const upper = new Transform({
  transform(chunk, _enc, cb) {
    cb(null, chunk.toString().toUpperCase());
  },
});

pipeline(
  Readable.from(["a", "b"]),
  upper,
  async function (source) {
    for await (const c of source) console.log("chunk:", c.toString());
  },
  (err) => err && console.error(err)
);
