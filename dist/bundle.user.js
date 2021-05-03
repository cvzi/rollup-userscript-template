// ==UserScript==
// @name        rollup-userscript-template
// @description Bundle typescript, react and JSX/TSX script files into a single userscript file with rollup
// @namespace   github.com/cvzi
// @require     https://unpkg.com/react@17/umd/react.development.js
// @require     https://unpkg.com/react-dom@17/umd/react-dom.development.js
// @include     https://github.com/*
// @version     1.2.2
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

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);
  var React__namespace = /*#__PURE__*/_interopNamespace(React$1);

  var helloWorld = (function () {
    window.setTimeout(function delayedError() {
      throw 'I am a delayed error';
    }, 3000);
    return 'Plain javascript';
  })();

  var getSomeValueFromGM = (function () {
      return () => GM.getValue('test', 'a default value');
  })();

  class SomeList extends React__namespace.Component {
      constructor(props) {
          super(props);
      }
      render() {
          return (React__namespace.createElement("div", { className: "some-list" },
              React__namespace.createElement("h1", null,
                  "This is a list for ",
                  this.props.name),
              React__namespace.createElement("ul", null,
                  React__namespace.createElement("li", null, "plain javascript"),
                  React__namespace.createElement("li", null, "typescript"),
                  React__namespace.createElement("li", null, "react"),
                  React__namespace.createElement("li", null, "JSX/TSX"))));
      }
  }

  ReactDOM__namespace.render( /*#__PURE__*/React.createElement(SomeList, {
    name: helloWorld
  }), document.body);
  getSomeValueFromGM().then(function (s) {
    ReactDOM__namespace.render( /*#__PURE__*/React.createElement(SomeList, {
      name: s
    }), document.body);
  });

}(ReactDOM, React));
//# sourceMappingURL=bundle.user.js.map
