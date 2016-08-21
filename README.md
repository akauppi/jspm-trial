# Minimal JSPM sample

## Getting started

```
$ npm install    # installs `jspm` and `http-server`

$ npm run jspm-update	# updates `jspm_packages`
```

Start the server:

```
$ npm run serve
```

Open [http://localhost:8082](http://localhost:8082) and the browser's development tools.

You should see `42` on the console log.

## What happened?

1. `index.html` loads `jspm_packages/system.js` that is able to transpile ES2015 syntax on the fly, and handle the `import`/`export` syntax - which is great, by the way!
2. `index.html` loads `config.js`, which calls `System.config` to set up jspm
3. `System.import("app")` is run, which loads and transpiles `app.js`
4. `app.js` contains `import {some} from 'some'`, which fetches a value (provided using ES2015 `let` syntax in `some.js`)
5. `app.js` prints the received value in console log

## Aurelia branch

The `master` branch is a minimalistic sample of integrating `jspm` to a project.

In the `aurelia` branch, we bring in [Aurelia](http://aurelia.io) framework, as well.

## Tools recommended

IntelliJ IDEA Community Edition 2016.2.2 does *not* provide ECMAScript 2015 syntax highlighting.

[WebStorm](https://www.jetbrains.com/webstorm/) does, but it does *not* come with a community edition. You can:

- get a commercial license (EUR 129/year)
- apply for a license for open source development (free) 
- go with some other editor

