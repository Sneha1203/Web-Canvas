/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   COLORS: () => (/* binding */ COLORS),\n/* harmony export */   MENU_ITEMS: () => (/* binding */ MENU_ITEMS)\n/* harmony export */ });\nconst COLORS = {\n    BLACK: \"black\",\n    RED: \"red\",\n    GREEN: \"green\",\n    BLUE: \"blue\",\n    ORANGE: \"orange\",\n    YELLOW: \"yellow\",\n    WHITE: \"white\"\n};\nconst MENU_ITEMS = {\n    PENCIL: \"PENCIL\",\n    ERASER: \"ERASER\",\n    UNDO: \"UNDO\",\n    REDO: \"REDO\",\n    DOWNLOAD: \"DOWNLOAD\"\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsU0FBUztJQUNYQyxPQUFPO0lBQ1BDLEtBQUs7SUFDTEMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxPQUFPO0FBQ1g7QUFFQSxNQUFNQyxhQUFhO0lBQ2ZDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsVUFBVTtBQUNkO0FBRTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWNhbnZhcy8uL3NyYy9jb25zdGFudHMuanM/MmQzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT0xPUlMgPSB7XHJcbiAgICBCTEFDSzogJ2JsYWNrJyxcclxuICAgIFJFRDogJ3JlZCcsXHJcbiAgICBHUkVFTjogJ2dyZWVuJyxcclxuICAgIEJMVUU6ICdibHVlJyxcclxuICAgIE9SQU5HRTogJ29yYW5nZScsXHJcbiAgICBZRUxMT1c6ICd5ZWxsb3cnLFxyXG4gICAgV0hJVEU6ICd3aGl0ZSdcclxufVxyXG5cclxuY29uc3QgTUVOVV9JVEVNUyA9IHtcclxuICAgIFBFTkNJTDogJ1BFTkNJTCcsXHJcbiAgICBFUkFTRVI6ICdFUkFTRVInLFxyXG4gICAgVU5ETzogJ1VORE8nLFxyXG4gICAgUkVETzogJ1JFRE8nLFxyXG4gICAgRE9XTkxPQUQ6ICdET1dOTE9BRCdcclxufVxyXG5cclxuZXhwb3J0IHtDT0xPUlMsIE1FTlVfSVRFTVN9Il0sIm5hbWVzIjpbIkNPTE9SUyIsIkJMQUNLIiwiUkVEIiwiR1JFRU4iLCJCTFVFIiwiT1JBTkdFIiwiWUVMTE9XIiwiV0hJVEUiLCJNRU5VX0lURU1TIiwiUEVOQ0lMIiwiRVJBU0VSIiwiVU5ETyIsIlJFRE8iLCJET1dOTE9BRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ \"./src/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\KIIT\\\\.vscode\\\\16. Web Canvas\\\\Web-Canvas\\\\web-canvas\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KIIT\\\\.vscode\\\\16. Web Canvas\\\\Web-Canvas\\\\web-canvas\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNQO0FBQ0Y7QUFFZCxTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUFPLDhEQUFDSixpREFBUUE7UUFBQ0MsT0FBT0EseUNBQUtBO2tCQUMzQiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUU1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1jYW52YXMvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0Avc3RvcmUnXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvUHJvdmlkZXI+XG59Il0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/slice/menuSlice.js":
/*!********************************!*\
  !*** ./src/slice/menuSlice.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   actionItemClick: () => (/* binding */ actionItemClick),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   menuItemClick: () => (/* binding */ menuItemClick),\n/* harmony export */   menuSlice: () => (/* binding */ menuSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"./src/constants.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst initialState = {\n    activeMenuItem: _constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.PENCIL,\n    actionMenuItem: null\n};\nconst menuSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"menu\",\n    initialState,\n    reducers: {\n        menuItemClick: (state, action)=>{\n            state.activeMenuItem = action.payload;\n        },\n        actionItemClick: (state, action)=>{\n            state.actionMenuItem = action.payload;\n        }\n    }\n});\nconst { menuItemClick, actionItemClick } = menuSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2UvbWVudVNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM4QztBQUNOO0FBRXhDLE1BQU1FLGVBQWU7SUFDakJDLGdCQUFnQkYsa0RBQVVBLENBQUNHLE1BQU07SUFDakNDLGdCQUFnQjtBQUNwQjtBQUVPLE1BQU1DLFlBQVlOLDZEQUFXQSxDQUFDO0lBQ2pDTyxNQUFNO0lBQ05MO0lBQ0FNLFVBQVU7UUFDTkMsZUFBZSxDQUFDQyxPQUFPQztZQUNuQkQsTUFBTVAsY0FBYyxHQUFHUSxPQUFPQyxPQUFPO1FBQ3pDO1FBQ0FDLGlCQUFpQixDQUFDSCxPQUFPQztZQUNyQkQsTUFBTUwsY0FBYyxHQUFHTSxPQUFPQyxPQUFPO1FBQ3pDO0lBQ0o7QUFDSixHQUFFO0FBRUssTUFBTSxFQUFDSCxhQUFhLEVBQUVJLGVBQWUsRUFBQyxHQUFHUCxVQUFVUSxPQUFPO0FBRWpFLGlFQUFlUixVQUFVUyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWNhbnZhcy8uL3NyYy9zbGljZS9tZW51U2xpY2UuanM/NmNjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBNRU5VX0lURU1TIH0gZnJvbSAnQC9jb25zdGFudHMnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBhY3RpdmVNZW51SXRlbTogTUVOVV9JVEVNUy5QRU5DSUwsXHJcbiAgICBhY3Rpb25NZW51SXRlbTogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVudVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ21lbnUnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBtZW51SXRlbUNsaWNrOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVNZW51SXRlbSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpb25JdGVtQ2xpY2s6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmFjdGlvbk1lbnVJdGVtID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qge21lbnVJdGVtQ2xpY2ssIGFjdGlvbkl0ZW1DbGlja30gPSBtZW51U2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudVNsaWNlLnJlZHVjZXJcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiTUVOVV9JVEVNUyIsImluaXRpYWxTdGF0ZSIsImFjdGl2ZU1lbnVJdGVtIiwiUEVOQ0lMIiwiYWN0aW9uTWVudUl0ZW0iLCJtZW51U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJtZW51SXRlbUNsaWNrIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9uSXRlbUNsaWNrIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slice/menuSlice.js\n");

/***/ }),

/***/ "./src/slice/toolboxSlice.js":
/*!***********************************!*\
  !*** ./src/slice/toolboxSlice.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeBrushSize: () => (/* binding */ changeBrushSize),\n/* harmony export */   changeColor: () => (/* binding */ changeColor),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toolboxSlice: () => (/* binding */ toolboxSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"./src/constants.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst initialState = {\n    [_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.PENCIL]: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK,\n        size: 3\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.ERASER]: {\n        color: _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE,\n        size: 3\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.UNDO]: {},\n    [_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.REDO]: {},\n    [_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.DOWNLOAD]: {}\n};\nconst toolboxSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"toolbox\",\n    initialState,\n    reducers: {\n        changeColor: (state, action)=>{\n            state[action.payload.item].color = action.payload.color;\n        },\n        changeBrushSize: (state, action)=>{\n            state[action.payload.item].size = action.payload.size;\n        }\n    }\n});\nconst { changeColor, changeBrushSize } = toolboxSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toolboxSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2UvdG9vbGJveFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNFO0FBRWhELE1BQU1HLGVBQWU7SUFDakIsQ0FBQ0Ysa0RBQVVBLENBQUNHLE1BQU0sQ0FBQyxFQUFFO1FBQ2pCQyxPQUFPSCw4Q0FBTUEsQ0FBQ0ksS0FBSztRQUNuQkMsTUFBTTtJQUNWO0lBQ0EsQ0FBQ04sa0RBQVVBLENBQUNPLE1BQU0sQ0FBQyxFQUFFO1FBQ2pCSCxPQUFPSCw4Q0FBTUEsQ0FBQ08sS0FBSztRQUNuQkYsTUFBTTtJQUNWO0lBQ0EsQ0FBQ04sa0RBQVVBLENBQUNTLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDcEIsQ0FBQ1Qsa0RBQVVBLENBQUNVLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDcEIsQ0FBQ1Ysa0RBQVVBLENBQUNXLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDNUI7QUFFTyxNQUFNQyxlQUFlYiw2REFBV0EsQ0FBQztJQUNwQ2MsTUFBTTtJQUNOWDtJQUNBWSxVQUFVO1FBQ05DLGFBQWEsQ0FBQ0MsT0FBT0M7WUFDakJELEtBQUssQ0FBQ0MsT0FBT0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQ2YsS0FBSyxHQUFHYSxPQUFPQyxPQUFPLENBQUNkLEtBQUs7UUFDM0Q7UUFDQWdCLGlCQUFpQixDQUFDSixPQUFPQztZQUNyQkQsS0FBSyxDQUFDQyxPQUFPQyxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDYixJQUFJLEdBQUdXLE9BQU9DLE9BQU8sQ0FBQ1osSUFBSTtRQUN6RDtJQUNKO0FBQ0osR0FBRTtBQUVLLE1BQU0sRUFBQ1MsV0FBVyxFQUFFSyxlQUFlLEVBQUMsR0FBR1IsYUFBYVMsT0FBTztBQUVsRSxpRUFBZVQsYUFBYVUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1jYW52YXMvLi9zcmMvc2xpY2UvdG9vbGJveFNsaWNlLmpzP2FhNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBNRU5VX0lURU1TLCBDT0xPUlMgfSBmcm9tICdAL2NvbnN0YW50cydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIFtNRU5VX0lURU1TLlBFTkNJTF06IHtcclxuICAgICAgICBjb2xvcjogQ09MT1JTLkJMQUNLLFxyXG4gICAgICAgIHNpemU6IDNcclxuICAgIH0sXHJcbiAgICBbTUVOVV9JVEVNUy5FUkFTRVJdOiB7XHJcbiAgICAgICAgY29sb3I6IENPTE9SUy5XSElURSxcclxuICAgICAgICBzaXplOiAzXHJcbiAgICB9LFxyXG4gICAgW01FTlVfSVRFTVMuVU5ET106IHt9LFxyXG4gICAgW01FTlVfSVRFTVMuUkVET106IHt9LFxyXG4gICAgW01FTlVfSVRFTVMuRE9XTkxPQURdOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvb2xib3hTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICd0b29sYm94JyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgY2hhbmdlQ29sb3I6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlW2FjdGlvbi5wYXlsb2FkLml0ZW1dLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3JcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZUJydXNoU2l6ZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGVbYWN0aW9uLnBheWxvYWQuaXRlbV0uc2l6ZSA9IGFjdGlvbi5wYXlsb2FkLnNpemVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qge2NoYW5nZUNvbG9yLCBjaGFuZ2VCcnVzaFNpemV9ID0gdG9vbGJveFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvb2xib3hTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiTUVOVV9JVEVNUyIsIkNPTE9SUyIsImluaXRpYWxTdGF0ZSIsIlBFTkNJTCIsImNvbG9yIiwiQkxBQ0siLCJzaXplIiwiRVJBU0VSIiwiV0hJVEUiLCJVTkRPIiwiUkVETyIsIkRPV05MT0FEIiwidG9vbGJveFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiY2hhbmdlQ29sb3IiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJpdGVtIiwiY2hhbmdlQnJ1c2hTaXplIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slice/toolboxSlice.js\n");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _slice_menuSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/slice/menuSlice */ \"./src/slice/menuSlice.js\");\n/* harmony import */ var _slice_toolboxSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/slice/toolboxSlice */ \"./src/slice/toolboxSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _slice_menuSlice__WEBPACK_IMPORTED_MODULE_1__, _slice_toolboxSlice__WEBPACK_IMPORTED_MODULE_2__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _slice_menuSlice__WEBPACK_IMPORTED_MODULE_1__, _slice_toolboxSlice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        menu: _slice_menuSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        toolbox: _slice_toolboxSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUNOO0FBQ007QUFFMUMsTUFBTUcsUUFBUUgsZ0VBQWNBLENBQUM7SUFDaENJLFNBQVM7UUFDTEMsTUFBTUosd0RBQVdBO1FBQ2pCSyxTQUFTSiwyREFBY0E7SUFDM0I7QUFDSixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWNhbnZhcy8uL3NyYy9zdG9yZS5qcz9jZGFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IE1lbnVSZWR1Y2VyIGZyb20gJ0Avc2xpY2UvbWVudVNsaWNlJ1xyXG5pbXBvcnQgVG9vbGJveFJlZHVjZXIgZnJvbSAnQC9zbGljZS90b29sYm94U2xpY2UnXHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgICAgbWVudTogTWVudVJlZHVjZXIsXHJcbiAgICAgICAgdG9vbGJveDogVG9vbGJveFJlZHVjZXJcclxuICAgIH1cclxufSkiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJNZW51UmVkdWNlciIsIlRvb2xib3hSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwibWVudSIsInRvb2xib3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();