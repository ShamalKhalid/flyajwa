(() => {
var exports = {};
exports.id = 380;
exports.ids = [380];
exports.modules = {

/***/ 47849:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external");

/***/ }),

/***/ 55403:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external");

/***/ }),

/***/ 94749:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external");

/***/ }),

/***/ 20399:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 25528:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ 91877:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ 25319:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 46569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50482);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69108);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62563);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68300);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'visa',
        {
        children: [
        'visa-details',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13867)), "E:\\Fly Ajwa\\src\\app\\visa\\visa-details\\page.js"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 51965)), "E:\\Fly Ajwa\\src\\app\\layout.js"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 55593)), "E:\\Fly Ajwa\\src\\app\\loading.js"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93243)), "E:\\Fly Ajwa\\src\\app\\not-found.js"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["E:\\Fly Ajwa\\src\\app\\visa\\visa-details\\page.js"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/visa/visa-details/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/visa/visa-details/page",
        pathname: "/visa/visa-details",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 56777:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61476, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88742));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 35112))

/***/ }),

/***/ 35112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ uitils_SelectComponent)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(95344);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(3729);
;// CONCATENATED MODULE: ./src/hooks/useCustomSelect.js

const useCustomSelect = (initialOptions, isOpenByDefault = false)=>{
    const [isOpen, setIsOpen] = (0,react.useState)(isOpenByDefault);
    const [selectedOption, setSelectedOption] = (0,react.useState)(null);
    const options = initialOptions;
    const openDropdown = ()=>{
        setIsOpen(true);
    };
    const closeDropdown = ()=>{
        setIsOpen(false);
    };
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen);
    };
    const selectOption = (option)=>{
        setSelectedOption(option);
        closeDropdown();
    };
    return {
        isOpen,
        selectedOption,
        options,
        openDropdown,
        closeDropdown,
        toggleDropdown,
        selectOption
    };
};
/* harmony default export */ const hooks_useCustomSelect = (useCustomSelect);

;// CONCATENATED MODULE: ./src/uitils/SelectComponent.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const SelectComponent = ({ options, placeholder, open, customClass })=>{
    const { isOpen, selectedOption, openDropdown, closeDropdown, toggleDropdown, selectOption } = hooks_useCustomSelect(options, open);
    const dropdownRef = (0,react.useRef)(null);
    const handleClickOutside = (event)=>{
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            // Click is outside the dropdown, close the dropdown
            closeDropdown();
        }
    };
    (0,react.useEffect)(()=>{
        if (isOpen) {
            // Add event listener when the component mounts
            document.addEventListener("click", handleClickOutside);
        }
        // Remove event listener when the component unmounts
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        isOpen
    ]);
    const dropdownClassName = `nice-select ${customClass || ""} ${isOpen ? "open" : ""}`;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: dropdownClassName,
        tabIndex: "0",
        onClick: toggleDropdown,
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                className: "current",
                children: selectedOption || placeholder
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("ul", {
                className: "list",
                children: options.map((option, index)=>/*#__PURE__*/ react_jsx_runtime.jsx("li", {
                        className: `option${selectedOption === option ? " selected focus" : ""}`,
                        "data-value": index,
                        onClick: ()=>{
                            selectOption(option);
                            openDropdown(); // Open the next dropdown
                        },
                        children: option
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const uitils_SelectComponent = (SelectComponent);


/***/ }),

/***/ 13867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ visa_details_page),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(25036);
// EXTERNAL MODULE: ./src/components/common/Breadcrumb.js
var Breadcrumb = __webpack_require__(54010);
// EXTERNAL MODULE: ./src/components/common/Newsletter.jsx
var Newsletter = __webpack_require__(8537);
// EXTERNAL MODULE: ./src/components/footer/Footer.js
var Footer = __webpack_require__(2266);
// EXTERNAL MODULE: ./src/components/header/Header.js
var Header = __webpack_require__(22610);
// EXTERNAL MODULE: ./src/components/topbar/Topbar.jsx
var Topbar = __webpack_require__(60899);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(86843);
;// CONCATENATED MODULE: ./src/uitils/SelectComponent.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`E:\Fly Ajwa\src\uitils\SelectComponent.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const SelectComponent = (__default__);
;// CONCATENATED MODULE: ./src/app/visa/visa-details/page.js







const metadata = {
    title: "TripRex - Tour & Travel Agency  NextJs Template",
    description: "TripRex is a NextJs Template for Tour and Travel Agency purpose",
    icons: {
        icon: "/assets/img/sm-logo.svg"
    }
};
const page = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(Header/* default */.ZP, {}),
            /*#__PURE__*/ react_jsx_runtime.jsx(Breadcrumb/* default */.Z, {
                pagename: "Visa Details",
                pagetitle: "Visa Details"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "visa-details-pages pt-120 mb-120",
                children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "row g-lg-4 gy-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "col-lg-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "visa-thumb",
                                        children: /*#__PURE__*/ react_jsx_runtime.jsx("img", {
                                            src: "/assets/img/innerpage/visa-bt-img.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "visa-title",
                                        children: /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                            children: "Electronic Visa Adult with Fan with Travel Insurance."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("ul", {
                                        className: "visa-meta",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                        children: "Country :"
                                                    }),
                                                    " New York"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                        children: "Visa Type :"
                                                    }),
                                                    " Tourist"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                        children: "Maximum Sta ys :"
                                                    }),
                                                    " 30 Days"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                        children: "Processing Time :"
                                                    }),
                                                    " 7-10 Working Day"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                        children: "Validity :"
                                                    }),
                                                    " 60 Days"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                        children: "Visa Mode :"
                                                    }),
                                                    " Electronic"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "visa-required-document mb-50",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "document-list",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                                    children: "View Required Documents"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                            children: "*"
                                                        }),
                                                        "Required Documents for Electronic Visa (Adult) with Insurance"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: 18,
                                                                    height: 16,
                                                                    viewBox: "0 0 18 16",
                                                                    children: /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                                                                        d: "M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z"
                                                                    })
                                                                }),
                                                                " ",
                                                                "Passport Scan Copy: Clearly scanned Passport copy required. Minimum of 6 months validity required from the arrival date."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: 18,
                                                                    height: 16,
                                                                    viewBox: "0 0 18 16",
                                                                    children: /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                                                                        d: "M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z"
                                                                    })
                                                                }),
                                                                " ",
                                                                "Photo Specification: Passport Size Photo with White Background (clear scanned Copy required)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: 18,
                                                                    height: 16,
                                                                    viewBox: "0 0 18 16",
                                                                    children: /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                                                                        d: "M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z"
                                                                    })
                                                                }),
                                                                " ",
                                                                "Previous Visa copy: If traveler has previous travel history on countries like Thailand, Malaysia, Singapore, USA, UK and so on, need those clear VISA scanned copy."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: 18,
                                                                    height: 16,
                                                                    viewBox: "0 0 18 16",
                                                                    children: /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                                                                        d: "M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z"
                                                                    })
                                                                }),
                                                                " ",
                                                                "Flight and hotel reservations booking with dates clearly stated (DO NOT purchase until visa approval)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: 18,
                                                                    height: 16,
                                                                    viewBox: "0 0 18 16",
                                                                    children: /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                                                                        d: "M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z"
                                                                    })
                                                                }),
                                                                " ",
                                                                "Processing time 7 working days."
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("h4", {
                                        className: "widget-title mb-30",
                                        children: "FAQ - General Visa Information:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "faq-content",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "accordion",
                                            id: "accordionTravel",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("h2", {
                                                            className: "accordion-header",
                                                            id: "travelheadingOne",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                                                                className: "accordion-button",
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": "#travelcollapseOne",
                                                                "aria-expanded": "true",
                                                                "aria-controls": "travelcollapseOne",
                                                                children: "01. Can I fill in my visa application in a language other than English?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                            id: "travelcollapseOne",
                                                            className: "accordion-collapse collapse show",
                                                            "aria-labelledby": "travelheadingOne",
                                                            "data-bs-parent": "#accordionTravel",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                className: "accordion-body",
                                                                children: "No. At Present our online application system only supports applications made in English."
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("h2", {
                                                            className: "accordion-header",
                                                            id: "travelheadingTwo",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                                                                className: "accordion-button collapsed",
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": "#travelcollapseTwo",
                                                                "aria-expanded": "false",
                                                                "aria-controls": "travelcollapseTwo",
                                                                children: "02. Will I be able to access the online application system using my computer?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                            id: "travelcollapseTwo",
                                                            className: "accordion-collapse collapse",
                                                            "aria-labelledby": "travelheadingTwo",
                                                            "data-bs-parent": "#accordionTravel",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                className: "accordion-body",
                                                                children: "We are doing our best to support as many computers, operating systems and internet browsers as possible but due to the technologies we use for our online application system, there are certain browsers we exclude due to their age or design. Currently our site is tested at IE 5.0 or later and Mozilla Firefox 3.5 or later."
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("h2", {
                                                            className: "accordion-header",
                                                            id: "travelheadingThree",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                                                                className: "accordion-button collapsed",
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": "#travelcollapseThree",
                                                                "aria-expanded": "false",
                                                                "aria-controls": "travelcollapseThree",
                                                                children: "03. Can I save my application mid-way through the application process?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                            id: "travelcollapseThree",
                                                            className: "accordion-collapse collapse",
                                                            "aria-labelledby": "travelheadingThree",
                                                            "data-bs-parent": "#accordionTravel",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                className: "accordion-body",
                                                                children: 'Yes. You can save your online visa application wherever you see the "Save & Exit" icon. To login again and complete your application, you will require your unique "Visa Application Id". This number will have been sent to the email address that you supplied in your application security details.'
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("h2", {
                                                            className: "accordion-header",
                                                            id: "travelheadingFour",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                                                                className: "accordion-button collapsed",
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": "#travelcollapseFour",
                                                                "aria-expanded": "false",
                                                                "aria-controls": "travelcollapseFour",
                                                                children: "04. I do not understand one of the questions. What can I do?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                            id: "travelcollapseFour",
                                                            className: "accordion-collapse collapse",
                                                            "aria-labelledby": "travelheadingFour",
                                                            "data-bs-parent": "#accordionTravel",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                className: "accordion-body",
                                                                children: 'Throughout the online form we have added "More Info" icons to some questions that might require further guidance.'
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("h2", {
                                                            className: "accordion-header",
                                                            id: "travelheadingFive",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                                                                className: "accordion-button collapsed",
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": "#travelcollapseFive",
                                                                "aria-expanded": "false",
                                                                "aria-controls": "travelcollapseFive",
                                                                children: "05. I made a mistake on one of my answers. Can I change it?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                            id: "travelcollapseFive",
                                                            className: "accordion-collapse collapse",
                                                            "aria-labelledby": "travelheadingFive",
                                                            "data-bs-parent": "#accordionTravel",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                className: "accordion-body",
                                                                children: "If you didn't submit your application finally you can do the change. After submitting the application you can't change it."
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("h2", {
                                                            className: "accordion-header",
                                                            id: "travelheadingSix",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                                                                className: "accordion-button collapsed",
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": "#travelcollapseSix",
                                                                "aria-expanded": "false",
                                                                "aria-controls": "travelcollapseSix",
                                                                children: "06. The date I entered is not being accepted. What is the correct format?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                            id: "travelcollapseSix",
                                                            className: "accordion-collapse collapse",
                                                            "aria-labelledby": "travelheadingSix",
                                                            "data-bs-parent": "#accordionTravel",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                className: "accordion-body",
                                                                children: "All date fields in our forms are set up in the following format: dd/mm/yyyy (for example 21/08/2011)."
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("h2", {
                                                            className: "accordion-header",
                                                            id: "travelheadingSevene",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                                                                className: "accordion-button collapsed",
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": "#travelcollapseSevene",
                                                                "aria-expanded": "false",
                                                                "aria-controls": "travelcollapseSevene",
                                                                children: "07. I have not received my Completed Application confirmation email. Can you resend it to me?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                            id: "travelcollapseSevene",
                                                            className: "accordion-collapse collapse",
                                                            "aria-labelledby": "travelheadingSevene",
                                                            "data-bs-parent": "#accordionTravel",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                className: "accordion-body",
                                                                children: "Yes. But please check first that your inbox has not treated our email confirmation as SPAM and that you have given us the correct email address. If you have not received your confirmation email after 24 hours please contact us through Complain and Feedback link."
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("h2", {
                                                            className: "accordion-header",
                                                            id: "travelheadingEight",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                                                                className: "accordion-button collapsed",
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": "#travelcollapseEight",
                                                                "aria-expanded": "false",
                                                                "aria-controls": "travelcollapseEight",
                                                                children: "08. I am unable to retrieve my application. What can I do?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                            id: "travelcollapseEight",
                                                            className: "accordion-collapse collapse",
                                                            "aria-labelledby": "travelheadingEight",
                                                            "data-bs-parent": "#accordionTravel",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                className: "accordion-body",
                                                                children: 'This could be because you did not save your application by selecting the "Save & Exit" option flagged by the following image on the application form or your did not retrieve your application within 7 days of last saving it. If you are sure you saved your application in the last seven days, empty your browser cache(temporary internet files) and try again.'
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "col-lg-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "visa-sidebar mb-30",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "sidebar-top text-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("h4", {
                                                        children: "Cost Summary"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("h6", {
                                                        children: [
                                                            "$7836/ ",
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                children: "per person"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                        children: "Arrange your trip in advance - book this room now!"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "inquery-form",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "form-title",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("h4", {
                                                                children: "Inquiry Form"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                                children: "Complete form for complaints or service inquiries; expect prompt response via phone/email."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("form", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                className: "form-inner mb-20",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("label", {
                                                                        children: [
                                                                            "Full Name ",
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx("input", {
                                                                        type: "text",
                                                                        placeholder: "Enter your full name"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                className: "form-inner mb-20",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("label", {
                                                                        children: [
                                                                            "Email Address ",
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx("input", {
                                                                        type: "email",
                                                                        placeholder: "Enter your email address"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                className: "form-inner mb-20",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("label", {
                                                                        children: [
                                                                            "Phone Number ",
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx("input", {
                                                                        type: "text",
                                                                        placeholder: "Enter your phone number"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                className: "form-inner mb-70",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("label", {
                                                                        children: [
                                                                            "Visa Type ",
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx(SelectComponent, {
                                                                        options: [
                                                                            "Tourist",
                                                                            "Business visa",
                                                                            "Student visa"
                                                                        ],
                                                                        placeholder: [
                                                                            "Select Visa"
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                className: "form-inner mb-70",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("label", {
                                                                        children: [
                                                                            "Country ",
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx(SelectComponent, {
                                                                        options: [
                                                                            "Australia",
                                                                            "Brazil",
                                                                            "Bangladesh"
                                                                        ],
                                                                        placeholder: [
                                                                            "Select Country"
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                className: "form-inner mb-30",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("label", {
                                                                        children: [
                                                                            "Write Your Massage ",
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx("textarea", {
                                                                        placeholder: "Write your quiry",
                                                                        defaultValue: ""
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                className: "form-inner",
                                                                children: /*#__PURE__*/ react_jsx_runtime.jsx("button", {
                                                                    type: "submit",
                                                                    className: "primary-btn1 two",
                                                                    children: "Submit Now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "banner2-card",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx("img", {
                                                src: "/assets/img/innerpage/support-img.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                className: "banner2-content-wrap",
                                                children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                    className: "banner2-content",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "hotline-area",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: 28,
                                                                    height: 28,
                                                                    viewBox: "0 0 28 28",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                                                                            d: "M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                                                                            d: "M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("path", {
                                                                            d: "M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                className: "content",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                        children: "To More Inquiry"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx("h6", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime.jsx("a", {
                                                                            href: "tel:+990737621432",
                                                                            children: "+990-737 621 432"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(Newsletter/* default */.Z, {}),
            /*#__PURE__*/ react_jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const visa_details_page = (page);


/***/ }),

/***/ 54010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25036);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40646);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40002);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Breadcrumb = ({ pagename, pagetitle })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "breadcrumb-section",
        style: {
            backgroundImage: "linear-gradient(270deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0.3) 101.02%), url(/assets/img/Ajwa/ajwa-beach.jpg)"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-12 d-flex justify-content-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "banner-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: pagename
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "breadcrumb-list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: pagetitle
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ 8537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25036);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40002);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Newsletter = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "banner3-section",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "banner3-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Join The Newsletter"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "To receive our best monthly deals"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "from-inner",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                placeholder: "Enter Your Gmail..."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "submit",
                                                className: "from-arrow",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: 18,
                                                    height: 17,
                                                    viewBox: "0 0 18 17",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M7 1L16 8.5M16 8.5L7 16M16 8.5H0.5",
                                                        strokeWidth: "1.5"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/img/home1/banner3-vector1.png",
                                    alt: "",
                                    className: "vector1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/img/home1/banner3-vector2.png",
                                    alt: "",
                                    className: "vector2"
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Newsletter);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [638,965,678], () => (__webpack_exec__(46569)));
module.exports = __webpack_exports__;

})();