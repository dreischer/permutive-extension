<p align="center">
  <img src="https://img.shields.io/github/package-json/v/dreischer/permutive-extension.svg" />
  <a href="https://github.com/standard/standard"><img src="https://img.shields.io/badge/code%20style-standard.js-brightgreen.svg" /></a>
</p>

# Overview
## Prerequisites
You'll need `node` and `yarn`

## Dependencies
Some of the main libraries used
* [**tiny-atom**](https://github.com/KidkArolis/tiny-atom) - state management
* [**preact**](https://github.com/developit/preact) - fast & tiny alternative to React
* [**webpack**](https://github.com/webpack/webpack) - module bundler & dev sever
* [**bublé**](https://github.com/bublejs/buble) - fast ES5 compiler
* [**react-ace**](https://github.com/securingsincity/react-ace) - ace editor for react (in combination with [brace](https://github.com/thlorenz/brace))

# Development setup
## Chrome extension
* Open "Extensions" in Google Chrome (`chrome://extensions/`)
* Enable development mode and click on "Load unpacked"
* Select the `extension` folder from this project:
<img width="1539" alt="Screen Shot 2019-03-10 at 19 45 37" src="https://user-images.githubusercontent.com/5756475/54090554-446cfb80-436d-11e9-991b-3215db68d39b.png">

## Extension Options
For development you'll need to point the extension to your local dev server rather than the CDN:
* Open the extension and click on "Extension options"
* Tick `Development Mode`
* Set the app URL to `https://localhost:9000/dist/app.js`
<img width="1540" alt="Screen Shot 2019-03-10 at 19 47 41" src="https://user-images.githubusercontent.com/5756475/54090609-ee4c8800-436d-11e9-91bd-6372d5cdbc2b.png">

## Start dev server
* Run `$ make dev`
* Open `https://localhost:9000/dist/app.js` to allow Chrome to allow it as an unsafe resource

# Deployment

1. Run `$ make build` to create the `dist` folder with the following files:
  * `app.js` - this file contains the main app
  * `app.js.map` - this is the source map for `app.js`
  * `extension.zip` - this is the chrome extension which loads `app.js`
  * `report.html` - this is the output of `webpack-bundle-analyzer`
2. Upload `app.js` and `app.js.map` to the `permutive-extensions` GCS bucket and place them inside the `extensions` folder. They'll be available on our CDN (`https://cdn.permutive.com/extensions/app.js`).
3. When making updates to the extension you'll need to upload `extension.zip` to the Chrome Web Store. Don't forget to increase the version number in `manifest.json`.
