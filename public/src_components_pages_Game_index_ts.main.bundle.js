"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkyandex_practicum_2_mega_game"] = self["webpackChunkyandex_practicum_2_mega_game"] || []).push([["src_components_pages_Game_index_ts"],{

/***/ "./src/components/atoms/Button/Button.tsx":
/*!************************************************!*\
  !*** ./src/components/atoms/Button/Button.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.pcss */ \"./src/components/atoms/Button/Button.pcss\");\n\n\n\nvar Button = function Button(_ref) {\n  var _ref$text = _ref.text,\n      text = _ref$text === void 0 ? 'Кнопка' : _ref$text,\n      onClick = _ref.onClick;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"button\",\n    onClick: onClick ? onClick : function () {}\n  }, \"\".concat(text, \"!\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/atoms/Button/Button.tsx?");

/***/ }),

/***/ "./src/components/atoms/Button/index.ts":
/*!**********************************************!*\
  !*** ./src/components/atoms/Button/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/components/atoms/Button/Button.tsx\");\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/atoms/Button/index.ts?");

/***/ }),

/***/ "./src/components/molecules/Canvas/Canvas.tsx":
/*!****************************************************!*\
  !*** ./src/components/molecules/Canvas/Canvas.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // TODO: ДОБАВИТЬ ИНТЕРФЕЙС ДЛЯ КОМПОНЕНТА\n\nvar Canvas = function Canvas(_ref) {\n  var draw = _ref.draw,\n      height = _ref.height,\n      width = _ref.width;\n  var canvas = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    var context = canvas.current;\n    draw(context.getContext('2d'));\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"canvas\", {\n    ref: canvas,\n    height: height,\n    width: width\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Canvas/Canvas.tsx?");

/***/ }),

/***/ "./src/components/molecules/Canvas/index.ts":
/*!**************************************************!*\
  !*** ./src/components/molecules/Canvas/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/components/molecules/Canvas/Canvas.tsx\");\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Canvas/index.ts?");

/***/ }),

/***/ "./src/components/molecules/Fail/Fail.tsx":
/*!************************************************!*\
  !*** ./src/components/molecules/Fail/Fail.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Fail_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fail.pcss */ \"./src/components/molecules/Fail/Fail.pcss\");\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Canvas */ \"./src/components/molecules/Canvas/index.ts\");\n/* harmony import */ var _utils_getCanvasPic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/getCanvasPic */ \"./src/utils/getCanvasPic.tsx\");\n/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Button */ \"./src/components/atoms/Button/index.ts\");\n\n\n\n\n\n\nfunction Fail() {\n  // TODO: добавить интерфейс для функции\n  var draw = function draw(ctx) {\n    ctx.fillStyle = 'rgb(200, 0, 0)';\n    ctx.fillRect(10, 10, 50, 50);\n    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';\n    ctx.fillRect(30, 30, 50, 50);\n    (0,_utils_getCanvasPic__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ctx, 7);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"\\u0412\\u044B \\u043F\\u0440\\u043E\\u0438\\u0433\\u0440\\u0430\\u043B\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    draw: draw,\n    height: 400,\n    width: 400\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    text: 'Начать сначала',\n    onClick: function onClick() {\n      console.log('сначала');\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    text: 'Перейти в Лидерборд',\n    onClick: function onClick() {\n      console.log('лидерборд');\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fail);\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Fail/Fail.tsx?");

/***/ }),

/***/ "./src/components/molecules/Fail/index.ts":
/*!************************************************!*\
  !*** ./src/components/molecules/Fail/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _Fail__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Fail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fail */ \"./src/components/molecules/Fail/Fail.tsx\");\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Fail/index.ts?");

/***/ }),

/***/ "./src/components/molecules/Finish/Finish.tsx":
/*!****************************************************!*\
  !*** ./src/components/molecules/Finish/Finish.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Fail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Fail */ \"./src/components/molecules/Fail/index.ts\");\n/* harmony import */ var _Win__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Win */ \"./src/components/molecules/Win/index.ts\");\n/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types/enums */ \"./src/types/enums.ts\");\n/* harmony import */ var _Finish_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Finish.pcss */ \"./src/components/molecules/Finish/Finish.pcss\");\n\n\n\n\n\n\nvar Finish = function Finish(_ref) {\n  var gameStatus = _ref.gameStatus;\n  return gameStatus === _types_enums__WEBPACK_IMPORTED_MODULE_3__.GAMESTATUS.win ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Win__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Fail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Finish);\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Finish/Finish.tsx?");

/***/ }),

/***/ "./src/components/molecules/Finish/index.ts":
/*!**************************************************!*\
  !*** ./src/components/molecules/Finish/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _Finish__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Finish__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Finish */ \"./src/components/molecules/Finish/Finish.tsx\");\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Finish/index.ts?");

/***/ }),

/***/ "./src/components/molecules/OneLetter/OneLetter.tsx":
/*!**********************************************************!*\
  !*** ./src/components/molecules/OneLetter/OneLetter.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _OneLetter_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OneLetter.pcss */ \"./src/components/molecules/OneLetter/OneLetter.pcss\");\n\n\n\nfunction OneLetter(_ref) {\n  var letter = _ref.letter;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'card' + (letter === '*' ? '--closed' : '')\n  }, letter);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OneLetter);\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/OneLetter/OneLetter.tsx?");

/***/ }),

/***/ "./src/components/molecules/OneLetter/index.ts":
/*!*****************************************************!*\
  !*** ./src/components/molecules/OneLetter/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _OneLetter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _OneLetter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OneLetter */ \"./src/components/molecules/OneLetter/OneLetter.tsx\");\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/OneLetter/index.ts?");

/***/ }),

/***/ "./src/components/molecules/Win/Win.tsx":
/*!**********************************************!*\
  !*** ./src/components/molecules/Win/Win.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Win_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Win.pcss */ \"./src/components/molecules/Win/Win.pcss\");\n/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Button */ \"./src/components/atoms/Button/index.ts\");\n\n\n\n\nfunction Win() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"\\u0412\\u044B \\u0432\\u044B\\u0438\\u0433\\u0440\\u0430\\u043B\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: 'Начать сначала',\n    onClick: function onClick() {\n      console.log('сначала');\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: 'Перейти в Лидерборд',\n    onClick: function onClick() {\n      console.log('лидерборд');\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Win);\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Win/Win.tsx?");

/***/ }),

/***/ "./src/components/molecules/Win/index.ts":
/*!***********************************************!*\
  !*** ./src/components/molecules/Win/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _Win__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Win__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Win */ \"./src/components/molecules/Win/Win.tsx\");\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Win/index.ts?");

/***/ }),

/***/ "./src/components/organisms/GameDash/GameDash.tsx":
/*!********************************************************!*\
  !*** ./src/components/organisms/GameDash/GameDash.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _molecules_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../molecules/Canvas */ \"./src/components/molecules/Canvas/index.ts\");\n/* harmony import */ var _utils_getCanvasPic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/getCanvasPic */ \"./src/utils/getCanvasPic.tsx\");\n/* harmony import */ var _molecules_Finish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/Finish */ \"./src/components/molecules/Finish/index.ts\");\n/* harmony import */ var _molecules_OneLetter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules/OneLetter */ \"./src/components/molecules/OneLetter/index.ts\");\n/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../types/enums */ \"./src/types/enums.ts\");\n/* harmony import */ var _GameDash_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameDash.pcss */ \"./src/components/organisms/GameDash/GameDash.pcss\");\n/* harmony import */ var _LetterClicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LetterClicker */ \"./src/components/organisms/LetterClicker/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction GameDash() {\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {\n    return state.game;\n  }),\n      gameLetters = _useSelector.gameLetters,\n      gameWord = _useSelector.gameWord,\n      errorCount = _useSelector.errorCount,\n      showText = _useSelector.showText,\n      gameStatus = _useSelector.gameStatus;\n\n  var category = gameWord.category,\n      text = gameWord.text;\n  var finalWord = text.split('');\n\n  var draw = function draw(ctx) {\n    ctx.fillStyle = 'rgb(200, 0, 0)';\n    ctx.fillRect(10, 10, 50, 50);\n    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';\n    ctx.fillRect(30, 30, 50, 50);\n    (0,_utils_getCanvasPic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ctx, errorCount);\n  };\n\n  var gameJSX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"gamedash\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"gamedash__canvascontainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_molecules_Canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    draw: draw,\n    height: 400,\n    width: 400\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"gamedash__category\"\n  }, \"\\u041A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044F: \", category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"gamedash__lettercontainer\"\n  }, showText.map(function (el) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_molecules_OneLetter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      letter: el\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LetterClicker__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    gameLetters: gameLetters,\n    finalWord: finalWord,\n    errorCount: errorCount,\n    showText: showText,\n    gameStatus: gameStatus\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, gameStatus === _types_enums__WEBPACK_IMPORTED_MODULE_5__.GAMESTATUS.inGame ? gameJSX : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_molecules_Finish__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    gameStatus: gameStatus\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameDash);\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/organisms/GameDash/GameDash.tsx?");

/***/ }),

/***/ "./src/components/organisms/GameDash/index.ts":
/*!****************************************************!*\
  !*** ./src/components/organisms/GameDash/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _GameDash__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _GameDash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameDash */ \"./src/components/organisms/GameDash/GameDash.tsx\");\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/organisms/GameDash/index.ts?");

/***/ }),

/***/ "./src/components/organisms/LetterClicker/LetterClicker.tsx":
/*!******************************************************************!*\
  !*** ./src/components/organisms/LetterClicker/LetterClicker.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _LetterClicker_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LetterClicker.pcss */ \"./src/components/organisms/LetterClicker/LetterClicker.pcss\");\n/* harmony import */ var _store_actions_game_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_store/actions/game.actions */ \"./src/_store/actions/game.actions.ts\");\n/* harmony import */ var _alphabet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alphabet */ \"./src/components/organisms/LetterClicker/alphabet.ts\");\n/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../types/enums */ \"./src/types/enums.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction LetterClicker(props) {\n  var finalWord = props.finalWord,\n      errorCount = props.errorCount,\n      showText = props.showText;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_alphabet__WEBPACK_IMPORTED_MODULE_4__.colorsLetter),\n      _useState2 = _slicedToArray(_useState, 2),\n      letterColor = _useState2[0],\n      setLetterColor = _useState2[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n\n  function handleAddLetter(letter) {\n    if (finalWord.filter(function (el) {\n      return el === letter;\n    }).length) {\n      setLetterColor(_objectSpread(_objectSpread({}, letterColor), {}, _defineProperty({}, letter, '#00d286')));\n      finalWord.map(function (el, index) {\n        if (el === letter) {\n          showText[index] = letter;\n        }\n      });\n      dispatch((0,_store_actions_game_actions__WEBPACK_IMPORTED_MODULE_3__.addShowText)(showText));\n    } else {\n      setLetterColor(_objectSpread(_objectSpread({}, letterColor), {}, _defineProperty({}, letter, '#dc143c')));\n      dispatch((0,_store_actions_game_actions__WEBPACK_IMPORTED_MODULE_3__.addErrorCounter)(errorCount + 1));\n    }\n\n    dispatch((0,_store_actions_game_actions__WEBPACK_IMPORTED_MODULE_3__.addGameLetter)(letter));\n\n    if (!showText.filter(function (el) {\n      return el === '*';\n    }).length) {\n      dispatch((0,_store_actions_game_actions__WEBPACK_IMPORTED_MODULE_3__.addGameStatus)(_types_enums__WEBPACK_IMPORTED_MODULE_5__.GAMESTATUS.win));\n    }\n\n    if (errorCount === 6) {\n      dispatch((0,_store_actions_game_actions__WEBPACK_IMPORTED_MODULE_3__.addGameStatus)(_types_enums__WEBPACK_IMPORTED_MODULE_5__.GAMESTATUS.fail));\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"footer__letter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"footer__row\"\n  }, _alphabet__WEBPACK_IMPORTED_MODULE_4__.r1.map(function (letter) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      style: {\n        backgroundColor: letterColor[letter]\n      },\n      onClick: function onClick() {\n        return handleAddLetter(letter);\n      }\n    }, letter);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"footer__row\"\n  }, _alphabet__WEBPACK_IMPORTED_MODULE_4__.r2.map(function (letter) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      style: {\n        backgroundColor: letterColor[letter]\n      },\n      onClick: function onClick() {\n        return handleAddLetter(letter);\n      }\n    }, letter);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"footer__row\"\n  }, _alphabet__WEBPACK_IMPORTED_MODULE_4__.r3.map(function (letter) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      style: {\n        backgroundColor: letterColor[letter]\n      },\n      onClick: function onClick() {\n        return handleAddLetter(letter);\n      }\n    }, letter);\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LetterClicker);\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/organisms/LetterClicker/LetterClicker.tsx?");

/***/ }),

/***/ "./src/components/organisms/LetterClicker/alphabet.ts":
/*!************************************************************!*\
  !*** ./src/components/organisms/LetterClicker/alphabet.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"colorsLetter\": function() { return /* binding */ colorsLetter; },\n/* harmony export */   \"r1\": function() { return /* binding */ r1; },\n/* harmony export */   \"r2\": function() { return /* binding */ r2; },\n/* harmony export */   \"r3\": function() { return /* binding */ r3; }\n/* harmony export */ });\nvar r1 = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'];\nvar r2 = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'];\nvar r3 = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];\nvar colorsLetter = {\n  'б': '#E2E2E2',\n  'а': '#E2E2E2',\n  'в': '#E2E2E2',\n  'г': '#E2E2E2',\n  'д': '#E2E2E2',\n  'е': '#E2E2E2',\n  'ё': '#E2E2E2',\n  'ж': '#E2E2E2',\n  'з': '#E2E2E2',\n  'и': '#E2E2E2',\n  'й': '#E2E2E2',\n  'к': '#E2E2E2',\n  'л': '#E2E2E2',\n  'м': '#E2E2E2',\n  'н': '#E2E2E2',\n  'о': '#E2E2E2',\n  'п': '#E2E2E2',\n  'р': '#E2E2E2',\n  'с': '#E2E2E2',\n  'т': '#E2E2E2',\n  'у': '#E2E2E2',\n  'ф': '#E2E2E2',\n  'х': '#E2E2E2',\n  'ц': '#E2E2E2',\n  'ч': '#E2E2E2',\n  'ш': '#E2E2E2',\n  'щ': '#E2E2E2',\n  'ь': '#E2E2E2',\n  'ы': '#E2E2E2',\n  'ъ': '#E2E2E2',\n  'э': '#E2E2E2',\n  'ю': '#E2E2E2',\n  'я': '#E2E2E2'\n};\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/organisms/LetterClicker/alphabet.ts?");

/***/ }),

/***/ "./src/components/organisms/LetterClicker/index.ts":
/*!*********************************************************!*\
  !*** ./src/components/organisms/LetterClicker/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _LetterClicker__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _LetterClicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LetterClicker */ \"./src/components/organisms/LetterClicker/LetterClicker.tsx\");\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/organisms/LetterClicker/index.ts?");

/***/ }),

/***/ "./src/components/organisms/Start/Start.tsx":
/*!**************************************************!*\
  !*** ./src/components/organisms/Start/Start.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GameDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameDash */ \"./src/components/organisms/GameDash/index.ts\");\n/* harmony import */ var _utils_getRandomWord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/getRandomWord */ \"./src/utils/getRandomWord.tsx\");\n/* harmony import */ var _utils_worddata_abbyy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/worddata/abbyy */ \"./src/utils/worddata/abbyy.tsx\");\n/* harmony import */ var _Start_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Start.pcss */ \"./src/components/organisms/Start/Start.pcss\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_game_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_store/actions/game.actions */ \"./src/_store/actions/game.actions.ts\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nfunction Start() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  var r1 = [1, 2, 3, 4, 5, 6, 7, 8];\n\n  function handleLetterCount(count) {\n    setSubmit(true);\n    var newWord = (0,_utils_getRandomWord__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_utils_worddata_abbyy__WEBPACK_IMPORTED_MODULE_3__.words, count);\n    dispatch((0,_store_actions_game_actions__WEBPACK_IMPORTED_MODULE_6__.clearGameState)());\n    dispatch((0,_store_actions_game_actions__WEBPACK_IMPORTED_MODULE_6__.addGameWord)(newWord));\n    var starArray = new Array(newWord.num).fill('*');\n    dispatch((0,_store_actions_game_actions__WEBPACK_IMPORTED_MODULE_6__.addShowText)(starArray));\n  }\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      submitted = _useState2[0],\n      setSubmit = _useState2[1];\n\n  var startJSX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"start-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"start-container__title\"\n  }, \"\\u0418\\u0433\\u0440\\u0430 \\u043D\\u0430\\u0447\\u0438\\u043D\\u0430\\u0435\\u0442\\u0441\\u044F \\u0432\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u043A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0431\\u0443\\u043A\\u043E\\u0432\\u043E\\u043A:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"footer__letter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"footer__row\"\n  }, r1.map(function (letterCount) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      style: {\n        backgroundColor: '#E2E2E2'\n      },\n      onClick: function onClick() {\n        handleLetterCount(letterCount);\n      }\n    }, letterCount);\n  }))));\n  return submitted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GameDash__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null) : startJSX;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Start);\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/organisms/Start/Start.tsx?");

/***/ }),

/***/ "./src/components/pages/Game/Game.tsx":
/*!********************************************!*\
  !*** ./src/components/pages/Game/Game.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _organisms_Start_Start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../organisms/Start/Start */ \"./src/components/organisms/Start/Start.tsx\");\n\n\n\nvar Game = function Game() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"\\u0418\\u0433\\u0440\\u0430 \\\"\\u0412\\u0438\\u0441\\u0435\\u043B\\u0438\\u0446\\u0430\\\" version 1.1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_organisms_Start_Start__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/pages/Game/Game.tsx?");

/***/ }),

/***/ "./src/components/pages/Game/index.ts":
/*!********************************************!*\
  !*** ./src/components/pages/Game/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/components/pages/Game/Game.tsx\");\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/pages/Game/index.ts?");

/***/ }),

/***/ "./src/utils/getCanvasPic.tsx":
/*!************************************!*\
  !*** ./src/utils/getCanvasPic.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getCanvasPic; }\n/* harmony export */ });\nfunction getCanvasPic(ctx, errorCount) {\n  for (var ind = 0; ind < errorCount; ind++) {\n    if (ind === 0) {\n      ctx.beginPath();\n      ctx.moveTo(40, 40);\n      ctx.lineTo(40, 360);\n      ctx.strokeStyle = 'black';\n      ctx.lineWidth = 6;\n      ctx.stroke();\n      ctx.closePath();\n    }\n\n    if (ind === 1) {\n      ctx.beginPath();\n      ctx.moveTo(40, 40);\n      ctx.lineTo(360, 40);\n      ctx.strokeStyle = 'black';\n      ctx.lineWidth = 6;\n      ctx.stroke();\n      ctx.closePath();\n    }\n\n    if (ind === 2) {\n      ctx.beginPath();\n      ctx.moveTo(360, 40);\n      ctx.lineTo(360, 360);\n      ctx.strokeStyle = 'black';\n      ctx.lineWidth = 6;\n      ctx.stroke();\n      ctx.closePath();\n    }\n\n    if (ind === 3) {\n      ctx.beginPath();\n      ctx.moveTo(200, 40);\n      ctx.lineTo(200, 80);\n      ctx.strokeStyle = 'black';\n      ctx.lineWidth = 6;\n      ctx.stroke();\n      ctx.closePath();\n      ctx.beginPath();\n      ctx.arc(200, 100, 20, 0, 2 * Math.PI);\n      ctx.stroke();\n      ctx.closePath();\n    }\n\n    if (ind === 4) {\n      ctx.beginPath();\n      ctx.arc(200, 180, 60, 0, 2 * Math.PI);\n      ctx.stroke();\n      ctx.closePath();\n    }\n\n    if (ind === 5) {\n      ctx.beginPath();\n      ctx.moveTo(140, 180);\n      ctx.lineTo(80, 120);\n      ctx.strokeStyle = 'black';\n      ctx.lineWidth = 6;\n      ctx.stroke();\n      ctx.closePath();\n      ctx.beginPath();\n      ctx.moveTo(260, 180);\n      ctx.lineTo(320, 120);\n      ctx.strokeStyle = 'black';\n      ctx.lineWidth = 6;\n      ctx.stroke();\n      ctx.closePath();\n    }\n\n    if (ind === 6) {\n      ctx.beginPath();\n      ctx.moveTo(200, 240);\n      ctx.lineTo(140, 300);\n      ctx.strokeStyle = 'black';\n      ctx.lineWidth = 6;\n      ctx.stroke();\n      ctx.closePath();\n      ctx.beginPath();\n      ctx.moveTo(200, 240);\n      ctx.lineTo(260, 300);\n      ctx.strokeStyle = 'black';\n      ctx.lineWidth = 6;\n      ctx.stroke();\n      ctx.closePath();\n    }\n  }\n}\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/utils/getCanvasPic.tsx?");

/***/ }),

/***/ "./src/utils/getRandomWord.tsx":
/*!*************************************!*\
  !*** ./src/utils/getRandomWord.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getRandomWord; }\n/* harmony export */ });\nfunction getRandomWord(wordArr, letterCount) {\n  var arrByCount = wordArr.filter(function (el) {\n    return Number(el.num) === Number(letterCount);\n  });\n  var randomNumber = Math.floor(Math.random() * arrByCount.length);\n  return arrByCount[randomNumber];\n}\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/utils/getRandomWord.tsx?");

/***/ }),

/***/ "./src/utils/worddata/abbyy.tsx":
/*!**************************************!*\
  !*** ./src/utils/worddata/abbyy.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"words\": function() { return /* binding */ words; }\n/* harmony export */ });\nvar words = [{\n  id: 1,\n  num: 1,\n  text: 'я',\n  category: 'я'\n}, {\n  id: 2,\n  num: 2,\n  text: 'як',\n  category: 'Животные'\n}, {\n  id: 3,\n  num: 3,\n  text: 'шар',\n  category: 'Геометрические фигуры'\n}, {\n  id: 4,\n  num: 4,\n  text: 'тигр',\n  category: 'Животные'\n}, {\n  id: 5,\n  num: 5,\n  text: 'конус',\n  category: 'Геометрические фигуры'\n}, {\n  id: 6,\n  num: 6,\n  text: 'собака',\n  category: 'Животные'\n}, {\n  id: 7,\n  num: 6,\n  text: 'машина',\n  category: 'Транспорт'\n}, {\n  id: 8,\n  num: 5,\n  text: 'катер',\n  category: 'Транспорт'\n}, {\n  id: 9,\n  num: 7,\n  text: 'слизень',\n  category: 'Животные'\n}, {\n  id: 10,\n  num: 8,\n  text: 'квартира',\n  category: 'Недвижимость'\n}];\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/utils/worddata/abbyy.tsx?");

/***/ }),

/***/ "./src/components/atoms/Button/Button.pcss":
/*!*************************************************!*\
  !*** ./src/components/atoms/Button/Button.pcss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/atoms/Button/Button.pcss?");

/***/ }),

/***/ "./src/components/molecules/Fail/Fail.pcss":
/*!*************************************************!*\
  !*** ./src/components/molecules/Fail/Fail.pcss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Fail/Fail.pcss?");

/***/ }),

/***/ "./src/components/molecules/Finish/Finish.pcss":
/*!*****************************************************!*\
  !*** ./src/components/molecules/Finish/Finish.pcss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Finish/Finish.pcss?");

/***/ }),

/***/ "./src/components/molecules/OneLetter/OneLetter.pcss":
/*!***********************************************************!*\
  !*** ./src/components/molecules/OneLetter/OneLetter.pcss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/OneLetter/OneLetter.pcss?");

/***/ }),

/***/ "./src/components/molecules/Win/Win.pcss":
/*!***********************************************!*\
  !*** ./src/components/molecules/Win/Win.pcss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/molecules/Win/Win.pcss?");

/***/ }),

/***/ "./src/components/organisms/GameDash/GameDash.pcss":
/*!*********************************************************!*\
  !*** ./src/components/organisms/GameDash/GameDash.pcss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/organisms/GameDash/GameDash.pcss?");

/***/ }),

/***/ "./src/components/organisms/LetterClicker/LetterClicker.pcss":
/*!*******************************************************************!*\
  !*** ./src/components/organisms/LetterClicker/LetterClicker.pcss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/organisms/LetterClicker/LetterClicker.pcss?");

/***/ }),

/***/ "./src/components/organisms/Start/Start.pcss":
/*!***************************************************!*\
  !*** ./src/components/organisms/Start/Start.pcss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex-practicum-2-mega-game/./src/components/organisms/Start/Start.pcss?");

/***/ })

}]);