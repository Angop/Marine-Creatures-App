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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UploadField\": function() { return /* binding */ UploadField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\nvar UploadField = function(_param) {\n    var _this1 = _this;\n    var accepts = _param.accepts, props = _objectWithoutProperties(_param, [\n        \"accepts\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dropzone__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        onDrop: function(acceptedFiles) {\n            return console.log(acceptedFiles);\n        },\n        children: function(param) {\n            var getRootProps = param.getRootProps, getInputProps = param.getInputProps;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                            fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\components\\\\UploadField.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Drag and drop your files here\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\components\\\\UploadField.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\components\\\\UploadField.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\components\\\\UploadField.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this1);\n        }\n    }, void 0, false, {\n        fileName: \"D:\\\\SeniorProject\\\\Marine-Creatures-App\\\\web\\\\src\\\\components\\\\UploadField.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n\n_c = UploadField;\nvar _c;\n$RefreshReg$(_c, \"UploadField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcGxvYWRGaWVsZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBRWI7SUFPekJFLFdBQVcsR0FBK0IsaUJBR2pEOztRQUZKQyxPQUFPLFVBQVBBLE9BQU8sRUFDSkMsS0FBSztRQURSRCxTQUFPOztJQUdQLHFCQUNFLDhEQUFDRixzREFBUTtRQUFDSSxNQUFNLEVBQUVDLFNBQUFBLGFBQWE7bUJBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixhQUFhLENBQUM7U0FBQTtrQkFDMUQ7Z0JBQUdHLFlBQVksU0FBWkEsWUFBWSxFQUFFQyxhQUFhLFNBQWJBLGFBQWE7aUNBQy9CLDhEQUFDQyxTQUFPOzBCQUNOLDRFQUFDQyxLQUFHOztzQ0FDRiw4REFBQ0MsT0FBSzs7OztrQ0FBRTtzQ0FDUiw4REFBQ0MsR0FBQztzQ0FBQywrQkFBNkI7Ozs7O2tDQUFJOzs7Ozs7MEJBQ2hDOzs7OztzQkFDRTtTQUNUOzs7OzthQUNRLENBS1g7Q0FDSDtBQUFDO0FBcEJXWixLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEZpZWxkLnRzeD8xMDg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XHJcblxyXG50eXBlIFVwbG9hZEZpZWxkUHJvcHMgPSBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYWNjZXB0czogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwbG9hZEZpZWxkOiBSZWFjdC5GQzxVcGxvYWRGaWVsZFByb3BzPiA9ICh7XHJcbiAgYWNjZXB0cyxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wem9uZSBvbkRyb3A9e2FjY2VwdGVkRmlsZXMgPT4gY29uc29sZS5sb2coYWNjZXB0ZWRGaWxlcyl9PlxyXG4gICAgICB7KHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0pID0+IChcclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dC8+XHJcbiAgICAgICAgICA8cD5EcmFnIGFuZCBkcm9wIHlvdXIgZmlsZXMgaGVyZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApfVxyXG4gICAgPC9Ecm9wem9uZT5cclxuICAgIC8vIDxkaXYgey4uLnByb3BzfT5cclxuICAgIC8vICAgPGlucHV0IGFjY2VwdD17YWNjZXB0c30gey4uLnByb3BzfSAvPlxyXG4gICAgLy8gICA8RHJvcHpvbmU+PC9Ecm9wem9uZT5cclxuICAgIC8vIDwvZGl2PlxyXG4gICk7XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiRHJvcHpvbmUiLCJVcGxvYWRGaWVsZCIsImFjY2VwdHMiLCJwcm9wcyIsIm9uRHJvcCIsImFjY2VwdGVkRmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsInNlY3Rpb24iLCJkaXYiLCJpbnB1dCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UploadField.tsx\n");

/***/ })

});