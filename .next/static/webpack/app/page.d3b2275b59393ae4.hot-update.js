"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Contexts/Store.js":
/*!***********************************!*\
  !*** ./src/app/Contexts/Store.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Store: function() { return /* binding */ Store; },\n/* harmony export */   resultContext: function() { return /* binding */ resultContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Request */ \"(app-pages-browser)/./src/Request.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ resultContext,Store auto */ \nvar _s = $RefreshSig$();\n\n\nconst resultContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst Store = (param)=>{\n    let { children } = param;\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"pokemon\");\n    const [pageToken, setPageToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [datas, setDatas] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        _Request__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/\", {\n            params: {\n                q: searchTerm,\n                pageToken: pageToken\n            }\n        }).then((res)=>{\n            console.log(res.data);\n            setVideos([\n                videos.push()\n            ]);\n            console.log(videos);\n            setDatas(res.data);\n        });\n    }, [\n        searchTerm,\n        pageToken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(resultContext.Provider, {\n        value: {\n            searchTerm,\n            videos,\n            datas,\n            setPageToken,\n            setSearchTerm,\n            setVideos\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\app\\\\Contexts\\\\Store.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Store, \"rCOPFU7zn36BwB/ryzT0EoQg1Kk=\");\n_c = Store;\nvar _c;\n$RefreshReg$(_c, \"Store\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29udGV4dHMvU3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDc0M7QUFFL0QsTUFBTUssOEJBQWdCSixvREFBYUEsR0FBRztBQUd0QyxNQUFNSyxRQUFRO1FBQUMsRUFBQ0MsUUFBUSxFQUFDOztJQUM1QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNOSixnREFBT0EsQ0FBQ2dCLEdBQUcsQ0FBQyxLQUFLO1lBQ2JDLFFBQVE7Z0JBQ0pDLEdBQUdWO2dCQUNIRSxXQUFXQTtZQUVmO1FBQ0osR0FBR1MsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUNGLElBQUlHLElBQUk7WUFDcEJSLFVBQVU7Z0JBQUNELE9BQU9VLElBQUk7YUFBRztZQUN6QkgsUUFBUUMsR0FBRyxDQUFDUjtZQUNaRCxTQUFTTyxJQUFJRyxJQUFJO1FBQ3JCO0lBQ0osR0FBRztRQUFDZjtRQUFZRTtLQUFVO0lBRTFCLHFCQUNJLDhEQUFDTCxjQUFjb0IsUUFBUTtRQUFDQyxPQUFPO1lBQUNsQjtZQUFZTTtZQUFRRjtZQUFPRDtZQUFjRjtZQUFlTTtRQUFTO2tCQUM1RlI7Ozs7OztBQUliLEVBQUM7R0EzQllEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29udGV4dHMvU3RvcmUuanM/NmI1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIkAvUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCByZXN1bHRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yZSA9ICh7Y2hpbGRyZW59KT0+IHtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCdwb2tlbW9uJylcclxuICAgIGNvbnN0IFtwYWdlVG9rZW4sIHNldFBhZ2VUb2tlbl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtkYXRhcywgc2V0RGF0YXNdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbdmlkZW9zLCBzZXRWaWRlb3NdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIFJlcXVlc3QuZ2V0KCcvJywge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHE6IHNlYXJjaFRlcm0sXHJcbiAgICAgICAgICAgICAgICBwYWdlVG9rZW46IHBhZ2VUb2tlblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlcz0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgICAgIHNldFZpZGVvcyhbdmlkZW9zLnB1c2goKV0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpZGVvcylcclxuICAgICAgICAgICAgc2V0RGF0YXMocmVzLmRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtzZWFyY2hUZXJtLCBwYWdlVG9rZW5dKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8cmVzdWx0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3NlYXJjaFRlcm0sIHZpZGVvcywgZGF0YXMsIHNldFBhZ2VUb2tlbiwgc2V0U2VhcmNoVGVybSwgc2V0VmlkZW9zfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L3Jlc3VsdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJSZXF1ZXN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJlc3VsdENvbnRleHQiLCJTdG9yZSIsImNoaWxkcmVuIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJwYWdlVG9rZW4iLCJzZXRQYWdlVG9rZW4iLCJkYXRhcyIsInNldERhdGFzIiwidmlkZW9zIiwic2V0VmlkZW9zIiwiZ2V0IiwicGFyYW1zIiwicSIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Contexts/Store.js\n"));

/***/ })

});