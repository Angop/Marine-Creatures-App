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

/***/ "./src/components/UploadField.tsx":
/*!****************************************!*\
  !*** ./src/components/UploadField.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UploadField\": function() { return /* binding */ UploadField; }\n/* harmony export */ });\n/* harmony import */ var D_SeniorProject_Marine_Creatures_App_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_SeniorProject_Marine_Creatures_App_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_SeniorProject_Marine_Creatures_App_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw1, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw1);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _throw(e) {\n    throw e;\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar UploadField = function(param1) {\n    var accepts = param1.accepts, name = param1.name, label = param1.label, values = param1.values;\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useFileUploadMutation)(), 2), ref1 = ref[0], ref1 = ref1 !== null ? ref1 : _throw(new TypeError(\"Cannot destructure undefined\")), fileUpload = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_dropzone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        onDrop: function(acceptedFiles) {\n            acceptedFiles.forEach(function(file) {\n                console.log(file);\n                var reader = new FileReader();\n                reader.onabort = function() {\n                    return console.log(\"file reading was aborted\");\n                };\n                reader.onerror = function() {\n                    return console.log(\"file reading has failed\");\n                };\n                reader.onload = _asyncToGenerator(D_SeniorProject_Marine_Creatures_App_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var binaryStr;\n                    return D_SeniorProject_Marine_Creatures_App_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                binaryStr = reader.result;\n                                console.log(binaryStr);\n                                values.image = binaryStr;\n                            case 3:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                // const response = await fileUpload(file);\n                }));\n                reader.readAsArrayBuffer(file);\n            });\n        },\n        children: function(param) {\n            var getRootProps = param.getRootProps, getInputProps = param.getInputProps;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", _objectSpread({}, getRootProps(), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                            name: name\n                        }, getInputProps()), void 0, false, {\n                            fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\components\\\\UploadField.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Drag and drop your files here\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\components\\\\UploadField.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }), void 0, true, {\n                    fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\components\\\\UploadField.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\components\\\\UploadField.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this1);\n        }\n    }, void 0, false, {\n        fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\components\\\\UploadField.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(UploadField, \"jmz0Icos6AX3jOL4DSmtSXWIdls=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useFileUploadMutation\n    ];\n});\n_c = UploadField;\nvar _c;\n$RefreshReg$(_c, \"UploadField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGxvYWRGaWVsZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFYjtBQUNnQzs7QUFTL0QsSUFBTUcsV0FBVyxHQUErQixpQkFLakQ7UUFKSkMsT0FBTyxVQUFQQSxPQUFPLEVBQ1BDLElBQUksVUFBSkEsSUFBSSxFQUNKQyxLQUFLLFVBQUxBLEtBQUssRUFDTEMsTUFBTSxVQUFOQSxNQUFNOzs7SUFFTixJQUF5QkwsR0FBdUIsa0JBQXZCQSx5RUFBcUIsRUFBRSxhQUF2QkEsR0FBdUIsS0FBekMsbUZBQUUsRUFBRU0sVUFBVSxHQUFJTixHQUF1QixHQUEzQjtJQUNyQixxQkFDRSw4REFBQ0Qsc0RBQVE7UUFDUFEsTUFBTSxFQUFFLFNBQUNDLGFBQWEsRUFBSztZQUN6QkEsYUFBYSxDQUFDQyxPQUFPLENBQUMsU0FBQ0MsSUFBSSxFQUFLO2dCQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztnQkFDakIsSUFBTUcsTUFBTSxHQUFHLElBQUlDLFVBQVUsRUFBRTtnQkFFL0JELE1BQU0sQ0FBQ0UsT0FBTyxHQUFHOzJCQUFNSixPQUFPLENBQUNDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQztpQkFBQSxDQUFDO2dCQUMvREMsTUFBTSxDQUFDRyxPQUFPLEdBQUc7MkJBQU1MLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixDQUFDO2lCQUFBLENBQUM7Z0JBQzlEQyxNQUFNLENBQUNJLE1BQU0sR0FBRyx5TEFBWTt3QkFFcEJDLFNBQVM7Ozs7Z0NBQVRBLFNBQVMsR0FBR0wsTUFBTSxDQUFDTSxNQUFNLENBQUM7Z0NBQ2hDUixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sU0FBUyxDQUFDLENBQUM7Z0NBQ3ZCYixNQUFNLENBQUNlLEtBQUssR0FBR0YsU0FBUyxDQUFDOzs7Ozs7Z0JBQ3pCLDJDQUEyQztpQkFDNUMsR0FBQztnQkFDRkwsTUFBTSxDQUFDUSxpQkFBaUIsQ0FBQ1gsSUFBSSxDQUFDLENBQUM7YUFDaEMsQ0FBQyxDQUFDO1NBQ0o7a0JBRUE7Z0JBQUdZLFlBQVksU0FBWkEsWUFBWSxFQUFFQyxhQUFhLFNBQWJBLGFBQWE7aUNBQzdCLDhEQUFDQyxTQUFPOzBCQUNOLDRFQUFDQyxLQUFHLG9CQUFLSCxZQUFZLEVBQUU7O3NDQUNyQiw4REFBQ0ksT0FBSzs0QkFBQ3ZCLElBQUksRUFBRUEsSUFBSTsyQkFBTW9CLGFBQWEsRUFBRTs7OztrQ0FBSTtzQ0FDMUMsOERBQUNJLEdBQUM7c0NBQUMsK0JBQTZCOzs7OztrQ0FBSTs7Ozs7OzBCQUNoQzs7Ozs7c0JBQ0U7U0FDWDs7Ozs7YUFDUSxDQUNYO0NBQ0gsQ0FBQztHQXJDVzFCLFdBQVc7O1FBTUdELHFFQUFxQjs7O0FBTm5DQyxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEZpZWxkLnRzeD8xMDg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XHJcbmltcG9ydCB7IFNjYWxhcnMsIHVzZUZpbGVVcGxvYWRNdXRhdGlvbiB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5cclxudHlwZSBVcGxvYWRGaWVsZFByb3BzID0gSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiAmIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBhY2NlcHRzOiBzdHJpbmc7XHJcbiAgdmFsdWVzOiBhbnk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVXBsb2FkRmllbGQ6IFJlYWN0LkZDPFVwbG9hZEZpZWxkUHJvcHM+ID0gKHtcclxuICBhY2NlcHRzLFxyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgdmFsdWVzLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3t9LCBmaWxlVXBsb2FkXSA9IHVzZUZpbGVVcGxvYWRNdXRhdGlvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcHpvbmVcclxuICAgICAgb25Ecm9wPXsoYWNjZXB0ZWRGaWxlcykgPT4ge1xyXG4gICAgICAgIGFjY2VwdGVkRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZmlsZSlcclxuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSAoKSA9PiBjb25zb2xlLmxvZyhcImZpbGUgcmVhZGluZyB3YXMgYWJvcnRlZFwiKTtcclxuICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4gY29uc29sZS5sb2coXCJmaWxlIHJlYWRpbmcgaGFzIGZhaWxlZFwiKTtcclxuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IHdpdGggdGhlIGZpbGUgY29udGVudHNcclxuICAgICAgICAgICAgY29uc3QgYmluYXJ5U3RyID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYmluYXJ5U3RyKTtcclxuICAgICAgICAgICAgdmFsdWVzLmltYWdlID0gYmluYXJ5U3RyO1xyXG4gICAgICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZpbGVVcGxvYWQoZmlsZSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7KHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0pID0+IChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcygpfT5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9e25hbWV9IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XHJcbiAgICAgICAgICAgIDxwPkRyYWcgYW5kIGRyb3AgeW91ciBmaWxlcyBoZXJlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApfVxyXG4gICAgPC9Ecm9wem9uZT5cclxuICApO1xyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRHJvcHpvbmUiLCJ1c2VGaWxlVXBsb2FkTXV0YXRpb24iLCJVcGxvYWRGaWVsZCIsImFjY2VwdHMiLCJuYW1lIiwibGFiZWwiLCJ2YWx1ZXMiLCJmaWxlVXBsb2FkIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsImZvckVhY2giLCJmaWxlIiwiY29uc29sZSIsImxvZyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmFib3J0Iiwib25lcnJvciIsIm9ubG9hZCIsImJpbmFyeVN0ciIsInJlc3VsdCIsImltYWdlIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwic2VjdGlvbiIsImRpdiIsImlucHV0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UploadField.tsx\n");

/***/ })

});