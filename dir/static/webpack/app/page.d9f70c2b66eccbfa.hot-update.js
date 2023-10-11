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

/***/ "(app-pages-browser)/./src/components/TopicList.jsx":
/*!**************************************!*\
  !*** ./src/components/TopicList.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RemoveButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemoveButton */ \"(app-pages-browser)/./src/components/RemoveButton.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_HiOutlineTrash_HiPencilAlt_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=HiOutlineTrash,HiPencilAlt!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TopicList() {\n    _s();\n    const [topics, setTopics] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const loadData = ()=>{\n        setIsLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3000/api/topics\").then((res)=>{\n            setTopics(res.data.data);\n        }).finally(()=>{\n            setIsLoading(false);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadData();\n    }, []);\n    const handleDelete = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:3000/api/topics/\".concat(id)).then((res)=>{\n            loadData();\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"bg-grey-500 ...\",\n                    disabled: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"animate-spin h-5 w-5 mr-3 ...\",\n                            viewBox: \"0 0 24 24\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 3\n                        }, this),\n                        \"Processing...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                lineNumber: 32,\n                columnNumber: 16\n            }, this),\n            topics && topics.length > 0 && topics.map((elem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"font-bold text-2xl\",\n                                    children: elem.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: elem.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"text-red-400\",\n                                    onClick: ()=>{\n                                        handleDelete(elem._id);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineTrash_HiPencilAlt_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineTrash, {\n                                        size: 24\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 9\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 5\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/editTopic/\".concat(elem._id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineTrash_HiPencilAlt_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiPencilAlt, {\n                                        size: 24\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 9\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 5\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 5\n                        }, this)\n                    ]\n                }, elem._id, true, {\n                    fileName: \"C:\\\\Users\\\\ganesh_ad\\\\Documents\\\\nextcrud\\\\nextjs_crud\\\\src\\\\components\\\\TopicList.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 53\n                }, this))\n        ]\n    }, void 0, true);\n}\n_s(TopicList, \"HqNni0zz/tFUhZBR2r/YGyHu5Z0=\");\n_c = TopicList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopicList);\nvar _c;\n$RefreshReg$(_c, \"TopicList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RvcGljTGlzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDZDtBQUNiO0FBQzhCO0FBQ2pDO0FBQ3pCLFNBQVNTOztJQUVQLE1BQU0sQ0FBQ0MsUUFBT0MsVUFBVSxHQUFFUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1MsV0FBVUMsYUFBYSxHQUFDViwrQ0FBUUEsQ0FBQztJQUV4QyxNQUFNVyxXQUFTO1FBQ2JELGFBQWE7UUFDYkwsNkNBQUtBLENBQUNPLEdBQUcsQ0FBQyxvQ0FBb0NDLElBQUksQ0FBQ0MsQ0FBQUE7WUFDakROLFVBQVVNLElBQUlDLElBQUksQ0FBQ0EsSUFBSTtRQUMzQixHQUFHQyxPQUFPLENBQUM7WUFDVE4sYUFBYTtRQUNmO0lBQ0E7SUFDQVgsZ0RBQVNBLENBQUM7UUFDVFk7SUFDRCxHQUFFLEVBQUU7SUFFSixNQUFNTSxlQUFjLENBQUNDO1FBQ25CYiw2Q0FBS0EsQ0FBQ2MsTUFBTSxDQUFDLG9DQUF1QyxPQUFIRCxLQUFNTCxJQUFJLENBQUNDLENBQUFBO1lBQzFESDtRQUNGO0lBQ0Y7SUFFQSxxQkFDQzs7WUFDQ0YsMkJBQVcsOERBQUNXOzBCQUNaLDRFQUFDQztvQkFBT0MsTUFBSztvQkFBU0MsV0FBVTtvQkFBa0JDLFFBQVE7O3NDQUM1RCw4REFBQ0M7NEJBQUlGLFdBQVU7NEJBQWdDRyxTQUFROzs7Ozs7d0JBRWpEOzs7Ozs7Ozs7Ozs7WUFLSm5CLFVBQVVBLE9BQU9vQixNQUFNLEdBQUMsS0FBS3BCLE9BQU9xQixHQUFHLENBQUNDLENBQUFBLHFCQUFRLDhEQUFDVDtvQkFBbUJHLFdBQVU7O3NDQUM5RSw4REFBQ0g7OzhDQUNHLDhEQUFDVTtvQ0FBR1AsV0FBVTs4Q0FBc0JNLEtBQUtFLEtBQUs7Ozs7Ozs4Q0FDOUMsOERBQUNYOzhDQUFLUyxLQUFLRyxXQUFXOzs7Ozs7Ozs7Ozs7c0NBSzFCLDhEQUFDWjs0QkFBSUcsV0FBVTs7OENBQ2YsOERBQUNGO29DQUFPRSxXQUFVO29DQUFlVSxTQUFTO3dDQUFLaEIsYUFBYVksS0FBS0ssR0FBRztvQ0FBQzs4Q0FDakUsNEVBQUMvQiw0R0FBY0E7d0NBQUNnQyxNQUFNOzs7Ozs7Ozs7Ozs4Q0FFMUIsOERBQUNqQyxrREFBSUE7b0NBQUNrQyxNQUFNLGNBQXVCLE9BQVRQLEtBQUtLLEdBQUc7OENBQzlCLDRFQUFDOUIseUdBQVdBO3dDQUFDK0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQWJtQ04sS0FBS0ssR0FBRzs7Ozs7OztBQW9CdEU7R0F0RFM1QjtLQUFBQTtBQXdEVCwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub3BpY0xpc3QuanN4PzhmMWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVtb3ZlQnV0dG9uIGZyb20gJy4vUmVtb3ZlQnV0dG9uJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7SGlPdXRsaW5lVHJhc2gsIEhpUGVuY2lsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmZ1bmN0aW9uIFRvcGljTGlzdCgpIHtcclxuXHJcbiAgY29uc3QgW3RvcGljcyxzZXRUb3BpY3NdID11c2VTdGF0ZShbXSlcclxuICBjb25zdCBbaXNMb2FkaW5nLHNldElzTG9hZGluZ109dXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGxvYWREYXRhPSgpPT57XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90b3BpY3MnKS50aGVuKHJlcz0+e1xyXG4gICAgICBzZXRUb3BpY3MocmVzLmRhdGEuZGF0YSlcclxuICB9KS5maW5hbGx5KCgpPT57XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgIGxvYWREYXRhKClcclxuICB9LFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPShpZCk9PntcclxuICAgIGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90b3BpY3MvJHtpZH1gKS50aGVuKHJlcz0+e1xyXG4gICAgICBsb2FkRGF0YSgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgPD4gXHJcbiAgIHtpc0xvYWRpbmcmJjxkaXY+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJiZy1ncmV5LTUwMCAuLi5cIiBkaXNhYmxlZD5cclxuICA8c3ZnIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiBoLTUgdy01IG1yLTMgLi4uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICBcclxuICA8L3N2Zz5cclxuICBQcm9jZXNzaW5nLi4uXHJcbjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+fVxyXG4gICBcclxuICAge3RvcGljcyAmJiB0b3BpY3MubGVuZ3RoPjAgJiYgdG9waWNzLm1hcChlbGVtPT4oIDxkaXYga2V5PXtlbGVtLl9pZH0gY2xhc3NOYW1lPSdwLTQgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgbXktMyBmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAtNSBpdGVtcy1zdGFydCc+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LTJ4bCc+e2VsZW0udGl0bGV9PC9oMj5cclxuICAgICAgICA8ZGl2PntlbGVtLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC0yJz5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXJlZC00MDAnIG9uQ2xpY2s9eygpPT57aGFuZGxlRGVsZXRlKGVsZW0uX2lkKX19PlxyXG4gICAgICAgIDxIaU91dGxpbmVUcmFzaCBzaXplPXsyNH0vPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8TGluayBocmVmPXtgL2VkaXRUb3BpYy8ke2VsZW0uX2lkfWB9PlxyXG4gICAgICAgIDxIaVBlbmNpbEFsdCBzaXplPXsyNH0vPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICApKSB9XHJcbiAgICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BpY0xpc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlbW92ZUJ1dHRvbiIsIkxpbmsiLCJIaU91dGxpbmVUcmFzaCIsIkhpUGVuY2lsQWx0IiwiYXhpb3MiLCJUb3BpY0xpc3QiLCJ0b3BpY3MiLCJzZXRUb3BpY3MiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJsb2FkRGF0YSIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZmluYWxseSIsImhhbmRsZURlbGV0ZSIsImlkIiwiZGVsZXRlIiwiZGl2IiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwic3ZnIiwidmlld0JveCIsImxlbmd0aCIsIm1hcCIsImVsZW0iLCJoMiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvbkNsaWNrIiwiX2lkIiwic2l6ZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TopicList.jsx\n"));

/***/ })

});