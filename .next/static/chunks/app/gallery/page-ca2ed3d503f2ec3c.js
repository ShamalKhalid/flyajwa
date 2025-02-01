(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[928],{

/***/ 96148:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 27319))

/***/ }),

/***/ 27319:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57437);
/* harmony import */ var _components_common_Newsletter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68711);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53158);
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30005);
/* harmony import */ var _components_topbar_Topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45985);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2265);
/* harmony import */ var yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3763);
/* harmony import */ var yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58994);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Page = ()=>{
    const [isOpenimg, setOpenimg] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        openingState: false,
        openingIndex: 0
    });
    const images = [
        {
            id: 6,
            imageBig: "/assets/img/innerpage/gallery-06.jpg"
        },
        {
            id: 1,
            imageBig: "/assets/img/innerpage/gallery-01.jpg"
        },
        {
            id: 2,
            imageBig: "/assets/img/innerpage/gallery-02.jpg"
        },
        {
            id: 3,
            imageBig: "/assets/img/innerpage/gallery-03.jpg"
        },
        {
            id: 4,
            imageBig: "/assets/img/innerpage/gallery-04.jpg"
        },
        {
            id: 5,
            imageBig: "/assets/img/innerpage/gallery-05.jpg"
        },
        {
            id: 6,
            imageBig: "/assets/img/innerpage/gallery-06.jpg"
        },
        {
            id: 7,
            imageBig: "/assets/img/innerpage/gallery-07.jpg"
        },
        {
            id: 8,
            imageBig: "/assets/img/innerpage/gallery-08.jpg"
        },
        {
            id: 9,
            imageBig: "/assets/img/innerpage/gallery-09.jpg"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "destination-gallery pt-120 mb-120",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row g-4 mb-70",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "gallery-img-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                src: "/assets/img/innerpage/gallery-06.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                "data-fancybox": "gallery-01",
                                                onClick: ()=>setOpenimg({
                                                        openingState: true,
                                                        openingIndex: 0
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                        className: "bi bi-eye"
                                                    }),
                                                    " Discover Island"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-5 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "gallery-img-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                src: "/assets/img/innerpage/gallery-01.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                "data-fancybox": "gallery-01",
                                                onClick: ()=>setOpenimg({
                                                        openingState: true,
                                                        openingIndex: 1
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                        className: "bi bi-eye"
                                                    }),
                                                    " Discover Island"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-3 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "gallery-img-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                src: "/assets/img/innerpage/gallery-02.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                "data-fancybox": "gallery-01",
                                                onClick: ()=>setOpenimg({
                                                        openingState: true,
                                                        openingIndex: 2
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                        className: "bi bi-eye"
                                                    }),
                                                    " Discover Island"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-3 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "gallery-img-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                src: "/assets/img/innerpage/gallery-03.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                "data-fancybox": "gallery-01",
                                                onClick: ()=>setOpenimg({
                                                        openingState: true,
                                                        openingIndex: 3
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                        className: "bi bi-eye"
                                                    }),
                                                    " Discover Island"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "gallery-img-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                src: "/assets/img/innerpage/gallery-04.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                "data-fancybox": "gallery-01",
                                                onClick: ()=>setOpenimg({
                                                        openingState: true,
                                                        openingIndex: 4
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                        className: "bi bi-eye"
                                                    }),
                                                    " Discover Island"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-5 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "gallery-img-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                src: "/assets/img/innerpage/gallery-05.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                "data-fancybox": "gallery-01",
                                                onClick: ()=>setOpenimg({
                                                        openingState: true,
                                                        openingIndex: 5
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                        className: "bi bi-eye"
                                                    }),
                                                    " Discover Island"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "gallery-img-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                src: "/assets/img/innerpage/gallery-07.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                "data-fancybox": "gallery-01",
                                                onClick: ()=>setOpenimg({
                                                        openingState: true,
                                                        openingIndex: 6
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                        className: "bi bi-eye"
                                                    }),
                                                    " Discover Island"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-5 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "gallery-img-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                src: "/assets/img/innerpage/gallery-08.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                "data-fancybox": "gallery-01",
                                                onClick: ()=>setOpenimg({
                                                        openingState: true,
                                                        openingIndex: 7
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                        className: "bi bi-eye"
                                                    }),
                                                    " Discover Island"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-3 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "gallery-img-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                src: "/assets/img/innerpage/gallery-09.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                "data-fancybox": "gallery-01",
                                                onClick: ()=>setOpenimg({
                                                        openingState: true,
                                                        openingIndex: 8
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                        className: "bi bi-eye"
                                                    }),
                                                    " Discover Island"
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "col-lg-12 d-flex justify-content-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                    href: "#",
                                    className: "primary-btn1",
                                    children: "Load More"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_Newsletter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: "img-fluid",
                open: isOpenimg.openingState,
                plugins: [
                    yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
                ],
                index: isOpenimg.openingIndex,
                close: ()=>setOpenimg(false),
                styles: {
                    container: {
                        backgroundColor: "rgba(0, 0, 0, .9)"
                    }
                },
                slides: images.map(function(elem) {
                    return {
                        src: elem.imageBig
                    };
                })
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["default"] = (Page);


/***/ }),

/***/ 68711:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);


const Newsletter = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "banner3-section",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "banner3-content",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                    children: "Join The Newsletter"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    children: "To receive our best monthly deals"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "from-inner",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "email",
                                                placeholder: "Enter Your Gmail..."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                type: "submit",
                                                className: "from-arrow",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: 18,
                                                    height: 17,
                                                    viewBox: "0 0 18 17",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                        d: "M7 1L16 8.5M16 8.5L7 16M16 8.5H0.5",
                                                        strokeWidth: "1.5"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                    src: "/assets/img/home1/banner3-vector1.png",
                                    alt: "",
                                    className: "vector1"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
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
/* harmony default export */ __webpack_exports__.Z = (Newsletter);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [250,516,483,5,599,971,938,744], function() { return __webpack_exec__(96148); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);