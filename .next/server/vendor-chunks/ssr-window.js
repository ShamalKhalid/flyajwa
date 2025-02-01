"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ssr-window";
exports.ids = ["vendor-chunks/ssr-window"];
exports.modules = {

/***/ "(ssr)/./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extend: () => (/* binding */ extend),\n/* harmony export */   getDocument: () => (/* binding */ getDocument),\n/* harmony export */   getWindow: () => (/* binding */ getWindow),\n/* harmony export */   ssrDocument: () => (/* binding */ ssrDocument),\n/* harmony export */   ssrWindow: () => (/* binding */ ssrWindow)\n/* harmony export */ });\n/**\n * SSR Window 4.0.2\n * Better handling for window object in SSR environment\n * https://github.com/nolimits4web/ssr-window\n *\n * Copyright 2021, Vladimir Kharlampidi\n *\n * Licensed under MIT\n *\n * Released on: December 13, 2021\n */ /* eslint-disable no-param-reassign */ function isObject(obj) {\n    return obj !== null && typeof obj === \"object\" && \"constructor\" in obj && obj.constructor === Object;\n}\nfunction extend(target = {}, src = {}) {\n    Object.keys(src).forEach((key)=>{\n        if (typeof target[key] === \"undefined\") target[key] = src[key];\n        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {\n            extend(target[key], src[key]);\n        }\n    });\n}\nconst ssrDocument = {\n    body: {},\n    addEventListener () {},\n    removeEventListener () {},\n    activeElement: {\n        blur () {},\n        nodeName: \"\"\n    },\n    querySelector () {\n        return null;\n    },\n    querySelectorAll () {\n        return [];\n    },\n    getElementById () {\n        return null;\n    },\n    createEvent () {\n        return {\n            initEvent () {}\n        };\n    },\n    createElement () {\n        return {\n            children: [],\n            childNodes: [],\n            style: {},\n            setAttribute () {},\n            getElementsByTagName () {\n                return [];\n            }\n        };\n    },\n    createElementNS () {\n        return {};\n    },\n    importNode () {\n        return null;\n    },\n    location: {\n        hash: \"\",\n        host: \"\",\n        hostname: \"\",\n        href: \"\",\n        origin: \"\",\n        pathname: \"\",\n        protocol: \"\",\n        search: \"\"\n    }\n};\nfunction getDocument() {\n    const doc = typeof document !== \"undefined\" ? document : {};\n    extend(doc, ssrDocument);\n    return doc;\n}\nconst ssrWindow = {\n    document: ssrDocument,\n    navigator: {\n        userAgent: \"\"\n    },\n    location: {\n        hash: \"\",\n        host: \"\",\n        hostname: \"\",\n        href: \"\",\n        origin: \"\",\n        pathname: \"\",\n        protocol: \"\",\n        search: \"\"\n    },\n    history: {\n        replaceState () {},\n        pushState () {},\n        go () {},\n        back () {}\n    },\n    CustomEvent: function CustomEvent() {\n        return this;\n    },\n    addEventListener () {},\n    removeEventListener () {},\n    getComputedStyle () {\n        return {\n            getPropertyValue () {\n                return \"\";\n            }\n        };\n    },\n    Image () {},\n    Date () {},\n    screen: {},\n    setTimeout () {},\n    clearTimeout () {},\n    matchMedia () {\n        return {};\n    },\n    requestAnimationFrame (callback) {\n        if (typeof setTimeout === \"undefined\") {\n            callback();\n            return null;\n        }\n        return setTimeout(callback, 0);\n    },\n    cancelAnimationFrame (id) {\n        if (typeof setTimeout === \"undefined\") {\n            return;\n        }\n        clearTimeout(id);\n    }\n};\nfunction getWindow() {\n    const win =  false ? 0 : {};\n    extend(win, ssrWindow);\n    return win;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3NyLXdpbmRvdy9zc3Itd2luZG93LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0NBVUMsR0FDRCxvQ0FBb0MsR0FDcEMsU0FBU0EsU0FBU0MsR0FBRztJQUNqQixPQUFRQSxRQUFRLFFBQ1osT0FBT0EsUUFBUSxZQUNmLGlCQUFpQkEsT0FDakJBLElBQUlDLFdBQVcsS0FBS0M7QUFDNUI7QUFDQSxTQUFTQyxPQUFPQyxTQUFTLENBQUMsQ0FBQyxFQUFFQyxNQUFNLENBQUMsQ0FBQztJQUNqQ0gsT0FBT0ksSUFBSSxDQUFDRCxLQUFLRSxPQUFPLENBQUMsQ0FBQ0M7UUFDdEIsSUFBSSxPQUFPSixNQUFNLENBQUNJLElBQUksS0FBSyxhQUN2QkosTUFBTSxDQUFDSSxJQUFJLEdBQUdILEdBQUcsQ0FBQ0csSUFBSTthQUNyQixJQUFJVCxTQUFTTSxHQUFHLENBQUNHLElBQUksS0FDdEJULFNBQVNLLE1BQU0sQ0FBQ0ksSUFBSSxLQUNwQk4sT0FBT0ksSUFBSSxDQUFDRCxHQUFHLENBQUNHLElBQUksRUFBRUMsTUFBTSxHQUFHLEdBQUc7WUFDbENOLE9BQU9DLE1BQU0sQ0FBQ0ksSUFBSSxFQUFFSCxHQUFHLENBQUNHLElBQUk7UUFDaEM7SUFDSjtBQUNKO0FBRUEsTUFBTUUsY0FBYztJQUNoQkMsTUFBTSxDQUFDO0lBQ1BDLHFCQUFxQjtJQUNyQkMsd0JBQXdCO0lBQ3hCQyxlQUFlO1FBQ1hDLFNBQVM7UUFDVEMsVUFBVTtJQUNkO0lBQ0FDO1FBQ0ksT0FBTztJQUNYO0lBQ0FDO1FBQ0ksT0FBTyxFQUFFO0lBQ2I7SUFDQUM7UUFDSSxPQUFPO0lBQ1g7SUFDQUM7UUFDSSxPQUFPO1lBQ0hDLGNBQWM7UUFDbEI7SUFDSjtJQUNBQztRQUNJLE9BQU87WUFDSEMsVUFBVSxFQUFFO1lBQ1pDLFlBQVksRUFBRTtZQUNkQyxPQUFPLENBQUM7WUFDUkMsaUJBQWlCO1lBQ2pCQztnQkFDSSxPQUFPLEVBQUU7WUFDYjtRQUNKO0lBQ0o7SUFDQUM7UUFDSSxPQUFPLENBQUM7SUFDWjtJQUNBQztRQUNJLE9BQU87SUFDWDtJQUNBQyxVQUFVO1FBQ05DLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsUUFBUTtJQUNaO0FBQ0o7QUFDQSxTQUFTQztJQUNMLE1BQU1DLE1BQU0sT0FBT0MsYUFBYSxjQUFjQSxXQUFXLENBQUM7SUFDMUR0QyxPQUFPcUMsS0FBSzlCO0lBQ1osT0FBTzhCO0FBQ1g7QUFFQSxNQUFNRSxZQUFZO0lBQ2RELFVBQVUvQjtJQUNWaUMsV0FBVztRQUNQQyxXQUFXO0lBQ2Y7SUFDQWQsVUFBVTtRQUNOQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDWjtJQUNBTyxTQUFTO1FBQ0xDLGlCQUFpQjtRQUNqQkMsY0FBYztRQUNkQyxPQUFPO1FBQ1BDLFNBQVM7SUFDYjtJQUNBQyxhQUFhLFNBQVNBO1FBQ2xCLE9BQU8sSUFBSTtJQUNmO0lBQ0F0QyxxQkFBcUI7SUFDckJDLHdCQUF3QjtJQUN4QnNDO1FBQ0ksT0FBTztZQUNIQztnQkFDSSxPQUFPO1lBQ1g7UUFDSjtJQUNKO0lBQ0FDLFVBQVU7SUFDVkMsU0FBUztJQUNUQyxRQUFRLENBQUM7SUFDVEMsZUFBZTtJQUNmQyxpQkFBaUI7SUFDakJDO1FBQ0ksT0FBTyxDQUFDO0lBQ1o7SUFDQUMsdUJBQXNCQyxRQUFRO1FBQzFCLElBQUksT0FBT0osZUFBZSxhQUFhO1lBQ25DSTtZQUNBLE9BQU87UUFDWDtRQUNBLE9BQU9KLFdBQVdJLFVBQVU7SUFDaEM7SUFDQUMsc0JBQXFCQyxFQUFFO1FBQ25CLElBQUksT0FBT04sZUFBZSxhQUFhO1lBQ25DO1FBQ0o7UUFDQUMsYUFBYUs7SUFDakI7QUFDSjtBQUNBLFNBQVNDO0lBQ0wsTUFBTUMsTUFBTSxNQUFrQixHQUFjQyxDQUFNQSxHQUFHLENBQUM7SUFDdEQ5RCxPQUFPNkQsS0FBS3RCO0lBQ1osT0FBT3NCO0FBQ1g7QUFFa0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlwcmV4LW5leHRqcy8uL25vZGVfbW9kdWxlcy9zc3Itd2luZG93L3Nzci13aW5kb3cuZXNtLmpzPzZjMDkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTU1IgV2luZG93IDQuMC4yXG4gKiBCZXR0ZXIgaGFuZGxpbmcgZm9yIHdpbmRvdyBvYmplY3QgaW4gU1NSIGVudmlyb25tZW50XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbm9saW1pdHM0d2ViL3Nzci13aW5kb3dcbiAqXG4gKiBDb3B5cmlnaHQgMjAyMSwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqXG4gKiBSZWxlYXNlZCBvbjogRGVjZW1iZXIgMTMsIDIwMjFcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiAob2JqICE9PSBudWxsICYmXG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgICAgICdjb25zdHJ1Y3RvcicgaW4gb2JqICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KTtcbn1cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQgPSB7fSwgc3JjID0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHNyY1trZXldKSAmJlxuICAgICAgICAgICAgaXNPYmplY3QodGFyZ2V0W2tleV0pICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcmNba2V5XSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzcmNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuY29uc3Qgc3NyRG9jdW1lbnQgPSB7XG4gICAgYm9keToge30sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcigpIHsgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKCkgeyB9LFxuICAgIGFjdGl2ZUVsZW1lbnQ6IHtcbiAgICAgICAgYmx1cigpIHsgfSxcbiAgICAgICAgbm9kZU5hbWU6ICcnLFxuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBxdWVyeVNlbGVjdG9yQWxsKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICBnZXRFbGVtZW50QnlJZCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBjcmVhdGVFdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluaXRFdmVudCgpIHsgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZSgpIHsgfSxcbiAgICAgICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50TlMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIGltcG9ydE5vZGUoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgICAgaGFzaDogJycsXG4gICAgICAgIGhvc3Q6ICcnLFxuICAgICAgICBob3N0bmFtZTogJycsXG4gICAgICAgIGhyZWY6ICcnLFxuICAgICAgICBvcmlnaW46ICcnLFxuICAgICAgICBwYXRobmFtZTogJycsXG4gICAgICAgIHByb3RvY29sOiAnJyxcbiAgICAgICAgc2VhcmNoOiAnJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGdldERvY3VtZW50KCkge1xuICAgIGNvbnN0IGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuICAgIGV4dGVuZChkb2MsIHNzckRvY3VtZW50KTtcbiAgICByZXR1cm4gZG9jO1xufVxuXG5jb25zdCBzc3JXaW5kb3cgPSB7XG4gICAgZG9jdW1lbnQ6IHNzckRvY3VtZW50LFxuICAgIG5hdmlnYXRvcjoge1xuICAgICAgICB1c2VyQWdlbnQ6ICcnLFxuICAgIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgICAgaGFzaDogJycsXG4gICAgICAgIGhvc3Q6ICcnLFxuICAgICAgICBob3N0bmFtZTogJycsXG4gICAgICAgIGhyZWY6ICcnLFxuICAgICAgICBvcmlnaW46ICcnLFxuICAgICAgICBwYXRobmFtZTogJycsXG4gICAgICAgIHByb3RvY29sOiAnJyxcbiAgICAgICAgc2VhcmNoOiAnJyxcbiAgICB9LFxuICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgcmVwbGFjZVN0YXRlKCkgeyB9LFxuICAgICAgICBwdXNoU3RhdGUoKSB7IH0sXG4gICAgICAgIGdvKCkgeyB9LFxuICAgICAgICBiYWNrKCkgeyB9LFxuICAgIH0sXG4gICAgQ3VzdG9tRXZlbnQ6IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXIoKSB7IH0sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHsgfSxcbiAgICBnZXRDb21wdXRlZFN0eWxlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0UHJvcGVydHlWYWx1ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgSW1hZ2UoKSB7IH0sXG4gICAgRGF0ZSgpIHsgfSxcbiAgICBzY3JlZW46IHt9LFxuICAgIHNldFRpbWVvdXQoKSB7IH0sXG4gICAgY2xlYXJUaW1lb3V0KCkgeyB9LFxuICAgIG1hdGNoTWVkaWEoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgIH0sXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgfSxcbn07XG5mdW5jdGlvbiBnZXRXaW5kb3coKSB7XG4gICAgY29uc3Qgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbiAgICBleHRlbmQod2luLCBzc3JXaW5kb3cpO1xuICAgIHJldHVybiB3aW47XG59XG5cbmV4cG9ydCB7IGV4dGVuZCwgZ2V0RG9jdW1lbnQsIGdldFdpbmRvdywgc3NyRG9jdW1lbnQsIHNzcldpbmRvdyB9O1xuIl0sIm5hbWVzIjpbImlzT2JqZWN0Iiwib2JqIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJleHRlbmQiLCJ0YXJnZXQiLCJzcmMiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImxlbmd0aCIsInNzckRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJub2RlTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJzdHlsZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudE5TIiwiaW1wb3J0Tm9kZSIsImxvY2F0aW9uIiwiaGFzaCIsImhvc3QiLCJob3N0bmFtZSIsImhyZWYiLCJvcmlnaW4iLCJwYXRobmFtZSIsInByb3RvY29sIiwic2VhcmNoIiwiZ2V0RG9jdW1lbnQiLCJkb2MiLCJkb2N1bWVudCIsInNzcldpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJwdXNoU3RhdGUiLCJnbyIsImJhY2siLCJDdXN0b21FdmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiSW1hZ2UiLCJEYXRlIiwic2NyZWVuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1hdGNoTWVkaWEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJnZXRXaW5kb3ciLCJ3aW4iLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ssr-window/ssr-window.esm.js\n");

/***/ })

};
;