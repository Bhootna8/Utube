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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_Contexts_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/Contexts/Store */ \"(app-pages-browser)/./src/app/Contexts/Store.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_spinner_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/spinner.svg */ \"(app-pages-browser)/./public/spinner.svg\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MainContent = ()=>{\n    _s();\n    const { searchTerm, setSearchTerm, videos } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_Contexts_Store__WEBPACK_IMPORTED_MODULE_3__.resultContext);\n    console.log(searchTerm);\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)();\n    if (inView) {}\n    setTimeout(()=>{\n        document.getElementById(\"next-page-line\").style.display = \"block\";\n    }, 5000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" main-content overflow-y-auto py-5 flex flex-wrap w-full justify-evenly\",\n        children: [\n            videos === null || videos === void 0 ? void 0 : videos.map((item, index)=>{\n                var _item_id, _item_snippet_thumbnails_high, _item_snippet_thumbnails, _item_snippet, _item_snippet1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-[300px]  mx-auto my-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/video/\".concat(item === null || item === void 0 ? void 0 : (_item_id = item.id) === null || _item_id === void 0 ? void 0 : _item_id.videoId),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" w-[300px] h-[300px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item === null || item === void 0 ? void 0 : (_item_snippet = item.snippet) === null || _item_snippet === void 0 ? void 0 : (_item_snippet_thumbnails = _item_snippet.thumbnails) === null || _item_snippet_thumbnails === void 0 ? void 0 : (_item_snippet_thumbnails_high = _item_snippet_thumbnails.high) === null || _item_snippet_thumbnails_high === void 0 ? void 0 : _item_snippet_thumbnails_high.url,\n                                    className: \" w-[100%] min-h-[100%]\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item === null || item === void 0 ? void 0 : (_item_snippet1 = item.snippet) === null || _item_snippet1 === void 0 ? void 0 : _item_snippet1.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 14\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex items-center flex-col w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"loading\",\n                        src: _public_spinner_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        className: \" mx-auto\",\n                        width: \"auto\",\n                        height: 80\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: ref,\n                        className: \" hidden w-full h-10 bg-white\",\n                        id: \"next-page-line\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shubham\\\\Desktop\\\\NextJs\\\\yt\\\\src\\\\Components\\\\MainContent.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainContent, \"qySTgdwnjRwpeAFPg9zduhZaLxY=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView\n    ];\n});\n_c = MainContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);\nvar _c;\n$RefreshReg$(_c, \"MainContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL01haW5Db250ZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ1Q7QUFDc0I7QUFDeEI7QUFDa0I7QUFDUTtBQUd0RCxNQUFNTyxjQUFjOztJQUNwQixNQUFNLEVBQUNDLFVBQVUsRUFBRUMsYUFBYSxFQUFHQyxNQUFNLEVBQUMsR0FBR1QsaURBQVVBLENBQUNFLDhEQUFhQTtJQUNyRVEsUUFBUUMsR0FBRyxDQUFDSjtJQUVWLE1BQU0sRUFBQ0ssR0FBRyxFQUFFQyxNQUFNLEVBQUMsR0FBR1Isc0VBQVNBO0lBRS9CLElBQUdRLFFBQVEsQ0FFWDtJQUVBQyxXQUFXO1FBQ1hDLFNBQVNDLGNBQWMsQ0FBQyxrQkFBa0JDLEtBQUssQ0FBQ0MsT0FBTyxHQUFDO0lBQ3hELEdBQUc7SUFFSCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDVlgsbUJBQUFBLDZCQUFBQSxPQUFRWSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7b0JBRU9ELFVBRVRBLCtCQUFBQSwwQkFBQUEsZUFHUkE7cUNBTk4sOERBQUNIO29CQUFnQkMsV0FBVTs4QkFDMUIsNEVBQUNqQixrREFBSUE7d0JBQUNxQixNQUFNLFVBQTRCLE9BQWxCRixpQkFBQUEsNEJBQUFBLFdBQUFBLEtBQU1HLEVBQUUsY0FBUkgsK0JBQUFBLFNBQVVJLE9BQU87OzBDQUN0Qyw4REFBQ1A7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNPO29DQUFJQyxHQUFHLEVBQUVOLGlCQUFBQSw0QkFBQUEsZ0JBQUFBLEtBQU1PLE9BQU8sY0FBYlAscUNBQUFBLDJCQUFBQSxjQUFlUSxVQUFVLGNBQXpCUixnREFBQUEsZ0NBQUFBLHlCQUEyQlMsSUFBSSxjQUEvQlQsb0RBQUFBLDhCQUFpQ1UsR0FBRztvQ0FBRVosV0FBVTtvQ0FBeUJhLEtBQUk7Ozs7Ozs7Ozs7OzBDQUd6Riw4REFBQ0M7MENBQUdaLGlCQUFBQSw0QkFBQUEsaUJBQUFBLEtBQU1PLE9BQU8sY0FBYlAscUNBQUFBLGVBQWVhLEtBQUs7Ozs7Ozs7Ozs7OzttQkFOaEJaOzs7Ozs7MEJBV2QsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ25CLG1EQUFLQTt3QkFBQ2dDLEtBQUk7d0JBQVVMLEtBQUt4QiwyREFBT0E7d0JBQUVnQixXQUFVO3dCQUFXZ0IsT0FBTzt3QkFBUUMsUUFBUTs7Ozs7O2tDQUMvRSw4REFBQ2xCO3dCQUFJUCxLQUFLQTt3QkFBS1EsV0FBVTt3QkFBK0JLLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyRTtHQWxDTW5COztRQUlrQkQsa0VBQVNBOzs7S0FKM0JDO0FBb0NOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL01haW5Db250ZW50LmpzeD85NzgzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHJlc3VsdENvbnRleHQgfSBmcm9tICdAL2FwcC9Db250ZXh0cy9TdG9yZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc3Bpbm5lciBmcm9tICcuLi8uLi9wdWJsaWMvc3Bpbm5lci5zdmcnXHJcbmltcG9ydCB7IHVzZUluVmlld30gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xyXG5cclxuXHJcbmNvbnN0IE1haW5Db250ZW50ID0gKCkgPT4ge1xyXG5jb25zdCB7c2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSwgIHZpZGVvc30gPSB1c2VDb250ZXh0KHJlc3VsdENvbnRleHQpXHJcbmNvbnNvbGUubG9nKHNlYXJjaFRlcm0pXHJcblxyXG4gIGNvbnN0IHtyZWYsIGluVmlld30gPSB1c2VJblZpZXcoKVxyXG5cclxuICBpZihpblZpZXcpIHtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LXBhZ2UtbGluZScpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gIH0sIDUwMDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nIG1haW4tY29udGVudCBvdmVyZmxvdy15LWF1dG8gcHktNSBmbGV4IGZsZXgtd3JhcCB3LWZ1bGwganVzdGlmeS1ldmVubHknPlxyXG4gICAgICAgIHt2aWRlb3M/Lm1hcCgoaXRlbSwgaW5kZXgpPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nIHctWzMwMHB4XSAgbXgtYXV0byBteS00Jz5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdmlkZW8vJHtpdGVtPy5pZD8udmlkZW9JZH1gfSA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB3LVszMDBweF0gaC1bMzAwcHhdJz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtPy5zbmlwcGV0Py50aHVtYm5haWxzPy5oaWdoPy51cmx9IGNsYXNzTmFtZT0nIHctWzEwMCVdIG1pbi1oLVsxMDAlXScgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHA+e2l0ZW0/LnNuaXBwZXQ/LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgIDwvTGluaz4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGZsZXggaXRlbXMtY2VudGVyIGZsZXgtY29sIHctZnVsbCc+XHJcbiAgICAgICAgICA8SW1hZ2UgYWx0PSdsb2FkaW5nJyBzcmM9e3NwaW5uZXJ9IGNsYXNzTmFtZT0nIG14LWF1dG8nIHdpZHRoPXtcImF1dG9cIn0gaGVpZ2h0PXs4MH0+PC9JbWFnZT5cclxuICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT0nIGhpZGRlbiB3LWZ1bGwgaC0xMCBiZy13aGl0ZScgaWQ9J25leHQtcGFnZS1saW5lJz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiSW1hZ2UiLCJyZXN1bHRDb250ZXh0IiwiTGluayIsInNwaW5uZXIiLCJ1c2VJblZpZXciLCJNYWluQ29udGVudCIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwidmlkZW9zIiwiY29uc29sZSIsImxvZyIsInJlZiIsImluVmlldyIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaHJlZiIsImlkIiwidmlkZW9JZCIsImltZyIsInNyYyIsInNuaXBwZXQiLCJ0aHVtYm5haWxzIiwiaGlnaCIsInVybCIsImFsdCIsInAiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/MainContent.jsx\n"));

/***/ })

});