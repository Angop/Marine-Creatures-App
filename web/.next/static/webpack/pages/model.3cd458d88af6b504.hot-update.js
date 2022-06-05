"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/model",{

/***/ "./src/pages/model.tsx":
/*!*****************************!*\
  !*** ./src/pages/model.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Model\": function() { return /* binding */ Model; }\n/* harmony export */ });\n/* harmony import */ var D_SeniorProject_Marine_Creatures_App_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_SeniorProject_Marine_Creatures_App_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_SeniorProject_Marine_Creatures_App_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UploadField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UploadField */ \"./src/components/UploadField.tsx\");\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw1, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw1);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _throw(e) {\n    throw e;\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Model = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_6__.useFileUploadMutation)(), 2), ref1 = ref[0], ref1 = ref1 !== null ? ref1 : _throw(new TypeError(\"Cannot destructure undefined\")), fileUpload = ref[1];\n    return(// TODO: authenticate user and only allow them to see this page if they are logged in\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_5__.Wrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                image: null\n            },\n            onSubmit: function() {\n                var _ref = _asyncToGenerator(D_SeniorProject_Marine_Creatures_App_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {\n                    var response;\n                    return D_SeniorProject_Marine_Creatures_App_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                console.log(\"File uploaded\");\n                                console.log(\"values\", values);\n                                _ctx.next = 4;\n                                return fileUpload(values);\n                            case 4:\n                                response = _ctx.sent;\n                                return _ctx.abrupt(\"return\", response);\n                            case 6:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function(values) {\n                    return _ref.apply(this, arguments);\n                };\n            }(),\n            children: function(values, handleChange) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            mt: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UploadField__WEBPACK_IMPORTED_MODULE_4__.UploadField, {\n                                values: values,\n                                name: \"image\",\n                                label: \"image\",\n                                accepts: \"image/*\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\pages\\\\model.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\pages\\\\model.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            mt: 4,\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\pages\\\\model.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this1),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: values.image,\n                            alt: \"uploaded image\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\pages\\\\model.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            color: \"black\",\n                            children: [\n                                \"We have \",\n                                 true ? values === null : 0\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\pages\\\\model.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\pages\\\\model.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this1);\n            }\n        }, void 0, false, {\n            fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\pages\\\\model.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\pages\\\\model.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_s(Model, \"jmz0Icos6AX3jOL4DSmtSXWIdls=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_6__.useFileUploadMutation\n    ];\n});\n_c = Model;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\nvar _c;\n$RefreshReg$(_c, \"Model\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbW9kZWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDVDtBQUNaO0FBQzhCO0FBQ1I7QUFDYTs7QUFJdEQsSUFBTVEsS0FBSyxHQUF5QixnQkFBUTtRQUFQLHNGQUFFOzs7SUFDNUMsSUFBeUJELEdBQXVCLGtCQUF2QkEseUVBQXFCLEVBQUUsYUFBdkJBLEdBQXVCLEtBQXpDLG1GQUFFLEVBQUVFLFVBQVUsR0FBSUYsR0FBdUIsR0FBM0I7SUFDckIsT0FDRSxxRkFBcUY7a0JBQ3JGLDhEQUFDRCx3REFBTztrQkFDTiw0RUFBQ0gsMENBQU07WUFDTE8sYUFBYSxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsSUFBSTthQUFFO1lBQzlCQyxRQUFROzJCQUFFLHVMQUFPQyxNQUFNLEVBQUs7d0JBR3BCQyxRQUFROzs7O2dDQUZkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQ0FDN0JELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRUgsTUFBTSxDQUFDLENBQUM7O3VDQUNQSixVQUFVLENBQUNJLE1BQU0sQ0FBQzs7Z0NBQW5DQyxRQUFRLFlBQTJCOzZEQUNsQ0EsUUFBUTs7Ozs7O2lCQUNoQjtnQ0FMZ0JELE1BQU07Ozs7c0JBT3RCLFNBQUNBLE1BQU0sRUFBRUksWUFBWTtxQ0FDcEIsOERBQUNmLHdDQUFJOztzQ0FDSCw4REFBQ0YsaURBQUc7NEJBQUNrQixFQUFFLEVBQUUsQ0FBQztzQ0FDUiw0RUFBQ2IsZ0VBQVc7Z0NBQUNRLE1BQU0sRUFBRUEsTUFBTTtnQ0FBRU0sSUFBSSxFQUFDLE9BQU87Z0NBQUNDLEtBQUssRUFBQyxPQUFPO2dDQUFDQyxPQUFPLEVBQUMsU0FBUzs7Ozs7c0NBQUc7Ozs7O2tDQUN4RTtzQ0FDTiw4REFBQ3BCLG9EQUFNOzRCQUFDaUIsRUFBRSxFQUFFLENBQUM7NEJBQUVJLElBQUksRUFBQyxRQUFRO3NDQUFDLFFBRTdCOzs7OztrQ0FBUzt3QkFBQyxHQUFHO3NDQUNiLDhEQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVYLE1BQU0sQ0FBQ0YsS0FBSzs0QkFBRWMsR0FBRyxFQUFDLGdCQUFnQjs7Ozs7a0NBQUc7c0NBQy9DLDhEQUFDQyxJQUFFOzRCQUFDQyxLQUFLLEVBQUMsT0FBTzs7Z0NBQUMsVUFBUTtnQ0FBQyxLQUFhLEdBQUdkLE1BQU0sS0FBSyxJQUFJLEdBQUcsQ0FBaUI7Ozs7OztrQ0FBTTs7Ozs7OzBCQUMvRTthQUNSOzs7OztpQkFDTTs7Ozs7YUFDRCxFQUdWO0NBQ0gsQ0FBQztHQS9CV0wsS0FBSzs7UUFDU0QscUVBQXFCOzs7QUFEbkNDLEtBQUFBLEtBQUs7QUFpQ2xCLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21vZGVsLnRzeD9iYzMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVwbG9hZEZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXBsb2FkRmllbGRcIjtcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dyYXBwZXJcIjtcclxuaW1wb3J0IHsgdXNlRmlsZVVwbG9hZE11dGF0aW9uIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5pbnRlcmZhY2UgbW9kZWxQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IE1vZGVsOiBSZWFjdC5GQzxtb2RlbFByb3BzPiA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IFt7fSwgZmlsZVVwbG9hZF0gPSB1c2VGaWxlVXBsb2FkTXV0YXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgLy8gVE9ETzogYXV0aGVudGljYXRlIHVzZXIgYW5kIG9ubHkgYWxsb3cgdGhlbSB0byBzZWUgdGhpcyBwYWdlIGlmIHRoZXkgYXJlIGxvZ2dlZCBpblxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGltYWdlOiBudWxsIH19XHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWRlZFwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVzXCIsIHZhbHVlcyk7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZpbGVVcGxvYWQodmFsdWVzKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh2YWx1ZXMsIGhhbmRsZUNoYW5nZSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxVcGxvYWRGaWVsZCB2YWx1ZXM9e3ZhbHVlc30gbmFtZT1cImltYWdlXCIgbGFiZWw9XCJpbWFnZVwiIGFjY2VwdHM9XCJpbWFnZS8qXCIgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbXQ9ezR9IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+e1wiIFwifVxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dmFsdWVzLmltYWdlfSBhbHQ9XCJ1cGxvYWRlZCBpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjb2xvcj1cImJsYWNrXCI+V2UgaGF2ZSB7XCJudWxsIHZhbHVlc1wiID8gdmFsdWVzID09PSBudWxsIDogXCJub24gbnVsbCB2YWx1ZXNcIn08L2gxPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9XcmFwcGVyPlxyXG5cclxuICAgIC8vIFRPRE86IGRpc3BsYXkgdXBsb2FkZWQgZmlsZVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcclxuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkZvcm0iLCJGb3JtaWsiLCJSZWFjdCIsIlVwbG9hZEZpZWxkIiwiV3JhcHBlciIsInVzZUZpbGVVcGxvYWRNdXRhdGlvbiIsIk1vZGVsIiwiZmlsZVVwbG9hZCIsImluaXRpYWxWYWx1ZXMiLCJpbWFnZSIsIm9uU3VibWl0IiwidmFsdWVzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwibXQiLCJuYW1lIiwibGFiZWwiLCJhY2NlcHRzIiwidHlwZSIsImltZyIsInNyYyIsImFsdCIsImgxIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/model.tsx\n");

/***/ })

});