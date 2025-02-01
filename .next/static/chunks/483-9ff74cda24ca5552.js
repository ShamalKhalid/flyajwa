"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[483],{

/***/ 17281:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ IconButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75405);
/* harmony import */ var _modules_Controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91141);
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77881);




const IconButton = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({ label, className, icon: Icon, renderIcon, onClick, style, ...rest }, ref) => {
    const { styles } = (0,_modules_Controller_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)().getLightboxProps();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { ref: ref, type: "button", "aria-label": label, className: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .clsx */ .Wy)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .cssClass */ .Nc)(_consts_js__WEBPACK_IMPORTED_MODULE_3__/* .ELEMENT_BUTTON */ .bg), className), onClick: onClick, style: { ...style, ...styles.button }, ...rest }, renderIcon ? renderIcon() : react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, { className: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .cssClass */ .Nc)(_consts_js__WEBPACK_IMPORTED_MODULE_3__/* .ELEMENT_ICON */ .vg), style: styles.icon })));
});
IconButton.displayName = "IconButton";


/***/ }),

/***/ 59312:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ho: function() { return /* binding */ LoadingIcon; },
/* harmony export */   IU: function() { return /* binding */ createIcon; },
/* harmony export */   Ne: function() { return /* binding */ NextIcon; },
/* harmony export */   Pz: function() { return /* binding */ ErrorIcon; },
/* harmony export */   Tw: function() { return /* binding */ CloseIcon; },
/* harmony export */   jJ: function() { return /* binding */ PreviousIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function createIcon(name, glyph) {
    const icon = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...props },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "currentColor" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
            glyph)));
    icon.displayName = name;
    return icon;
}
const CloseIcon = createIcon("Close", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
const PreviousIcon = createIcon("Previous", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }));
const NextIcon = createIcon("Next", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }));
const LoadingIcon = createIcon("Loading", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Array.from({ length: 8 }).map((_, index, array) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { key: index, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: (1 / array.length) * (index + 1), transform: `rotate(${(360 / array.length) * index}, 12, 12)` })))));
const ErrorIcon = createIcon("Error", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" }));


/***/ }),

/***/ 60595:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AB: function() { return /* binding */ withPlugins; },
/* harmony export */   dS: function() { return /* binding */ createNode; },
/* harmony export */   l6: function() { return /* binding */ createModule; }
/* harmony export */ });
const createModule = (name, component) => ({
    name,
    component,
});
const createNode = (module, children) => ({
    module,
    children,
});
const traverseNode = (node, target, apply) => {
    if (node.module.name === target) {
        return apply(node);
    }
    if (node.children) {
        return [
            createNode(node.module, node.children.flatMap((n) => { var _a; return (_a = traverseNode(n, target, apply)) !== null && _a !== void 0 ? _a : []; })),
        ];
    }
    return [node];
};
const traverse = (nodes, target, apply) => nodes.flatMap((node) => { var _a; return (_a = traverseNode(node, target, apply)) !== null && _a !== void 0 ? _a : []; });
const withPlugins = (root, plugins = [], augmentations = []) => {
    let config = root;
    const contains = (target) => {
        const nodes = [...config];
        while (nodes.length > 0) {
            const node = nodes.pop();
            if ((node === null || node === void 0 ? void 0 : node.module.name) === target)
                return true;
            if (node === null || node === void 0 ? void 0 : node.children)
                nodes.push(...node.children);
        }
        return false;
    };
    const addParent = (target, module) => {
        if (target === "") {
            config = [createNode(module, config)];
            return;
        }
        config = traverse(config, target, (node) => [createNode(module, [node])]);
    };
    const append = (target, module) => {
        config = traverse(config, target, (node) => [createNode(node.module, [createNode(module, node.children)])]);
    };
    const addChild = (target, module, precede) => {
        config = traverse(config, target, (node) => {
            var _a;
            return [
                createNode(node.module, [
                    ...(precede ? [createNode(module)] : []),
                    ...((_a = node.children) !== null && _a !== void 0 ? _a : []),
                    ...(!precede ? [createNode(module)] : []),
                ]),
            ];
        });
    };
    const addSibling = (target, module, precede) => {
        config = traverse(config, target, (node) => [
            ...(precede ? [createNode(module)] : []),
            node,
            ...(!precede ? [createNode(module)] : []),
        ]);
    };
    const replace = (target, module) => {
        config = traverse(config, target, (node) => [createNode(module, node.children)]);
    };
    const remove = (target) => {
        config = traverse(config, target, (node) => node.children);
    };
    const augment = (augmentation) => {
        augmentations.push(augmentation);
    };
    plugins.forEach((plugin) => {
        plugin({
            contains,
            addParent,
            append,
            addChild,
            addSibling,
            replace,
            remove,
            augment,
        });
    });
    return {
        config,
        augmentation: (props) => augmentations.reduce((acc, augmentation) => augmentation(acc), props),
    };
};


/***/ }),

/***/ 77881:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $L: function() { return /* binding */ SLIDE_STATUS_PLACEHOLDER; },
/* harmony export */   Bm: function() { return /* binding */ EVENT_ON_KEY_UP; },
/* harmony export */   Eb: function() { return /* binding */ ACTION_NEXT; },
/* harmony export */   HE: function() { return /* binding */ MODULE_NO_SCROLL; },
/* harmony export */   J1: function() { return /* binding */ activeSlideStatus; },
/* harmony export */   KN: function() { return /* binding */ ACTION_PREV; },
/* harmony export */   M9: function() { return /* binding */ CLASS_NO_SCROLL_PADDING; },
/* harmony export */   N4: function() { return /* binding */ EVENT_ON_POINTER_MOVE; },
/* harmony export */   NH: function() { return /* binding */ VK_ARROW_RIGHT; },
/* harmony export */   NZ: function() { return /* binding */ EVENT_ON_POINTER_DOWN; },
/* harmony export */   Op: function() { return /* binding */ MODULE_NAVIGATION; },
/* harmony export */   PU: function() { return /* binding */ VK_ESCAPE; },
/* harmony export */   S2: function() { return /* binding */ EVENT_ON_POINTER_UP; },
/* harmony export */   SA: function() { return /* binding */ MODULE_PORTAL; },
/* harmony export */   Sl: function() { return /* binding */ VK_ARROW_LEFT; },
/* harmony export */   Tf: function() { return /* binding */ CLASS_NO_SCROLL; },
/* harmony export */   Tn: function() { return /* binding */ ACTION_SWIPE; },
/* harmony export */   Vt: function() { return /* binding */ EVENT_ON_POINTER_CANCEL; },
/* harmony export */   Xe: function() { return /* binding */ SLIDE_STATUS_LOADING; },
/* harmony export */   Zv: function() { return /* binding */ SLIDE_STATUS_COMPLETE; },
/* harmony export */   aN: function() { return /* binding */ CLASS_FLEX_CENTER; },
/* harmony export */   bg: function() { return /* binding */ ELEMENT_BUTTON; },
/* harmony export */   cq: function() { return /* binding */ YARL_EVENT_TOOLBAR_WIDTH; },
/* harmony export */   dA: function() { return /* binding */ PLUGIN_THUMBNAILS; },
/* harmony export */   ds: function() { return /* binding */ EVENT_ON_KEY_DOWN; },
/* harmony export */   fS: function() { return /* binding */ SLIDE_STATUS_ERROR; },
/* harmony export */   hb: function() { return /* binding */ MODULE_TOOLBAR; },
/* harmony export */   i4: function() { return /* binding */ MODULE_CORE; },
/* harmony export */   j3: function() { return /* binding */ IMAGE_FIT_CONTAIN; },
/* harmony export */   k0: function() { return /* binding */ MODULE_CAROUSEL; },
/* harmony export */   l4: function() { return /* binding */ MODULE_CONTROLLER; },
/* harmony export */   n2: function() { return /* binding */ YARL_EVENT_BACKDROP_CLICK; },
/* harmony export */   pE: function() { return /* binding */ EVENT_ON_POINTER_LEAVE; },
/* harmony export */   rO: function() { return /* binding */ IMAGE_FIT_COVER; },
/* harmony export */   t9: function() { return /* binding */ ACTION_CLOSE; },
/* harmony export */   vg: function() { return /* binding */ ELEMENT_ICON; },
/* harmony export */   yS: function() { return /* binding */ CLASS_FULLSIZE; },
/* harmony export */   yq: function() { return /* binding */ EVENT_ON_WHEEL; },
/* harmony export */   zr: function() { return /* binding */ PLUGIN_FULLSCREEN; }
/* harmony export */ });
/* unused harmony exports PLUGIN_CAPTIONS, PLUGIN_INLINE, PLUGIN_SLIDESHOW, PLUGIN_ZOOM, SLIDE_STATUS_PLAYING, ACTIVE_SLIDE_LOADING, ACTIVE_SLIDE_PLAYING, ACTIVE_SLIDE_ERROR, ACTIVE_SLIDE_COMPLETE */
const MODULE_CAROUSEL = "carousel";
const MODULE_CONTROLLER = "controller";
const MODULE_CORE = "core";
const MODULE_NAVIGATION = "navigation";
const MODULE_NO_SCROLL = "no-scroll";
const MODULE_PORTAL = "portal";
const MODULE_TOOLBAR = "toolbar";
const PLUGIN_CAPTIONS = "captions";
const PLUGIN_FULLSCREEN = "fullscreen";
const PLUGIN_INLINE = "inline";
const PLUGIN_SLIDESHOW = "slideshow";
const PLUGIN_THUMBNAILS = "thumbnails";
const PLUGIN_ZOOM = "zoom";
const SLIDE_STATUS_LOADING = "loading";
const SLIDE_STATUS_PLAYING = "playing";
const SLIDE_STATUS_ERROR = "error";
const SLIDE_STATUS_COMPLETE = "complete";
const SLIDE_STATUS_PLACEHOLDER = "placeholder";
const activeSlideStatus = (status) => `active-slide-${status}`;
const ACTIVE_SLIDE_LOADING = activeSlideStatus(SLIDE_STATUS_LOADING);
const ACTIVE_SLIDE_PLAYING = activeSlideStatus(SLIDE_STATUS_PLAYING);
const ACTIVE_SLIDE_ERROR = activeSlideStatus(SLIDE_STATUS_ERROR);
const ACTIVE_SLIDE_COMPLETE = activeSlideStatus(SLIDE_STATUS_COMPLETE);
const YARL_EVENT_BACKDROP_CLICK = "backdrop_click";
const YARL_EVENT_TOOLBAR_WIDTH = "toolbar-width";
const CLASS_FULLSIZE = "fullsize";
const CLASS_FLEX_CENTER = "flex_center";
const CLASS_NO_SCROLL = "no_scroll";
const CLASS_NO_SCROLL_PADDING = "no_scroll_padding";
const ACTION_PREV = "prev";
const ACTION_NEXT = "next";
const ACTION_SWIPE = "swipe";
const ACTION_CLOSE = "close";
const EVENT_ON_POINTER_DOWN = "onPointerDown";
const EVENT_ON_POINTER_MOVE = "onPointerMove";
const EVENT_ON_POINTER_UP = "onPointerUp";
const EVENT_ON_POINTER_LEAVE = "onPointerLeave";
const EVENT_ON_POINTER_CANCEL = "onPointerCancel";
const EVENT_ON_KEY_DOWN = "onKeyDown";
const EVENT_ON_KEY_UP = "onKeyUp";
const EVENT_ON_WHEEL = "onWheel";
const VK_ESCAPE = "Escape";
const VK_ARROW_LEFT = "ArrowLeft";
const VK_ARROW_RIGHT = "ArrowRight";
const ELEMENT_BUTTON = "button";
const ELEMENT_ICON = "icon";
const IMAGE_FIT_CONTAIN = "contain";
const IMAGE_FIT_COVER = "cover";


/***/ }),

/***/ 43715:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* binding */ EventsProvider; },
/* harmony export */   h: function() { return /* binding */ useEvents; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75405);


const EventsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useEvents = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useEvents", "EventsContext", EventsContext);
function EventsProvider({ children }) {
    const [subscriptions] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        Object.keys(subscriptions).forEach((key) => delete subscriptions[key]);
    }, [subscriptions]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const unsubscribe = (topic, callback) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.splice(0, subscriptions[topic].length, ...subscriptions[topic].filter((cb) => cb !== callback));
        };
        const subscribe = (topic, callback) => {
            if (!subscriptions[topic]) {
                subscriptions[topic] = [];
            }
            subscriptions[topic].push(callback);
            return () => unsubscribe(topic, callback);
        };
        const publish = (topic, event) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback(event));
        };
        return { publish, subscribe, unsubscribe };
    }, [subscriptions]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(EventsContext.Provider, { value: context }, children);
}


/***/ }),

/***/ 24414:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: function() { return /* binding */ useLightboxState; },
/* harmony export */   q: function() { return /* binding */ LightboxStateProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75405);


const LightboxStateContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxState = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useLightboxState", "LightboxStateContext", LightboxStateContext);
const reducer = (slidesCount) => (state, action) => {
    const increment = (action === null || action === void 0 ? void 0 : action.increment) || 0;
    const globalIndex = state.globalIndex + increment;
    const currentIndex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .getSlideIndex */ .Wf)(globalIndex, slidesCount);
    const animationDuration = (action === null || action === void 0 ? void 0 : action.duration) || 0;
    return {
        globalIndex,
        currentIndex,
        animation: action,
        animationDuration,
    };
};
function LightboxStateProvider({ initialIndex, slidesCount, children }) {
    const memoizedReducer = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => reducer(slidesCount), [slidesCount]);
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(memoizedReducer, {
        currentIndex: initialIndex,
        globalIndex: initialIndex,
        animationDuration: 0,
    });
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ state, dispatch }), [state, dispatch]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxStateContext.Provider, { value: context }, children);
}


/***/ }),

/***/ 16270:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ useTimeouts; },
/* harmony export */   q: function() { return /* binding */ TimeoutsProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75405);


const TimeoutsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useTimeouts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useTimeouts", "TimeoutsContext", TimeoutsContext);
function TimeoutsProvider({ children }) {
    const [timeouts] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        timeouts.forEach((tid) => window.clearTimeout(tid));
        timeouts.splice(0, timeouts.length);
    }, [timeouts]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const removeTimeout = (id) => {
            timeouts.splice(0, timeouts.length, ...timeouts.filter((tid) => tid !== id));
        };
        const setTimeout = (fn, delay) => {
            const id = window.setTimeout(() => {
                removeTimeout(id);
                fn();
            }, delay);
            timeouts.push(id);
            return id;
        };
        const clearTimeout = (id) => {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .isDefined */ .$K)(id)) {
                removeTimeout(id);
                window.clearTimeout(id);
            }
        };
        return { setTimeout, clearTimeout };
    }, [timeouts]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TimeoutsContext.Provider, { value: context }, children);
}


/***/ }),

/***/ 99270:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ useContainerRect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function useContainerRect() {
    const [containerRect, setContainerRect] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const observerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const setContainerRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        containerRef.current = node;
        if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = undefined;
        }
        const updateContainerRect = () => {
            if (node) {
                const styles = window.getComputedStyle(node);
                const parse = (value) => parseFloat(value) || 0;
                setContainerRect({
                    width: Math.round(node.clientWidth - parse(styles.paddingLeft) - parse(styles.paddingRight)),
                    height: Math.round(node.clientHeight - parse(styles.paddingTop) - parse(styles.paddingBottom)),
                });
            }
            else {
                setContainerRect(undefined);
            }
        };
        updateContainerRect();
        if (node && typeof ResizeObserver !== "undefined") {
            observerRef.current = new ResizeObserver(updateContainerRect);
            observerRef.current.observe(node);
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        setContainerRef,
        containerRef,
        containerRect,
    }), [setContainerRef, containerRef, containerRect]);
}


/***/ }),

/***/ 52076:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ useDelay; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _contexts_Timeouts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16270);


function useDelay() {
    const timeoutId = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const { setTimeout, clearTimeout } = (0,_contexts_Timeouts_js__WEBPACK_IMPORTED_MODULE_1__/* .useTimeouts */ .a)();
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((callback, delay) => {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(callback, delay > 0 ? delay : 0);
    }, [setTimeout, clearTimeout]);
}


/***/ }),

/***/ 91698:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ useEventCallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _useLayoutEffect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75352);


function useEventCallback(fn) {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
    (0,_useLayoutEffect_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .b)(() => {
        ref.current = fn;
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args); }, []);
}


/***/ }),

/***/ 75352:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ useLayoutEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75405);


const useLayoutEffect = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .hasWindow */ .Ym)() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


/***/ }),

/***/ 66471:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ useMotionPreference; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function useMotionPreference() {
    const [reduceMotion, setReduceMotion] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a, _b;
        const mediaQuery = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)");
        setReduceMotion(mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.matches);
        const listener = (event) => setReduceMotion(event.matches);
        (_b = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.addEventListener) === null || _b === void 0 ? void 0 : _b.call(mediaQuery, "change", listener);
        return () => { var _a; return (_a = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(mediaQuery, "change", listener); };
    }, []);
    return reduceMotion;
}


/***/ }),

/***/ 7188:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ useRTL; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _useLayoutEffect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75352);


function useRTL() {
    const [isRTL, setIsRTL] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    (0,_useLayoutEffect_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .b)(() => {
        setIsRTL(window.getComputedStyle(window.document.documentElement).direction === "rtl");
    }, []);
    return isRTL;
}


/***/ }),

/***/ 91141:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  un: function() { return /* binding */ ControllerModule; },
  bc: function() { return /* binding */ useController; }
});

// UNUSED EXPORTS: Controller

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/config.js
var config = __webpack_require__(60595);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/utils.js
var utils = __webpack_require__(75405);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/consts.js
var consts = __webpack_require__(77881);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useSensors.js


function useSensors() {
    const [subscribers] = react.useState({});
    return react.useMemo(() => {
        const notifySubscribers = (type, event) => {
            var _a;
            (_a = subscribers[type]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => {
                if (!event.isPropagationStopped())
                    listener(event);
            });
        };
        return {
            registerSensors: {
                onPointerDown: (event) => notifySubscribers(consts/* EVENT_ON_POINTER_DOWN */.NZ, event),
                onPointerMove: (event) => notifySubscribers(consts/* EVENT_ON_POINTER_MOVE */.N4, event),
                onPointerUp: (event) => notifySubscribers(consts/* EVENT_ON_POINTER_UP */.S2, event),
                onPointerLeave: (event) => notifySubscribers(consts/* EVENT_ON_POINTER_LEAVE */.pE, event),
                onPointerCancel: (event) => notifySubscribers(consts/* EVENT_ON_POINTER_CANCEL */.Vt, event),
                onKeyDown: (event) => notifySubscribers(consts/* EVENT_ON_KEY_DOWN */.ds, event),
                onKeyUp: (event) => notifySubscribers(consts/* EVENT_ON_KEY_UP */.Bm, event),
                onWheel: (event) => notifySubscribers(consts/* EVENT_ON_WHEEL */.yq, event),
            },
            subscribeSensors: (type, callback) => {
                if (!subscribers[type]) {
                    subscribers[type] = [];
                }
                subscribers[type].unshift(callback);
                return () => {
                    const listeners = subscribers[type];
                    if (listeners) {
                        listeners.splice(0, listeners.length, ...listeners.filter((el) => el !== callback));
                    }
                };
            },
        };
    }, [subscribers]);
}

// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useDelay.js
var useDelay = __webpack_require__(52076);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useContainerRect.js
var useContainerRect = __webpack_require__(99270);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useForkRef.js

function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
}
function useForkRef(refA, refB) {
    return react.useMemo(() => refA == null && refB == null
        ? null
        : (refValue) => {
            setRef(refA, refValue);
            setRef(refB, refValue);
        }, [refA, refB]);
}

// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useRTL.js
var useRTL = __webpack_require__(7188);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(75352);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useMotionPreference.js
var useMotionPreference = __webpack_require__(66471);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useAnimation.js



function currentTransformation(node) {
    let x = 0;
    let y = 0;
    let z = 0;
    const matrix = window.getComputedStyle(node).transform;
    const matcher = matrix.match(/matrix.*\((.+)\)/);
    if (matcher) {
        const values = matcher[1].split(",").map((str) => Number.parseInt(str, 10));
        if (values.length === 6) {
            x = values[4];
            y = values[5];
        }
        else if (values.length === 16) {
            x = values[12];
            y = values[13];
            z = values[14];
        }
    }
    return { x, y, z };
}
function useAnimation(nodeRef, computeAnimation) {
    const snapshot = react.useRef();
    const animation = react.useRef();
    const reduceMotion = (0,useMotionPreference/* useMotionPreference */.O)();
    (0,useLayoutEffect/* useLayoutEffect */.b)(() => {
        var _a, _b, _c;
        if (nodeRef.current && snapshot.current !== undefined && !reduceMotion) {
            const { keyframes, duration, easing, onfinish } = computeAnimation(snapshot.current, nodeRef.current.getBoundingClientRect(), currentTransformation(nodeRef.current)) || {};
            if (keyframes && duration) {
                (_a = animation.current) === null || _a === void 0 ? void 0 : _a.cancel();
                animation.current = (_c = (_b = nodeRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, keyframes, { duration, easing });
                if (animation.current) {
                    animation.current.onfinish = () => {
                        animation.current = undefined;
                        onfinish === null || onfinish === void 0 ? void 0 : onfinish();
                    };
                }
            }
        }
        snapshot.current = undefined;
    });
    return (currentSnapshot) => {
        snapshot.current = currentSnapshot;
    };
}

// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useEventCallback.js
var useEventCallback = __webpack_require__(91698);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/contexts/LightboxState.js
var LightboxState = __webpack_require__(24414);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/contexts/Events.js
var Events = __webpack_require__(43715);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/controller/index.js
var SwipeState;
(function (SwipeState) {
    SwipeState[SwipeState["NONE"] = 0] = "NONE";
    SwipeState[SwipeState["SWIPE"] = 1] = "SWIPE";
    SwipeState[SwipeState["ANIMATION"] = 2] = "ANIMATION";
})(SwipeState || (SwipeState = {}));




;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/controller/usePreventSwipeNavigation.js

const WHEEL = "wheel";
function preventDefault(event) {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.ctrlKey) {
        event.preventDefault();
    }
}
function usePreventSwipeNavigation() {
    const ref = react.useRef(null);
    return react.useCallback((node) => {
        var _a;
        if (node) {
            node.addEventListener(WHEEL, preventDefault, { passive: false });
        }
        else {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(WHEEL, preventDefault);
        }
        ref.current = node;
    }, []);
}

;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/controller/usePointerSwipe.js




function usePointerSwipe(subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel) {
    const offset = react.useRef(0);
    const pointers = react.useRef([]);
    const activePointer = react.useRef();
    const startTime = react.useRef(0);
    const clearPointer = react.useCallback((event) => {
        if (activePointer.current === event.pointerId) {
            activePointer.current = undefined;
        }
        const currentPointers = pointers.current;
        currentPointers.splice(0, currentPointers.length, ...currentPointers.filter((p) => p.pointerId !== event.pointerId));
    }, []);
    const addPointer = react.useCallback((event) => {
        clearPointer(event);
        event.persist();
        pointers.current.push(event);
    }, [clearPointer]);
    const onPointerDown = (0,useEventCallback/* useEventCallback */.$)((event) => {
        addPointer(event);
    });
    const onPointerUp = (0,useEventCallback/* useEventCallback */.$)((event) => {
        if (pointers.current.find((x) => x.pointerId === event.pointerId) &&
            activePointer.current === event.pointerId) {
            const duration = Date.now() - startTime.current;
            const currentOffset = offset.current;
            if (Math.abs(currentOffset) > 0.3 * containerWidth ||
                (Math.abs(currentOffset) > 5 && duration < swipeAnimationDuration)) {
                onSwipeFinish(currentOffset, duration);
            }
            else {
                onSwipeCancel(currentOffset);
            }
            offset.current = 0;
        }
        clearPointer(event);
    });
    const onPointerMove = (0,useEventCallback/* useEventCallback */.$)((event) => {
        const pointer = pointers.current.find((p) => p.pointerId === event.pointerId);
        if (pointer) {
            const isCurrentPointer = activePointer.current === event.pointerId;
            if (event.buttons === 0) {
                if (isCurrentPointer && offset.current !== 0) {
                    onPointerUp(event);
                }
                else {
                    clearPointer(pointer);
                }
                return;
            }
            const deltaX = event.clientX - pointer.clientX;
            const deltaY = event.clientY - pointer.clientY;
            if (activePointer.current === undefined &&
                isSwipeValid(deltaX) &&
                Math.abs(deltaX) > Math.abs(deltaY) &&
                Math.abs(deltaX) > 30) {
                addPointer(event);
                activePointer.current = event.pointerId;
                startTime.current = Date.now();
                onSwipeStart();
            }
            else if (isCurrentPointer) {
                offset.current = deltaX;
                onSwipeProgress(deltaX);
            }
        }
    });
    react.useEffect(() => (0,utils/* cleanup */.Eq)(subscribeSensors(consts/* EVENT_ON_POINTER_DOWN */.NZ, onPointerDown), subscribeSensors(consts/* EVENT_ON_POINTER_MOVE */.N4, onPointerMove), subscribeSensors(consts/* EVENT_ON_POINTER_UP */.S2, onPointerUp), subscribeSensors(consts/* EVENT_ON_POINTER_LEAVE */.pE, onPointerUp), subscribeSensors(consts/* EVENT_ON_POINTER_CANCEL */.Vt, onPointerUp)), [subscribeSensors, onPointerDown, onPointerMove, onPointerUp]);
}

// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/contexts/Timeouts.js
var Timeouts = __webpack_require__(16270);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/controller/useWheelSwipe.js





function useWheelSwipe(swipeState, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel) {
    const offset = react.useRef(0);
    const intent = react.useRef(0);
    const intentCleanup = react.useRef();
    const resetCleanup = react.useRef();
    const wheelResidualMomentum = react.useRef(0);
    const startTime = react.useRef(0);
    const { setTimeout, clearTimeout } = (0,Timeouts/* useTimeouts */.a)();
    const cancelSwipeIntentCleanup = react.useCallback(() => {
        if (intentCleanup.current) {
            clearTimeout(intentCleanup.current);
            intentCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const cancelSwipeResetCleanup = react.useCallback(() => {
        if (resetCleanup.current) {
            clearTimeout(resetCleanup.current);
            resetCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const handleCleanup = (0,useEventCallback/* useEventCallback */.$)(() => {
        if (swipeState !== SwipeState.SWIPE) {
            offset.current = 0;
            startTime.current = 0;
            cancelSwipeIntentCleanup();
            cancelSwipeResetCleanup();
        }
    });
    react.useEffect(handleCleanup, [swipeState, handleCleanup]);
    const handleCancelSwipe = (0,useEventCallback/* useEventCallback */.$)((currentSwipeOffset) => {
        resetCleanup.current = undefined;
        if (offset.current === currentSwipeOffset) {
            onSwipeCancel(offset.current);
        }
    });
    const onWheel = (0,useEventCallback/* useEventCallback */.$)((event) => {
        if (event.ctrlKey) {
            return;
        }
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            return;
        }
        if (!swipeState) {
            if (Math.abs(event.deltaX) <= 1.2 * Math.abs(wheelResidualMomentum.current)) {
                wheelResidualMomentum.current = event.deltaX;
                return;
            }
            if (!isSwipeValid(-event.deltaX)) {
                return;
            }
            intent.current += event.deltaX;
            cancelSwipeIntentCleanup();
            if (Math.abs(intent.current) > 30) {
                intent.current = 0;
                wheelResidualMomentum.current = 0;
                startTime.current = Date.now();
                onSwipeStart();
            }
            else {
                const currentSwipeIntent = intent.current;
                intentCleanup.current = setTimeout(() => {
                    intentCleanup.current = undefined;
                    if (currentSwipeIntent === intent.current) {
                        intent.current = 0;
                    }
                }, swipeAnimationDuration);
            }
        }
        else if (swipeState === SwipeState.SWIPE) {
            let newSwipeOffset = offset.current - event.deltaX;
            newSwipeOffset = Math.min(Math.abs(newSwipeOffset), containerWidth) * Math.sign(newSwipeOffset);
            offset.current = newSwipeOffset;
            onSwipeProgress(newSwipeOffset);
            cancelSwipeResetCleanup();
            if (Math.abs(newSwipeOffset) > 0.2 * containerWidth) {
                wheelResidualMomentum.current = event.deltaX;
                onSwipeFinish(newSwipeOffset, Date.now() - startTime.current);
                return;
            }
            resetCleanup.current = setTimeout(() => handleCancelSwipe(newSwipeOffset), 2 * swipeAnimationDuration);
        }
        else {
            wheelResidualMomentum.current = event.deltaX;
        }
    });
    react.useEffect(() => subscribeSensors(consts/* EVENT_ON_WHEEL */.yq, onWheel), [subscribeSensors, onWheel]);
}

;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/Controller.js







const cssContainerPrefix = (0,utils/* makeComposePrefix */.cO)("container");
const ControllerContext = react.createContext(null);
const useController = (0,utils/* makeUseContext */.Fy)("useController", "ControllerContext", ControllerContext);
function Controller({ children, ...props }) {
    const { carousel, slides, animation, controller, on, styles } = props;
    const { state, dispatch } = (0,LightboxState/* useLightboxState */.o)();
    const [swipeState, setSwipeState] = react.useState(SwipeState.NONE);
    const swipeOffset = react.useRef(0);
    const { registerSensors, subscribeSensors } = useSensors();
    const { subscribe, publish } = (0,Events/* useEvents */.h)();
    const cleanupAnimationIncrement = (0,useDelay/* useDelay */.g)();
    const cleanupSwipeOffset = (0,useDelay/* useDelay */.g)();
    const { containerRef, setContainerRef, containerRect } = (0,useContainerRect/* useContainerRect */.u)();
    const handleContainerRef = useForkRef(usePreventSwipeNavigation(), setContainerRef);
    const carouselRef = react.useRef(null);
    const setCarouselRef = useForkRef(carouselRef, undefined);
    const isRTL = (0,useRTL/* useRTL */.S)();
    const rtl = (value) => (isRTL ? -1 : 1) * ((0,utils/* isNumber */.hj)(value) ? value : 1);
    const isSwipeValid = (offset) => !(carousel.finite &&
        ((rtl(offset) > 0 && state.currentIndex === 0) ||
            (rtl(offset) < 0 && state.currentIndex === slides.length - 1)));
    const setSwipeOffset = (offset) => {
        var _a;
        swipeOffset.current = offset;
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty((0,utils/* cssVar */.gJ)("swipe_offset"), `${Math.round(offset)}px`);
    };
    const animate = useAnimation(carouselRef, (snapshot, rect, translate) => {
        var _a;
        if (carouselRef.current && containerRect && ((_a = state.animation) === null || _a === void 0 ? void 0 : _a.duration)) {
            const parsedSpacing = (0,utils/* parseLengthPercentage */.Ay)(carousel.spacing);
            const spacingValue = (parsedSpacing.percent ? (parsedSpacing.percent * containerRect.width) / 100 : parsedSpacing.pixel) ||
                0;
            return {
                keyframes: [
                    {
                        transform: `translateX(${rtl(state.globalIndex - snapshot.index) * (containerRect.width + spacingValue) +
                            snapshot.rect.x -
                            rect.x +
                            translate.x}px)`,
                    },
                    { transform: "translateX(0)" },
                ],
                duration: state.animation.duration,
                easing: state.animation.easing,
            };
        }
        return undefined;
    });
    const swipe = (0,useEventCallback/* useEventCallback */.$)((action) => {
        var _a;
        const currentSwipeOffset = action.offset || 0;
        const swipeDuration = !currentSwipeOffset
            ? (0,utils/* getNavigationAnimationDuration */.Fm)(animation)
            : (0,utils/* getSwipeAnimationDuration */.RA)(animation);
        const swipeEasing = (0,utils/* getAnimationEasing */.qp)(!currentSwipeOffset ? animation.navigation : animation.swipe);
        let { direction } = action;
        const count = (_a = action.count) !== null && _a !== void 0 ? _a : 1;
        let newSwipeState = SwipeState.ANIMATION;
        let newSwipeAnimationDuration = swipeDuration * count;
        if (!direction) {
            const containerWidth = containerRect === null || containerRect === void 0 ? void 0 : containerRect.width;
            const elapsedTime = action.duration || 0;
            const expectedTime = containerWidth
                ? (swipeDuration / containerWidth) * Math.abs(currentSwipeOffset)
                : swipeDuration;
            if (count !== 0) {
                if (elapsedTime < expectedTime) {
                    newSwipeAnimationDuration =
                        (newSwipeAnimationDuration / expectedTime) * Math.max(elapsedTime, expectedTime / 5);
                }
                else if (containerWidth) {
                    newSwipeAnimationDuration =
                        (swipeDuration / containerWidth) * (containerWidth - Math.abs(currentSwipeOffset));
                }
                direction = rtl(currentSwipeOffset) > 0 ? consts/* ACTION_PREV */.KN : consts/* ACTION_NEXT */.Eb;
            }
            else {
                newSwipeAnimationDuration = swipeDuration / 2;
            }
        }
        let increment = 0;
        if (direction === consts/* ACTION_PREV */.KN) {
            if (isSwipeValid(rtl(1))) {
                increment = -count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        else if (direction === consts/* ACTION_NEXT */.Eb) {
            if (isSwipeValid(rtl(-1))) {
                increment = count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        newSwipeAnimationDuration = Math.round(newSwipeAnimationDuration);
        cleanupSwipeOffset(() => {
            setSwipeOffset(0);
            setSwipeState(SwipeState.NONE);
        }, newSwipeAnimationDuration);
        if (carouselRef.current) {
            animate({
                rect: carouselRef.current.getBoundingClientRect(),
                index: state.globalIndex,
            });
        }
        setSwipeState(newSwipeState);
        publish(consts/* ACTION_SWIPE */.Tn, { increment, duration: newSwipeAnimationDuration, easing: swipeEasing });
    });
    react.useEffect(() => {
        var _a, _b;
        if (((_a = state.animation) === null || _a === void 0 ? void 0 : _a.increment) && ((_b = state.animation) === null || _b === void 0 ? void 0 : _b.duration)) {
            cleanupAnimationIncrement(() => dispatch({ increment: 0 }), state.animation.duration);
        }
    }, [state.animation, dispatch, cleanupAnimationIncrement]);
    const swipeParams = [
        subscribeSensors,
        isSwipeValid,
        (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) || 0,
        (0,utils/* getSwipeAnimationDuration */.RA)(animation),
        () => setSwipeState(SwipeState.SWIPE),
        (offset) => setSwipeOffset(offset),
        (offset, duration) => swipe({ offset, duration, count: 1 }),
        (offset) => swipe({ offset, count: 0 }),
    ];
    usePointerSwipe(...swipeParams);
    useWheelSwipe(swipeState, ...swipeParams);
    const focusOnMount = (0,useEventCallback/* useEventCallback */.$)(() => {
        var _a;
        if (controller.focus) {
            (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    });
    react.useEffect(focusOnMount, [focusOnMount]);
    const handleIndexChange = (0,useEventCallback/* useEventCallback */.$)(() => {
        var _a;
        (_a = on.view) === null || _a === void 0 ? void 0 : _a.call(on, state.currentIndex);
    });
    react.useEffect(handleIndexChange, [state.currentIndex, handleIndexChange]);
    react.useEffect(() => (0,utils/* cleanup */.Eq)(subscribe(consts/* ACTION_PREV */.KN, (action) => swipe({ direction: consts/* ACTION_PREV */.KN, ...action })), subscribe(consts/* ACTION_NEXT */.Eb, (action) => swipe({ direction: consts/* ACTION_NEXT */.Eb, ...action })), subscribe(consts/* ACTION_SWIPE */.Tn, (action) => dispatch(action))), [subscribe, swipe, dispatch]);
    react.useEffect(() => subscribeSensors(consts/* EVENT_ON_KEY_UP */.Bm, (event) => {
        if (event.code === consts/* VK_ESCAPE */.PU) {
            publish(consts/* ACTION_CLOSE */.t9);
        }
    }), [subscribeSensors, publish]);
    react.useEffect(() => controller.closeOnBackdropClick
        ? subscribe(consts/* YARL_EVENT_BACKDROP_CLICK */.n2, () => publish(consts/* ACTION_CLOSE */.t9))
        : () => { }, [controller.closeOnBackdropClick, publish, subscribe]);
    const transferFocus = (0,useEventCallback/* useEventCallback */.$)(() => { var _a; return (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
    const getLightboxProps = (0,useEventCallback/* useEventCallback */.$)(() => props);
    const context = react.useMemo(() => ({
        getLightboxProps,
        subscribeSensors,
        transferFocus,
        containerRect: containerRect || { width: 0, height: 0 },
        containerRef,
        setCarouselRef,
    }), [getLightboxProps, subscribeSensors, transferFocus, containerRect, containerRef, setCarouselRef]);
    return (react.createElement("div", { ref: handleContainerRef, className: (0,utils/* clsx */.Wy)((0,utils/* cssClass */.Nc)(cssContainerPrefix()), (0,utils/* cssClass */.Nc)(consts/* CLASS_FLEX_CENTER */.aN)), style: {
            ...(swipeState === SwipeState.SWIPE
                ? { [(0,utils/* cssVar */.gJ)("swipe_offset")]: `${Math.round(swipeOffset.current)}px` }
                : null),
            ...(controller.touchAction !== "none"
                ? { [(0,utils/* cssVar */.gJ)("controller_touch_action")]: controller.touchAction }
                : null),
            ...styles.container,
        }, ...(controller.aria ? { role: "presentation", "aria-live": "polite" } : null), tabIndex: -1, ...registerSensors }, containerRect && react.createElement(ControllerContext.Provider, { value: context }, children)));
}
const ControllerModule = (0,config/* createModule */.l6)(consts/* MODULE_CONTROLLER */.l4, Controller);


/***/ }),

/***/ 75405:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $K: function() { return /* binding */ isDefined; },
/* harmony export */   Ay: function() { return /* binding */ parseLengthPercentage; },
/* harmony export */   Eq: function() { return /* binding */ cleanup; },
/* harmony export */   Fm: function() { return /* binding */ getNavigationAnimationDuration; },
/* harmony export */   Fy: function() { return /* binding */ makeUseContext; },
/* harmony export */   Nc: function() { return /* binding */ cssClass; },
/* harmony export */   PS: function() { return /* binding */ label; },
/* harmony export */   QB: function() { return /* binding */ isImageSlide; },
/* harmony export */   RA: function() { return /* binding */ getSwipeAnimationDuration; },
/* harmony export */   VI: function() { return /* binding */ isImageFitCover; },
/* harmony export */   Wf: function() { return /* binding */ getSlideIndex; },
/* harmony export */   Wy: function() { return /* binding */ clsx; },
/* harmony export */   Xl: function() { return /* binding */ composePrefix; },
/* harmony export */   Ym: function() { return /* binding */ hasWindow; },
/* harmony export */   cO: function() { return /* binding */ makeComposePrefix; },
/* harmony export */   gJ: function() { return /* binding */ cssVar; },
/* harmony export */   hj: function() { return /* binding */ isNumber; },
/* harmony export */   qp: function() { return /* binding */ getAnimationEasing; },
/* harmony export */   vM: function() { return /* binding */ getFadeAnimationDuration; }
/* harmony export */ });
/* unused harmony exports round, devicePixelRatio, getSlide, getAnimationDuration */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2282);
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77881);



const clsx = (...classes) => [...classes].filter((cls) => Boolean(cls)).join(" ");
const cssPrefix = "yarl__";
const cssClass = (name) => `${cssPrefix}${name}`;
const cssVar = (name) => `--${cssPrefix}${name}`;
const composePrefix = (base, prefix) => `${base}${prefix ? `_${prefix}` : ""}`;
const makeComposePrefix = (base) => (prefix) => composePrefix(base, prefix);
const label = (labels, lbl) => (labels && labels[lbl] ? labels[lbl] : lbl);
const cleanup = (...cleaners) => () => {
    cleaners.forEach((cleaner) => {
        cleaner();
    });
};
const makeUseContext = (name, contextName, context) => () => {
    const ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(context);
    if (!ctx) {
        throw new Error(`${name} must be used within a ${contextName}.Provider`);
    }
    return ctx;
};
const hasWindow = () => typeof window !== "undefined";
const isDefined = (x) => typeof x !== "undefined";
const isNumber = (value) => typeof value === "number";
const round = (value, decimals = 0) => {
    const factor = 10 ** decimals;
    return Math.round((value + Number.EPSILON) * factor) / factor;
};
const isImageSlide = (slide) => !isDefined(slide.type) || slide.type === "image";
const isImageFitCover = (image, imageFit) => image.imageFit === _consts_js__WEBPACK_IMPORTED_MODULE_1__/* .IMAGE_FIT_COVER */ .rO || (image.imageFit !== _consts_js__WEBPACK_IMPORTED_MODULE_1__/* .IMAGE_FIT_CONTAIN */ .j3 && imageFit === _consts_js__WEBPACK_IMPORTED_MODULE_1__/* .IMAGE_FIT_COVER */ .rO);
const parseLengthPercentage = (input) => {
    if (typeof input === "number") {
        return { pixel: input };
    }
    if (typeof input === "string") {
        const value = parseInt(input, 10);
        return input.endsWith("%") ? { percent: value } : { pixel: value };
    }
    return { pixel: 0 };
};
const devicePixelRatio = () => (typeof window !== "undefined" ? window === null || window === void 0 ? void 0 : window.devicePixelRatio : undefined) || 1;
const getSlideIndex = (index, slidesCount) => ((index % slidesCount) + slidesCount) % slidesCount;
const getSlide = (slides, index) => slides[getSlideIndex(index, slides.length)];
const getAnimationEasing = (animationSpec) => typeof animationSpec === "object" ? animationSpec.easing : undefined;
const getAnimationDuration = (animationSpec, defaultDuration) => { var _a; return (_a = (typeof animationSpec === "object" ? animationSpec.duration : animationSpec)) !== null && _a !== void 0 ? _a : defaultDuration; };
const getFadeAnimationDuration = (animation) => getAnimationDuration(animation.fade, _props_js__WEBPACK_IMPORTED_MODULE_2__/* .AnimationDefaultProps */ .s.fade);
const getSwipeAnimationDuration = (animation) => getAnimationDuration(animation.swipe, _props_js__WEBPACK_IMPORTED_MODULE_2__/* .AnimationDefaultProps */ .s.swipe);
const getNavigationAnimationDuration = (animation) => getAnimationDuration(animation.navigation, getSwipeAnimationDuration(animation));


/***/ }),

/***/ 3763:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ dist; }
});

// UNUSED EXPORTS: Lightbox

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/props.js
var dist_props = __webpack_require__(2282);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/config.js
var core_config = __webpack_require__(60595);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-dom/index.js
var react_dom = __webpack_require__(54887);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/utils.js
var utils = __webpack_require__(75405);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useMotionPreference.js
var useMotionPreference = __webpack_require__(66471);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useEventCallback.js
var useEventCallback = __webpack_require__(91698);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/contexts/Timeouts.js
var Timeouts = __webpack_require__(16270);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/contexts/Events.js
var Events = __webpack_require__(43715);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/consts.js
var consts = __webpack_require__(77881);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/Portal.js








function cssPrefix(value) {
    return (0,utils/* composePrefix */.Xl)(consts/* MODULE_PORTAL */.SA, value);
}
function setAttribute(element, attribute, value) {
    const previousValue = element.getAttribute(attribute);
    element.setAttribute(attribute, value);
    return () => {
        if (previousValue) {
            element.setAttribute(attribute, previousValue);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
}
function Portal({ children, animation, styles, className, on, close }) {
    const [mounted, setMounted] = react.useState(false);
    const [visible, setVisible] = react.useState(false);
    const cleanup = react.useRef([]);
    const { setTimeout } = (0,Timeouts/* useTimeouts */.a)();
    const { subscribe } = (0,Events/* useEvents */.h)();
    const reduceMotion = (0,useMotionPreference/* useMotionPreference */.O)();
    const animationDuration = !reduceMotion ? (0,utils/* getFadeAnimationDuration */.vM)(animation) : 0;
    const animationEasing = !reduceMotion ? (0,utils/* getAnimationEasing */.qp)(animation.fade) : undefined;
    react.useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
            setVisible(false);
        };
    }, []);
    const handleClose = (0,useEventCallback/* useEventCallback */.$)(() => {
        var _a;
        setVisible(false);
        (_a = on.exiting) === null || _a === void 0 ? void 0 : _a.call(on);
        setTimeout(() => {
            var _a;
            (_a = on.exited) === null || _a === void 0 ? void 0 : _a.call(on);
            close();
        }, animationDuration);
    });
    react.useEffect(() => subscribe(consts/* ACTION_CLOSE */.t9, handleClose), [subscribe, handleClose]);
    const handleEnter = (0,useEventCallback/* useEventCallback */.$)((node) => {
        var _a, _b, _c;
        node.scrollTop;
        setVisible(true);
        (_a = on.entering) === null || _a === void 0 ? void 0 : _a.call(on);
        const elements = (_c = (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : [];
        for (let i = 0; i < elements.length; i += 1) {
            const element = elements[i];
            if (["TEMPLATE", "SCRIPT", "STYLE"].indexOf(element.tagName) === -1 && element !== node) {
                cleanup.current.push(setAttribute(element, "inert", "true"));
                cleanup.current.push(setAttribute(element, "aria-hidden", "true"));
            }
        }
        setTimeout(() => {
            var _a;
            (_a = on.entered) === null || _a === void 0 ? void 0 : _a.call(on);
        }, animationDuration);
    });
    const handleExit = (0,useEventCallback/* useEventCallback */.$)(() => {
        cleanup.current.forEach((clean) => clean());
        cleanup.current = [];
    });
    const handleRef = react.useCallback((node) => {
        if (node) {
            handleEnter(node);
        }
        else {
            handleExit();
        }
    }, [handleEnter, handleExit]);
    return mounted
        ? react_dom.createPortal(react.createElement("div", { ref: handleRef, className: (0,utils/* clsx */.Wy)(className, (0,utils/* cssClass */.Nc)("root"), (0,utils/* cssClass */.Nc)(cssPrefix()), (0,utils/* cssClass */.Nc)(consts/* CLASS_NO_SCROLL_PADDING */.M9), visible && (0,utils/* cssClass */.Nc)(cssPrefix("open"))), role: "presentation", "aria-live": "polite", style: {
                ...(animation.fade !== dist_props/* LightboxDefaultProps */.C.animation.fade
                    ? { [(0,utils/* cssVar */.gJ)("fade_animation_duration")]: `${animationDuration}ms` }
                    : null),
                ...(animationEasing ? { [(0,utils/* cssVar */.gJ)("fade_animation_timing_function")]: animationEasing } : null),
                ...styles.root,
            } }, children), document.body)
        : null;
}
const PortalModule = (0,core_config/* createModule */.l6)(consts/* MODULE_PORTAL */.SA, Portal);

// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useRTL.js
var useRTL = __webpack_require__(7188);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(75352);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/NoScroll.js





const noScroll = (0,utils/* cssClass */.Nc)(consts/* CLASS_NO_SCROLL */.Tf);
const noScrollPadding = (0,utils/* cssClass */.Nc)(consts/* CLASS_NO_SCROLL_PADDING */.M9);
function isHTMLElement(element) {
    return "style" in element;
}
function padScrollbar(element, padding, rtl) {
    const styles = window.getComputedStyle(element);
    const property = rtl ? "padding-left" : "padding-right";
    const computedValue = rtl ? styles.paddingLeft : styles.paddingRight;
    const originalValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, `${(parseInt(computedValue, 10) || 0) + padding}px`);
    return () => {
        if (originalValue) {
            element.style.setProperty(property, originalValue);
        }
        else {
            element.style.removeProperty(property);
        }
    };
}
function NoScroll({ children }) {
    const rtl = (0,useRTL/* useRTL */.S)();
    (0,useLayoutEffect/* useLayoutEffect */.b)(() => {
        const cleanup = [];
        const { body, documentElement } = document;
        const scrollbar = Math.round(window.innerWidth - documentElement.clientWidth);
        if (scrollbar > 0) {
            cleanup.push(padScrollbar(body, scrollbar, rtl));
            const elements = body.getElementsByTagName("*");
            for (let i = 0; i < elements.length; i += 1) {
                const element = elements[i];
                if (isHTMLElement(element) &&
                    window.getComputedStyle(element).getPropertyValue("position") === "fixed" &&
                    !element.classList.contains(noScrollPadding)) {
                    cleanup.push(padScrollbar(element, scrollbar, rtl));
                }
            }
        }
        body.classList.add(noScroll);
        return () => {
            body.classList.remove(noScroll);
            cleanup.forEach((clean) => clean());
        };
    }, [rtl]);
    return react.createElement(react.Fragment, null, children);
}
const NoScrollModule = (0,core_config/* createModule */.l6)(consts/* MODULE_NO_SCROLL */.HE, NoScroll);

// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/Controller.js + 7 modules
var Controller = __webpack_require__(91141);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/components/Icons.js
var Icons = __webpack_require__(59312);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/components/ImageSlide.js






const slidePrefix = (0,utils/* makeComposePrefix */.cO)("slide");
const slideImagePrefix = (0,utils/* makeComposePrefix */.cO)("slide_image");
function ImageSlide({ slide: image, offset, render, rect, imageFit, onClick, onLoad, style }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const [status, setStatus] = react.useState(consts/* SLIDE_STATUS_LOADING */.Xe);
    const { publish } = (0,Events/* useEvents */.h)();
    const { setTimeout } = (0,Timeouts/* useTimeouts */.a)();
    const imageRef = react.useRef(null);
    react.useEffect(() => {
        if (offset === 0) {
            publish((0,consts/* activeSlideStatus */.J1)(status));
        }
    }, [offset, status, publish]);
    const handleLoading = (0,useEventCallback/* useEventCallback */.$)((img) => {
        if (status === consts/* SLIDE_STATUS_COMPLETE */.Zv) {
            return;
        }
        ("decode" in img ? img.decode() : Promise.resolve())
            .catch(() => { })
            .then(() => {
            if (!img.parentNode) {
                return;
            }
            setStatus(consts/* SLIDE_STATUS_COMPLETE */.Zv);
            setTimeout(() => {
                onLoad === null || onLoad === void 0 ? void 0 : onLoad(img);
            }, 0);
        });
    });
    const setImageRef = react.useCallback((img) => {
        imageRef.current = img;
        if (img === null || img === void 0 ? void 0 : img.complete) {
            handleLoading(img);
        }
    }, [handleLoading]);
    const handleOnLoad = react.useCallback((event) => {
        handleLoading(event.currentTarget);
    }, [handleLoading]);
    const onError = react.useCallback(() => {
        setStatus(consts/* SLIDE_STATUS_ERROR */.fS);
    }, []);
    const cover = (0,utils/* isImageFitCover */.VI)(image, imageFit);
    const nonInfinite = (value, fallback) => (Number.isFinite(value) ? value : fallback);
    const maxWidth = nonInfinite(Math.max(...((_b = (_a = image.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) !== null && _b !== void 0 ? _b : []).concat(image.width ? [image.width] : [])), ((_c = imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalWidth) || 0);
    const maxHeight = nonInfinite(Math.max(...((_e = (_d = image.srcSet) === null || _d === void 0 ? void 0 : _d.map((x) => x.height)) !== null && _e !== void 0 ? _e : []).concat(image.height ? [image.height] : [])), ((_f = imageRef.current) === null || _f === void 0 ? void 0 : _f.naturalHeight) || 0);
    const defaultStyle = maxWidth && maxHeight
        ? {
            maxWidth: `min(${maxWidth}px, 100%)`,
            maxHeight: `min(${maxHeight}px, 100%)`,
        }
        : {
            maxWidth: "100%",
            maxHeight: "100%",
        };
    const srcSet = (_g = image.srcSet) === null || _g === void 0 ? void 0 : _g.sort((a, b) => a.width - b.width).map((item) => `${item.src} ${item.width}w`).join(", ");
    const estimateActualWidth = () => rect && !cover && image.width && image.height ? (rect.height / image.height) * image.width : Number.MAX_VALUE;
    const sizes = srcSet && rect && (0,utils/* hasWindow */.Ym)() ? `${Math.round(Math.min(estimateActualWidth(), rect.width))}px` : undefined;
    return (react.createElement(react.Fragment, null,
        react.createElement("img", { ref: setImageRef, onLoad: handleOnLoad, onError: onError, onClick: onClick, className: (0,utils/* clsx */.Wy)((0,utils/* cssClass */.Nc)(slideImagePrefix()), cover && (0,utils/* cssClass */.Nc)(slideImagePrefix("cover")), status !== consts/* SLIDE_STATUS_COMPLETE */.Zv && (0,utils/* cssClass */.Nc)(slideImagePrefix("loading"))), draggable: false, alt: image.alt, style: { ...defaultStyle, ...style }, sizes: sizes, srcSet: srcSet, src: image.src }),
        status !== consts/* SLIDE_STATUS_COMPLETE */.Zv && (react.createElement("div", { className: (0,utils/* cssClass */.Nc)(slidePrefix(consts/* SLIDE_STATUS_PLACEHOLDER */.$L)) },
            status === consts/* SLIDE_STATUS_LOADING */.Xe &&
                ((render === null || render === void 0 ? void 0 : render.iconLoading) ? (render.iconLoading()) : (react.createElement(Icons/* LoadingIcon */.Ho, { className: (0,utils/* clsx */.Wy)((0,utils/* cssClass */.Nc)(consts/* ELEMENT_ICON */.vg), (0,utils/* cssClass */.Nc)(slidePrefix(consts/* SLIDE_STATUS_LOADING */.Xe))) }))),
            status === consts/* SLIDE_STATUS_ERROR */.fS &&
                ((render === null || render === void 0 ? void 0 : render.iconError) ? (render.iconError()) : (react.createElement(Icons/* ErrorIcon */.Pz, { className: (0,utils/* clsx */.Wy)((0,utils/* cssClass */.Nc)(consts/* ELEMENT_ICON */.vg), (0,utils/* cssClass */.Nc)(slidePrefix(consts/* SLIDE_STATUS_ERROR */.fS))) })))))));
}

// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/contexts/LightboxState.js
var LightboxState = __webpack_require__(24414);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/Carousel.js








function Carousel_cssPrefix(value) {
    return (0,utils/* composePrefix */.Xl)(consts/* MODULE_CAROUSEL */.k0, value);
}
function cssSlidePrefix(value) {
    return (0,utils/* composePrefix */.Xl)("slide", value);
}
function CarouselSlide({ slide, offset, rect }) {
    const containerRef = react.useRef(null);
    const { publish } = (0,Events/* useEvents */.h)();
    const { currentIndex } = (0,LightboxState/* useLightboxState */.o)().state;
    const { render, carousel: { imageFit }, on: { click: onClick }, } = (0,Controller/* useController */.bc)().getLightboxProps();
    const renderSlide = () => {
        var _a, _b, _c, _d;
        let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, slide, offset, rect);
        if (!rendered && (0,utils/* isImageSlide */.QB)(slide)) {
            rendered = (react.createElement(ImageSlide, { slide: slide, offset: offset, render: render, rect: rect, imageFit: imageFit, onClick: offset === 0 ? () => onClick === null || onClick === void 0 ? void 0 : onClick(currentIndex) : undefined }));
        }
        return rendered ? (react.createElement(react.Fragment, null, (_b = render.slideHeader) === null || _b === void 0 ? void 0 :
            _b.call(render, slide),
            ((_c = render.slideContainer) !== null && _c !== void 0 ? _c : ((_, x) => x))(slide, rendered), (_d = render.slideFooter) === null || _d === void 0 ? void 0 :
            _d.call(render, slide))) : null;
    };
    const handleBackdropClick = (event) => {
        const container = containerRef.current;
        const target = event.target instanceof HTMLElement ? event.target : undefined;
        if (target &&
            container &&
            (target === container ||
                (Array.from(container.children).find((x) => x === target) &&
                    target.classList.contains((0,utils/* cssClass */.Nc)(consts/* CLASS_FULLSIZE */.yS))))) {
            publish(consts/* YARL_EVENT_BACKDROP_CLICK */.n2);
        }
    };
    return (react.createElement("div", { ref: containerRef, className: (0,utils/* clsx */.Wy)((0,utils/* cssClass */.Nc)(cssSlidePrefix()), offset === 0 && (0,utils/* cssClass */.Nc)(cssSlidePrefix("current")), (0,utils/* cssClass */.Nc)(consts/* CLASS_FLEX_CENTER */.aN)), onClick: handleBackdropClick }, renderSlide()));
}
function Placeholder() {
    return react.createElement("div", { className: (0,utils/* cssClass */.Nc)("slide") });
}
function Carousel({ slides, carousel: { finite, preload, padding, spacing } }) {
    const { currentIndex, globalIndex } = (0,LightboxState/* useLightboxState */.o)().state;
    const { setCarouselRef, containerRect } = (0,Controller/* useController */.bc)();
    const spacingValue = (0,utils/* parseLengthPercentage */.Ay)(spacing);
    const paddingValue = (0,utils/* parseLengthPercentage */.Ay)(padding);
    const paddingPixels = paddingValue.percent !== undefined ? (containerRect.width / 100) * paddingValue.percent : paddingValue.pixel;
    const rect = {
        width: Math.max(containerRect.width - 2 * paddingPixels, 0),
        height: Math.max(containerRect.height - 2 * paddingPixels, 0),
    };
    const items = [];
    if ((slides === null || slides === void 0 ? void 0 : slides.length) > 0) {
        for (let i = currentIndex - preload; i < currentIndex; i += 1) {
            const key = globalIndex + i - currentIndex;
            items.push(!finite || i >= 0 ? (react.createElement(CarouselSlide, { key: key, slide: slides[(i + preload * slides.length) % slides.length], rect: rect, offset: i - currentIndex })) : (react.createElement(Placeholder, { key: key })));
        }
        items.push(react.createElement(CarouselSlide, { key: globalIndex, slide: slides[currentIndex], rect: rect, offset: 0 }));
        for (let i = currentIndex + 1; i <= currentIndex + preload; i += 1) {
            const key = globalIndex + i - currentIndex;
            items.push(!finite || i <= slides.length - 1 ? (react.createElement(CarouselSlide, { key: key, slide: slides[i % slides.length], rect: rect, offset: i - currentIndex })) : (react.createElement(Placeholder, { key: key })));
        }
    }
    return (react.createElement("div", { ref: setCarouselRef, className: (0,utils/* clsx */.Wy)((0,utils/* cssClass */.Nc)(Carousel_cssPrefix()), items.length > 0 && (0,utils/* cssClass */.Nc)(Carousel_cssPrefix("with_slides"))), style: {
            [`${(0,utils/* cssVar */.gJ)(Carousel_cssPrefix("slides_count"))}`]: items.length,
            [`${(0,utils/* cssVar */.gJ)(Carousel_cssPrefix("spacing_px"))}`]: spacingValue.pixel || 0,
            [`${(0,utils/* cssVar */.gJ)(Carousel_cssPrefix("spacing_percent"))}`]: spacingValue.percent || 0,
            [`${(0,utils/* cssVar */.gJ)(Carousel_cssPrefix("padding_px"))}`]: paddingValue.pixel || 0,
            [`${(0,utils/* cssVar */.gJ)(Carousel_cssPrefix("padding_percent"))}`]: paddingValue.percent || 0,
        } }, items));
}
const CarouselModule = (0,core_config/* createModule */.l6)(consts/* MODULE_CAROUSEL */.k0, Carousel);

// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/components/IconButton.js
var IconButton = __webpack_require__(17281);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useContainerRect.js
var useContainerRect = __webpack_require__(99270);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/Toolbar.js







function Toolbar_cssPrefix(value) {
    return (0,utils/* composePrefix */.Xl)(consts/* MODULE_TOOLBAR */.hb, value);
}
function Toolbar({ toolbar: { buttons }, labels, render: { buttonClose, iconClose } }) {
    const { publish } = (0,Events/* useEvents */.h)();
    const { setContainerRef, containerRect } = (0,useContainerRect/* useContainerRect */.u)();
    react.useEffect(() => {
        if (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) {
            publish(consts/* YARL_EVENT_TOOLBAR_WIDTH */.cq, containerRect.width);
        }
    }, [publish, containerRect === null || containerRect === void 0 ? void 0 : containerRect.width]);
    const renderCloseButton = () => buttonClose ? (buttonClose()) : (react.createElement(IconButton/* IconButton */.h, { key: consts/* ACTION_CLOSE */.t9, label: (0,utils/* label */.PS)(labels, "Close"), icon: Icons/* CloseIcon */.Tw, renderIcon: iconClose, onClick: () => publish(consts/* ACTION_CLOSE */.t9) }));
    return (react.createElement("div", { ref: setContainerRef, className: (0,utils/* cssClass */.Nc)(Toolbar_cssPrefix()) }, buttons === null || buttons === void 0 ? void 0 : buttons.map((button) => (button === consts/* ACTION_CLOSE */.t9 ? renderCloseButton() : button))));
}
const ToolbarModule = (0,core_config/* createModule */.l6)(consts/* MODULE_TOOLBAR */.hb, Toolbar);

;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useLoseFocus.js



function useLoseFocus(disabled = false) {
    const focused = react.useRef(disabled);
    const { transferFocus } = (0,Controller/* useController */.bc)();
    (0,useLayoutEffect/* useLayoutEffect */.b)(() => {
        if (disabled) {
            transferFocus();
        }
    }, [disabled, transferFocus]);
    const onFocus = react.useCallback(() => {
        focused.current = true;
    }, []);
    const onBlur = react.useCallback(() => {
        focused.current = false;
    }, []);
    return { onFocus, onBlur };
}

// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useDelay.js
var useDelay = __webpack_require__(52076);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useThrottle.js



function useThrottle(callback, delay) {
    const lastCallbackTime = react.useRef(0);
    const delayCallback = (0,useDelay/* useDelay */.g)();
    const executeCallback = (0,useEventCallback/* useEventCallback */.$)((...args) => {
        lastCallbackTime.current = Date.now();
        callback(args);
    });
    return react.useCallback((...args) => {
        delayCallback(() => {
            executeCallback(args);
        }, delay - (Date.now() - lastCallbackTime.current));
    }, [delay, executeCallback, delayCallback]);
}

;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/Navigation.js








function NavigationButton({ labels, label, icon, renderIcon, action, onClick, disabled, }) {
    return (react.createElement(IconButton/* IconButton */.h, { label: (0,utils/* label */.PS)(labels, label), icon: icon, renderIcon: renderIcon, className: (0,utils/* cssClass */.Nc)(`navigation_${action}`), disabled: disabled, onClick: onClick, ...useLoseFocus(disabled) }));
}
function Navigation({ slides, carousel: { finite }, animation, labels, render: { buttonPrev, buttonNext, iconPrev, iconNext }, }) {
    const { currentIndex } = (0,LightboxState/* useLightboxState */.o)().state;
    const { subscribeSensors } = (0,Controller/* useController */.bc)();
    const { publish } = (0,Events/* useEvents */.h)();
    const isRTL = (0,useRTL/* useRTL */.S)();
    const prevDisabled = slides.length === 0 || (finite && currentIndex === 0);
    const nextDisabled = slides.length === 0 || (finite && currentIndex === slides.length - 1);
    const publishThrottled = useThrottle((action) => publish(action), (0,utils/* getNavigationAnimationDuration */.Fm)(animation) / 2);
    const handleKeyDown = (0,useEventCallback/* useEventCallback */.$)((event) => {
        if (event.key === consts/* VK_ARROW_LEFT */.Sl && !(isRTL ? nextDisabled : prevDisabled)) {
            publishThrottled(isRTL ? consts/* ACTION_NEXT */.Eb : consts/* ACTION_PREV */.KN);
        }
        if (event.key === consts/* VK_ARROW_RIGHT */.NH && !(isRTL ? prevDisabled : nextDisabled)) {
            publishThrottled(isRTL ? consts/* ACTION_PREV */.KN : consts/* ACTION_NEXT */.Eb);
        }
    });
    react.useEffect(() => subscribeSensors(consts/* EVENT_ON_KEY_DOWN */.ds, handleKeyDown), [subscribeSensors, handleKeyDown]);
    return (react.createElement(react.Fragment, null,
        buttonPrev ? (buttonPrev()) : (react.createElement(NavigationButton, { label: "Previous", action: consts/* ACTION_PREV */.KN, icon: Icons/* PreviousIcon */.jJ, renderIcon: iconPrev, disabled: prevDisabled, labels: labels, onClick: () => publish(consts/* ACTION_PREV */.KN) })),
        buttonNext ? (buttonNext()) : (react.createElement(NavigationButton, { label: "Next", action: consts/* ACTION_NEXT */.Eb, icon: Icons/* NextIcon */.Ne, renderIcon: iconNext, disabled: nextDisabled, labels: labels, onClick: () => publish(consts/* ACTION_NEXT */.Eb) }))));
}
const NavigationModule = (0,core_config/* createModule */.l6)(consts/* MODULE_NAVIGATION */.Op, Navigation);

;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/Core.js




function Core({ slides, index, children }) {
    return (react.createElement(Timeouts/* TimeoutsProvider */.q, null,
        react.createElement(Events/* EventsProvider */.Y, null,
            react.createElement(LightboxState/* LightboxStateProvider */.q, { slidesCount: slides.length, initialIndex: index }, children))));
}
const CoreModule = (0,core_config/* createModule */.l6)(consts/* MODULE_CORE */.i4, Core);

;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/Lightbox.js



function renderNode(node, props) {
    var _a;
    return react.createElement(node.module.component, { key: node.module.name, ...props }, (_a = node.children) === null || _a === void 0 ? void 0 : _a.map((child) => renderNode(child, props)));
}
function fixupIndex({ index, slides, ...rest }) {
    return {
        index: index >= 0 && index < slides.length ? index : 0,
        slides,
        ...rest,
    };
}
function Lightbox(props) {
    const { carousel, animation, render, toolbar, controller, on, plugins, ...restProps } = props;
    const { carousel: defaultCarousel, animation: defaultAnimation, render: defaultRender, toolbar: defaultToolbar, controller: defaultController, on: defaultOn, ...restDefaultProps } = dist_props/* LightboxDefaultProps */.C;
    const { config, augmentation } = (0,core_config/* withPlugins */.AB)([
        (0,core_config/* createNode */.dS)(PortalModule, [
            (0,core_config/* createNode */.dS)(NoScrollModule, [
                (0,core_config/* createNode */.dS)(Controller/* ControllerModule */.un, [
                    (0,core_config/* createNode */.dS)(CarouselModule),
                    (0,core_config/* createNode */.dS)(ToolbarModule),
                    (0,core_config/* createNode */.dS)(NavigationModule),
                ]),
            ]),
        ]),
    ], plugins, [fixupIndex]);
    const augmentedProps = augmentation({
        carousel: { ...defaultCarousel, ...carousel },
        animation: { ...defaultAnimation, ...animation },
        render: { ...defaultRender, ...render },
        toolbar: { ...defaultToolbar, ...toolbar },
        controller: { ...defaultController, ...controller },
        on: { ...defaultOn, ...on },
        ...restDefaultProps,
        ...restProps,
    });
    if (!augmentedProps.open)
        return null;
    return react.createElement(react.Fragment, null, renderNode((0,core_config/* createNode */.dS)(CoreModule, config), augmentedProps));
}

;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/index.js



/* harmony default export */ var dist = (Lightbox);


/***/ }),

/***/ 58994:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ fullscreen; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/consts.js
var consts = __webpack_require__(77881);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/config.js
var config = __webpack_require__(60595);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/components/Icons.js
var Icons = __webpack_require__(59312);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/modules/Controller.js + 7 modules
var Controller = __webpack_require__(91141);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/components/IconButton.js
var IconButton = __webpack_require__(17281);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/utils.js
var utils = __webpack_require__(75405);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(75352);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/core/hooks/useEventCallback.js
var useEventCallback = __webpack_require__(91698);
;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/FullscreenContext.js


const FullscreenContext = react.createContext(null);
const useFullscreen = (0,utils/* makeUseContext */.Fy)("useFullscreen", "FullscreenContext", FullscreenContext);
function FullscreenContextProvider({ fullscreen: auto, children }) {
    const containerRef = react.useRef(null);
    const [fullscreen, setFullscreen] = react.useState(false);
    const [fullscreenEnabled, setFullscreenEnabled] = react.useState();
    (0,useLayoutEffect/* useLayoutEffect */.b)(() => {
        var _a, _b, _c, _d;
        setFullscreenEnabled((_d = (_c = (_b = (_a = document.fullscreenEnabled) !== null && _a !== void 0 ? _a : document.webkitFullscreenEnabled) !== null && _b !== void 0 ? _b : document.mozFullScreenEnabled) !== null && _c !== void 0 ? _c : document.msFullscreenEnabled) !== null && _d !== void 0 ? _d : false);
    }, []);
    const getFullscreenElement = react.useCallback(() => {
        var _a, _b, _c;
        return (_c = (_b = (_a = document.fullscreenElement) !== null && _a !== void 0 ? _a : document.webkitFullscreenElement) !== null && _b !== void 0 ? _b : document.mozFullScreenElement) !== null && _c !== void 0 ? _c : document.msFullscreenElement;
    }, []);
    const requestFullscreen = react.useCallback(() => {
        const container = containerRef.current;
        if (container) {
            try {
                if (container.requestFullscreen) {
                    container.requestFullscreen().catch(() => { });
                }
                else if (container.webkitRequestFullscreen) {
                    container.webkitRequestFullscreen();
                }
                else if (container.mozRequestFullScreen) {
                    container.mozRequestFullScreen();
                }
                else if (container.msRequestFullscreen) {
                    container.msRequestFullscreen();
                }
            }
            catch (err) {
            }
        }
    }, []);
    const exitFullscreen = react.useCallback(() => {
        if (getFullscreenElement()) {
            try {
                if (document.exitFullscreen) {
                    document.exitFullscreen().catch(() => { });
                }
                else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
            catch (err) {
            }
        }
    }, [getFullscreenElement]);
    const toggleFullscreen = react.useCallback(() => {
        if (fullscreen) {
            exitFullscreen();
        }
        else {
            requestFullscreen();
        }
    }, [fullscreen, requestFullscreen, exitFullscreen]);
    const fullscreenChangeListener = react.useCallback(() => {
        if (getFullscreenElement() === containerRef.current) {
            setFullscreen(true);
        }
        else {
            setFullscreen(false);
        }
    }, [getFullscreenElement]);
    react.useEffect(() => {
        const events = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
        events.forEach((event) => {
            document.addEventListener(event, fullscreenChangeListener);
        });
        return () => {
            events.forEach((event) => {
                document.removeEventListener(event, fullscreenChangeListener);
            });
        };
    }, [fullscreenChangeListener]);
    const handleAutoFullscreen = (0,useEventCallback/* useEventCallback */.$)(() => {
        if (auto) {
            requestFullscreen();
        }
    });
    react.useEffect(() => {
        handleAutoFullscreen();
        return () => {
            exitFullscreen();
        };
    }, [handleAutoFullscreen, exitFullscreen]);
    const context = react.useMemo(() => ({
        fullscreen,
        fullscreenEnabled,
        toggleFullscreen,
    }), [fullscreen, fullscreenEnabled, toggleFullscreen]);
    return (react.createElement("div", { ref: containerRef, className: (0,utils/* clsx */.Wy)((0,utils/* cssClass */.Nc)(consts/* PLUGIN_FULLSCREEN */.zr), (0,utils/* cssClass */.Nc)(consts/* CLASS_FULLSIZE */.yS)) },
        react.createElement(FullscreenContext.Provider, { value: context }, children)));
}

;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/FullscreenButton.js



const EnterFullscreenIcon = (0,Icons/* createIcon */.IU)("EnterFullscreen", react.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }));
const ExitFullscreenIcon = (0,Icons/* createIcon */.IU)("ExitFullscreen", react.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }));
function FullscreenButton() {
    var _a;
    const { labels, render } = (0,Controller/* useController */.bc)().getLightboxProps();
    const { fullscreen, fullscreenEnabled, toggleFullscreen } = useFullscreen();
    if (!fullscreenEnabled)
        return null;
    return render.buttonFullscreen ? (react.createElement(react.Fragment, null, (_a = render.buttonFullscreen) === null || _a === void 0 ? void 0 : _a.call(render, { fullscreen, fullscreenEnabled, toggleFullscreen }))) : (react.createElement(IconButton/* IconButton */.h, { disabled: !fullscreenEnabled, label: fullscreen ? (0,utils/* label */.PS)(labels, "Exit Fullscreen") : (0,utils/* label */.PS)(labels, "Enter Fullscreen"), icon: fullscreen ? ExitFullscreenIcon : EnterFullscreenIcon, renderIcon: fullscreen ? render.iconExitFullscreen : render.iconEnterFullscreen, onClick: toggleFullscreen }));
}

;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/Fullscreen.js




const Fullscreen = ({ augment, contains, addParent }) => {
    augment(({ toolbar: { buttons, ...restToolbar }, ...restProps }) => ({
        toolbar: { buttons: [react.createElement(FullscreenButton, { key: consts/* PLUGIN_FULLSCREEN */.zr }), ...buttons], ...restToolbar },
        ...restProps,
    }));
    addParent(contains(consts/* PLUGIN_THUMBNAILS */.dA) ? consts/* PLUGIN_THUMBNAILS */.dA : consts/* MODULE_CONTROLLER */.l4, (0,config/* createModule */.l6)(consts/* PLUGIN_FULLSCREEN */.zr, FullscreenContextProvider));
};

;// CONCATENATED MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/index.js

/* harmony default export */ var fullscreen = (Fullscreen);


/***/ }),

/***/ 2282:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ LightboxDefaultProps; },
/* harmony export */   s: function() { return /* binding */ AnimationDefaultProps; }
/* harmony export */ });
/* harmony import */ var _core_consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77881);

const AnimationDefaultProps = {
    fade: 330,
    swipe: 500,
};
const LightboxDefaultProps = {
    open: false,
    close: () => { },
    index: 0,
    slides: [],
    render: {},
    plugins: [],
    toolbar: { buttons: [_core_consts_js__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_CLOSE */ .t9] },
    labels: {},
    animation: AnimationDefaultProps,
    carousel: {
        finite: false,
        preload: 2,
        padding: "16px",
        spacing: "30%",
        imageFit: _core_consts_js__WEBPACK_IMPORTED_MODULE_0__/* .IMAGE_FIT_CONTAIN */ .j3,
    },
    controller: {
        focus: true,
        aria: false,
        touchAction: "none",
        closeOnBackdropClick: false,
    },
    on: {},
    styles: {},
    className: "",
};


/***/ })

}]);