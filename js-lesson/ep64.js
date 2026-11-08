/**
 * @file Episode 64: Extending Your Workflow with JSX and Flow
 *
 * Episode Number : Episode 64 (Chapter 17: JavaScript Tools and Extensions)
 * Episode Title  : Extending Your Workflow with JSX and Flow
 *
 * @author      紅梅 @redplum701
 * Occupation   : JavaScript Developer & Technical Writer
 * @copyright   2026 紅梅
 * @license     MIT
 * Created      : November 8, 2026
 * Updated      : November 8, 2026
 *
 * @description See how JSX compiles into createElement-style calls, and peek at Flow type annotations.
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

// JSX:  <h1 className="title">Hello</h1>
// Compiled (conceptually): h("h1", { className: "title" }, "Hello")

/**
 * Creates a virtual DOM node (like React.createElement).
 * @param {string} type
 * @param {Record<string, any>|null} props
 * @param {...any} children
 */
const h = (type, props, ...children) => ({ type, props: props ?? {}, children });

/**
 * Renders a virtual DOM node as an HTML string.
 * @param {any} node
 * @returns {string}
 */
const render = (node) =>
  typeof node === "string"
    ? node
    : `<${node.type}${node.props.className ? ` class="${node.props.className}"` : ""}>` +
      node.children.map(render).join("") +
      `</${node.type}>`;

console.log(render(h("h1", { className: "title" }, "Hello")));

// Flow type annotations (stripped out at build time):
//   // @flow
//   function square(n: number): number { return n * n; }
