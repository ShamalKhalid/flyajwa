(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[408],{

/***/ 26465:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43753))

/***/ }),

/***/ 43753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ style3_page; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
// EXTERNAL MODULE: ./src/components/common/Breadcrumb.js
var Breadcrumb = __webpack_require__(34072);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(61396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/destination/DropdownCard.jsx



const DropdownCard = (param)=>{
    let { img, title, tourCount } = param;
    const [isActive, setIsActive] = (0,react.useState)(false);
    const dropdownRef = (0,react.useRef)(null);
    const handleClick = ()=>{
        setIsActive(!isActive);
    };
    const handleClickOutside = (event)=>{
        // Check if the clicked element is not the button that toggles the dropdown
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isActive) {
            setIsActive(false);
        }
    };
    (0,react.useEffect)(()=>{
        // Attach the click outside event listener
        document.addEventListener("mousedown", handleClickOutside);
        // Remove the event listener when the component unmounts
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        isActive
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "destination-dropdown-card",
            ref: dropdownRef,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "destination-dropdown-card-img",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: img,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "eg-batch",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            tourCount,
                            " Tour"
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "destination-dropdown-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "title",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                    href: "/destination/destination-details",
                                    children: title
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: "/destination/destination-details",
                            className: "details-btn",
                            children: "View Details"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "destination-dropdown-icon ",
                    onClick: handleClick,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 16,
                        height: 8,
                        viewBox: "0 0 16 8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M0.1104 2.08367e-06L0 1.39876e-06L8 8L16 0L15.8896 1.44772e-08L12.5714 9.94292e-07L8 4.57143L3.42857 1.09903e-06L0.1104 2.08367e-06Z"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "".concat(isActive ? "active" : "", " destination-wrap"),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                        className: "destination-list",
                        children: [
                            "Jakarta",
                            "Bali",
                            "Yogyakarta",
                            "Bali",
                            "Yogyakarta",
                            "Bandung",
                            "Makassar",
                            "Semarang",
                            "Lombok"
                        ].map((destination, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: 9,
                                        height: 13,
                                        viewBox: "0 0 9 13",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: "/destination/destination-details",
                                        children: destination
                                    })
                                ]
                            }, index))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ var destination_DropdownCard = (DropdownCard);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(16691);
;// CONCATENATED MODULE: ./src/app/destination/style3/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





const page = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Breadcrumb/* default */.Z, {
                pagename: "Destination",
                pagetitle: "Destination"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "destination-section pt-120 mb-120",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row g-lg-4 gy-5 mb-70",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-6 destination-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(destination_DropdownCard, {
                                        img: "/assets/img/home3/destination-dropdown-card-img1.png",
                                        title: "Indonesia",
                                        tourCount: "10"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-6 destination-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(destination_DropdownCard, {
                                        img: "/assets/img/home3/destination-dropdown-card-img2.png",
                                        title: "Egypt",
                                        tourCount: "10"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-6 destination-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(destination_DropdownCard, {
                                        img: "/assets/img/home3/destination-dropdown-card-img3.png",
                                        title: "Switzerland",
                                        tourCount: "10"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-6 destination-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(destination_DropdownCard, {
                                        img: "/assets/img/home3/destination-dropdown-card-img4.png",
                                        title: "Bangladesh",
                                        tourCount: "10"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-6 destination-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(destination_DropdownCard, {
                                        img: "/assets/img/home3/destination-dropdown-card-img5.png",
                                        title: "Saudi Arab",
                                        tourCount: "10"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-6 destination-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(destination_DropdownCard, {
                                        img: "/assets/img/home3/destination-dropdown-card-img6.png",
                                        title: "India",
                                        tourCount: "10"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-6 destination-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(destination_DropdownCard, {
                                        img: "/assets/img/innerpage/destination3-img1.jpg",
                                        title: "Nepal",
                                        tourCount: "10"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-6 destination-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(destination_DropdownCard, {
                                        img: "/assets/img/innerpage/destination3-img2.jpg",
                                        title: "Japan",
                                        tourCount: "10"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-6 destination-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(destination_DropdownCard, {
                                        img: "/assets/img/innerpage/destination3-img3.jpg",
                                        title: "Spain",
                                        tourCount: "10"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-6 destination-column",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(destination_DropdownCard, {
                                        img: "/assets/img/innerpage/destination3-img4.jpg",
                                        title: "France",
                                        tourCount: "10"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                                    className: "inner-pagination-area",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: "pagination-list",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "#",
                                                    className: "shop-pagi-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("i", {
                                                        className: "bi bi-chevron-left"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "#",
                                                    children: "1"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "#",
                                                    className: "active",
                                                    children: "2"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "#",
                                                    children: "3"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("i", {
                                                        className: "bi bi-three-dots"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "#",
                                                    children: "6"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "#",
                                                    className: "shop-pagi-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("i", {
                                                        className: "bi bi-chevron-right"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ var style3_page = (page);


/***/ }),

/***/ 34072:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57437);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61396);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2265);



const Breadcrumb = (param)=>{
    let { pagename, pagetitle } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "breadcrumb-section",
        style: {
            backgroundImage: "linear-gradient(270deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0.3) 101.02%), url(/assets/img/Ajwa/ajwa-beach.jpg)"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "col-lg-12 d-flex justify-content-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "banner-content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                children: pagename
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "breadcrumb-list",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
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
/* harmony default export */ __webpack_exports__.Z = (Breadcrumb);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [250,165,971,938,744], function() { return __webpack_exec__(26465); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);