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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #00bcd4;\n  --primary-button-text-color: #ffffff;\n  --primary-input-bg-color: #ffffff;\n  --input-outline-color: #cccccc;\n  --input-border-color: #eeeeee;\n  --input-outline-focus-color: #777777;\n  --input-border-focus-color: #bbbbbb;\n  --button-hover-color: rgba(0, 188, 212, 0.16);\n  --dialog-button-hover-color: rgba(0, 188, 212, 0.5);\n  --primary-text-color: rgba(0, 0, 0, 0.87);\n  --list-border-color: #dcdcdc;\n  --input-disabled-bg-color: #ccc;\n}\n", "",{"version":3,"sources":["webpack://./src/css/global.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,oCAAoC;EACpC,iCAAiC;EACjC,8BAA8B;EAC9B,6BAA6B;EAC7B,oCAAoC;EACpC,mCAAmC;EACnC,6CAA6C;EAC7C,mDAAmD;EACnD,yCAAyC;EACzC,4BAA4B;EAC5B,+BAA+B;AACjC","sourcesContent":[":root {\n  --primary-color: #00bcd4;\n  --primary-button-text-color: #ffffff;\n  --primary-input-bg-color: #ffffff;\n  --input-outline-color: #cccccc;\n  --input-border-color: #eeeeee;\n  --input-outline-focus-color: #777777;\n  --input-border-focus-color: #bbbbbb;\n  --button-hover-color: rgba(0, 188, 212, 0.16);\n  --dialog-button-hover-color: rgba(0, 188, 212, 0.5);\n  --primary-text-color: rgba(0, 0, 0, 0.87);\n  --list-border-color: #dcdcdc;\n  --input-disabled-bg-color: #ccc;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./login.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/login.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n\n  font-family: 'Roboto';\n  font-style: normal;\n  letter-spacing: 0.5px;\n}\n\nh1 {\n  margin: 0;\n}\n\n#app {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 465px;\n  margin: auto;\n  gap: 20px;\n  /* border: 1px solid blue; */\n}\n\nheader {\n  text-align: center;\n  margin: 40px 0 10px 0;\n}\n\nnav {\n  margin: 2em 0;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\n\ninput[type='number']::-webkit-outer-spin-button,\ninput[type='number']::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type='submit'] {\n  cursor: pointer;\n  background: var(--primary-color);\n  color: var(--primary-button-text-color);\n  outline: 1px solid var(--primary-color);\n  border: 1px solid var(--primary-color);\n  border-radius: 2px;\n  width: 56px;\n  height: 28px;\n  margin-left: 10px;\n}\n\ninput {\n  background-color: var(--primary-input-bg-color);\n  outline: 1px solid var(--input-outline-color);\n  border: 1px solid var(--input-border-color);\n  border-radius: 2px;\n  width: 120px;\n  height: 24px;\n  padding: 1px 2px;\n}\n\ninput:focus {\n  outline: 1px solid var(--input-outline-focus-color);\n  border: 1px solid var(--input-border-focus-color);\n}\n\n#money-add-input {\n  width: 300px;\n}\n\nbutton {\n  cursor: pointer;\n  width: 117px;\n  height: 36px;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton:hover {\n  background: var(--button-hover-color);\n}\n\nh4 {\n  margin: 0;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.15px;\n  color: var(--primary-text-color);\n}\n\n#money-add-container {\n  margin: auto;\n}\n\n#product-list-container {\n  width: 100%;\n  margin: 20px 0 30px;\n}\n\n#product-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n#product-list-wrapper ul {\n  padding: 0;\n}\n\n#change-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#change-list-wrapper ul {\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n  text-align: center;\n  font-family: 'Roboto';\n  font-style: normal;\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid var(--list-border-color);\n}\n\n#product-list {\n  width: 100%;\n}\n\n#product-list li {\n  width: 100%;\n}\n\n.product-block {\n  margin: 12px 0px 8px;\n  width: 100%;\n  height: 30px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n}\n\n.product-modify-input {\n  width: 80%;\n  text-align: center;\n  outline: 1px dotted var(--input-outline-focus-color);\n  border: 1px dotted var(--input-border-focus-color);\n}\n\n.product-control-buttons {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.product-control-buttons button {\n  width: 40%;\n  height: 30px;\n  margin-top: -4px;\n}\n\n.product-modify-submit-button,\n.product-purchase-submit-button {\n  width: 90%;\n  margin-top: -8px;\n}\n\n#change-list li {\n  width: 300px;\n}\n\n.change-block {\n  margin: 8px 30px 0;\n  width: 70px;\n  height: 30px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n}\n\n.list-header {\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n  border-top: 1px solid var(--list-border-color);\n}\n\n#account-nav-container {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 10px;\n}\n\n.hide {\n  display: none;\n}\n\n#dropdown-select {\n  width: 40px;\n  height: 40px;\n  background-color: #d6f4f8;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  overflow: hidden;\n  -o-appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n#dropdown-select::-ms-expand {\n  display: none;\n}\n\n/* --------------------------------------------- */\n\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 0;\n}\n\n.show {\n  visibility: visible !important; /* Show the snackbar */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.7s;\n  animation: fadein 0.5s, fadeout 0.5s 2.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAIA;EACE,YAAY;EACZ,aAAa;EACb,SAAS;;EAET,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,SAAS;EACT,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,qBAAqB;AACvB;;AAEA;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gCAAgC;EAChC,uCAAuC;EACvC,uCAAuC;EACvC,sCAAsC;EACtC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,+CAA+C;EAC/C,6CAA6C;EAC7C,2CAA2C;EAC3C,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,mDAAmD;EACnD,iDAAiD;AACnD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,SAAS;EACT,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,iDAAiD;AACnD;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,oDAAoD;EACpD,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;;EAEE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,gCAAgC;EAChC,8CAA8C;AAChD;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA,kDAAkD;;AAElD;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,SAAS;AACX;;AAEA;EACE,8BAA8B,EAAE,sBAAsB;EACtD,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":["@import './global.css';\n@import './dialog.css';\n@import './login.css';\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n\n  font-family: 'Roboto';\n  font-style: normal;\n  letter-spacing: 0.5px;\n}\n\nh1 {\n  margin: 0;\n}\n\n#app {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 465px;\n  margin: auto;\n  gap: 20px;\n  /* border: 1px solid blue; */\n}\n\nheader {\n  text-align: center;\n  margin: 40px 0 10px 0;\n}\n\nnav {\n  margin: 2em 0;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\n\ninput[type='number']::-webkit-outer-spin-button,\ninput[type='number']::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type='submit'] {\n  cursor: pointer;\n  background: var(--primary-color);\n  color: var(--primary-button-text-color);\n  outline: 1px solid var(--primary-color);\n  border: 1px solid var(--primary-color);\n  border-radius: 2px;\n  width: 56px;\n  height: 28px;\n  margin-left: 10px;\n}\n\ninput {\n  background-color: var(--primary-input-bg-color);\n  outline: 1px solid var(--input-outline-color);\n  border: 1px solid var(--input-border-color);\n  border-radius: 2px;\n  width: 120px;\n  height: 24px;\n  padding: 1px 2px;\n}\n\ninput:focus {\n  outline: 1px solid var(--input-outline-focus-color);\n  border: 1px solid var(--input-border-focus-color);\n}\n\n#money-add-input {\n  width: 300px;\n}\n\nbutton {\n  cursor: pointer;\n  width: 117px;\n  height: 36px;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton:hover {\n  background: var(--button-hover-color);\n}\n\nh4 {\n  margin: 0;\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.15px;\n  color: var(--primary-text-color);\n}\n\n#money-add-container {\n  margin: auto;\n}\n\n#product-list-container {\n  width: 100%;\n  margin: 20px 0 30px;\n}\n\n#product-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n#product-list-wrapper ul {\n  padding: 0;\n}\n\n#change-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#change-list-wrapper ul {\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n  text-align: center;\n  font-family: 'Roboto';\n  font-style: normal;\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid var(--list-border-color);\n}\n\n#product-list {\n  width: 100%;\n}\n\n#product-list li {\n  width: 100%;\n}\n\n.product-block {\n  margin: 12px 0px 8px;\n  width: 100%;\n  height: 30px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n}\n\n.product-modify-input {\n  width: 80%;\n  text-align: center;\n  outline: 1px dotted var(--input-outline-focus-color);\n  border: 1px dotted var(--input-border-focus-color);\n}\n\n.product-control-buttons {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.product-control-buttons button {\n  width: 40%;\n  height: 30px;\n  margin-top: -4px;\n}\n\n.product-modify-submit-button,\n.product-purchase-submit-button {\n  width: 90%;\n  margin-top: -8px;\n}\n\n#change-list li {\n  width: 300px;\n}\n\n.change-block {\n  margin: 8px 30px 0;\n  width: 70px;\n  height: 30px;\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n}\n\n.list-header {\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.5px;\n  color: var(--primary-text-color);\n  border-top: 1px solid var(--list-border-color);\n}\n\n#account-nav-container {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 10px;\n}\n\n.hide {\n  display: none;\n}\n\n#dropdown-select {\n  width: 40px;\n  height: 40px;\n  background-color: #d6f4f8;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  overflow: hidden;\n  -o-appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n#dropdown-select::-ms-expand {\n  display: none;\n}\n\n/* --------------------------------------------- */\n\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 0;\n}\n\n.show {\n  visibility: visible !important; /* Show the snackbar */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.7s;\n  animation: fadein 0.5s, fadeout 0.5s 2.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/login.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/login.css ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".account-container {\n  width: 100%;\n}\n\n.account-form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  /* height: auto; */\n}\n\n.login-block {\n  display: flex;\n  flex-direction: column;\n  height: 80px;\n  width: 100%;\n  margin: 8px 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.login-block label {\n  margin-bottom: 8px;\n}\n\n.login-input {\n  width: auto;\n  height: 36px;\n  border: none;\n  margin: 0;\n  padding: 0 15px;\n}\n\n.login-input:disabled {\n  background: var(--input-disabled-bg-color);\n}\n\n#login-submit {\n  width: 100%;\n  height: 36px;\n  margin: 20px 0 0;\n  padding: 0;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n}\n\n.login-p {\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 24px;\n}\n\n.login-p a {\n  text-decoration-line: none;\n}\n\n.valid-box {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.hints {\n  padding: 0;\n  margin: 0;\n  color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/css/login.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,UAAU;AACZ","sourcesContent":[".account-container {\n  width: 100%;\n}\n\n.account-form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  /* height: auto; */\n}\n\n.login-block {\n  display: flex;\n  flex-direction: column;\n  height: 80px;\n  width: 100%;\n  margin: 8px 0;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.login-block label {\n  margin-bottom: 8px;\n}\n\n.login-input {\n  width: auto;\n  height: 36px;\n  border: none;\n  margin: 0;\n  padding: 0 15px;\n}\n\n.login-input:disabled {\n  background: var(--input-disabled-bg-color);\n}\n\n#login-submit {\n  width: 100%;\n  height: 36px;\n  margin: 20px 0 0;\n  padding: 0;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n}\n\n.login-p {\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 24px;\n}\n\n.login-p a {\n  text-decoration-line: none;\n}\n\n.valid-box {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.hints {\n  padding: 0;\n  margin: 0;\n  color: red;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/js/Api.ts":
/*!***********************!*\
  !*** ./src/js/Api.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Snackbar */ "./src/js/components/Snackbar.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var HOME_URL = 'https://vendingmachine-coke-test.herokuapp.com';
var DEV_URL = 'http://localhost:3000';
var Api = /** @class */ (function () {
    function Api() {
        var _this = this;
        this.postUserLogin = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, res, message_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("".concat(HOME_URL, "/login"), {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: data
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        res = _a.sent();
                        if (!response.ok) {
                            throw new Error(res);
                        }
                        return [2 /*return*/, res];
                    case 3:
                        message_1 = _a.sent();
                        (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_0__["default"])(message_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.putEditProfile = function (_a) {
            var id = _a.id, data = _a.data;
            return __awaiter(_this, void 0, void 0, function () {
                var response, res, message_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch("".concat(HOME_URL, "/users/").concat(id), {
                                    method: 'PUT',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: data
                                })];
                        case 1:
                            response = _b.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            res = _b.sent();
                            if (!response.ok) {
                                if (response.status === 404)
                                    throw new Error('잘못된 id 입니다.');
                                throw new Error(res);
                            }
                            return [2 /*return*/, res];
                        case 3:
                            message_2 = _b.sent();
                            (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_0__["default"])(message_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        this.postSingup = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response, res, message_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("".concat(HOME_URL, "/users"), {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: data
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        res = _a.sent();
                        if (!response.ok) {
                            throw new Error(res);
                        }
                        return [2 /*return*/, res];
                    case 3:
                        message_3 = _a.sent();
                        (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_0__["default"])(message_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    }
    return Api;
}());
var api = new Api();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


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

/***/ "./src/js/components/Snackbar.ts":
/*!***************************************!*\
  !*** ./src/js/components/Snackbar.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// $snackbarButton.addEventListener('click', () => {
//   $snackbar.classList.toggle('show');
//   setTimeout(() => {
//     $snackbar.classList.toggle('show');
//   }, 3000);
// });
var Snackbar = function () {
    var $snackbar = document.querySelector('#snackbar');
    var removeToast = null;
    return function (text) {
        if (removeToast)
            return;
        $snackbar.classList.add('show');
        $snackbar.textContent = text;
        removeToast = setTimeout(function () {
            $snackbar.classList.remove('show');
            clearTimeout(removeToast);
            removeToast = null;
        }, 3000);
    };
};
var snackbar = Snackbar();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (snackbar);
// const toast = () => {
//     const toastContainer = document.getElementById('toast');
//     let removeToast;
//     return (text) => {
//       if (removeToast) return;
//       toastContainer.classList.add('reveal');
//       toastContainer.textContent = text;
//       removeToast = setTimeout(() => {
//         toastContainer.classList.remove('reveal');
//         clearTimeout(removeToast);
//         removeToast = undefined;
//       }, 1500);
//     };
//   };
//   export default toast;


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
    SOLD_OUT_PRODUCT: '품절된 상품입니다.',
    EMPTY_PUT_MONEY: '금액을 투입해 주세요.',
    EMPTY_CHANGES: '반환할 잔돈이 없습니다.'
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
    VendingMachine.prototype.getUserChanges = function () {
        var _a = this.getUserChangeCoins(this.userMoney), userChanges = _a.userChanges, userMoney = _a.userMoney;
        this.checkUserChangeValidate(this.userMoney, userChanges);
        this.userMoney = userMoney;
        return userChanges;
    };
    VendingMachine.prototype.checkUserChangeValidate = function (userMoney, userChanges) {
        if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isValidPutMoney)(userMoney)) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EMPTY_PUT_MONEY);
        }
        if (!(0,_validator__WEBPACK_IMPORTED_MODULE_1__.isValidChangeCoins)(userChanges)) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EMPTY_CHANGES);
        }
    };
    VendingMachine.prototype.getUserChangeCoins = function (userMoney) {
        var _this = this;
        var coinBox = _constants__WEBPACK_IMPORTED_MODULE_0__.RULES.CHANGE_UNITS;
        var userChanges = { coin10: 0, coin50: 0, coin100: 0, coin500: 0 };
        coinBox.forEach(function (coin) {
            var changeKey = "coin".concat(coin);
            var changeAmount = _this.changes[changeKey];
            var count = Math.floor(userMoney / coin);
            if (userMoney <= 0 || changeAmount <= 0)
                return;
            if (count >= changeAmount) {
                _this.changes[changeKey] -= changeAmount;
                userChanges[changeKey] += changeAmount;
                userMoney -= changeAmount * coin;
            }
            if (count < changeAmount) {
                _this.changes[changeKey] -= count;
                userChanges[changeKey] += count;
                userMoney -= count * coin;
            }
        });
        return { userChanges: userChanges, userMoney: userMoney };
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
/* harmony export */   "isValidProductAmount": () => (/* binding */ isValidProductAmount),
/* harmony export */   "isValidPutMoney": () => (/* binding */ isValidPutMoney),
/* harmony export */   "isValidChangeCoins": () => (/* binding */ isValidChangeCoins)
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
var isValidPutMoney = function (money) {
    return money > 0;
};
var isValidChangeCoins = function (changes) {
    return Object.values(changes).filter(function (coins) { return coins > 0; }).length !== 0;
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
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Snackbar */ "./src/js/components/Snackbar.ts");
/* harmony import */ var _model_VendingMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/VendingMachine */ "./src/js/model/VendingMachine.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template */ "./src/js/template/index.ts");



var ChangeAdd = /** @class */ (function () {
    function ChangeAdd() {
        var _this = this;
        this.onSubmitChangeAdd = function (e) {
            e.preventDefault();
            var inputChange = _this.$changeAddForm.querySelector('#money-add-input').valueAsNumber;
            try {
                _model_VendingMachine__WEBPACK_IMPORTED_MODULE_1__["default"].addChange(inputChange);
                _this.refreshChange();
            }
            catch (message) {
                (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_0__["default"])(message);
            }
        };
        this.$inputSection = document.querySelector('.input-section');
        this.$contentsContainer = document.querySelector('.contents-container');
    }
    ChangeAdd.prototype.render = function () {
        this.$inputSection.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_2__["default"].moneyAddContainer({
            labelText: '자판기가 보유할 금액을 입력해주세요',
            buttonText: '충전',
            resultText: '현재 보유 금액'
        }));
        this.$contentsContainer.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_2__["default"].changeListWrapper({
            title: '자판기가 보유한 동전',
            tabName: this.tabName
        }));
        this.$headerTitle = document.querySelector('#header-title');
        this.$headerTitle.textContent = '🍿 자판기 🍿';
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
        this.$totalChange.textContent = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_1__["default"].getTotalMoney().toLocaleString();
        var _a = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_1__["default"].getChanges(), coin10 = _a.coin10, coin50 = _a.coin50, coin100 = _a.coin100, coin500 = _a.coin500;
        this.$amountCoin500.textContent = coin500 + '개';
        this.$amountCoin100.textContent = coin100 + '개';
        this.$amountCoin50.textContent = coin50 + '개';
        this.$amountCoin10.textContent = coin10 + '개';
    };
    return ChangeAdd;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeAdd);


/***/ }),

/***/ "./src/js/pages/EditProfile.ts":
/*!*************************************!*\
  !*** ./src/js/pages/EditProfile.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api */ "./src/js/Api.ts");
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Snackbar */ "./src/js/components/Snackbar.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router */ "./src/js/router/index.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template */ "./src/js/template/index.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validator */ "./src/js/pages/validator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var EditProfile = /** @class */ (function () {
    function EditProfile() {
        var _this = this;
        this.onKeyDownInput = function (e) {
            if (!(e.target instanceof HTMLInputElement))
                return;
            var keyCode = e.keyCode;
            var isSpacebar = keyCode === 32;
            if (isSpacebar)
                e.returnValue = false;
        };
        this.onSubmitLogin = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var email, name, password, password2, data;
            return __generator(this, function (_a) {
                e.preventDefault();
                email = this.$editProfileEmail.value.trim();
                name = this.$editProfileName.value.trim();
                password = this.$editProfilePassword.value.trim();
                password2 = this.$editProfilePasswordCheck.value.trim();
                try {
                    this.checkAccountValidate(name, password, password2);
                    data = JSON.stringify({ email: email, name: name, password: password });
                    _Api__WEBPACK_IMPORTED_MODULE_0__["default"].putEditProfile({ id: this.user.id, data: data }).then(function (res) {
                        var email = res.email, name = res.name, id = res.id;
                        localStorage.setItem('user', JSON.stringify({ email: email, name: name, id: id }));
                        _router__WEBPACK_IMPORTED_MODULE_2__["default"].to('#!/product-manage');
                    });
                }
                catch (message) {
                    (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_1__["default"])(message);
                }
                return [2 /*return*/];
            });
        }); };
        this.$headerTitle = document.querySelector('#header-title');
        this.$contentsContainer = document.querySelector('.contents-container');
    }
    EditProfile.prototype.render = function () {
        this.$contentsContainer.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_3__["default"].editProfileContainer());
        this.$headerTitle.textContent = '회원 정보 수정';
        this.$editProfileForm = this.$contentsContainer.querySelector('#edit-profile-form');
        this.$editProfileEmail = this.$contentsContainer.querySelector('#edit-profile-email');
        this.$editProfileName = this.$contentsContainer.querySelector('#edit-profile-name');
        this.$editProfilePassword = this.$contentsContainer.querySelector('#edit-profile-password');
        this.$editProfilePasswordCheck = this.$contentsContainer.querySelector('#edit-profile-password-check');
        this.$nameNbr = this.$contentsContainer.querySelector('#name-nbr');
        this.$pwdNbr = this.$contentsContainer.querySelector('#pwd-nbr');
        this.$pwdLowercase = this.$contentsContainer.querySelector('#pwd-lowercase');
        this.$pwdUppercase = this.$contentsContainer.querySelector('#pwd-uppercase');
        this.$pwdSpecial = this.$contentsContainer.querySelector('#pwd-special');
        this.$pwdDigit = this.$contentsContainer.querySelector('#pwd-digit');
        this.$pwdConfirm = this.$contentsContainer.querySelector('#pwd-confirm');
        this.$contentsContainer.addEventListener('keydown', this.onKeyDownInput);
        this.$editProfileForm.addEventListener('submit', this.onSubmitLogin);
        this.user = JSON.parse(localStorage.getItem('user'));
        this.$editProfileEmail.value = this.user.email;
    };
    EditProfile.prototype.checkAccountValidate = function (name, pwd, pwd2) {
        var _isPositiveName = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPositiveName)(name);
        var _isPositivePwdLength = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPositivePwdLength)(pwd);
        var _isPwdLowerCase = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPwdLowerCase)(pwd);
        var _isPwdUpperCase = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPwdUpperCase)(pwd);
        var _isPwdSpecialChar = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPwdSpecialChar)(pwd);
        var _isPwdDigit = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPwdDigit)(pwd);
        var _isSamePwd2 = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isSamePwd2)(pwd, pwd2);
        this.$nameNbr.classList.toggle('hide', _isPositiveName);
        this.$pwdNbr.classList.toggle('hide', _isPositivePwdLength);
        this.$pwdLowercase.classList.toggle('hide', _isPwdLowerCase);
        this.$pwdUppercase.classList.toggle('hide', _isPwdUpperCase);
        this.$pwdSpecial.classList.toggle('hide', _isPwdSpecialChar);
        this.$pwdDigit.classList.toggle('hide', _isPwdDigit);
        this.$pwdConfirm.classList.toggle('hide', _isSamePwd2);
        var isError = [
            _isPositiveName,
            _isPositivePwdLength,
            _isPwdLowerCase,
            _isPwdUpperCase,
            _isPwdSpecialChar,
            _isPwdDigit,
            _isSamePwd2,
        ].some(function (v) { return !v; });
        if (isError) {
            throw new Error('잘못 입력 했습니다.');
        }
    };
    return EditProfile;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProfile);


/***/ }),

/***/ "./src/js/pages/Login.ts":
/*!*******************************!*\
  !*** ./src/js/pages/Login.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api */ "./src/js/Api.ts");
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Snackbar */ "./src/js/components/Snackbar.ts");
/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router/index */ "./src/js/router/index.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template */ "./src/js/template/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Login = /** @class */ (function () {
    function Login() {
        var _this = this;
        this.onSubmitLogin = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                e.preventDefault();
                data = JSON.stringify({
                    email: this.$loginEmail.value,
                    password: this.$loginPassword.value
                });
                try {
                    _Api__WEBPACK_IMPORTED_MODULE_0__["default"].postUserLogin(data).then(function (res) {
                        var accessToken = res.accessToken, user = res.user;
                        localStorage.setItem('accessToken', accessToken);
                        localStorage.setItem('user', JSON.stringify(user));
                        _router_index__WEBPACK_IMPORTED_MODULE_2__["default"].to('#!/product-manage');
                    });
                }
                catch (message) {
                    (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_1__["default"])(message);
                }
                return [2 /*return*/];
            });
        }); };
        this.$headerTitle = document.querySelector('#header-title');
        this.$contentsContainer = document.querySelector('.contents-container');
    }
    Login.prototype.render = function () {
        this.$contentsContainer.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_3__["default"].loginContainer());
        this.$headerTitle.textContent = '로그인';
        this.$loginForm = this.$contentsContainer.querySelector('#login-form');
        this.$loginEmail = this.$contentsContainer.querySelector('#login-email');
        this.$loginPassword = this.$contentsContainer.querySelector('#login-password');
        this.$loginForm.addEventListener('submit', this.onSubmitLogin);
    };
    return Login;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


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
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Snackbar */ "./src/js/components/Snackbar.ts");




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
                (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_3__["default"])(message);
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
                (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_3__["default"])(message);
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
        this.$headerTitle = document.querySelector('#header-title');
        this.$headerTitle.textContent = '🍿 자판기 🍿';
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
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Snackbar */ "./src/js/components/Snackbar.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/js/constants.ts");
/* harmony import */ var _model_VendingMachine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/VendingMachine */ "./src/js/model/VendingMachine.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template */ "./src/js/template/index.ts");





var ProductPurchase = /** @class */ (function () {
    function ProductPurchase() {
        var _this = this;
        this.tabName = 'ProductPurchase';
        this.callbackSubmitQuantity = function (props) {
            var quantity = props.quantity, product = props.product, ul = props.ul, oldLi = props.oldLi;
            _model_VendingMachine__WEBPACK_IMPORTED_MODULE_3__["default"].purchaseProduct(product, quantity);
            oldLi.querySelector('.product-amount').textContent = product.amount;
            _this.refreshUserMoney();
        };
        this.onClickPurchaseButton = function (e) {
            if (!(e.target instanceof HTMLButtonElement))
                return;
            var ul = e.target.closest('ul');
            var oldLi = e.target.closest('li');
            var name = oldLi.querySelector('.product-name').textContent;
            var price = parseInt(oldLi.querySelector('.product-price').textContent);
            var amount = parseInt(oldLi.querySelector('.product-amount').textContent);
            var userMoney = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_3__["default"].getUserMoney();
            if (price > userMoney) {
                (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.TOO_SHORT_MONEY);
                return;
            }
            if (amount === 0) {
                (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.SOLD_OUT_PRODUCT);
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
        this.onSubmitMoneyAdd = function (e) {
            e.preventDefault();
            var inputMoney = _this.$moneyAddForm.querySelector('#money-add-input').valueAsNumber;
            try {
                _model_VendingMachine__WEBPACK_IMPORTED_MODULE_3__["default"].putMoney(inputMoney);
                _this.refreshUserMoney();
            }
            catch (message) {
                (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_1__["default"])(message);
            }
        };
        this.onReturnChange = function (e) {
            try {
                var userChanges = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_3__["default"].getUserChanges();
                _this.refreshUserChange(userChanges);
                _this.refreshUserMoney();
            }
            catch (message) {
                (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_1__["default"])(message);
            }
        };
        this.$inputSection = document.querySelector('.input-section');
        this.$contentsContainer = document.querySelector('.contents-container');
    }
    ProductPurchase.prototype.render = function () {
        this.$inputSection.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_4__["default"].moneyAddContainer({
            labelText: '상품을 구매할 금액을 투입해주세요',
            buttonText: '투입',
            resultText: '투입한 금액'
        }));
        this.$contentsContainer.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_4__["default"].productListContainer({
            tabName: this.tabName,
            title: '구매 가능 상품 현황'
        }) +
            _template__WEBPACK_IMPORTED_MODULE_4__["default"].changeListWrapper({
                title: '잔돈 반환',
                tabName: this.tabName
            }));
        this.$headerTitle = document.querySelector('#header-title');
        this.$headerTitle.textContent = '🍿 자판기 🍿';
        this.$moneyAddForm = this.$inputSection.querySelector('#money-add-form');
        this.$totalChange = this.$inputSection.querySelector('#total-money');
        this.$productList = this.$contentsContainer.querySelector('#product-list');
        this.$changeList = this.$contentsContainer.querySelector('#change-list');
        this.$amountCoin500 = this.$changeList.querySelector('#amount-coin-500');
        this.$amountCoin100 = this.$changeList.querySelector('#amount-coin-100');
        this.$amountCoin50 = this.$changeList.querySelector('#amount-coin-50');
        this.$amountCoin10 = this.$changeList.querySelector('#amount-coin-10');
        this.$changeReturnButton = this.$contentsContainer.querySelector('#change-return-button');
        this.$productList.addEventListener('click', this.onClickPurchaseButton);
        this.$moneyAddForm.addEventListener('submit', this.onSubmitMoneyAdd);
        this.$changeReturnButton.addEventListener('click', this.onReturnChange);
        this.renderProducts();
        this.refreshUserMoney();
    };
    ProductPurchase.prototype.renderProducts = function () {
        var _this = this;
        var products = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_3__["default"].getProducts();
        products.forEach(function (product) {
            _this.renderProductItem(product);
        });
    };
    ProductPurchase.prototype.renderProductItem = function (product) {
        var fragment = new DocumentFragment();
        var li = document.createElement('li');
        li.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_4__["default"].purchaseProductItem(product));
        fragment.appendChild(li);
        this.$productList.appendChild(fragment);
    };
    ProductPurchase.prototype.refreshUserChange = function (userChanges) {
        var coin10 = userChanges.coin10, coin50 = userChanges.coin50, coin100 = userChanges.coin100, coin500 = userChanges.coin500;
        this.$amountCoin500.textContent = coin500 + '개';
        this.$amountCoin100.textContent = coin100 + '개';
        this.$amountCoin50.textContent = coin50 + '개';
        this.$amountCoin10.textContent = coin10 + '개';
    };
    ProductPurchase.prototype.refreshUserMoney = function () {
        this.$totalChange.textContent = _model_VendingMachine__WEBPACK_IMPORTED_MODULE_3__["default"].getUserMoney().toLocaleString();
    };
    return ProductPurchase;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPurchase);


/***/ }),

/***/ "./src/js/pages/Signup.ts":
/*!********************************!*\
  !*** ./src/js/pages/Signup.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api */ "./src/js/Api.ts");
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Snackbar */ "./src/js/components/Snackbar.ts");
/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router/index */ "./src/js/router/index.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template */ "./src/js/template/index.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validator */ "./src/js/pages/validator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Signup = /** @class */ (function () {
    function Signup() {
        var _this = this;
        this.onKeyDownInput = function (e) {
            if (!(e.target instanceof HTMLInputElement))
                return;
            var keyCode = e.keyCode;
            var isSpacebar = keyCode === 32;
            if (isSpacebar)
                e.returnValue = false;
        };
        this.onSubmitLogin = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var email, name, password, password2, data;
            return __generator(this, function (_a) {
                e.preventDefault();
                email = this.$signupEmail.value.trim();
                name = this.$signupName.value.trim();
                password = this.$signupPassword.value.trim();
                password2 = this.$signupPasswordCheck.value.trim();
                try {
                    this.checkAccountValidate(name, password, password2);
                    data = JSON.stringify({ email: email, name: name, password: password });
                    _Api__WEBPACK_IMPORTED_MODULE_0__["default"].postSingup(data).then(function (res) {
                        var accessToken = res.accessToken, user = res.user;
                        localStorage.setItem('accessToken', accessToken);
                        localStorage.setItem('user', JSON.stringify(user));
                        _router_index__WEBPACK_IMPORTED_MODULE_2__["default"].to('#!/product-manage');
                    });
                }
                catch (message) {
                    (0,_components_Snackbar__WEBPACK_IMPORTED_MODULE_1__["default"])(message);
                }
                return [2 /*return*/];
            });
        }); };
        this.$headerTitle = document.querySelector('#header-title');
        this.$contentsContainer = document.querySelector('.contents-container');
    }
    Signup.prototype.render = function () {
        this.$contentsContainer.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_3__["default"].signupContainer());
        this.$headerTitle.textContent = '회원가입';
        this.$signupForm = this.$contentsContainer.querySelector('#signup-form');
        this.$signupEmail = this.$contentsContainer.querySelector('#signup-email');
        this.$signupName = this.$contentsContainer.querySelector('#signup-name');
        this.$signupPassword = this.$contentsContainer.querySelector('#signup-password');
        this.$signupPasswordCheck = this.$contentsContainer.querySelector('#signup-password-check');
        this.$nameNbr = this.$contentsContainer.querySelector('#name-nbr');
        this.$pwdNbr = this.$contentsContainer.querySelector('#pwd-nbr');
        this.$pwdLowercase = this.$contentsContainer.querySelector('#pwd-lowercase');
        this.$pwdUppercase = this.$contentsContainer.querySelector('#pwd-uppercase');
        this.$pwdSpecial = this.$contentsContainer.querySelector('#pwd-special');
        this.$pwdDigit = this.$contentsContainer.querySelector('#pwd-digit');
        this.$pwdConfirm = this.$contentsContainer.querySelector('#pwd-confirm');
        this.$contentsContainer.addEventListener('keydown', this.onKeyDownInput);
        this.$signupForm.addEventListener('submit', this.onSubmitLogin);
    };
    Signup.prototype.checkAccountValidate = function (name, pwd, pwd2) {
        var _isPositiveName = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPositiveName)(name);
        var _isPositivePwdLength = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPositivePwdLength)(pwd);
        var _isPwdLowerCase = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPwdLowerCase)(pwd);
        var _isPwdUpperCase = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPwdUpperCase)(pwd);
        var _isPwdSpecialChar = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPwdSpecialChar)(pwd);
        var _isPwdDigit = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isPwdDigit)(pwd);
        var _isSamePwd2 = (0,_validator__WEBPACK_IMPORTED_MODULE_4__.isSamePwd2)(pwd, pwd2);
        this.$nameNbr.classList.toggle('hide', _isPositiveName);
        this.$pwdNbr.classList.toggle('hide', _isPositivePwdLength);
        this.$pwdLowercase.classList.toggle('hide', _isPwdLowerCase);
        this.$pwdUppercase.classList.toggle('hide', _isPwdUpperCase);
        this.$pwdSpecial.classList.toggle('hide', _isPwdSpecialChar);
        this.$pwdDigit.classList.toggle('hide', _isPwdDigit);
        this.$pwdConfirm.classList.toggle('hide', _isSamePwd2);
        var isError = [
            _isPositiveName,
            _isPositivePwdLength,
            _isPwdLowerCase,
            _isPwdUpperCase,
            _isPwdSpecialChar,
            _isPwdDigit,
            _isSamePwd2,
        ].some(function (v) { return !v; });
        if (isError) {
            throw new Error('잘못 입력 했습니다.');
        }
    };
    return Signup;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);


/***/ }),

/***/ "./src/js/pages/validator.ts":
/*!***********************************!*\
  !*** ./src/js/pages/validator.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPositiveName": () => (/* binding */ isPositiveName),
/* harmony export */   "isPositivePwdLength": () => (/* binding */ isPositivePwdLength),
/* harmony export */   "isPwdLowerCase": () => (/* binding */ isPwdLowerCase),
/* harmony export */   "isPwdUpperCase": () => (/* binding */ isPwdUpperCase),
/* harmony export */   "isPwdSpecialChar": () => (/* binding */ isPwdSpecialChar),
/* harmony export */   "isPwdDigit": () => (/* binding */ isPwdDigit),
/* harmony export */   "isSamePwd2": () => (/* binding */ isSamePwd2)
/* harmony export */ });
var isPositiveName = function (name) { return name.length >= 2 && name.length <= 6; };
var isPositivePwdLength = function (pwd) { return pwd.length >= 8; };
var isPwdLowerCase = function (pwd) { return pwd.search(/[a-z]/) >= 0; };
var isPwdUpperCase = function (pwd) { return pwd.search(/[A-Z]/) >= 0; };
var isPwdSpecialChar = function (pwd) { return pwd.search(/[#?!@$%^&*-]/) >= 0; };
var isPwdDigit = function (pwd) { return pwd.search(/[0-9]/) >= 0; };
var isSamePwd2 = function (pwd, pwd2) { return pwd === pwd2; };



/***/ }),

/***/ "./src/js/router/index.ts":
/*!********************************!*\
  !*** ./src/js/router/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/js/router/routes.ts");

var useRouter = function () {
    var $headerNav = document.querySelector('#header-nav');
    var $inputSection = document.querySelector('.input-section');
    var $contentsContainer = document.querySelector('.contents-container');
    var $accountLoginButton = document.querySelector('#account-login-button');
    var $accountDropdownContainer = document.querySelector('#account-dropdown-container');
    var $namethumbnail = $accountDropdownContainer.querySelector('#name-thumbnail');
    var prevPath = '';
    var activeLogin = function (path) {
        if (path === '#!/login' || path === '#!/edit-profile' || path === '#!/signup') {
            $accountLoginButton.classList.add('hide');
            $accountDropdownContainer.classList.add('hide');
            $headerNav.classList.add('hide');
            return;
        }
        var user = JSON.parse(localStorage.getItem('user'));
        var _isLogged = !!user;
        if (_isLogged)
            $namethumbnail.textContent = user.name[0];
        $accountLoginButton.classList.toggle('hide', _isLogged);
        $accountDropdownContainer.classList.toggle('hide', !_isLogged);
        $headerNav.classList.toggle('hide', !_isLogged);
    };
    var clearPageBody = function () {
        $inputSection.replaceChildren();
        $contentsContainer.replaceChildren();
    };
    return {
        to: function (_path) {
            var _a = window.location, hash = _a.hash, pathname = _a.pathname;
            var _b = _routes__WEBPACK_IMPORTED_MODULE_0__["default"][_path], path = _b.path, title = _b.title, page = _b.page;
            var isSamePage = prevPath === _path;
            activeLogin(_path);
            if (isSamePage) {
                console.log('같은 페이지');
                return;
            }
            clearPageBody();
            history.pushState({ path: path, prevPath: prevPath, hash: hash, _path: _path }, title, pathname + path);
            prevPath = _path;
            page.render();
        },
        back: function () {
            var hash = window.location.hash;
            var page = _routes__WEBPACK_IMPORTED_MODULE_0__["default"][hash].page;
            clearPageBody();
            activeLogin(hash);
            prevPath = hash;
            page.render();
        }
    };
};
var router = useRouter();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);


/***/ }),

/***/ "./src/js/router/routes.ts":
/*!*********************************!*\
  !*** ./src/js/router/routes.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_ChangeAdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/ChangeAdd */ "./src/js/pages/ChangeAdd.ts");
/* harmony import */ var _pages_EditProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/EditProfile */ "./src/js/pages/EditProfile.ts");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Login */ "./src/js/pages/Login.ts");
/* harmony import */ var _pages_ProductManage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/ProductManage */ "./src/js/pages/ProductManage.ts");
/* harmony import */ var _pages_ProductPurchase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/ProductPurchase */ "./src/js/pages/ProductPurchase.ts");
/* harmony import */ var _pages_Signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Signup */ "./src/js/pages/Signup.ts");






var useRoutes = function () {
    var productManage = new _pages_ProductManage__WEBPACK_IMPORTED_MODULE_3__["default"]();
    var changeAdd = new _pages_ChangeAdd__WEBPACK_IMPORTED_MODULE_0__["default"]();
    var productPurchase = new _pages_ProductPurchase__WEBPACK_IMPORTED_MODULE_4__["default"]();
    var login = new _pages_Login__WEBPACK_IMPORTED_MODULE_2__["default"]();
    var signup = new _pages_Signup__WEBPACK_IMPORTED_MODULE_5__["default"]();
    var editProfile = new _pages_EditProfile__WEBPACK_IMPORTED_MODULE_1__["default"]();
    return {
        '#!/product-manage': {
            path: '#!/product-manage',
            title: '상품 관리하기',
            page: productManage
        },
        '#!/change-add': {
            path: '#!/change-add',
            title: '잔돈 채우기',
            page: changeAdd
        },
        '#!/product-purchase': {
            path: '#!/product-purchase',
            title: '상품 구매',
            page: productPurchase
        },
        '#!/login': {
            path: '#!/login',
            title: '로그인',
            page: login
        },
        '#!/signup': {
            path: '#!/signup',
            title: '회원 가입',
            page: signup
        },
        '#!/edit-profile': {
            path: '#!/edit-profile',
            title: '회원 정보 수정',
            page: editProfile
        }
    };
};
var routes = useRoutes();
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
var changeListWrapper = function (props) {
    var title = props.title, tabName = props.tabName;
    var isChangeReturn = tabName === 'ProductPurchase';
    return "\n  <div id=\"change-list-wrapper\">\n    <h4>".concat(title, "</h4>\n    <ul id=\"change-list\">\n      <li class=\"list-header\">\n        <span class=\"change-block\">\uB3D9\uC804</span>\n        <span class=\"change-block\">\uAC1C\uC218</span>\n      </li>\n      <li>\n        <span class=\"change-block\">500\uC6D0</span>\n        <span id=\"amount-coin-500\" class=\"change-block\">0\uAC1C</span>\n      </li>\n      <li>\n        <span class=\"change-block\">100\uC6D0</span>\n        <span id=\"amount-coin-100\" class=\"change-block\">0\uAC1C</span>\n      </li>\n      <li>\n        <span class=\"change-block\">50\uC6D0</span>\n        <span id=\"amount-coin-50\" class=\"change-block\">0\uAC1C</span>\n      </li>\n      <li>\n        <span class=\"change-block\">10\uC6D0</span>\n        <span id=\"amount-coin-10\" class=\"change-block\">0\uAC1C</span>\n      </li>\n    </ul>\n    ").concat(isChangeReturn ? "<button type=\"button\" id=\"change-return-button\">\uBC18\uD658</button>" : '', "\n  </div>");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeListWrapper);


/***/ }),

/***/ "./src/js/template/editProfileContainer.ts":
/*!*************************************************!*\
  !*** ./src/js/template/editProfileContainer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var editProfileContainer = function () {
    return "\n        <div id=\"edit-profile-container\" class=\"account-container\">\n            <form id=\"edit-profile-form\" class=\"account-form\">\n                <div class=\"login-block\">\n                    <label>\uC774\uBA54\uC77C</label>\n                    <input type=\"email\" id=\"edit-profile-email\" class=\"login-input\" placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" disabled/>\n                </div>\n                <div class=\"login-block\">\n                    <label>\uC774\uB984</label>\n                    <input type=\"text\" id=\"edit-profile-name\" class=\"login-input\" placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694\" />\n                </div>\n                <div class=\"valid-box account-name\">\n                    <p id=\"name-nbr\" class=\"hints hide\" >\uC774\uB984\uC740 2~6\uAE00\uC790\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p>\n                </div>\n                <div class=\"login-block\">\n                    <label>\uBE44\uBC00\uBC88\uD638</label>\n                    <input type=\"text\" id=\"edit-profile-password\" class=\"login-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" />\n                </div>\n                <div class=\"valid-box account-pwd\">\n                    <p id=\"pwd-nbr\" class=\"hints hide\" >\uCD5C\uC18C\uD55C 8\uAE00\uC790 \uC774\uC0C1\uC774\uC5EC\uC57C \uD569\uB2C8\uB2E4.</p>\n                    <p id=\"pwd-lowercase\" class=\"hints hide\" >\uC18C\uBB38\uC790\uB97C \uC801\uC5B4\uB3C4 \uD558\uB098 \uC774\uC0C1 \uD3EC\uD568\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4.</p>\n                    <p id=\"pwd-uppercase\" class=\"hints hide\" >\uB300\uBB38\uC790\uB97C \uC801\uC5B4\uB3C4 \uD558\uB098 \uC774\uC0C1 \uD3EC\uD568\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4.</p>\n                    <p id=\"pwd-special\" class=\"hints hide\" >\uD2B9\uC218\uBB38\uC790(#?!@$%^&*-)\uB97C \uC801\uC5B4\uB3C4 \uD558\uB098 \uC774\uC0C1 \uD3EC\uD568\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4.</p>\n                    <p id=\"pwd-digit\" class=\"hints hide\" >\uC22B\uC790\uB97C \uC801\uC5B4\uB3C4 \uD558\uB098 \uC774\uC0C1 \uD3EC\uD568\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4.</p>\n                </div>\n                <div class=\"login-block\">\n                    <label>\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n                    <input type=\"text\" id=\"edit-profile-password-check\" class=\"login-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" />\n                </div>\n                <div class=\"valid-box account-pwd-confirm\">\n                    <p id=\"pwd-confirm\" class=\"hints hide\" >\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uD655\uC778\uD558\uC138\uC694.</p>\n                </div>\n                <input type=\"submit\" id=\"login-submit\" value=\"\uD655\uC778\"/>\n            </form>\n        </div>\n    ";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editProfileContainer);


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
/* harmony import */ var _loginContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginContainer */ "./src/js/template/loginContainer.ts");
/* harmony import */ var _modifyProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifyProductItem */ "./src/js/template/modifyProductItem.ts");
/* harmony import */ var _moneyAddContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moneyAddContainer */ "./src/js/template/moneyAddContainer.ts");
/* harmony import */ var _productItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productItem */ "./src/js/template/productItem.ts");
/* harmony import */ var _productListContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productListContainer */ "./src/js/template/productListContainer.ts");
/* harmony import */ var _productManageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productManageContainer */ "./src/js/template/productManageContainer.ts");
/* harmony import */ var _purchaseProductItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purchaseProductItem */ "./src/js/template/purchaseProductItem.ts");
/* harmony import */ var _signupContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signupContainer */ "./src/js/template/signupContainer.ts");
/* harmony import */ var _editProfileContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editProfileContainer */ "./src/js/template/editProfileContainer.ts");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    changeListWrapper: _changeListWrapper__WEBPACK_IMPORTED_MODULE_0__["default"],
    loginContainer: _loginContainer__WEBPACK_IMPORTED_MODULE_1__["default"],
    modifyProductItem: _modifyProductItem__WEBPACK_IMPORTED_MODULE_2__["default"],
    moneyAddContainer: _moneyAddContainer__WEBPACK_IMPORTED_MODULE_3__["default"],
    productItem: _productItem__WEBPACK_IMPORTED_MODULE_4__["default"],
    productListContainer: _productListContainer__WEBPACK_IMPORTED_MODULE_5__["default"],
    productManageContainer: _productManageContainer__WEBPACK_IMPORTED_MODULE_6__["default"],
    purchaseProductItem: _purchaseProductItem__WEBPACK_IMPORTED_MODULE_7__["default"],
    signupContainer: _signupContainer__WEBPACK_IMPORTED_MODULE_8__["default"],
    editProfileContainer: _editProfileContainer__WEBPACK_IMPORTED_MODULE_9__["default"]
});


/***/ }),

/***/ "./src/js/template/loginContainer.ts":
/*!*******************************************!*\
  !*** ./src/js/template/loginContainer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var loginContainer = function () {
    return "\n    <div id=\"login-container\" class=\"account-container\">\n        <form id=\"login-form\" class=\"account-form\">\n            <div class=\"login-block\">\n                <label>\uC774\uBA54\uC77C</label>\n                <input type=\"email\" id=\"login-email\" class=\"login-input\" placeholder=\"woowacourse@gmail.com\" required/>\n            </div>\n            <div class=\"login-block\">\n                <label>\uBE44\uBC00\uBC88\uD638</label>\n                <input type=\"text\" id=\"login-password\" class=\"login-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required/>\n            </div>\n            <input type=\"submit\" id=\"login-submit\" value=\"\uD655\uC778\"/>\n        </form>\n        <p class=\"login-p\">\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694? <a href=\"#!/signup\" id=\"singup-link\">\uD68C\uC6D0\uAC00\uC785</a></p>\n    </div>\n    ";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginContainer);


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


/***/ }),

/***/ "./src/js/template/signupContainer.ts":
/*!********************************************!*\
  !*** ./src/js/template/signupContainer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var signupContainer = function () {
    return "\n    <div id=\"signup-container\" class=\"account-container\">\n        <form id=\"signup-form\" class=\"account-form\">\n            <div class=\"login-block\">\n                <label>\uC774\uBA54\uC77C</label>\n                <input type=\"email\" id=\"signup-email\" class=\"login-input\" placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required/>\n            </div>\n            <div class=\"valid-box account-email-confirm\">\n                <p id=\"email-confirm\" class=\"hints hide\" >\uC62C\uBC14\uB974\uC9C0 \uC54A\uC740 \uC774\uBA54\uC77C \uC8FC\uC18C\uC785\uB2C8\uB2E4.</p>\n            </div>\n            <div class=\"login-block\">\n                <label>\uC774\uB984</label>\n                <input type=\"text\" id=\"signup-name\" class=\"login-input\" placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694\" required/>\n            </div>\n            <div class=\"valid-box account-name\">\n                <p id=\"name-nbr\" class=\"hints hide\" >\uC774\uB984\uC740 2~6\uAE00\uC790\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p>\n            </div>\n            <div class=\"login-block\">\n                <label>\uBE44\uBC00\uBC88\uD638</label>\n                <input type=\"text\" id=\"signup-password\" class=\"login-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required/>\n            </div>\n            <div class=\"valid-box account-pwd\">\n                <p id=\"pwd-nbr\" class=\"hints hide\" >\uCD5C\uC18C\uD55C 8\uAE00\uC790 \uC774\uC0C1\uC774\uC5EC\uC57C \uD569\uB2C8\uB2E4.</p>\n                <p id=\"pwd-lowercase\" class=\"hints hide\" >\uC18C\uBB38\uC790\uB97C \uC801\uC5B4\uB3C4 \uD558\uB098 \uC774\uC0C1 \uD3EC\uD568\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4.</p>\n                <p id=\"pwd-uppercase\" class=\"hints hide\" >\uB300\uBB38\uC790\uB97C \uC801\uC5B4\uB3C4 \uD558\uB098 \uC774\uC0C1 \uD3EC\uD568\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4.</p>\n                <p id=\"pwd-special\" class=\"hints hide\" >\uD2B9\uC218\uBB38\uC790(#?!@$%^&*-)\uB97C \uC801\uC5B4\uB3C4 \uD558\uB098 \uC774\uC0C1 \uD3EC\uD568\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4.</p>\n                <p id=\"pwd-digit\" class=\"hints hide\" >\uC22B\uC790\uB97C \uC801\uC5B4\uB3C4 \uD558\uB098 \uC774\uC0C1 \uD3EC\uD568\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4.</p>\n            </div>\n            <div class=\"login-block\">\n                <label>\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n                <input type=\"text\" id=\"signup-password-check\" class=\"login-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required/>\n            </div>\n            <div class=\"valid-box account-pwd-confirm\">\n                <p id=\"pwd-confirm\" class=\"hints hide\" >\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uD655\uC778\uD558\uC138\uC694.</p>\n            </div>\n            <input type=\"submit\" id=\"login-submit\" value=\"\uD655\uC778\"/>\n        </form>\n    </div>\n    ";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signupContainer);


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
/* harmony import */ var _js_router_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/router/index */ "./src/js/router/index.ts");


window.addEventListener('popstate', function () {
    _js_router_index__WEBPACK_IMPORTED_MODULE_1__["default"].back();
});
var App = /** @class */ (function () {
    function App() {
        this.onClickLogin = function (e) {
            if (!(e.target instanceof HTMLButtonElement))
                return;
            _js_router_index__WEBPACK_IMPORTED_MODULE_1__["default"].to('#!/login');
        };
        this.onSelectNav = function (e) {
            if (!(e.target instanceof HTMLSelectElement))
                return;
            var value = e.target.value;
            e.target.selectedIndex = 0;
            if (value === 'edit-profile') {
                _js_router_index__WEBPACK_IMPORTED_MODULE_1__["default"].to('#!/edit-profile');
            }
            if (value === 'logout') {
                localStorage.clear();
                _js_router_index__WEBPACK_IMPORTED_MODULE_1__["default"].to('#!/product-purchase');
            }
        };
        this.onClickTab = function (e) {
            if (!(e.target instanceof HTMLButtonElement))
                return;
            var IdSelector = e.target.id;
            var path = '';
            switch (IdSelector) {
                case 'product-manage-button':
                    path = '#!/product-manage';
                    break;
                case 'change-add-button':
                    path = '#!/change-add';
                    break;
                case 'product-purchase-button':
                    path = '#!/product-purchase';
                    break;
                default:
                    break;
            }
            _js_router_index__WEBPACK_IMPORTED_MODULE_1__["default"].to(path);
        };
        this.$headerNav = document.querySelector('#header-nav');
        this.$accountLoginButton = document.querySelector('#account-login-button');
        this.$dropdownSelect = document.querySelector('#dropdown-select');
        this.$accountLoginButton.addEventListener('click', this.onClickLogin);
        this.$headerNav.addEventListener('click', this.onClickTab);
        this.$dropdownSelect.addEventListener('change', this.onSelectNav);
        var hash = window.location.hash;
        hash === '' ? _js_router_index__WEBPACK_IMPORTED_MODULE_1__["default"].to('#!/product-purchase') : _js_router_index__WEBPACK_IMPORTED_MODULE_1__["default"].to(hash);
    }
    return App;
}());
new App();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map