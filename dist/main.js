/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage() {\n    const img = new Image();\n    img.src = \"../src/logo.jpeg\";\n\n    const h1 = document.createElement('h1');\n    h1.innerHTML = \"Contact\";\n\n    const p = document.createElement('p');\n    p.innerHTML = \"For reservations and enquiries please contact 099 12345678\";\n\n    const div = document.getElementById('content');\n\n    div.appendChild(img);\n    div.appendChild(h1);\n    div.appendChild(p);\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/contactTab.js?");

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPage)\n/* harmony export */ });\nfunction createPage() {\n    const img = new Image();\n    img.src = \"../src/logo.jpeg\";\n\n    const h1 = document.createElement('h1');\n    h1.innerHTML = \"The golden dish\";\n\n    const p = document.createElement('p');\n    p.innerHTML = \"The golden dish is the best restaurant in Mangochi\";\n\n    const div = document.getElementById('content');\n\n    div.appendChild(img);\n    div.appendChild(h1);\n    div.appendChild(p);\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/homeTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeTab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeTab.js */ \"./src/homeTab.js\");\n/* harmony import */ var _contactTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactTab.js */ \"./src/contactTab.js\");\n/* harmony import */ var _menuTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuTab.js */ \"./src/menuTab.js\");\n\n\n\n\nconst content = document.getElementById('content');\n\nconst header = document.createElement('header');\nconst nav = document.createElement('nav');\nconst navItems = ['Home','Contact','Menu'];\nconst tabFunctions = [_homeTab_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],_contactTab_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],_menuTab_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]\nfor (let i = 0; i < navItems.length; i++) {\n    const item = navItems[i];\n    const li = document.createElement('li');\n    li.textContent = item;\n    li.addEventListener('click', () => {\n        const pageContent = document.getElementById('content');\n        while(pageContent.firstChild){\n            pageContent.removeChild(pageContent.firstChild);\n        }\n        tabFunctions[i]();\n    })\n    nav.appendChild(li);\n}\nheader.appendChild(nav);\ncontent.before(header);\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction menuPage() {\n    const img = new Image();\n    img.src = \"../src/logo.jpeg\";\n\n    const h1 = document.createElement('h1');\n    h1.innerHTML = \"Menu\";\n\n    const p = document.createElement('p');\n    p.innerHTML = \"Braai chicken with your choice of nsima, rice or chips\";\n\n    const div = document.getElementById('content');\n\n    div.appendChild(img);\n    div.appendChild(h1);\n    div.appendChild(p);\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menuTab.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;