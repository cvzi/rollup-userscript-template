// ==UserScript==
// @name        rollup-userscript-template
// @description Bundle typescript, react and JSX/TSX script files into a single userscript file with rollup
// @namespace   github.com/cvzi
// @require     https://unpkg.com/react@17/umd/react.development.js
// @require     https://unpkg.com/react-dom@17/umd/react-dom.development.js
// @include     https://github.com/*
// @version     1.1.5
// @homepage    https://github.com/cvzi/rollup-userscript-template
// @author      cuzi
// @license     MIT
// @grant       GM.getValue
// ==/UserScript==

/*
MIT License

Copyright (c) 2020 cvzi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* globals React, ReactDOM */
(function (ReactDOM, React$1) {
  'use strict';

  var helloWorld = (function () {
    window.setTimeout(function delayedError() {
      throw 'I am a delayed error';
    }, 3000);
    return 'Plain javascript';
  })();

  var getSomeValueFromGM = (function () {
      return () => GM.getValue('test', 'a default value');
  })();

  class SomeList extends React$1.Component {
      constructor(props) {
          super(props);
      }
      render() {
          return (React$1.createElement("div", { className: "some-list" },
              React$1.createElement("h1", null,
                  "This is a list for ",
                  this.props.name),
              React$1.createElement("ul", null,
                  React$1.createElement("li", null, "plain javascript"),
                  React$1.createElement("li", null, "typescript"),
                  React$1.createElement("li", null, "react"),
                  React$1.createElement("li", null, "JSX/TSX"))));
      }
  }

  ReactDOM.render( /*#__PURE__*/React.createElement(SomeList, {
    name: helloWorld
  }), document.body);
  getSomeValueFromGM().then(function (s) {
    ReactDOM.render( /*#__PURE__*/React.createElement(SomeList, {
      name: s
    }), document.body);
  });

}(ReactDOM, React));
