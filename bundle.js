/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/dialog.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/dialog.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dialog {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: 99;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.dialog-contents {\n  cursor: default;\n  z-index: 100;\n  position: fixed;\n  bottom: 0;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 30%;\n  height: 30%;\n  min-width: 465px;\n  min-height: 380px;\n  padding-top: 30px;\n  border-radius: 40px 40px 0 0;\n  animation: slide-up 2s 0s forwards;\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(50%);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n#dialog-product-item {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n}\n\n.dialog-form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\n#select-quantity {\n  width: 60px;\n  text-align: center;\n  cursor: default;\n}\n\n.select-quantity-box label {\n  margin-right: 30px;\n}\n\n.dialog-purchase-button {\n  position: absolute;\n  width: 80%;\n  bottom: 50px;\n  background: var(--primary-color);\n  color: var(--primary-button-text-color);\n}\n\n.dialog-purchase-button:hover {\n  background: var(--dialog-button-hover-color);\n}\n\n.select-quantity-button {\n  width: 30px;\n  background: var(--primary-color);\n  color: var(--primary-button-text-color);\n}\n\n.select-quantity-button:hover {\n  background: var(--dialog-button-hover-color);\n}\n", "",{"version":3,"sources":["webpack://./src/css/dialog.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,MAAM;EACN,OAAO;EACP,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,SAAS;EACT,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,4BAA4B;EAC5B,kCAAkC;AACpC;;AAEA;EACE;IACE,0BAA0B;IAC1B,UAAU;EACZ;;EAEA;IACE,wBAAwB;IACxB,UAAU;EACZ;AACF;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,gCAAgC;EAChC,uCAAuC;AACzC;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,WAAW;EACX,gCAAgC;EAChC,uCAAuC;AACzC;;AAEA;EACE,4CAA4C;AAC9C","sourcesContent":[".dialog {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: 99;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.dialog-contents {\n  cursor: default;\n  z-index: 100;\n  position: fixed;\n  bottom: 0;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 30%;\n  height: 30%;\n  min-width: 465px;\n  min-height: 380px;\n  padding-top: 30px;\n  border-radius: 40px 40px 0 0;\n  animation: slide-up 2s 0s forwards;\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(50%);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n#dialog-product-item {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n}\n\n.dialog-form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\n#select-quantity {\n  width: 60px;\n  text-align: center;\n  cursor: default;\n}\n\n.select-quantity-box label {\n  margin-right: 30px;\n}\n\n.dialog-purchase-button {\n  position: absolute;\n  width: 80%;\n  bottom: 50px;\n  background: var(--primary-color);\n  color: var(--primary-button-text-color);\n}\n\n.dialog-purchase-button:hover {\n  background: var(--dialog-button-hover-color);\n}\n\n.select-quantity-button {\n  width: 30px;\n  background: var(--primary-color);\n  color: var(--primary-button-text-color);\n}\n\n.select-quantity-button:hover {\n  background: var(--dialog-button-hover-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/global.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/global.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #00bcd4;\n  --primary-button-text-color: #ffffff;\n  --primary-input-bg-color: #ffffff;\n  --input-outline-color: #cccccc;\n  --input-border-color: #eeeeee;\n  --input-outline-focus-color: #777777;\n  --input-border-focus-color: #bbbbbb;\n  --button-hover-color: rgba(0, 188, 212, 0.16);\n  --dialog-button-hover-color: rgba(0, 188, 212, 0.5);\n  --primary-text-color: rgba(0, 0, 0, 0.87);\n  --list-border-color: #dcdcdc;\n}\n", "",{"version":3,"sources":["webpack://./src/css/global.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,oCAAoC;EACpC,iCAAiC;EACjC,8BAA8B;EAC9B,6BAA6B;EAC7B,oCAAoC;EACpC,mCAAmC;EACnC,6CAA6C;EAC7C,mDAAmD;EACnD,yCAAyC;EACzC,4BAA4B;AAC9B","sourcesContent":[":root {\n  --primary-color: #00bcd4;\n  --primary-button-text-color: #ffffff;\n  --primary-input-bg-color: #ffffff;\n  --input-outline-color: #cccccc;\n  --input-border-color: #eeeeee;\n  --input-outline-focus-color: #777777;\n  --input-border-focus-color: #bbbbbb;\n  --button-hover-color: rgba(0, 188, 212, 0.16);\n  --dialog-button-hover-color: rgba(0, 188, 212, 0.5);\n  --primary-text-color: rgba(0, 0, 0, 0.87);\n  --list-border-color: #dcdcdc;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/global.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/dialog.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n}\n\nh1 {\n  margin: 0;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 465px;\n  margin: auto;\n  gap: 20px;\n}\n\nheader {\n  text-align: center;\n  margin: 40px 0 10px 0;\n}\n\nnav {\n  margin: 2em 0;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\n\ninput[type='number']::-webkit-outer-spin-button,\ninput[type='number']::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type='submit'] {\n  cursor: pointer;\n  background: var(--primary-color);\n  color: var(--primary-button-text-color);\n  outline: 1px solid var(--primary-color);\n  border: 1px solid var(--primary-color);\n  border-radius: 2px;\n  width: 56px;\n  height: 28px;\n  margin-left: 10px;\n}\n\ninput {\n  background-color: var(--primary-input-bg-color);\n  outline: 1px solid var(--input-outline-color);\n  border: 1px solid var(--input-border-color);\n  border-radius: 2px;\n  width: 120px;\n  height: 24px;\n  padding: 1px 2px;\n}\n\ninput:focus {\n  outline: 1px solid var(--input-outline-focus-color);\n  border: 1px solid var(--input-border-focus-color);\n}\n\n#money-add-input {\n  width: 300px;\n}\n\nbutton {\n  cursor: pointer;\n  width: 117px;\n  height: 36px;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton:hover {\n  background: var(--button-hover-color);\n}\n\nh4 {\n  margin: 0;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.15px;\n  color: var(--primary-text-color);\n}\n\n#money-add-container {\n  margin: auto;\n}\n\n#product-list-container {\n  width: 100%;\n  margin: 20px 0 30px;\n}\n\n#product-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n#product-list-wrapper ul {\n  padding: 0;\n}\n\n#change-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#change-list-wrapper ul {\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n  text-align: center;\n  font-family: 'Roboto';\n  font-style: normal;\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid var(--list-border-color);\n}\n\n#product-list {\n  width: 100%;\n}\n\n#product-list li {\n  width: 100%;\n}\n\n.product-block {\n  margin: 12px 0px 8px;\n  width: 100%;\n  height: 30px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n}\n\n.product-modify-input {\n  width: 80%;\n  text-align: center;\n  outline: 1px dotted var(--input-outline-focus-color);\n  border: 1px dotted var(--input-border-focus-color);\n}\n\n.product-control-buttons {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.product-control-buttons button {\n  width: 40%;\n  height: 30px;\n  margin-top: -4px;\n}\n\n.product-modify-submit-button,\n.product-purchase-submit-button {\n  width: 90%;\n  margin-top: -8px;\n}\n\n#change-list li {\n  width: 300px;\n}\n\n.change-block {\n  margin: 8px 30px 0;\n  width: 70px;\n  height: 30px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n}\n\n.list-header {\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n  border-top: 1px solid var(--list-border-color);\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;EACE,YAAY;EACZ,aAAa;EACb,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,qBAAqB;AACvB;;AAEA;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gCAAgC;EAChC,uCAAuC;EACvC,uCAAuC;EACvC,sCAAsC;EACtC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,+CAA+C;EAC/C,6CAA6C;EAC7C,2CAA2C;EAC3C,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,mDAAmD;EACnD,iDAAiD;AACnD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,SAAS;EACT,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,iDAAiD;AACnD;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,oDAAoD;EACpD,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;;EAEE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,gCAAgC;EAChC,8CAA8C;AAChD","sourcesContent":["@import './global.css';\n@import './dialog.css';\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n}\n\nh1 {\n  margin: 0;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 465px;\n  margin: auto;\n  gap: 20px;\n}\n\nheader {\n  text-align: center;\n  margin: 40px 0 10px 0;\n}\n\nnav {\n  margin: 2em 0;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\n\ninput[type='number']::-webkit-outer-spin-button,\ninput[type='number']::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type='submit'] {\n  cursor: pointer;\n  background: var(--primary-color);\n  color: var(--primary-button-text-color);\n  outline: 1px solid var(--primary-color);\n  border: 1px solid var(--primary-color);\n  border-radius: 2px;\n  width: 56px;\n  height: 28px;\n  margin-left: 10px;\n}\n\ninput {\n  background-color: var(--primary-input-bg-color);\n  outline: 1px solid var(--input-outline-color);\n  border: 1px solid var(--input-border-color);\n  border-radius: 2px;\n  width: 120px;\n  height: 24px;\n  padding: 1px 2px;\n}\n\ninput:focus {\n  outline: 1px solid var(--input-outline-focus-color);\n  border: 1px solid var(--input-border-focus-color);\n}\n\n#money-add-input {\n  width: 300px;\n}\n\nbutton {\n  cursor: pointer;\n  width: 117px;\n  height: 36px;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton:hover {\n  background: var(--button-hover-color);\n}\n\nh4 {\n  margin: 0;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.15px;\n  color: var(--primary-text-color);\n}\n\n#money-add-container {\n  margin: auto;\n}\n\n#product-list-container {\n  width: 100%;\n  margin: 20px 0 30px;\n}\n\n#product-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n#product-list-wrapper ul {\n  padding: 0;\n}\n\n#change-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#change-list-wrapper ul {\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n  text-align: center;\n  font-family: 'Roboto';\n  font-style: normal;\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid var(--list-border-color);\n}\n\n#product-list {\n  width: 100%;\n}\n\n#product-list li {\n  width: 100%;\n}\n\n.product-block {\n  margin: 12px 0px 8px;\n  width: 100%;\n  height: 30px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n}\n\n.product-modify-input {\n  width: 80%;\n  text-align: center;\n  outline: 1px dotted var(--input-outline-focus-color);\n  border: 1px dotted var(--input-border-focus-color);\n}\n\n.product-control-buttons {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.product-control-buttons button {\n  width: 40%;\n  height: 30px;\n  margin-top: -4px;\n}\n\n.product-modify-submit-button,\n.product-purchase-submit-button {\n  width: 90%;\n  margin-top: -8px;\n}\n\n#change-list li {\n  width: 300px;\n}\n\n.change-block {\n  margin: 8px 30px 0;\n  width: 70px;\n  height: 30px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n}\n\n.list-header {\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n  border-top: 1px solid var(--list-border-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/components/PurchaseDialog.ts":
/*!*********************************************!*\
  !*** ./src/js/components/PurchaseDialog.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var body = document.querySelector('body');
var template = function (props) {
    var _a = props.product, name = _a.name, price = _a.price, amount = _a.amount, userMoney = props.userMoney;
    return "\n    <div class=\"dialog-contents\">\n        <div id=\"dialog-product-item\">\n            <p>\uC0C1\uD488\uBA85: ".concat(name, "</p>\n            <p>\uAC00\uACA9: ").concat(price, "</p>\n            <p>\uC218\uB7C9: ").concat(amount, "</p>\n            <p>\uD22C\uC785\uD55C \uAE08\uC561: ").concat(userMoney, "</p>\n        </div>\n        <form class=\"dialog-form\">\n            <div class=\"select-quantity-box\">\n                <label for=\"select-quantity\">\uC218\uB7C9\uC744 \uC120\uD0DD\uD558\uC138\uC694</label>\n                <button type=\"button\" class=\"select-quantity-button select-quantity-down-button\"><</button>\n                <input type=\"number\" id=\"select-quantity\" value=\"1\" readonly/>\n                <button type=\"button\" class=\"select-quantity-button select-quantity-up-button\">></button>\n            </div>\n            <button type=\"submit\" class=\"dialog-purchase-button\">\uAD6C\uB9E4\uD558\uAE30</button>\n        </form>\n    <div>\n  ");
};
var PurchaseDialog = function (props) {
    var _a = props.product, name = _a.name, price = _a.price, amount = _a.amount, callbackSubmitQuantity = props.callbackSubmitQuantity, ul = props.ul, oldLi = props.oldLi, userMoney = props.userMoney;
    var maxPurchaseAmount = (function () {
        var userAmount = Math.floor(userMoney / price);
        return amount >= userAmount ? userAmount : amount;
    })();
    var fragment = new DocumentFragment();
    var div = document.createElement('div');
    div.classList.add('dialog');
    div.insertAdjacentHTML('beforeend', template(props));
    fragment.appendChild(div);
    body.appendChild(fragment);
    var dialogForm = div.querySelector('.dialog-form');
    var selectQuantity = div.querySelector('#select-quantity');
    var downButton = div.querySelector('.select-quantity-down-button');
    var upButton = div.querySelector('.select-quantity-up-button');
    var onCloseDialog = function (e) {
        if (!(e.target instanceof HTMLElement) || e.target.className !== 'dialog')
            return;
        div.remove();
    };
    var onSubmit = function (e) {
        e.preventDefault();
        var quantity = selectQuantity.valueAsNumber;
        var newAmount = amount - quantity;
        var product = { name: name, price: price, amount: newAmount };
        callbackSubmitQuantity({ quantity: quantity, product: product, ul: ul, oldLi: oldLi });
        div.remove();
    };
    var onDownQuantity = function () {
        var nextValue = selectQuantity.valueAsNumber - 1;
        if (nextValue > 0)
            selectQuantity.valueAsNumber = nextValue;
    };
    var onUpQuantity = function () {
        var nextValue = selectQuantity.valueAsNumber + 1;
        if (nextValue > amount || nextValue > maxPurchaseAmount)
            return;
        selectQuantity.valueAsNumber = selectQuantity.valueAsNumber + 1;
    };
    div.addEventListener('click', onCloseDialog);
    dialogForm.addEventListener('submit', onSubmit);
    downButton.addEventListener('click', onDownQuantity);
    upButton.addEventListener('click', onUpQuantity);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseDialog);


/***/ }),

/***/ "./src/js/constants.ts":
/*!*****************************!*\
  !*** ./src/js/constants.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RULES": () => (/* binding */ RULES),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "REMOVE_CONFIRM_MESSAGE": () => (/* binding */ REMOVE_CONFIRM_MESSAGE)
/* harmony export */ });
var RULES = {
    MAX_PRODUCT_PRICE: 10000,
    MIN_PRODUCT_PRICE: 100,
    MAX_PRODUCT_AMOUNT: 20,
    MIN_PRODUCT_AMOUNT: 0,
    MAX_LENGTH_PRODUCT_NAME: 10,
    MINIMUM_CHANGE: 10,
    CHANGE_UNITS: [500, 100, 50, 10],
    MIN_INPUT_MONEY: 0,
    MAX_VENDING_MACHINE_CHANGE: 100000,
    MAX_USER_MONEY: 10000,
    NOT_EXIST_INDEX: -1
};
var ERROR_MESSAGE = {
    PRODUCT_NAME_IS_DUPLICATED: '이미 존재하는 이름의 상품입니다.',
    PRODUCT_NAME_LENGTH: "\uC0C1\uD488\uBA85\uC740 \uCD5C\uB300 ".concat(RULES.MAX_LENGTH_PRODUCT_NAME, "\uAE00\uC790\uAE4C\uC9C0 \uC785\uB825\uD574\uC8FC\uC138\uC694."),
    PRODUCT_PRICE: "\uC0C1\uD488\uAC00\uACA9\uC740 ".concat(RULES.MIN_PRODUCT_PRICE, "\uC6D0~").concat(RULES.MAX_PRODUCT_PRICE.toLocaleString(), "\uC6D0 \uC0AC\uC774\uC5EC\uC57C \uD558\uBA70 ").concat(RULES.MINIMUM_CHANGE, "\uC6D0\uC73C\uB85C \uB098\uB204\uC5B4 \uB5A8\uC5B4\uC838\uC57C \uD569\uB2C8\uB2E4."),
    PRODUCT_AMOUNT: "\uD55C \uC81C\uD488\uB2F9 \uC218\uB7C9\uC740 \uCD5C\uB300 ".concat(RULES.MAX_PRODUCT_AMOUNT, "\uAC1C \uC785\uB2C8\uB2E4."),
    TOO_MUCH_VENDING_MACHINE_CHANGE: "\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uC218 \uC788\uB294 \uCD5C\uB300 \uAE08\uC561\uC740 ".concat(RULES.MAX_VENDING_MACHINE_CHANGE.toLocaleString(), "\uC6D0 \uC785\uB2C8\uB2E4."),
    TOO_MUCH_USER_MONEY: "\uCD5C\uB300 \uD22C\uC785 \uAE08\uC561\uC740 ".concat(RULES.MAX_USER_MONEY.toLocaleString(), "\uC6D0 \uC785\uB2C8\uB2E4."),
    IS_NOT_UNIT_OF_TEN: "\uD22C\uC785\uD560 \uAE08\uC561\uC758 \uB2E8\uC704\uB294 ".concat(RULES.MINIMUM_CHANGE, "\uC6D0\uC785\uB2C8\uB2E4."),
    IS_NOT_POSITIVE_INTEGER: "\uD22C\uC785\uD560 \uAE08\uC561\uC740 ".concat(RULES.MIN_INPUT_MONEY, "\uBCF4\uB2E4 \uD070 \uAE08\uC561\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."),
    TOO_SHORT_MONEY: '돈이 부족합니다. 구매할 금액을 더 투입해주세요.',
    SOLD_OUT_PRODUCT: '품절된 상품입니다.'
};
var REMOVE_CONFIRM_MESSAGE = '정말로 삭제하시겠습니까?';



/***/ }),

/***/ "./src/js/model/VendingMachine.ts":
/*!****************************************!*\
  !*** ./src/js/model/VendingMachine.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./src/js/model/validator.ts");


var getRandomInt = function (max) { return Math.floor(Math.random() * max); };
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        this.changes = { coin10: 0, coin50: 0, coin100: 0, coin500: 0 };
        this.products = [];
        this.totalMoney = 0;
        this.userMoney = 0;
    }
    VendingMachine.prototype.getChanges = function () {
        return this.changes;
    };
    VendingMachine.prototype.getProducts = function () {
        return this.products;
    };
    VendingMachine.prototype.getTotalMoney = function () {
        return this.totalMoney;
    };
    VendingMachine.prototype.getUserMoney = function () {
        return this.userMoney;
    };
    VendingMachine.prototype.addChange = function (money) {
        this.checkChangeValidate(money);
        this.totalMoney += money;
        this.makeChangesToCoin(money);
    };
    VendingMachine.prototype.checkChangeValidate = function (money) {
        if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isPositiveInteger)(money)) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER);
        }
        if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isUnitOfTen)(money)) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.IS_NOT_UNIT_OF_TEN);
        }
        if (this.totalMoney + money > _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.MAX_VENDING_MACHINE_CHANGE) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.TOO_MUCH_VENDING_MACHINE_CHANGE);
        }
    };
    VendingMachine.prototype.makeChangesToCoin = function (money) {
        var coin = this.getChangeCoin(money);
        money -= coin;
        switch (coin) {
            case 500:
                this.changes.coin500 += 1;
                break;
            case 100:
                this.changes.coin100 += 1;
                break;
            case 50:
                this.changes.coin50 += 1;
                break;
            case 10:
                this.changes.coin10 += 1;
        }
        if (money >= _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.MINIMUM_CHANGE) {
            this.makeChangesToCoin(money);
        }
    };
    VendingMachine.prototype.getChangeCoin = function (money) {
        var coins = _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.CHANGE_UNITS.filter(function (coin) { return coin <= money; });
        var index = getRandomInt(coins.length);
        return coins[index];
    };
    VendingMachine.prototype.putMoney = function (money) {
        this.checkUserMoneyValidate(money);
        this.userMoney += money;
    };
    VendingMachine.prototype.checkUserMoneyValidate = function (money) {
        if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isPositiveInteger)(money)) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.IS_NOT_POSITIVE_INTEGER);
        }
        if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isUnitOfTen)(money)) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.IS_NOT_UNIT_OF_TEN);
        }
        if (this.userMoney + money > _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.MAX_USER_MONEY) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.TOO_MUCH_USER_MONEY);
        }
    };
    VendingMachine.prototype.purchaseProduct = function (newProduct, quantity) {
        var name = newProduct.name, price = newProduct.price, amount = newProduct.amount;
        this.modifyProduct(name, newProduct, false);
        this.userMoney -= quantity * price;
    };
    VendingMachine.prototype.addProduct = function (product) {
        this.checkProductValidate(product);
        this.products.push(product);
    };
    VendingMachine.prototype.modifyProduct = function (oldProductName, newProduct, canValidCheck) {
        if (canValidCheck === void 0) { canValidCheck = true; }
        var oldProductIndex = this.findProductIndex(oldProductName);
        if (canValidCheck)
            this.checkProductValidate(newProduct, oldProductIndex);
        this.products[oldProductIndex] = newProduct;
    };
    VendingMachine.prototype.removeProduct = function (name) {
        var productIndex = this.findProductIndex(name);
        var isExist = productIndex >= 0;
        if (isExist) {
            this.products.splice(productIndex, 1);
        }
    };
    VendingMachine.prototype.findProductIndex = function (name) {
        return this.products.findIndex(function (product) { return product.name === name; });
    };
    VendingMachine.prototype.checkProductValidate = function (product, originalIndex) {
        if (originalIndex === void 0) { originalIndex = _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.NOT_EXIST_INDEX; }
        var productIndex = this.findProductIndex(product.name);
        var isExist = productIndex >= 0;
        var isAddWithDuplicatedName = isExist && originalIndex === _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.NOT_EXIST_INDEX;
        var isModifyWithDuplicateName = isExist && originalIndex !== productIndex;
        if (isAddWithDuplicatedName || isModifyWithDuplicateName) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_NAME_IS_DUPLICATED);
        }
        if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isValidProductNameLength)(product.name)) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_NAME_LENGTH);
        }
        if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isValidProductPrice)(product.price)) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_PRICE);
        }
        if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isValidProductAmount)(product.amount)) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_AMOUNT);
        }
    };
    return VendingMachine;
}());
var vendingMachine = new VendingMachine();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vendingMachine);


/***/ }),

/***/ "./src/js/model/validator.ts":
/*!***********************************!*\
  !*** ./src/js/model/validator.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidProductNameLength": () => (/* binding */ isValidProductNameLength),
/* harmony export */   "isUnitOfTen": () => (/* binding */ isUnitOfTen),
/* harmony export */   "isPositiveInteger": () => (/* binding */ isPositiveInteger),
/* harmony export */   "isValidProductPrice": () => (/* binding */ isValidProductPrice),
/* harmony export */   "isValidProductAmount": () => (/* binding */ isValidProductAmount)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants.ts");

var isValidProductNameLength = function (name) {
    return name.length <= _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.MAX_LENGTH_PRODUCT_NAME && name.length > 0;
};
var isUnitOfTen = function (price) {
    return price % _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.MINIMUM_CHANGE === 0;
};
var isPositiveInteger = function (price) {
    return price > 0;
};
var isValidProductPrice = function (price) {
    return price >= _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.MIN_PRODUCT_PRICE && price <= _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.MAX_PRODUCT_PRICE && isUnitOfTen(price);
};
var isValidProductAmount = function (amount) {
    return amount > _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.MIN_PRODUCT_AMOUNT && amount <= _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.MAX_PRODUCT_AMOUNT;
};


/***/ }),

/***/ "./src/js/pages/ChangeAdd.ts":
/*!***********************************!*\
  !*** ./src/js/pages/ChangeAdd.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_VendingMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/VendingMachine */ "./src/js/model/VendingMachine.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template */ "./src/js/template/index.ts");


var ChangeAdd = /** @class */ (function () {
    function ChangeAdd() {
        var _this = this;
        this.onSubmitChangeAdd = function (e) {
            e.preventDefault();
            var inputChange = _this.$changeAddForm.querySelector('#money-add-input').valueAsNumber;
            try {
                _model_VendingMachine__WEBPACK_IMPORTED_MODULE_0__["default"].addChange(inputChange);
                _this.refreshChange();
            }
            catch (message) {
                alert(message);
            }
        };
        this.$inputSection = document.querySelector('.input-section');
        this.$contentsContainer = document.querySelector('.contents-container');
    }
    ChangeAdd.prototype.render = function () {
        this.$inputSection.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_1__["default"].moneyAddContainer({
            labelText: '자판기가 보유할 금액을 입력해주세요',
            buttonText: '충전',
            resultText: '현재 보유 금액'
        }));
        this.$contentsContainer.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_1__["default"].changeListWrapper());
        this.$changeAddForm = this.$inputSection.querySelector('#money-add-form');
        this.$totalChange = this.$inputSection.querySelector('#total-money');
        this.$changeList = this.$contentsContainer.querySelector('#change-list');
        this.$amountCoin500 = this.$changeList.querySelector('#amount-coin-500');
        this.$amountCoin100 = this.$changeList.querySelector('#amount-coin-100');
        this.$amountCoin50 = this.$changeList.querySelector('#amount-coin-50');
        this.$amountCoin10 = this.$changeList.querySelector('#amount-coin-10');
        this.$changeAddForm.addEventListener('submit', this.onSubmitChangeAdd);
        this.refreshChange();
    };
    ChangeAdd.prototype.refreshChange = function () {
        this.$totalChange.textContent = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_0__["default"].getTotalMoney().toLocaleString();
        var _a = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_0__["default"].getChanges(), coin10 = _a.coin10, coin50 = _a.coin50, coin100 = _a.coin100, coin500 = _a.coin500;
        this.$amountCoin500.textContent = coin500 + '개';
        this.$amountCoin100.textContent = coin100 + '개';
        this.$amountCoin50.textContent = coin50 + '개';
        this.$amountCoin10.textContent = coin10 + '개';
    };
    return ChangeAdd;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeAdd);


/***/ }),

/***/ "./src/js/pages/ProductManage.ts":
/*!***************************************!*\
  !*** ./src/js/pages/ProductManage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_VendingMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/VendingMachine */ "./src/js/model/VendingMachine.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants.ts");
/* harmony import */ var _template_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template/index */ "./src/js/template/index.ts");



var ProductManage = /** @class */ (function () {
    function ProductManage() {
        var _this = this;
        this.tabName = 'ProductManage';
        this.onSubmitNewProduct = function (e) {
            e.preventDefault();
            var name = _this.$productAddForm.querySelector('#product-name-input').value;
            var price = _this.$productAddForm.querySelector('#product-price-input').valueAsNumber;
            var amount = _this.$productAddForm.querySelector('#product-amount-input').valueAsNumber;
            var newProduct = { name: name, price: price, amount: amount };
            try {
                _model_VendingMachine__WEBPACK_IMPORTED_MODULE_0__["default"].addProduct(newProduct);
                _this.renderProductItem(newProduct);
            }
            catch (message) {
                alert(message);
            }
        };
        this.onClickModifyButton = function (e) {
            if (e.target.className !== 'product-modify-button') {
                return;
            }
            var ul = e.target.closest('ul');
            var oldLi = e.target.closest('li');
            var product = {
                name: oldLi.querySelector('.product-name').textContent,
                price: parseInt(oldLi.querySelector('.product-price').textContent),
                amount: parseInt(oldLi.querySelector('.product-amount').textContent)
            };
            var newLi = _this.replaceList(product, _template_index__WEBPACK_IMPORTED_MODULE_2__["default"].modifyProductItem);
            ul.replaceChild(newLi, oldLi);
        };
        this.onSubmitModifyCompleteButton = function (e) {
            if (e.target.className !== 'product-modify-submit-button') {
                return;
            }
            var ul = e.target.closest('ul');
            var oldLi = e.target.closest('li');
            var product = {
                name: oldLi.querySelector('.product-name-modify-input').value,
                price: oldLi.querySelector('.product-price-modify-input').valueAsNumber,
                amount: oldLi.querySelector('.product-amount-modify-input').valueAsNumber
            };
            var prevName = oldLi.querySelector('.product-modify-submit-button').dataset.name;
            try {
                _model_VendingMachine__WEBPACK_IMPORTED_MODULE_0__["default"].modifyProduct(prevName, product);
                var newLi = _this.replaceList(product, _template_index__WEBPACK_IMPORTED_MODULE_2__["default"].productItem);
                ul.replaceChild(newLi, oldLi);
            }
            catch (message) {
                alert(message);
            }
        };
        this.onClickRemoveButton = function (e) {
            if (e.target.className !== 'product-remove-button') {
                return;
            }
            if (!window.confirm(_constants__WEBPACK_IMPORTED_MODULE_1__.REMOVE_CONFIRM_MESSAGE)) {
                return;
            }
            var parentList = e.target.closest('li');
            var name = parentList.querySelector('.product-name').textContent;
            _model_VendingMachine__WEBPACK_IMPORTED_MODULE_0__["default"].removeProduct(name);
            parentList.remove();
        };
        this.replaceList = function (product, component) {
            var fragment = new DocumentFragment();
            var li = document.createElement('li');
            li.insertAdjacentHTML('beforeend', component(product));
            fragment.appendChild(li);
            return fragment;
        };
        this.$inputSection = document.querySelector('.input-section');
        this.$contentsContainer = document.querySelector('.contents-container');
    }
    ProductManage.prototype.render = function () {
        this.$inputSection.insertAdjacentHTML('beforeend', _template_index__WEBPACK_IMPORTED_MODULE_2__["default"].productManageContainer());
        this.$contentsContainer.insertAdjacentHTML('beforeend', _template_index__WEBPACK_IMPORTED_MODULE_2__["default"].productListContainer({ tabName: this.tabName, title: '상품 현황' }));
        this.$productAddForm = this.$inputSection.querySelector('#product-add-form');
        this.$productList = this.$contentsContainer.querySelector('#product-list');
        this.$productAddForm.addEventListener('submit', this.onSubmitNewProduct);
        this.$productList.addEventListener('click', this.onClickModifyButton);
        this.$productList.addEventListener('click', this.onSubmitModifyCompleteButton);
        this.$productList.addEventListener('click', this.onClickRemoveButton);
        this.renderProducts();
    };
    ProductManage.prototype.renderProducts = function () {
        var _this = this;
        var products = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_0__["default"].getProducts();
        products.forEach(function (product) {
            _this.renderProductItem(product);
        });
    };
    ProductManage.prototype.renderProductItem = function (product) {
        var fragment = new DocumentFragment();
        var li = document.createElement('li');
        li.insertAdjacentHTML('beforeend', _template_index__WEBPACK_IMPORTED_MODULE_2__["default"].productItem(product));
        fragment.appendChild(li);
        this.$productList.appendChild(fragment);
    };
    return ProductManage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductManage);


/***/ }),

/***/ "./src/js/pages/ProductPurchase.ts":
/*!*****************************************!*\
  !*** ./src/js/pages/ProductPurchase.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_PurchaseDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PurchaseDialog */ "./src/js/components/PurchaseDialog.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants.ts");
/* harmony import */ var _model_VendingMachine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/VendingMachine */ "./src/js/model/VendingMachine.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template */ "./src/js/template/index.ts");




var ProductPurchase = /** @class */ (function () {
    function ProductPurchase() {
        var _this = this;
        this.tabName = 'ProductPurchase';
        this.onSubmitMoneyAdd = function (e) {
            e.preventDefault();
            var inputMoney = _this.$moneyAddForm.querySelector('#money-add-input').valueAsNumber;
            try {
                _model_VendingMachine__WEBPACK_IMPORTED_MODULE_2__["default"].putMoney(inputMoney);
                _this.refreshUserMoney();
            }
            catch (message) {
                alert(message);
            }
        };
        this.callbackSubmitQuantity = function (props) {
            var quantity = props.quantity, product = props.product, ul = props.ul, oldLi = props.oldLi;
            _model_VendingMachine__WEBPACK_IMPORTED_MODULE_2__["default"].purchaseProduct(product, quantity);
            oldLi.querySelector('.product-amount').textContent = product.amount;
            _this.refreshUserMoney();
            console.log(_model_VendingMachine__WEBPACK_IMPORTED_MODULE_2__["default"].getProducts());
        };
        this.onClickPurchaseButton = function (e) {
            if (!(e.target instanceof HTMLButtonElement))
                return;
            var ul = e.target.closest('ul');
            var oldLi = e.target.closest('li');
            var name = oldLi.querySelector('.product-name').textContent;
            var price = parseInt(oldLi.querySelector('.product-price').textContent);
            var amount = parseInt(oldLi.querySelector('.product-amount').textContent);
            var userMoney = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_2__["default"].getUserMoney();
            if (price > userMoney) {
                alert(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.TOO_SHORT_MONEY);
                return;
            }
            if (amount === 0) {
                alert(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.SOLD_OUT_PRODUCT);
                return;
            }
            (0,_components_PurchaseDialog__WEBPACK_IMPORTED_MODULE_0__["default"])({
                product: { name: name, price: price, amount: amount },
                userMoney: userMoney,
                callbackSubmitQuantity: _this.callbackSubmitQuantity,
                ul: ul,
                oldLi: oldLi
            });
        };
        this.$inputSection = document.querySelector('.input-section');
        this.$contentsContainer = document.querySelector('.contents-container');
    }
    ProductPurchase.prototype.render = function () {
        console.log('productPurchase render');
        this.$inputSection.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_3__["default"].moneyAddContainer({
            labelText: '상품을 구매할 금액을 투입해주세요',
            buttonText: '투입',
            resultText: '투입한 금액'
        }));
        this.$contentsContainer.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_3__["default"].productListContainer({
            tabName: this.tabName,
            title: '구매 가능 상품 현황'
        }) + _template__WEBPACK_IMPORTED_MODULE_3__["default"].changeListWrapper());
        this.$moneyAddForm = this.$inputSection.querySelector('#money-add-form');
        this.$totalChange = this.$inputSection.querySelector('#total-money');
        this.$productList = this.$contentsContainer.querySelector('#product-list');
        this.$changeList = this.$contentsContainer.querySelector('#change-list');
        this.$amountCoin500 = this.$changeList.querySelector('#amount-coin-500');
        this.$amountCoin100 = this.$changeList.querySelector('#amount-coin-100');
        this.$amountCoin50 = this.$changeList.querySelector('#amount-coin-50');
        this.$amountCoin10 = this.$changeList.querySelector('#amount-coin-10');
        this.$productList.addEventListener('click', this.onClickPurchaseButton);
        this.$moneyAddForm.addEventListener('submit', this.onSubmitMoneyAdd);
        this.renderProducts();
        this.refreshUserMoney();
        this.refreshChange();
    };
    ProductPurchase.prototype.renderProducts = function () {
        var _this = this;
        var products = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_2__["default"].getProducts();
        products.forEach(function (product) {
            _this.renderProductItem(product);
        });
    };
    ProductPurchase.prototype.renderProductItem = function (product) {
        var fragment = new DocumentFragment();
        var li = document.createElement('li');
        li.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_3__["default"].purchaseProductItem(product));
        fragment.appendChild(li);
        this.$productList.appendChild(fragment);
    };
    ProductPurchase.prototype.refreshChange = function () {
        // this.$totalChange.textContent = vendingMachine.getTotalMoney().toString();
        var _a = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_2__["default"].getChanges(), coin10 = _a.coin10, coin50 = _a.coin50, coin100 = _a.coin100, coin500 = _a.coin500;
        this.$amountCoin500.textContent = coin500 + '개';
        this.$amountCoin100.textContent = coin100 + '개';
        this.$amountCoin50.textContent = coin50 + '개';
        this.$amountCoin10.textContent = coin10 + '개';
    };
    ProductPurchase.prototype.refreshUserMoney = function () {
        this.$totalChange.textContent = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_2__["default"].getUserMoney().toLocaleString();
    };
    return ProductPurchase;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPurchase);


/***/ }),

/***/ "./src/js/routes.ts":
/*!**************************!*\
  !*** ./src/js/routes.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_ChangeAdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/ChangeAdd */ "./src/js/pages/ChangeAdd.ts");
/* harmony import */ var _pages_ProductManage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/ProductManage */ "./src/js/pages/ProductManage.ts");
/* harmony import */ var _pages_ProductPurchase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/ProductPurchase */ "./src/js/pages/ProductPurchase.ts");



var clearPurchaseBody = function () {
    var $inputSection = document.querySelector('.input-section');
    var $contentsContainer = document.querySelector('.contents-container');
    $inputSection.replaceChildren();
    $contentsContainer.replaceChildren();
};
var router = function () {
    var productManage = new _pages_ProductManage__WEBPACK_IMPORTED_MODULE_1__["default"]();
    var changeAdd = new _pages_ChangeAdd__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var productPurchase = new _pages_ProductPurchase__WEBPACK_IMPORTED_MODULE_2__["default"]();
    var prevPath = '';
    return function () {
        var hash = window.location.hash;
        var isSamePage = prevPath === hash;
        if (isSamePage)
            return;
        prevPath = hash;
        clearPurchaseBody();
        switch (hash) {
            case '#!/product-manage':
                productManage.render();
                break;
            case '#!/change-add':
                changeAdd.render();
                break;
            case '#!/product-purchase':
                productPurchase.render();
        }
    };
};
var routes = router();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/js/template/changeListWrapper.ts":
/*!**********************************************!*\
  !*** ./src/js/template/changeListWrapper.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var changeListWrapper = function () {
    return "\n  <div id=\"change-list-wrapper\">\n    <h4>\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804</h4>\n    <ul id=\"change-list\">\n      <li class=\"list-header\">\n        <span class=\"change-block\">\uB3D9\uC804</span>\n        <span class=\"change-block\">\uAC1C\uC218</span>\n      </li>\n      <li>\n        <span class=\"change-block\">500\uC6D0</span>\n        <span id=\"amount-coin-500\" class=\"change-block\"></span>\n      </li>\n      <li>\n        <span class=\"change-block\">100\uC6D0</span>\n        <span id=\"amount-coin-100\" class=\"change-block\"></span>\n      </li>\n      <li>\n        <span class=\"change-block\">50\uC6D0</span>\n        <span id=\"amount-coin-50\" class=\"change-block\"></span>\n      </li>\n      <li>\n        <span class=\"change-block\">10\uC6D0</span>\n        <span id=\"amount-coin-10\" class=\"change-block\"></span>\n      </li>\n    </ul>\n  </div>";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeListWrapper);


/***/ }),

/***/ "./src/js/template/index.ts":
/*!**********************************!*\
  !*** ./src/js/template/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _changeListWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeListWrapper */ "./src/js/template/changeListWrapper.ts");
/* harmony import */ var _modifyProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifyProductItem */ "./src/js/template/modifyProductItem.ts");
/* harmony import */ var _moneyAddContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moneyAddContainer */ "./src/js/template/moneyAddContainer.ts");
/* harmony import */ var _productItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productItem */ "./src/js/template/productItem.ts");
/* harmony import */ var _productListContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productListContainer */ "./src/js/template/productListContainer.ts");
/* harmony import */ var _productManageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productManageContainer */ "./src/js/template/productManageContainer.ts");
/* harmony import */ var _purchaseProductItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchaseProductItem */ "./src/js/template/purchaseProductItem.ts");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    changeListWrapper: _changeListWrapper__WEBPACK_IMPORTED_MODULE_0__["default"],
    modifyProductItem: _modifyProductItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    moneyAddContainer: _moneyAddContainer__WEBPACK_IMPORTED_MODULE_2__["default"],
    productItem: _productItem__WEBPACK_IMPORTED_MODULE_3__["default"],
    productListContainer: _productListContainer__WEBPACK_IMPORTED_MODULE_4__["default"],
    productManageContainer: _productManageContainer__WEBPACK_IMPORTED_MODULE_5__["default"],
    purchaseProductItem: _purchaseProductItem__WEBPACK_IMPORTED_MODULE_6__["default"]
});


/***/ }),

/***/ "./src/js/template/modifyProductItem.ts":
/*!**********************************************!*\
  !*** ./src/js/template/modifyProductItem.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var modifyProductItem = function (product) {
    var name = product.name, price = product.price, amount = product.amount;
    return "\n    <span class=\"product-block\">\n      <input\n      type=\"text\"\n      class=\"product-name-modify-input product-modify-input\"\n      value=\"".concat(name, "\"\n      placeholder=\"\uC0C1\uD488\uBA85\"\n      required\n      />\n    </span>\n    <span class=\"product-block\">\n      <input\n      type=\"number\"\n      class=\"product-price-modify-input product-modify-input\"\n      value=\"").concat(price, "\"\n      placeholder=\"\uAC00\uACA9\"\n      required\n      />\n    </span>\n    <span class=\"product-block\">\n      <input\n      type=\"number\"\n      class=\"product-amount-modify-input product-modify-input\"\n      value=\"").concat(amount, "\"\n      placeholder=\"\uC218\uB7C9\"\n      required\n      />  \n    </span>\n    <span class=\"product-block\">\n      <button type=\"button\" class=\"product-modify-submit-button\" data-name=\"").concat(name, "\">\n        \uD655\uC778\n      </button>\n    </span>\n  ");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modifyProductItem);


/***/ }),

/***/ "./src/js/template/moneyAddContainer.ts":
/*!**********************************************!*\
  !*** ./src/js/template/moneyAddContainer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var moneyAddContainer = function (props) {
    var labelText = props.labelText, buttonText = props.buttonText, resultText = props.resultText;
    return "\n  <div id=\"money-add-container\">\n      <p><label for=\"money-add-input\">".concat(labelText, "</label></p>\n      <form id=\"money-add-form\">\n      <input\n          type=\"number\"\n          id=\"money-add-input\"\n          placeholder=\"\uAE08\uC561\"\n          required\n      />\n      <input type=\"submit\" value=\"").concat(buttonText, "\" />\n      </form>\n      <p>").concat(resultText, ": <span id=\"total-money\"></span>\uC6D0</p>\n  </div>");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moneyAddContainer);


/***/ }),

/***/ "./src/js/template/productItem.ts":
/*!****************************************!*\
  !*** ./src/js/template/productItem.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var productItem = function (product) {
    var name = product.name, price = product.price, amount = product.amount;
    return "\n    <span class=\"product-name product-block\">".concat(name, "</span>\n    <span class=\"product-price product-block\">").concat(price, "</span>\n    <span class=\"product-amount product-block\">").concat(amount, "</span>\n    <span class=\"product-control-buttons product-block\">\n      <button type=\"button\" class=\"product-modify-button\">\n        \uC218\uC815\n      </button>\n      <button type=\"button\" class=\"product-remove-button\">\n        \uC0AD\uC81C\n      </button>\n    </span>\n  ");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productItem);


/***/ }),

/***/ "./src/js/template/productListContainer.ts":
/*!*************************************************!*\
  !*** ./src/js/template/productListContainer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var productListContainer = function (props) {
    var title = props.title, tabName = props.tabName;
    var listHeaderText = tabName === 'ProductPurchase' ? '구매' : '';
    return "\n  <section id=\"product-list-container\">\n    <div id=\"product-list-wrapper\">\n      <h4>".concat(title, "</h4>\n      <ul id=\"product-list\">\n        <li class=\"list-header\">\n          <span class=\"product-block\">\uC0C1\uD488\uBA85</span>\n          <span class=\"product-block\">\uAC00\uACA9</span>\n          <span class=\"product-block\">\uC218\uB7C9</span>\n          <span class=\"product-block\">").concat(listHeaderText, "</span>\n        </li>\n      </ul>\n    </div>\n  </section>");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productListContainer);


/***/ }),

/***/ "./src/js/template/productManageContainer.ts":
/*!***************************************************!*\
  !*** ./src/js/template/productManageContainer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var productManageContainer = function () {
    return "\n  <div id=\"product-manage-container\">\n    <p>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</p>\n    <form id=\"product-add-form\">\n      <input\n        type=\"text\"\n        id=\"product-name-input\"\n        placeholder=\"\uC0C1\uD488\uBA85\"\n        required\n      />\n      <input\n        type=\"number\"\n        id=\"product-price-input\"\n        placeholder=\"\uAC00\uACA9\"\n        required\n      />\n      <input\n        type=\"number\"\n        id=\"product-amount-input\"\n        placeholder=\"\uC218\uB7C9\"\n        required\n      />\n      <input type=\"submit\" id=\"product-add-button\" value=\"\uCD94\uAC00\" />\n    </form>\n  </div>";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productManageContainer);


/***/ }),

/***/ "./src/js/template/purchaseProductItem.ts":
/*!************************************************!*\
  !*** ./src/js/template/purchaseProductItem.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var purchaseProductItem = function (product) {
    var name = product.name, price = product.price, amount = product.amount;
    return "\n    <span class=\"product-name product-block\">".concat(name, "</span>\n    <span class=\"product-price product-block\">").concat(price, "</span>\n    <span class=\"product-amount product-block\">").concat(amount, "</span>\n    <span class=\"product-block\">\n      <button type=\"button\" class=\"product-purchase-submit-button\" data-name=\"").concat(name, "\">\n        \uAD6C\uB9E4\n      </button>\n    </span>\n  ");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (purchaseProductItem);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index */ "./src/css/index.css");
/* harmony import */ var _js_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/routes */ "./src/js/routes.ts");


(0,_js_routes__WEBPACK_IMPORTED_MODULE_1__["default"])();
var productManageButton = document.querySelector('#product-manage-button');
var changeAddButton = document.querySelector('#change-add-button');
var productPurchaseButton = document.querySelector('#product-purchase-button');
productManageButton.addEventListener('click', function () {
    var _a = window.location, hash = _a.hash, pathname = _a.pathname;
    var path = '#!/product-manage';
    if (hash === path)
        return;
    history.pushState({}, '상품 관리하기', pathname + '#!/product-manage');
    (0,_js_routes__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
changeAddButton.addEventListener('click', function () {
    var _a = window.location, hash = _a.hash, pathname = _a.pathname;
    var path = '#!/change-add';
    if (hash === path)
        return;
    history.pushState({}, '잔돈 채우기', pathname + '#!/change-add');
    (0,_js_routes__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
productPurchaseButton.addEventListener('click', function () {
    var _a = window.location, hash = _a.hash, pathname = _a.pathname;
    var path = '#!/product-purchase';
    if (hash === path)
        return;
    history.pushState({}, '상품 구매', pathname + '#!/product-purchase');
    (0,_js_routes__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
window.addEventListener('popstate', function () {
    (0,_js_routes__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map