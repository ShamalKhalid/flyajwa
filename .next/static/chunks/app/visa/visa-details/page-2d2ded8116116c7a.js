(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[380],{

/***/ 65439:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 25250, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 30005));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4009))

/***/ }),

/***/ 4009:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ uitils_SelectComponent; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(57437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./src/hooks/useCustomSelect.js

const useCustomSelect = function(initialOptions) {
    let isOpenByDefault = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
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
/* harmony default export */ var hooks_useCustomSelect = (useCustomSelect);

;// CONCATENATED MODULE: ./src/uitils/SelectComponent.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const SelectComponent = (param)=>{
    let { options, placeholder, open, customClass } = param;
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
    const dropdownClassName = "nice-select ".concat(customClass || "", " ").concat(isOpen ? "open" : "");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: dropdownClassName,
        tabIndex: "0",
        onClick: toggleDropdown,
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "current",
                children: selectedOption || placeholder
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: "list",
                children: options.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: "option".concat(selectedOption === option ? " selected focus" : ""),
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
/* harmony default export */ var uitils_SelectComponent = (SelectComponent);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [250,516,5,971,938,744], function() { return __webpack_exec__(65439); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);