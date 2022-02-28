"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var useWallet = __webpack_require__(67);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(5681);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@project-serum/anchor"
var anchor_ = __webpack_require__(6391);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./hooks/useWalletBalance.tsx





const BalanceContext = /*#__PURE__*/(0,external_react_.createContext)(null);
const rpcHost = "https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899/";
const connection = new anchor_.web3.Connection(rpcHost);
function useWalletBalance() {
  const {
    0: balance,
    1: setBalance
  } = useContext(BalanceContext);
  return [balance, setBalance];
}
const WalletBalanceProvider = ({
  children
}) => {
  const wallet = (0,useWallet/* useWallet */.O)();
  const {
    0: balance,
    1: setBalance
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    (async () => {
      if (wallet !== null && wallet !== void 0 && wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / web3_js_.LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);
  (0,external_react_.useEffect)(() => {
    (async () => {
      if (wallet !== null && wallet !== void 0 && wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / web3_js_.LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);
  return /*#__PURE__*/jsx_runtime_.jsx(BalanceContext.Provider, {
    value: [balance, setBalance],
    children: children
  });
};
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons"
const free_brands_svg_icons_namespaceObject = require("@fortawesome/free-brands-svg-icons");
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











fontawesome_svg_core_namespaceObject.library.add(free_brands_svg_icons_namespaceObject.fab, free_solid_svg_icons_.faCoffee);

__webpack_require__(2121);

const WalletConnectionProvider = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(526), __webpack_require__.e(735), __webpack_require__.e(167), __webpack_require__.e(354)]).then(__webpack_require__.bind(__webpack_require__, 7354)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7354)],
    modules: ["_app.tsx -> " + "../components/WalletConnection/WalletConnectionProvider"]
  }
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.CSSReset, {}), /*#__PURE__*/jsx_runtime_.jsx(WalletConnectionProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(WalletBalanceProvider, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 3426:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = require("@ledgerhq/hw-transport");

/***/ }),

/***/ 6631:
/***/ ((module) => {

module.exports = require("@ledgerhq/hw-transport-webhid");

/***/ }),

/***/ 6391:
/***/ ((module) => {

module.exports = require("@project-serum/anchor");

/***/ }),

/***/ 5681:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 7619:
/***/ ((module) => {

module.exports = require("@toruslabs/openlogin");

/***/ }),

/***/ 9209:
/***/ ((module) => {

module.exports = require("@toruslabs/openlogin-ed25519");

/***/ }),

/***/ 2815:
/***/ ((module) => {

module.exports = require("bs58");

/***/ }),

/***/ 9553:
/***/ ((module) => {

module.exports = require("eventemitter3");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [901], () => (__webpack_exec__(6663)));
module.exports = __webpack_exports__;

})();