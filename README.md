# 이듬(E.UID) 멘토링 프로그램

이듬 멘토링 프로그램 학습용 프로젝트 킷(Project Kit) 입니다.

<br>

## ☕︎ 모던 JavaScript (ES6+, ECMAScript v6+)

프로젝트는 [@parcel/transformer-babel](https://v2.parceljs.org/languages/babel/)을 사용해 모던 JavaScript를 사용할 수 있습니다.

### 사용 예시

[./src/assets/js/controls/demo.js](./src/assets/js/controls/demo.js) 파일 코드

```js
// 유틸리티 모듈 로드
import { ready, getNode, addClass, removeClass, delay, hasClass, toggleClass } from '../utils';

// 테스트 클래스 속성 이름
const TEST_CLASSNAME = 'appHeader__demo';

// 토글 클래스 컨트롤러
const toggleClassController = (target, time) =>
  delay(time).then(() => toggleClass(target, TEST_CLASSNAME));

// 문서 콘텐츠가 준비되면 ready() 실행
ready(() => {
  // <header class="appHeader"> 요소 참조
  const appHeader = getNode('.appHeader');

  // 클래스 속성 추가
  addClass(appHeader, TEST_CLASSNAME);

  // 클래스 속성 포함 유무 확인
  if (hasClass(appHeader, TEST_CLASSNAME)) {
    // 2초 뒤에 클래스 속성 제거
    delay(2000)
      .then(() => removeClass(appHeader, TEST_CLASSNAME))
      // toggleClassController() 함수 실행
      .then(() => toggleClassController(appHeader, 1100));
  }
});
```

[./src/assets/js/utils/index.js](./src/assets/js/utils/index.js) 파일 코드

```js
export * from './delay';
export * from './typeOf';
export * from './throwError';
export * from './getNodeOrList';
export * from './classNames';
export * from './eventOnOff';
export * from './eventReady';
```

[./src/assets/js/utils/getNodeOrList.js](./src/assets/js/utils/getNodeOrList.js) 파일 코드

```js
// 노드 리스트 반환 유티릴티
export const getNodeList = (selector, context = document) => context.querySelectorAll(selector);

// 노드 반환 유틸리티
export const getNode = (selector, context) => getNodeList(selector, context)[0];
```

<br>

### 결과

#### ␥ ES6 → JS 컴파일

<details>
  <summary>생성된 코드</summary>


  ```js
  // modules are defined as an array
  // [ module function, map of requires ]
  //
  // map of requires is short require name -> numeric require
  //
  // anything defined in a previous bundle is accessed via the
  // orig method which is the require for previous bundles

  (function(modules, cache, entry, mainEntry, globalName) {
    /* eslint-disable no-undef */
    var globalObject = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
    /* eslint-enable no-undef */

    // Save the require from previous bundle to this closure if any
    var previousRequire = typeof globalObject.parcelRequire === 'function' && globalObject.parcelRequire;
    // Do not use `require` to prevent Webpack from trying to bundle this call
    var nodeRequire = typeof module !== 'undefined' && typeof module.require === 'function' && module.require.bind(module);

    function newRequire(name, jumped) {
      if (!cache[name]) {
        if (!modules[name]) {
          // if we cannot find the module within our internal map or
          // cache jump to the current global require ie. the last bundle
          // that was added to the page.
          var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
          if (!jumped && currentRequire) {
            return currentRequire(name, true);
          }

          // If there are other bundles on this page the require from the
          // previous one is saved to 'previousRequire'. Repeat this as
          // many times as there are bundles until the module is found or
          // we exhaust the require chain.
          if (previousRequire) {
            return previousRequire(name, true);
          }

          // Try the node require function if it exists.
          if (nodeRequire && typeof name === 'string') {
            return nodeRequire(name);
          }

          var err = new Error("Cannot find module '" + name + "'");
          err.code = 'MODULE_NOT_FOUND';
          throw err;
        }

        localRequire.resolve = resolve;
        localRequire.cache = {};

        var module = (cache[name] = new newRequire.Module(name));

        modules[name][0].call(module.exports, localRequire, module, module.exports, this);
      }

      return cache[name].exports;

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      function resolve(x) {
        return modules[name][1][x] || x;
      }
    }

    function Module(moduleName) {
      this.id = moduleName;
      this.bundle = newRequire;
      this.exports = {};
    }

    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function(id, exports) {
      modules[id] = [function(require, module) {
        module.exports = exports;
      }
      , {}, ];
    }
    ;

    globalObject.parcelRequire = newRequire;

    for (var i = 0; i < entry.length; i++) {
      newRequire(entry[i]);
    }

    if (mainEntry) {
      // Expose entry point to Node, AMD or browser globals
      // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
      var mainExports = newRequire(mainEntry);

      // CommonJS
      if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = mainExports;

        // RequireJS
      } else if (typeof define === 'function' && define.amd) {
        define(function() {
          return mainExports;
        });

        // <script>
      } else if (globalName) {
        this[globalName] = mainExports;
      }
    }
  }
  )({
    "4eICy": [function(require, module, exports) {
      var global = arguments[3];
      var HMR_HOST = null;
      var HMR_PORT = 9999;
      var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
      module.bundle.HMR_BUNDLE_ID = "88baa909d7b9ab7030695292a956508c";
      /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH */

      var OVERLAY_ID = '__parcel__error__overlay__';
      var OldModule = module.bundle.Module;

      function Module(moduleName) {
        OldModule.call(this, moduleName);
        this.hot = {
          data: module.bundle.hotData,
          _acceptCallbacks: [],
          _disposeCallbacks: [],
          accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {}
            );
          },
          dispose: function(fn) {
            this._disposeCallbacks.push(fn);
          }
        };
        module.bundle.hotData = null;
      }

      module.bundle.Module = Module;
      var checkedAssets, assetsToAccept, acceptedAssets;

      function getHostname() {
        return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
      }

      function getPort() {
        return HMR_PORT || location.port;
      }
      // eslint-disable-next-line no-redeclare

      var parent = module.bundle.parent;

      if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
        var hostname = getHostname();
        var port = getPort();
        var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
        var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');

        ws.onmessage = function(event) {
          checkedAssets = {};
          assetsToAccept = [];
          acceptedAssets = {};
          var data = JSON.parse(event.data);

          if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter(asset=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update

            var handled = false;
            assets.forEach(asset=>{
              var didAccept = asset.type === 'css' || hmrAcceptCheck(global.parcelRequire, asset.id);

              if (didAccept) {
                handled = true;
              }
            }
            );

            if (handled) {
              console.clear();
              assets.forEach(function(asset) {
                hmrApply(global.parcelRequire, asset);
              });

              for (var i = 0; i < assetsToAccept.length; i++) {
                var id = assetsToAccept[i][1];

                if (!acceptedAssets[id]) {
                  hmrAcceptRun(assetsToAccept[i][0], id);
                }
              }
            } else {
              window.location.reload();
            }
          }

          if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi) {
              let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
              console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay

            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            document.body.appendChild(overlay);
          }
        }
        ;

        ws.onerror = function(e) {
          console.error(e.message);
        }
        ;

        ws.onclose = function(e) {
          console.warn('[parcel] 🚨 Connection to the HMR server was lost');
        }
        ;
      }

      function removeErrorOverlay() {
        var overlay = document.getElementById(OVERLAY_ID);

        if (overlay) {
          overlay.remove();
          console.log('[parcel] ✨ Error resolved');
        }
      }

      function createErrorOverlay(diagnostics) {
        var overlay = document.createElement('div');
        overlay.id = OVERLAY_ID;
        let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';

        for (let diagnostic of diagnostics) {
          let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
          errorHTML += `
        <div>
          <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
            🚨 ${diagnostic.message}
          </div>
          <pre>
            ${stack}
          </pre>
          <div>
            ${diagnostic.hints.map(hint=>'<div>' + hint + '</div>').join('')}
          </div>
        </div>
      `;
        }

        errorHTML += '</div>';
        overlay.innerHTML = errorHTML;
        return overlay;
      }

      function getParents(bundle, id) {
        var modules = bundle.modules;

        if (!modules) {
          return [];
        }

        var parents = [];
        var k, d, dep;

        for (k in modules) {
          for (d in modules[k][1]) {
            dep = modules[k][1][d];

            if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
              parents.push([bundle, k]);
            }
          }
        }

        if (bundle.parent) {
          parents = parents.concat(getParents(bundle.parent, id));
        }

        return parents;
      }

      function updateLink(link) {
        var newLink = link.cloneNode();

        newLink.onload = function() {
          if (link.parentNode !== null) {
            link.parentNode.removeChild(link);
          }
        }
        ;

        newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now());
        link.parentNode.insertBefore(newLink, link.nextSibling);
      }

      var cssTimeout = null;

      function reloadCSS() {
        if (cssTimeout) {
          return;
        }

        cssTimeout = setTimeout(function() {
          var links = document.querySelectorAll('link[rel="stylesheet"]');

          for (var i = 0; i < links.length; i++) {
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;

            if (!absolute) {
              updateLink(links[i]);
            }
          }

          cssTimeout = null;
        }, 50);
      }

      function hmrApply(bundle, asset) {
        var modules = bundle.modules;

        if (!modules) {
          return;
        }

        if (modules[asset.id] || !bundle.parent) {
          if (asset.type === 'css') {
            reloadCSS();
          } else {
            var fn = new Function('require','module','exports',asset.output);
            modules[asset.id] = [fn, asset.depsByBundle[bundle.HMR_BUNDLE_ID]];
          }
        } else if (bundle.parent) {
          hmrApply(bundle.parent, asset);
        }
      }

      function hmrAcceptCheck(bundle, id) {
        var modules = bundle.modules;

        if (!modules) {
          return;
        }

        if (!modules[id] && bundle.parent) {
          return hmrAcceptCheck(bundle.parent, id);
        }

        if (checkedAssets[id]) {
          return;
        }

        checkedAssets[id] = true;
        var cached = bundle.cache[id];
        assetsToAccept.push([bundle, id]);

        if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
          return true;
        }

        return getParents(global.parcelRequire, id).some(function(v) {
          return hmrAcceptCheck(v[0], v[1]);
        });
      }

      function hmrAcceptRun(bundle, id) {
        var cached = bundle.cache[id];
        bundle.hotData = {};

        if (cached && cached.hot) {
          cached.hot.data = bundle.hotData;
        }

        if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
          cached.hot._disposeCallbacks.forEach(function(cb) {
            cb(bundle.hotData);
          });
        }

        delete bundle.cache[id];
        bundle(id);
        cached = bundle.cache[id];

        if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
          cached.hot._acceptCallbacks.forEach(function(cb) {
            var assetsToAlsoAccept = cb(function() {
              return getParents(global.parcelRequire, id);
            });

            if (assetsToAlsoAccept && assetsToAccept.length) {
              assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
            }
          });
        }

        acceptedAssets[id] = true;
      }
    }
    , {}],
    "xZn2m": [function(require, module, exports) {
      "use strict";

      require("../sass/style.scss");

      require("./controls/demo");
    }
    , {
      "../sass/style.scss": "2EdRP",
      "./controls/demo": "3TPsL"
    }],
    "2EdRP": [function() {}
    , {}],
    "3TPsL": [function(require, module, exports) {
      "use strict";

      var _utils = require("../utils");

      // 테스트 클래스 속성 이름
      var TEST_CLASSNAME = 'appHeader__demo';
      // 토글 클래스 컨트롤러

      var toggleClassController = function toggleClassController(target, time) {
        return (0,
        _utils.delay)(time).then(function() {
          return (0,
          _utils.toggleClass)(target, TEST_CLASSNAME);
        });
      };
      // 문서 콘텐츠가 준비되면 ready() 실행

      (0,
      _utils.ready)(function() {
        // <header class="appHeader"> 요소 참조
        var appHeader = (0,
        _utils.getNode)('.appHeader');
        // 클래스 속성 추가

        (0,
        _utils.addClass)(appHeader, TEST_CLASSNAME);
        // 클래스 속성 포함 유무 확인

        if ((0,
        _utils.hasClass)(appHeader, TEST_CLASSNAME)) {
          // 2초 뒤에 클래스 속성 제거
          (0,
          _utils.delay)(2000).then(function() {
            return (0,
            _utils.removeClass)(appHeader, TEST_CLASSNAME);
          })// toggleClassController() 함수 실행
          .then(function() {
            return toggleClassController(appHeader, 1100);
          });
        }
      });
    }
    , {
      "../utils": "SKBGu"
    }],
    "SKBGu": [function(require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _delay = require("./delay");

      Object.keys(_delay).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _delay[key];
          }
        });
      });

      var _typeOf = require("./typeOf");

      Object.keys(_typeOf).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _typeOf[key];
          }
        });
      });

      var _throwError = require("./throwError");

      Object.keys(_throwError).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _throwError[key];
          }
        });
      });

      var _getNodeOrList = require("./getNodeOrList");

      Object.keys(_getNodeOrList).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _getNodeOrList[key];
          }
        });
      });

      var _classNames = require("./classNames");

      Object.keys(_classNames).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _classNames[key];
          }
        });
      });

      var _eventOnOff = require("./eventOnOff");

      Object.keys(_eventOnOff).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _eventOnOff[key];
          }
        });
      });

      var _eventReady = require("./eventReady");

      Object.keys(_eventReady).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _eventReady[key];
          }
        });
      });
    }
    , {
      "./typeOf": "394UI",
      "./throwError": "6r69h",
      "./getNodeOrList": "2MFmG",
      "./classNames": "229rL",
      "./eventOnOff": "7fFiL",
      "./eventReady": "1cB9e",
      "./delay": "4Ec6z"
    }],
    "394UI": [function(require, module, exports) {
      "use strict";

      var global = arguments[3];
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isGlobal = exports.isDocument = exports.isElement = exports.isObject = exports.isArray = exports.isFunction = exports.isBoolean = exports.isString = exports.isNumber = exports.typeOf = void 0;
      var toString = Object.prototype.toString;
      // 전달된 데이터 타입을 (소)문자로 반환하는 유틸리티

      var typeOf = function typeOf(data) {
        return toString.call(data).slice(8, -1).toLowerCase();
      };
      // 전달된 데이터 타입이 `숫자`인지 결과를 Boolean으로 반환하는 유틸리티

      exports.typeOf = typeOf;

      var isNumber = function isNumber(data) {
        return typeOf(data) === 'number';
      };
      // 전달된 데이터 타입이 `문자`인지 결과를 Boolean으로 반환하는 유틸리티

      exports.isNumber = isNumber;

      var isString = function isString(data) {
        return typeOf(data) === 'string';
      };
      // 전달된 데이터 타입이 `불리언`인지 결과를 Boolean으로 반환하는 유틸리티

      exports.isString = isString;

      var isBoolean = function isBoolean(data) {
        return typeOf(data) === 'boolean';
      };
      // 전달된 데이터 타입이 `함수`인지 결과를 Boolean으로 반환하는 유틸리티

      exports.isBoolean = isBoolean;

      var isFunction = function isFunction(data) {
        return typeOf(data) === 'function';
      };
      // 전달된 데이터 타입이 `배열`인지 결과를 Boolean으로 반환하는 유틸리티

      exports.isFunction = isFunction;

      var isArray = function isArray(data) {
        return typeOf(data) === 'array';
      };
      // 전달된 데이터 타입이 객체인지 결과를 Boolean으로 반환하는 유틸리티

      exports.isArray = isArray;

      var isObject = function isObject(data) {
        return typeOf(data) === 'object';
      };
      // 전달된 데이터 타입이 HTML 요소노드인지 결과를 Boolean으로 반환하는 유틸리티

      exports.isObject = isObject;

      var isElement = function isElement(node) {
        return node.nodeType === document.ELEMENT_NODE;
      };
      // 전달된 데이터 타입이 Document 노드인지 결과를 Boolean으로 반환하는 유틸리티

      exports.isElement = isElement;

      var isDocument = function isDocument(node) {
        return node.nodeType === document.DOCUMENT_NODE;
      };
      // 전달된 데이터가 글로벌 객체인지 결과를 Boolean으로 반환하는 유틸리티

      exports.isDocument = isDocument;

      var isGlobal = function isGlobal(target) {
        return [window, global, globalThis].some(function(item) {
          return item === target;
        });
      };

      exports.isGlobal = isGlobal;
    }
    , {}],
    "6r69h": [function(require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.throwError = void 0;

      var throwError = function throwError(errorMessage) {
        throw new Error(errorMessage);
      };

      exports.throwError = throwError;
    }
    , {}],
    "2MFmG": [function(require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getNode = exports.getNodeList = void 0;

      // 노드 리스트 반환 유티릴티
      var getNodeList = function getNodeList(selector) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
        return context.querySelectorAll(selector);
      };
      // 노드 반환 유틸리티

      exports.getNodeList = getNodeList;

      var getNode = function getNode(selector, context) {
        return getNodeList(selector, context)[0];
      };

      exports.getNode = getNode;
    }
    , {}],
    "229rL": [function(require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hasClass = exports.toggleClass = exports.removeClass = exports.addClass = void 0;

      var _typeOf = require("./typeOf");

      var _throwError = require("./throwError");

      /* -------------------------------------------------------------------------- */
      var classNameControl = function classNameControl(methodName, domNode, className) {
        if (!(0,
        _typeOf.isElement)(domNode)) {
          (0,
          _throwError.throwError)('첫번째 인자인 domNode는 문서 요소노드여야 합니다.');
        }

        methodName.includes('contains') ? domNode.classList.contains(className) : domNode.classList[methodName](className);
        return domNode;
      };
      // 클래스 속성 이름 추가 유틸리티

      var addClass = function addClass(domNode, className) {
        return classNameControl('add', domNode, className);
      };
      // 클래스 속성 이름 제거 유틸리티

      exports.addClass = addClass;

      var removeClass = function removeClass(domNode, className) {
        return classNameControl('remove', domNode, className);
      };
      // 클래스 속성 이름 토글 유틸리티

      exports.removeClass = removeClass;

      var toggleClass = function toggleClass(domNode, className) {
        return classNameControl('toggle', domNode, className);
      };
      // 클래스 속성 이름 포함 유무 확인 유틸리티

      exports.toggleClass = toggleClass;

      var hasClass = function hasClass(domNode, className) {
        return classNameControl('contains', domNode, className);
      };

      exports.hasClass = hasClass;
    }
    , {
      "./typeOf": "394UI",
      "./throwError": "6r69h"
    }],
    "7fFiL": [function(require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.off = exports.on = void 0;

      var _typeOf = require("./typeOf");

      var _throwError = require("./throwError");

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }

      /* -------------------------------------------------------------------------- */
      var _on = function _on(domNode, eventType, eventHandler) {
        var eventOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        domNode.addEventListener(eventType, eventHandler, eventOptions);
        return domNode;
      };

      var _off = function _off(domNode, eventType, eventHandler) {
        var eventOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        domNode.removeEventListener(eventType, eventHandler, eventOptions);
      };

      var _onOff = function _onOff(isOn, domNode, eventType, eventHandler, eventOptions) {
        // 이벤트 메서드 설정
        var method = isOn ? _on : _off;
        // 유효성 검사

        if (!(0,
        _typeOf.isDocument)(domNode) && !(0,
        _typeOf.isElement)(domNode) && !(0,
        _typeOf.isGlobal)(domNode)) {
          (0,
          _throwError.throwError)('첫번째 인자인 domNode는 window 또는 document 또는 문서의 요소노드 유형이 전달되어야 합니다.');
        }

        if (eventHandler && !(0,
        _typeOf.isFunction)(eventHandler)) {
          (0,
          _throwError.throwError)('세번째 인자인 eventHandler는 함수 유형이 전달되어야 합니다.');
        }
        /**
      함수 오버로딩(Function Overoading)
      다양한 프로그래밍 언어에서 사용되는 함수의 특징으로 같은 함수 이름을 가지고 있으나 
      매개변수, 반환 타입 등이 다른 여러 개의 서브프로그램 생성합니다.
    --------------------------------------------------------------------------- */
        // 전달된 eventType 데이터 유형이 `문자`인 경우

        if ((0,
        _typeOf.isString)(eventType)) {
          // 함수 종료
          return method(domNode, eventType, eventHandler, eventOptions);
        }
        // 전달된 eventType 데이터 유형이 `객체`인 경우

        if ((0,
        _typeOf.isObject)(eventType)) {
          // 블록 스코프(상위 영역의 매개변수 이름과 for문 내부의 매개변수 이름이 같아도 다른 대상을 가리킴)
          for (var _i = 0, _Object$entries = Object.entries(eventType); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2)
              , _eventType = _Object$entries$_i[0]
              , _eventHandler = _Object$entries$_i[1];

            method(domNode, _eventType, _eventHandler, eventOptions);
          }
          // 함수 종료

          return domNode;
        }
        // 경고 메시지 출력

        console.warn('on 유틸리티의 전달인자 eventType은 `문자` 또는 `객체` 유형의 데이터를 설정해야 합니다.');
      };
      /* -------------------------------------------------------------------------- */
      // DOM 노드에 이벤트를 연결하는 유틸리티

      var on = function on(domNode, eventType, eventHandler, eventOptions) {
        return _onOff(true, domNode, eventType, eventHandler, eventOptions);
      };
      // DOM 노드에 이벤트를 제거하는 유틸리티

      exports.on = on;

      var off = function off(domNode, eventType, eventHandler, eventOptions) {
        return _onOff(false, domNode, eventType, eventHandler, eventOptions);
      };

      exports.off = off;
    }
    , {
      "./typeOf": "394UI",
      "./throwError": "6r69h"
    }],
    "1cB9e": [function(require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ready = void 0;

      var _eventOnOff = require("./eventOnOff");

      var ready = function ready(eventHandler) {
        return (0,
        _eventOnOff.on)(window, 'DOMContentLoaded', eventHandler);
      };

      exports.ready = ready;
    }
    , {
      "./eventOnOff": "7fFiL"
    }],
    "4Ec6z": [function(require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.delay = void 0;
      var _window = window
        , setTimeout = _window.setTimeout;

      var delay = function delay() {
        var setTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
        return new Promise(function(resolve, reject) {
          setTimeout(resolve, setTime);
        }
        );
      };

      exports.delay = delay;
    }
    , {}]
  }, {}, ["4eICy", "xZn2m"], "xZn2m", null)

  //# sourceMappingURL=index.88baa909.js.map
  
  ```
</details>

#### ␥ 빌드 → 코드 압축

```py
build/app/index.3f089a5e.js                  7.53 KB    1.56s
├── src/assets/js/utils/eventOnOff.js        4.67 KB    936ms
├── src/assets/js/utils/typeOf.js            2.51 KB    960ms
├── src/assets/js/utils/index.js             2.02 KB    479ms
├── src/assets/js/utils/classNames.js        1.48 KB    933ms
├── src/assets/js/controls/demo.js            1014 B    512ms
├── src/assets/js/utils/getNodeOrList.js       556 B    961ms
├── src/assets/js/utils/delay.js               401 B    962ms
├── src/assets/js/utils/eventReady.js          290 B    935ms
├── src/assets/js/utils/throwError.js          232 B    934ms
└── src/assets/js/index.js                      74 B    652ms
```

<details>
  <summary>생성된 코드</summary>

  <pre>
  !function(e,t,r,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i.parcelRequire&&i.parcelRequire,a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(r,n){if(!t[r]){if(!e[r]){var o="function"==typeof parcelRequire&&parcelRequire;if(!n&&o)return o(r,!0);if(u)return u(r,!0);if(a&&"string"==typeof r)return a(r);var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}c.resolve=function(t){return e[r][1][t]||t},c.cache={};var f=t[r]=new s.Module(r);e[r][0].call(f.exports,c,f,f.exports,this)}return t[r].exports;function c(e){return s(c.resolve(e))}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=t,s.parent=u,s.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},i.parcelRequire=s;for(var f=0;f<r.length;f++)s(r[f]);var c=s(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}({"11ipo":[function(e,t,r){"use strict";e("../sass/style.scss"),e("./controls/demo")},{"../sass/style.scss":"3BiIk","./controls/demo":"4Xzzb"}],"3BiIk":[function(){},{}],"4Xzzb":[function(e,t,r){"use strict";var n=e("../utils"),o="appHeader__demo";(0,n.ready)((function(){var e=(0,n.getNode)(".appHeader");(0,n.addClass)(e,o),(0,n.hasClass)(e,o)&&(0,n.delay)(2e3).then((function(){return(0,n.removeClass)(e,o)})).then((function(){return t=e,r=1100,(0,n.delay)(r).then((function(){return(0,n.toggleClass)(t,o)}));var t,r}))}))},{"../utils":"4IBxB"}],"4IBxB":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./delay");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})}));var o=e("./typeOf");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return o[e]}})}));var i=e("./throwError");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return i[e]}})}));var u=e("./getNodeOrList");Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return u[e]}})}));var a=e("./classNames");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return a[e]}})}));var s=e("./eventOnOff");Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return s[e]}})}));var f=e("./eventReady");Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return f[e]}})}))},{"./delay":"71Kok","./typeOf":"1dpAE","./throwError":"37aYY","./getNodeOrList":"5vT6f","./classNames":"sCr02","./eventOnOff":"5Gytz","./eventReady":"6eSgT"}],"71Kok":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.delay=void 0;var n=window.setTimeout;r.delay=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t,r){n(t,e)}))}},{}],"1dpAE":[function(e,t,r){"use strict";var n=arguments[3];Object.defineProperty(r,"__esModule",{value:!0}),r.isGlobal=r.isDocument=r.isElement=r.isObject=r.isArray=r.isFunction=r.isBoolean=r.isString=r.isNumber=r.typeOf=void 0;var o=Object.prototype.toString,i=function(e){return o.call(e).slice(8,-1).toLowerCase()};r.typeOf=i;var u=function(e){return"number"===i(e)};r.isNumber=u;var a=function(e){return"string"===i(e)};r.isString=a;var s=function(e){return"boolean"===i(e)};r.isBoolean=s;var f=function(e){return"function"===i(e)};r.isFunction=f;var c=function(e){return"array"===i(e)};r.isArray=c;var l=function(e){return"object"===i(e)};r.isObject=l;var d=function(e){return e.nodeType===document.ELEMENT_NODE};r.isElement=d;var v=function(e){return e.nodeType===document.DOCUMENT_NODE};r.isDocument=v;var y=function(e){return[window,n,globalThis].some((function(t){return t===e}))};r.isGlobal=y},{}],"37aYY":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.throwError=void 0;r.throwError=function(e){throw new Error(e)}},{}],"5vT6f":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getNode=r.getNodeList=void 0;var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t.querySelectorAll(e)};r.getNodeList=n;r.getNode=function(e,t){return n(e,t)[0]}},{}],sCr02:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.hasClass=r.toggleClass=r.removeClass=r.addClass=void 0;var n=e("./typeOf"),o=e("./throwError"),i=function(e,t,r){return(0,n.isElement)(t)||(0,o.throwError)("첫번째 인자인 domNode는 문서 요소노드여야 합니다."),e.includes("contains")?t.classList.contains(r):t.classList[e](r),t};r.addClass=function(e,t){return i("add",e,t)};r.removeClass=function(e,t){return i("remove",e,t)};r.toggleClass=function(e,t){return i("toggle",e,t)};r.hasClass=function(e,t){return i("contains",e,t)}},{"./typeOf":"1dpAE","./throwError":"37aYY"}],"5Gytz":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.off=r.on=void 0;var n=e("./typeOf"),o=e("./throwError");function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e.addEventListener(t,r,n),e},s=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,r,n)},f=function(e,t,r,u,f){var c=e?a:s;if((0,n.isDocument)(t)||(0,n.isElement)(t)||(0,n.isGlobal)(t)||(0,o.throwError)("첫번째 인자인 domNode는 window 또는 document 또는 문서의 요소노드 유형이 전달되어야 합니다."),u&&!(0,n.isFunction)(u)&&(0,o.throwError)("세번째 인자인 eventHandler는 함수 유형이 전달되어야 합니다."),(0,n.isString)(r))return c(t,r,u,f);if((0,n.isObject)(r)){for(var l=0,d=Object.entries(r);l<d.length;l++){var v=i(d[l],2);c(t,v[0],v[1],f)}return t}console.warn("on 유틸리티의 전달인자 eventType은 `문자` 또는 `객체` 유형의 데이터를 설정해야 합니다.")};r.on=function(e,t,r,n){return f(!0,e,t,r,n)};r.off=function(e,t,r,n){return f(!1,e,t,r,n)}},{"./typeOf":"1dpAE","./throwError":"37aYY"}],"6eSgT":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ready=void 0;var n=e("./eventOnOff");r.ready=function(e){return(0,n.on)(window,"DOMContentLoaded",e)}},{"./eventOnOff":"5Gytz"}]},{},["11ipo"],"11ipo");
  </pre>
</details>