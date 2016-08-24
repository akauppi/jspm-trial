# Minimal JSPM sample

## Development variant

In the development variant, the files in `src/*.js` are being transpiled from ES2015 -> ES5 on the fly, within the browser.

```
$ npm install
$ npm run jspm-update
```

Start the server:

```
$ npm run serve
```

Open [http://localhost:8082](http://localhost:8082) and the browser's development tools.

You should get the `42` on the console log.

### What happened?

1. `dev/index.html` loads `dev/jspm_packages/system.js` that is able to transpile ES2015 syntax on the fly, and handle the `import`/`export` syntax
2. `dev/index.html` loads `dev/config.js`, which calls `System.config` to set up jspm
3. `System.import("src/app")` is run, which loads and transpiles `src/app.js`.
4. `src/app.js` contains `import {some} from './some'`, which fetches a value (provided using ES2015 `const` syntax in `src/some.js`)
5. `src/app.js` prints the received value in console log

## Distribution variant (bundled)

```
$ npm run dist
```

Open `dist/index.html` in a browser (no need to serve this time).

It should work the same as the development variant.

### What happened?

1. [Rollup](http://rollupjs.org) was used with `src/app.js` as the entry point. It includes the local imports, and creates one combined `dist/bundle.js` output file.
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

## Tools recommended

IntelliJ IDEA *Community Edition* 2016.2.2 does not provide ECMAScript 2015 syntax highlighting.

IntelliJ IDEA *Ultimate* does have ECMAScript 2015 support. Thomas Schlage (Zalando) is using it for Aurelia development.

[WebStorm](https://www.jetbrains.com/webstorm/) does provide ECMAScript 2015 syntax highlighting, but it does *not* come with a community edition. 

You can:

- get a commercial license of WebStorm (EUR 129/year)
- apply for a license for open source development (free)
- go with some other editor

