# Minimal JSPM sample

This project showcases two approaches to using ES2015 modules in browser application development:

- [JSPM](http://jspm.io) for transpiling within the browser, while application is getting loaded
- [Rollup](http://rollupjs.org) for transpiling as a compilation step

ES2015 modules change the way you think and code JavaScript. The `import`/`export` means you don't have to be concerned of introducing the code snippets in the right order in the HTML - in fact, you only need to introduce the main code and everything else gets pulled by the imports. Like programming should be.

<!-- tbd. Once we've done the CSS import thing, mention it here.
-->

Let's look at the approaches.

## JSPM way (on-the-fly)

First, let's set up JSPM. It's recommended to be done globally, so you can use `jspm` command easily available:

```
$ npm install -g jspm
$ jspm update
```

That pulls in the modules mentioned in the `jspm`/`devDependencies` section of the `package.json` file.

```
$ npm install
```

This brings the `http-server` module that we'll need to serve the files. With the JSPM approach, we cannot simply open a `file://` URL and have the files transpiled. <!-- tbd. why not? what's the deeper detail? -->

Start the server:

```
$ npm run serve
```

Open [http://localhost:8082](http://localhost:8082) and the browser's development tools.

You should get the `42` on the console log.

Note: The `src/` files are symbol linked as `dev/src/` so that the serving fill find them. If you edit one, the other will change as well.


### What happened?

1. `dev/index.html` loads `dev/jspm_packages/system.js` that is able to transpile ES2015 syntax on the fly, and handle the `import`/`export` syntax
2. `dev/index.html` loads `dev/config.js`, which calls `System.config` to set up jspm
3. `System.import("src/app")` is run, which loads and transpiles `src/app.js`.
4. `src/app.js` contains `import {some} from './some'`, which fetches a value (provided using ES2015 `const` syntax in `src/some.js`)
5. `src/app.js` prints the received value in console log


## Rollup way (bundled)

Rollup is a bundling tool, and packages your transpiled sources together, into a single ES5 JavaScript file.

It does not need JSPM, and output files can be opened as `file://`.

```
$ npm install
```

This brings in the modules needed for rollup to work.

```
$ npm run dist
```

Open `dist/index.html` in a browser (no need to serve this time).

It should work the same as the JSPM variant (the sources were the same).

### What happened?

1. Rollup was used with `src/app.js` as the entry point. It includes the local imports, and creates one combined `dist/bundle.js` output file.
2. `dist/index.html` reads in the bundled file.

### Watch

```
$ npm run dist-watch
```

This rebuilds the bundle automatically when source change. 

Try it and change the `src/some.js` to e.g.

```
export const some = 42+1;
```

Then reload in the browser. You should see 43 in the console.


## JSPM way (bundle)

JSPM can also bundle. 

```
$ npm run dist-jspm
```

Open `dist-jspm/index.html`. 


### What happened?

1. `jspm bundle` follows the imports and creates both `dist-jspm/bundle.js` and its sourcemap, by one command. It handles transpiling as well.


## Questions...

Q: Why would we need Rollup?

Q: Why would we need the on-the-fly setup?

Q: How would watch work for this?

It seems `jspm` has no "watch" functionality on the bundling. This would need to be separately set up (which is possible, but would require understanding the import chain of files to see which files trigger the command). It seems the on-the-fly setup is jspm's way of handling development work.

In contrast, Rollup gives just one way, but with an effective watch.

Rollup does not require jspm (or system.js), at all. It provides a single JavaScript (ES5) file that has everything in it.

Q: How about debugging - do the source maps work (jspm vs. rollup)?


## Tools recommended

IntelliJ IDEA *Community Edition* 2016.2.2 does not provide ECMAScript 2015 syntax highlighting.

IntelliJ IDEA *Ultimate* does have ECMAScript 2015 support. Thomas Schlage (Zalando) is using it for Aurelia development.

[WebStorm](https://www.jetbrains.com/webstorm/) does provide ECMAScript 2015 syntax highlighting, but it does *not* come with a community edition. 

You can:

- get a commercial license of WebStorm (EUR 129/year)
- apply for a license for open source development (free)
- go with some other editor

