// ==UserScript==
// @name        rollup-userscript-template [dev]
// @description Bundle typescript, react and JSX/TSX script files into a single userscript file with rollup
// @namespace   github.com/cvzi
// @require     https://unpkg.com/react@17/umd/react.development.js
// @require     https://unpkg.com/react-dom@17/umd/react-dom.development.js
// @include     https://github.com/cvzi
// @version     1.0.0
// @homepage    https://github.com/cvzi/userscript-rollup
// @author      cuzi
// @license     MIT
// @grant       GM.getValue
// @grant       GM.xmlHttpRequest
// ==/UserScript==

'use strict';

(function () {
  const url = `http://localhost:8124/bundle.user.js?${Date.now()}`
  new Promise(function loadBundleFromServer (resolve, reject) {
    GM.xmlHttpRequest({
      url: url,
      onload: function (r) {
        if (r.status !== 200) {
          return reject(r)
        }
        resolve(r.responseText)
      },
      onerror: e => reject(e)
    }).catch(e => { /* ignore */ })
  }).catch(function (e) {
    const log = function (obj) {
      try {
        console.log(GM.info.script.name + ': ' + obj)
      } catch (e) {
        console.log('loadBundleFromServer', obj)
      }
    }
    if (e && 'status' in e) {
      if (e.status <= 0) {
        log('Server is not responding')
      } else {
        log('HTTP status: ' + e.status)
      }
    } else {
      log(e)
    }
  }).then(function (s) {
    /* eslint-disable no-eval */
    eval(`${s}
//# sourceURL=${url}`)
  })
})()