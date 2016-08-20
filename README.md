# Minimal JSPM sample

## Getting started

```
$ npm install    # installs `jspm` and `http-server`
```

Start the server:

```
$ node_modules/.bin/http-server -p 8082 .
```

Open [http://localhost:8082](http://localhost:8082) and the browser's development tools.

You should see `42` on the console log.

## What happened?

1. `index.html` loads `jspm_packages/system.js` that is able to transpile ES2015 syntax on the fly, and handle the `import`/`export` syntax - which is great, by the way!
2. `index.html` loads `config.js`, which calls `System.config` to set up jspm
3. `System.import("app")` is run, which loads and transpiles `app.js`
4. `app.js` contains `import {some} from 'some'`, which fetches a value (provided using ES2015 `let` syntax in `some.js`)
5. `app.js` prints the received value in console log

