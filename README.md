# rollup-userscript-template

This is a template repository for a userscript.
It bundles typescript, react and JSX/TSX script files into a single userscript file with [rollup](https://rollupjs.org/)

## Features:
*   Bundle everything into a single userscript files in [dist/bundle.user.js](dist/bundle.user.js)
*   Typescript support
*   React support
*   JSX/TSX support
*   Metablock generation from [package.json](package.json) and [meta.json](meta.json) with [rollup-plugin-userscript-metablock](https://github.com/FlandreDaisuki/rollup-plugin-userscript-metablock)
*   Development script in [dist/dev.user.js](dist/dev.user.js). Automatically fetches the newest version on F5
*   Source map support

## Installation

Clone the repository and install dependencies with npm
```sh
git clone git@github.com:cvzi/rollup-userscript-template.git
cd rollup-userscript-template
npm install
```

## Usage

### Bundle

Bundle everything from `src/` into `dist/bundle.user.js`:

`npm run build`

or

`npx rollup --config`


### Development server
`npm run serve`

or

`node -r esm server.js`

This will automatically update `dist/bundle.user.js` when code changes and serve it on [localhost:8124](http://localhost:8124/).

It also creates a second userscript `dist/dev.user.js`, if you install it in Tampermonkey, it will automatically fetch the latest version from http://localhost:8124/bundle.user.js once you reload a website with F5.


### Bundle without source map

Bundle for publishing without sourcemapping to `dist/release-3.2.1.user.js`

`npm run build:release`

or on Windows

`npm run build:release:win32`


## Other

*   Typescript types for GM.* object are incomplete. See [types/GM/index.d.ts](types/GM/index.d.ts)
*   Currently react is not bundled, but imported with @require. To bundle it, remove `output.globals` and `external` from [rollup.config.js](rollup.config.js)
