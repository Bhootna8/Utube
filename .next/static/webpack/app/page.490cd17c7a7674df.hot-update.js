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

/***/ "(app-pages-browser)/./src/Components/MainContent.jsx":
/*!****************************************!*\
  !*** ./src/Components/MainContent.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_Contexts_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/Contexts/Store */ \"(app-pages-browser)/./src/app/Contexts/Store.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_spinner_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/spinner.svg */ \"(app-pages-browser)/./public/spinner.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MainContent = ()=>{\n    _s();\n    const { searchTerm, setSearchTerm, videos } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_Contexts_Store__WEBPACK_IMPORTED_MODULE_3__.resultContext);\n    console.log(searchTerm);\n    setTimeout(()=>{\n        document.getElementById(\"next-page-line\").style.display = \"block\";\n    }, 5000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" main-content overflow-y-auto py-5 flex flex-wrap w-full justify-evenly\",\n        children: [\n            videos === null || videos === void 0 ? void 0 : videos.map((item, index)=>{\n                var _item_id, _item_snippet_thumbnails_high, _item_snippet_thumbnails, _item_snippet, _item_snippet1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-[300px]  mx-auto my-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/video/\".concat(item === null || item === void 0 ? void 0 : (_item_id = item.id) === null || _item_id === void 0 ? void 0 : _item_id.videoId),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" w-[300px] h-[300px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item === null || item === void 0 ? void 0 : (_item_snippet = item.snippet) === null || _item_snippet === void 0 ? void 0 : (_item_snippet_thumbnails = _item_snippet.thumbnails) === null || _item_snippet_thumbnails === void 0 ? void 0 : (_item_snippet_thumbnails_high = _item_snippet_thumbnails.high) === null || _item_snippet_thumbnails_high === void 0 ? void 0 : _item_snippet_thumbnails_high.url,\n                                    className: \" w-[100%] min-h-[100%]\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item === null || item === void 0 ? void 0 : (_item_snippet1 = item.snippet) === null || _item_snippet1 === void 0 ? void 0 : _item_snippet1.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 14\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex items-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    alt: \"loading\",\n                    src: _public_spinner_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    className: \" mx-auto\",\n                    width: \"auto\",\n                    height: 80\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainContent, \"AmNtqwXlRINR9mL2BHxIK9X7GKY=\");\n_c = MainContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);\nvar _c;\n$RefreshReg$(_c, \"MainContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL01haW5Db250ZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFdUM7QUFDVDtBQUNzQjtBQUN4QjtBQUNrQjtBQUc5QyxNQUFNTSxjQUFjOztJQUNwQixNQUFNLEVBQUNDLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxNQUFNLEVBQUMsR0FBR1IsaURBQVVBLENBQUNFLDhEQUFhQTtJQUNwRU8sUUFBUUMsR0FBRyxDQUFDSjtJQUVWSyxXQUFXO1FBQ1hDLFNBQVNDLGNBQWMsQ0FBQyxrQkFBa0JDLEtBQUssQ0FBQ0MsT0FBTyxHQUFDO0lBQzFELEdBQUc7SUFFRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDVlQsbUJBQUFBLDZCQUFBQSxPQUFRVSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7b0JBRU9ELFVBRVRBLCtCQUFBQSwwQkFBQUEsZUFHUkE7cUNBTk4sOERBQUNIO29CQUFnQkMsV0FBVTs4QkFDMUIsNEVBQUNkLGtEQUFJQTt3QkFBQ2tCLE1BQU0sVUFBNEIsT0FBbEJGLGlCQUFBQSw0QkFBQUEsV0FBQUEsS0FBTUcsRUFBRSxjQUFSSCwrQkFBQUEsU0FBVUksT0FBTzs7MENBQ3RDLDhEQUFDUDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ087b0NBQUlDLEdBQUcsRUFBRU4saUJBQUFBLDRCQUFBQSxnQkFBQUEsS0FBTU8sT0FBTyxjQUFiUCxxQ0FBQUEsMkJBQUFBLGNBQWVRLFVBQVUsY0FBekJSLGdEQUFBQSxnQ0FBQUEseUJBQTJCUyxJQUFJLGNBQS9CVCxvREFBQUEsOEJBQWlDVSxHQUFHO29DQUFFWixXQUFVO29DQUF5QmEsS0FBSTs7Ozs7Ozs7Ozs7MENBR3pGLDhEQUFDQzswQ0FBR1osaUJBQUFBLDRCQUFBQSxpQkFBQUEsS0FBTU8sT0FBTyxjQUFiUCxxQ0FBQUEsZUFBZWEsS0FBSzs7Ozs7Ozs7Ozs7O21CQU5oQlo7Ozs7OzswQkFXZCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNoQixtREFBS0E7b0JBQUM2QixLQUFJO29CQUFVTCxLQUFLckIsMkRBQU9BO29CQUFFYSxXQUFVO29CQUFXZ0IsT0FBTztvQkFBUUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekY7R0E1Qk03QjtLQUFBQTtBQThCTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9NYWluQ29udGVudC5qc3g/OTc4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyByZXN1bHRDb250ZXh0IH0gZnJvbSAnQC9hcHAvQ29udGV4dHMvU3RvcmUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHNwaW5uZXIgZnJvbSAnLi4vLi4vcHVibGljL3NwaW5uZXIuc3ZnJ1xyXG5cclxuXHJcbmNvbnN0IE1haW5Db250ZW50ID0gKCkgPT4ge1xyXG5jb25zdCB7c2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSwgdmlkZW9zfSA9IHVzZUNvbnRleHQocmVzdWx0Q29udGV4dClcclxuY29uc29sZS5sb2coc2VhcmNoVGVybSlcclxuXHJcbiAgc2V0VGltZW91dCgoKT0+IHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1wYWdlLWxpbmUnKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxufSwgNTAwMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPScgbWFpbi1jb250ZW50IG92ZXJmbG93LXktYXV0byBweS01IGZsZXggZmxleC13cmFwIHctZnVsbCBqdXN0aWZ5LWV2ZW5seSc+XHJcbiAgICAgICAge3ZpZGVvcz8ubWFwKChpdGVtLCBpbmRleCk9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPScgdy1bMzAwcHhdICBteC1hdXRvIG15LTQnPlxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj17YC92aWRlby8ke2l0ZW0/LmlkPy52aWRlb0lkfWB9ID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHctWzMwMHB4XSBoLVszMDBweF0nPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0/LnNuaXBwZXQ/LnRodW1ibmFpbHM/LmhpZ2g/LnVybH0gY2xhc3NOYW1lPScgdy1bMTAwJV0gbWluLWgtWzEwMCVdJyBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8cD57aXRlbT8uc25pcHBldD8udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgPC9MaW5rPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsJz5cclxuICAgICAgICAgIDxJbWFnZSBhbHQ9J2xvYWRpbmcnIHNyYz17c3Bpbm5lcn0gY2xhc3NOYW1lPScgbXgtYXV0bycgd2lkdGg9e1wiYXV0b1wifSBoZWlnaHQ9ezgwfT48L0ltYWdlPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkltYWdlIiwicmVzdWx0Q29udGV4dCIsIkxpbmsiLCJzcGlubmVyIiwiTWFpbkNvbnRlbnQiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInZpZGVvcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImhyZWYiLCJpZCIsInZpZGVvSWQiLCJpbWciLCJzcmMiLCJzbmlwcGV0IiwidGh1bWJuYWlscyIsImhpZ2giLCJ1cmwiLCJhbHQiLCJwIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/MainContent.jsx\n"));

/***/ })

});