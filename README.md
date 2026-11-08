# study

Hands-on JavaScript lessons, one small runnable file per episode.

The 64 episodes follow the chapter structure of *JavaScript: The Definitive Guide, 7th Edition* by David Flanagan. Each episode is a single `.js` file with a short description and a compact, commented example you can run and tinker with.

> The examples are original code written for these lessons. They are not copied from the book.

## Quick start

You'll need [Node.js](https://nodejs.org/) 18 or later (the examples were tested on Node.js 22).

```bash
git clone https://github.com/redplum701/study.git
cd study

# Run any episode
node js-lesson/ep01.js
node js-lesson/ep41.js

# Or use the npm shortcuts (no dependencies to install)
npm run ep -- 5     # run episode 5
npm run check       # syntax-check all 64 files
```

## Repository layout

```text
study/
├── js-lesson/        # ep01.js ... ep64.js
├── scripts/          # run-episode.js, check-all.js
├── package.json
├── LICENSE
└── README.md
```

## What's inside each file

Every episode file starts with the same header:

- Episode number and title
- Author, occupation, copyright, and license
- Created and updated dates
- A one-line description of what you'll learn

After the header you'll find the MIT License text, a list of references, and then the example code, documented with JSDoc.

Files are named `ep01.js` through `ep64.js`.

## Good to know

- **Episodes 50-54 (browser topics)** use the DOM, CSS, SVG, Canvas, and Web Workers. Run in Node, they print a short note (or a feature check). To see them in action, load the file in a page with a `<script>` tag.
- **Episode 33** uses CommonJS (`require`). If your `package.json` has `"type": "module"`, switch to `import`.
- **Episode 61** runs on its own with a tiny stand-in for `test` and `expect`. It also works under [Jest](https://jestjs.io/). One test fails on purpose, so you can see what a failure looks like.
- A few examples print `undefined` or throw and catch an error on purpose (for example, episodes 6, 17, 27, and 47). That's part of the lesson.

## Episodes

### Chapter 1: Introduction to JavaScript

| # | Episode | File |
|---|---------|------|
| 1 | Where Does JavaScript Run? | [`ep01.js`](js-lesson/ep01.js) |
| 2 | Writing Your First Program | [`ep02.js`](js-lesson/ep02.js) |
| 3 | Reading Code and Predicting What It Does | [`ep03.js`](js-lesson/ep03.js) |

### Chapter 2: Lexical Structure

| # | Episode | File |
|---|---------|------|
| 4 | The Smallest Building Blocks of a Program | [`ep04.js`](js-lesson/ep04.js) |
| 5 | Comments, Literals, and Reserved Words | [`ep05.js`](js-lesson/ep05.js) |
| 6 | Unicode and the Semicolon Rules | [`ep06.js`](js-lesson/ep06.js) |

### Chapter 3: Types, Values, and Variables

| # | Episode | File |
|---|---------|------|
| 7 | JavaScript Values and Primitive Types | [`ep07.js`](js-lesson/ep07.js) |
| 8 | Primitives vs. Objects | [`ep08.js`](js-lesson/ep08.js) |
| 9 | Understanding Type Conversion | [`ep09.js`](js-lesson/ep09.js) |
| 10 | Declaring Variables and Destructuring | [`ep10.js`](js-lesson/ep10.js) |

### Chapter 4: Expressions and Operators

| # | Episode | File |
|---|---------|------|
| 11 | Expressions Produce Values | [`ep11.js`](js-lesson/ep11.js) |
| 12 | Arithmetic, Comparison, and Logical Operators | [`ep12.js`](js-lesson/ep12.js) |
| 13 | Assignment, Conditional Operators, and Operator Precedence | [`ep13.js`](js-lesson/ep13.js) |

### Chapter 5: Statements

| # | Episode | File |
|---|---------|------|
| 14 | Branching with Conditions | [`ep14.js`](js-lesson/ep14.js) |
| 15 | Mastering Loops | [`ep15.js`](js-lesson/ep15.js) |
| 16 | Controlling the Flow of Execution | [`ep16.js`](js-lesson/ep16.js) |
| 17 | Declarations and the Basics of Scope | [`ep17.js`](js-lesson/ep17.js) |

### Chapter 6: Objects

| # | Episode | File |
|---|---------|------|
| 18 | Grouping Information with Objects | [`ep18.js`](js-lesson/ep18.js) |
| 19 | Reading and Writing Properties | [`ep19.js`](js-lesson/ep19.js) |
| 20 | Methods and Prototypes | [`ep20.js`](js-lesson/ep20.js) |
| 21 | Inspecting and Saving Objects | [`ep21.js`](js-lesson/ep21.js) |

### Chapter 7: Arrays

| # | Episode | File |
|---|---------|------|
| 22 | Lining Up Values in Arrays | [`ep22.js`](js-lesson/ep22.js) |
| 23 | Processing Arrays in Order | [`ep23.js`](js-lesson/ep23.js) |
| 24 | Searching, Transforming, and Sorting | [`ep24.js`](js-lesson/ep24.js) |

### Chapter 8: Functions

| # | Episode | File |
|---|---------|------|
| 25 | Defining Functions to Reuse Code | [`ep25.js`](js-lesson/ep25.js) |
| 26 | Parameters, Return Values, and Invocation | [`ep26.js`](js-lesson/ep26.js) |
| 27 | `this` and the Invocation Context | [`ep27.js`](js-lesson/ep27.js) |
| 28 | Closures and Higher-Order Functions | [`ep28.js`](js-lesson/ep28.js) |

### Chapter 9: Classes

| # | Episode | File |
|---|---------|------|
| 29 | Classes as Blueprints for Objects | [`ep29.js`](js-lesson/ep29.js) |
| 30 | Defining Fields and Methods | [`ep30.js`](js-lesson/ep30.js) |
| 31 | Inheritance and Subclasses | [`ep31.js`](js-lesson/ep31.js) |

### Chapter 10: Modules

| # | Episode | File |
|---|---------|------|
| 32 | Splitting Code into Modules | [`ep32.js`](js-lesson/ep32.js) |
| 33 | Using Node.js Modules | [`ep33.js`](js-lesson/ep33.js) |
| 34 | Importing and Exporting with ES Modules | [`ep34.js`](js-lesson/ep34.js) |

### Chapter 11: The JavaScript Standard Library

| # | Episode | File |
|---|---------|------|
| 35 | Managing Data with Set and Map | [`ep35.js`](js-lesson/ep35.js) |
| 36 | Typed Arrays and Binary Data | [`ep36.js`](js-lesson/ep36.js) |
| 37 | Searching Strings with Regular Expressions | [`ep37.js`](js-lesson/ep37.js) |
| 38 | Working with Dates, Errors, and JSON | [`ep38.js`](js-lesson/ep38.js) |
| 39 | Internationalization and Handy Built-in APIs | [`ep39.js`](js-lesson/ep39.js) |

### Chapter 12: Iterators and Generators

| # | Episode | File |
|---|---------|------|
| 40 | How Iterable Objects Work | [`ep40.js`](js-lesson/ep40.js) |
| 41 | Generating Values One at a Time with Generators | [`ep41.js`](js-lesson/ep41.js) |
| 42 | Putting Generators to Work | [`ep42.js`](js-lesson/ep42.js) |

### Chapter 13: Asynchronous JavaScript

| # | Episode | File |
|---|---------|------|
| 43 | Meet Async with Events and Callbacks | [`ep43.js`](js-lesson/ep43.js) |
| 44 | Chaining Async Work with Promises | [`ep44.js`](js-lesson/ep44.js) |
| 45 | Coordinating Multiple Promises | [`ep45.js`](js-lesson/ep45.js) |
| 46 | Making Async Code Readable with async/await | [`ep46.js`](js-lesson/ep46.js) |

### Chapter 14: Metaprogramming

| # | Episode | File |
|---|---------|------|
| 47 | Property Attributes and Controlling Objects | [`ep47.js`](js-lesson/ep47.js) |
| 48 | Symbols and Tagged Templates | [`ep48.js`](js-lesson/ep48.js) |
| 49 | Extending Operations with Reflect and Proxy | [`ep49.js`](js-lesson/ep49.js) |

### Chapter 15: JavaScript in Web Browsers

| # | Episode | File |
|---|---------|------|
| 50 | Browser and DOM Basics | [`ep50.js`](js-lesson/ep50.js) |
| 51 | Responding to User Actions with Events | [`ep51.js`](js-lesson/ep51.js) |
| 52 | Changing the Display with CSS, SVG, and Canvas | [`ep52.js`](js-lesson/ep52.js) |
| 53 | Browser Networking and Storage | [`ep53.js`](js-lesson/ep53.js) |
| 54 | Web Workers and Other Browser APIs | [`ep54.js`](js-lesson/ep54.js) |

### Chapter 16: Server-Side JavaScript with Node

| # | Episode | File |
|---|---------|------|
| 55 | Understanding the Node.js Runtime | [`ep55.js`](js-lesson/ep55.js) |
| 56 | Events, Async Work, and Streams | [`ep56.js`](js-lesson/ep56.js) |
| 57 | Working with Files and Processes | [`ep57.js`](js-lesson/ep57.js) |
| 58 | HTTP Servers and Networking | [`ep58.js`](js-lesson/ep58.js) |
| 59 | Child Processes and Worker Threads | [`ep59.js`](js-lesson/ep59.js) |

### Chapter 17: JavaScript Tools and Extensions

| # | Episode | File |
|---|---------|------|
| 60 | Tidying Code with ESLint and Prettier | [`ep60.js`](js-lesson/ep60.js) |
| 61 | Writing Tests with Jest | [`ep61.js`](js-lesson/ep61.js) |
| 62 | Managing Packages with npm | [`ep62.js`](js-lesson/ep62.js) |
| 63 | The Roles of Bundling and Transpiling | [`ep63.js`](js-lesson/ep63.js) |
| 64 | Extending Your Workflow with JSX and Flow | [`ep64.js`](js-lesson/ep64.js) |

## References

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [The Modern JavaScript Tutorial](https://javascript.info/)
- *JavaScript: The Definitive Guide, 7th Edition*, David Flanagan, O'Reilly Media, 2020

## Author

紅梅 ([@redplum701](https://github.com/redplum701)), JavaScript Developer & Technical Writer

## License

Released under the [MIT License](LICENSE). Copyright (c) 2026 紅梅
