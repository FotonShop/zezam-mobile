"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 8949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js + 11 modules
var lib = __webpack_require__(4526);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(3724);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Layout/Header.tsx
const _excluded = ["children", "href"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const MenuLink = _ref => {
  let {
    children,
    href
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(react_.Link, _objectSpread(_objectSpread({
    fontSize: "md",
    textDecoration: "none",
    textTransform: "uppercase",
    href: href,
    _active: {
      textDecoration: "none"
    },
    _hover: {
      textDecoration: "none"
    }
  }, props), {}, {
    children: children
  }));
};

function Header() {
  const {
    isOpen,
    onToggle
  } = (0,react_.useDisclosure)();
  const router = (0,router_.useRouter)();

  /*#__PURE__*/
  jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
    icon: free_solid_svg_icons_.faCoffee
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      bg: (0,react_.useColorModeValue)("white", "gray.800"),
      color: (0,react_.useColorModeValue)("gray.600", "white"),
      minH: "60px",
      py: {
        base: 2
      },
      px: {
        base: 4
      },
      borderBottom: 1,
      borderStyle: "solid",
      borderColor: (0,react_.useColorModeValue)("gray.200", "gray.900"),
      align: "center",
      justifyContent: "space-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
        flex: {
          base: 1,
          md: "auto"
        },
        ml: {
          base: -2
        },
        display: {
          base: "flex",
          md: "none"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
          onClick: onToggle,
          icon: isOpen ? /*#__PURE__*/jsx_runtime_.jsx(icons_.CloseIcon, {
            w: 3,
            h: 3
          }) : /*#__PURE__*/jsx_runtime_.jsx(icons_.HamburgerIcon, {
            w: 5,
            h: 5
          }),
          variant: "ghost",
          "aria-label": "Toggle Navigation"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        gridGap: 4 // justifyContent="space-between"
        ,
        alignItems: "center",
        cursor: "pointer",
        onClick: () => router.push("/"),
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
          alt: "logo",
          src: "/logo.jpg",
          rounded: "full",
          h: "3rem",
          mr: "1rem"
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
          as: "p",
          fontSize: "1.5rem",
          fontWeight: "700",
          fontFamily: "'Be Vietnam Pro', cursive",
          color: "#2c2c2c",
          children: "Zezam Open"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
        display: {
          base: "none",
          md: "flex"
        },
        ml: 10,
        direction: "row" // minWidth={"100%"}
        ,
        alignItems: "center",
        justifyContent: "space-between",
        wrap: "wrap",
        children: /*#__PURE__*/jsx_runtime_.jsx(DesktopNav, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Collapse, {
      in: isOpen,
      animateOpacity: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
        direction: "row",
        minWidth: "100%",
        alignItems: "right",
        justifyContent: "left",
        wrap: "wrap",
        children: /*#__PURE__*/jsx_runtime_.jsx(MobileNav, {})
      })
    })]
  });
}

const DesktopNav = () => {
  const linkColor = (0,react_.useColorModeValue)("gray.600", "gray.200");
  const linkHoverColor = (0,react_.useColorModeValue)("gray.800", "white");
  const popoverContentBgColor = (0,react_.useColorModeValue)("white", "gray.800");
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "normal",
    gridGap: 10,
    rowGap: 2,
    wrap: "wrap",
    direction: "row" // width={"100%"}
    ,
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      gridGap: 60,
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
        gridGap: 30,
        justifyContent: "space-between",
        children: /*#__PURE__*/jsx_runtime_.jsx(MenuLink, {
          borderBottom: router.pathname === "/how-to" ? "2px solid #2c2c2c" : "none",
          fontWeight: router.pathname === "/how-to" ? "regular" : "normal",
          href: "/how-to",
          color: "#2c2c2c",
          children: "How to"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      alignItems: "center",
      justifyContent: "space-between",
      direction: "row",
      columnGap: "1.6rem",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://discord.com/invite/krRgtbu8AH",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
          icon: ["fab", "discord"],
          size: "2x"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://twitter.com/ZezamOpen",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
          icon: ["fab", "twitter"],
          size: "2x"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(lib/* WalletMultiButton */.aD, {
        style: {
          boxShadow: "none",
          fontWeight: 500,
          fontFamily: '"Be Vietnam Pro"',
          fontSize: "0.75rem"
        }
      })]
    })]
  });
};

const DesktopSubNav = () => {
  return /*#__PURE__*/_jsx(Link, {
    role: "group",
    display: "block",
    p: 2,
    rounded: "md",
    _hover: {
      bg: useColorModeValue("pink.50", "gray.900")
    },
    children: /*#__PURE__*/_jsxs(Stack, {
      direction: "row",
      align: "center",
      children: [/*#__PURE__*/_jsxs(Box, {
        children: [/*#__PURE__*/_jsx(Text, {
          transition: "all .3s ease",
          _groupHover: {
            color: "pink.400"
          },
          fontWeight: 500
        }), /*#__PURE__*/_jsx(Text, {
          fontSize: "sm"
        })]
      }), /*#__PURE__*/_jsx(Flex, {
        transition: "all .3s ease",
        transform: "translateX(-10px)",
        opacity: 0,
        _groupHover: {
          opacity: "100%",
          transform: "translateX(0)"
        },
        justify: "flex-end",
        align: "center",
        flex: 1,
        children: /*#__PURE__*/_jsx(Icon, {
          color: "pink.400",
          w: 5,
          h: 5,
          as: ChevronRightIcon
        })
      })]
    })
  });
};

const MobileNav = () => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
    bg: (0,react_.useColorModeValue)("white", "gray.800"),
    p: 4,
    display: {
      md: "none"
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      direction: "column",
      rowGap: "0.5rem",
      children: [/*#__PURE__*/jsx_runtime_.jsx(MenuLink, {
        fontWeight: router.pathname === "/" ? "regular" : "normal",
        href: "/",
        color: "#2c2c2c",
        children: "Home"
      }), /*#__PURE__*/jsx_runtime_.jsx(MenuLink, {
        fontWeight: router.pathname === "/how-to" ? "regular" : "normal",
        href: "/how-to",
        color: "#2c2c2c",
        children: "How to"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://discord.com/invite/krRgtbu8AH",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
          icon: ["fab", "discord"],
          size: "2x"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://twitter.com/ZezamOpen",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
          icon: ["fab", "twitter"],
          size: "2x"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(lib/* WalletMultiButton */.aD, {
        style: {
          boxShadow: "none",
          fontWeight: 500,
          fontFamily: '"Be Vietnam Pro"',
          fontSize: "0.75rem"
        }
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/Layout/layout.tsx
const layout_excluded = ["children"];

function layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layout_ownKeys(Object(source), true).forEach(function (key) { layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function layout_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = layout_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function layout_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







// const breakpoints = createBreakpoints({
//   sm: "30em",
//   md: "48em",
//   lg: "62em",
//   xl: "80em",
//   "2xl": "96em",
// });
const Layout = _ref => {
  let {
    children
  } = _ref,
      props = layout_objectWithoutProperties(_ref, layout_excluded);

  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack // w={[300, 400, 500]}
    , layout_objectSpread(layout_objectSpread({
      pt: "1rem",
      px: ["2rem", "2rem", "3rem", "5rem"]
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), children]
    }))
  });
};

/***/ })

};
;