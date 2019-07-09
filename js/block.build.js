/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_static_block__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_static_block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_static_block__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_dynamic_block__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_dynamic_block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__blocks_dynamic_block__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    PanelColorSettings = _wp$editor.PanelColorSettings;


registerBlockType('myguten-block/dynamic-custom-block', {
    title: __('Dynamic Custom Block'),
    icon: 'megaphone',
    category: 'common',
    attributes: {
        fname: {
            type: 'string',
            default: ''
        },
        textColor: {
            type: 'string',
            default: ''
        }
    },
    edit: function edit(props) {
        var _props$attributes = props.attributes,
            fname = _props$attributes.fname,
            textColor = _props$attributes.textColor,
            setAttributes = props.setAttributes;


        return [wp.element.createElement(
            InspectorControls,
            null,
            wp.element.createElement(PanelColorSettings, {
                title: __('Text Color'),
                initialOpen: true,
                colorSettings: [{
                    label: __(''),
                    value: textColor,
                    onChange: function onChange(value) {
                        return setAttributes({
                            textColor: value
                        });
                    }
                }]
            })
        ), wp.element.createElement(RichText, {
            tagName: 'p',
            className: 'fname',
            value: fname,
            placeholder: __("Enter First Name"),
            onChange: function onChange(value) {
                return setAttributes({ fname: value });
            },
            style: { color: textColor }
        })];
    },
    save: function save(props) {
        var _props$attributes2 = props.attributes,
            fname = _props$attributes2.fname,
            textColor = _props$attributes2.textColor;

        return wp.element.createElement(RichText.Content, {
            tagName: 'p',
            className: 'fname',
            value: fname,
            style: { color: textColor }
        });
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('myguten-block/static-custom-block', {
	title: __('Static Custom Block'),
	icon: 'megaphone',
	category: 'common',
	edit: function edit() {
		return wp.element.createElement(
			'p',
			null,
			'Static block example built with JSX.'
		);
	},
	save: function save() {
		return wp.element.createElement(
			'p',
			null,
			'Static block example built with JSX.'
		);
	}
});

/***/ })
/******/ ]);