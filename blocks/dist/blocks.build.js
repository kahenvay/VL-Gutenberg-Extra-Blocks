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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./toggle/block */ "./blocks/src/toggle/block.js");

__webpack_require__(/*! ./twitter/block */ "./blocks/src/twitter/block.js");

__webpack_require__(/*! ./instagram/block */ "./blocks/src/instagram/block.js");

/***/ }),

/***/ "./blocks/src/instagram/Components/InstaEmbed.js":
/*!*******************************************************!*\
  !*** ./blocks/src/instagram/Components/InstaEmbed.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InstaEmbed = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(/*! ../api */ "./blocks/src/instagram/api.js");

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;

var InstaEmbed = exports.InstaEmbed = function (_Component) {
	_inherits(InstaEmbed, _Component);

	function InstaEmbed(props) {
		_classCallCheck(this, InstaEmbed);

		var _this = _possibleConstructorReturn(this, (InstaEmbed.__proto__ || Object.getPrototypeOf(InstaEmbed)).apply(this, arguments));

		_this.props = props;
		_this.state = {
			embed: ''
		};

		_this.getEmbed = _this.getEmbed.bind(_this);
		// this.setStatus = this.setStatus.bind(this); 

		return _this;
	}

	_createClass(InstaEmbed, [{
		key: 'getEmbed',
		value: function getEmbed() {
			var _this2 = this;

			if (this.props.link) {

				var args = {
					link: this.props.link
				};

				api.getEmbed(args).then(function (response) {
					// console.log('getEmbed response', response);
					_this2.setState({
						embed: response.data.html
					}, function () {
						// console.log('embed', this.state.embed);
					});
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// console.log('mount rpors');
			// this.setStatus();
			this.getEmbed();
		}

		// componentWillReceiveProps(newProps) {
		// 	console.log('received rpors');
		// 	this.setStatus(newProps);
		// }

	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.embed) {
				return wp.element.createElement('div', { className: 'InstaEmbed', dangerouslySetInnerHTML: { __html: this.state.embed } });
			} else {
				return wp.element.createElement(
					'div',
					{ className: 'InstaEmbed' },
					wp.element.createElement(
						'p',
						null,
						' Waiting for embed... '
					)
				);
			}
		}
	}]);

	return InstaEmbed;
}(Component);

/***/ }),

/***/ "./blocks/src/instagram/Components/InstaFeed.js":
/*!******************************************************!*\
  !*** ./blocks/src/instagram/Components/InstaFeed.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InstaFeed = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(/*! ../api */ "./blocks/src/instagram/api.js");

var api = _interopRequireWildcard(_api);

var _InstaEmbed = __webpack_require__(/*! ./InstaEmbed */ "./blocks/src/instagram/Components/InstaEmbed.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;

var InstaFeed = exports.InstaFeed = function (_Component) {
	_inherits(InstaFeed, _Component);

	function InstaFeed(props) {
		_classCallCheck(this, InstaFeed);

		var _this = _possibleConstructorReturn(this, (InstaFeed.__proto__ || Object.getPrototypeOf(InstaFeed)).apply(this, arguments));

		_this.props = props;
		_this.state = {
			feed: ''
		};

		_this.getFeed = _this.getFeed.bind(_this);
		// this.setStatus = this.setStatus.bind(this); 

		return _this;
	}

	_createClass(InstaFeed, [{
		key: 'getFeed',
		value: function getFeed() {
			var _this2 = this;

			if (this.props.access_token) {

				var args = {
					access_token: this.props.access_token
				};

				api.getFeed(args).then(function (response) {
					// console.log('getFeed response', response);
					_this2.setState({
						feed: response.data.data
					}, function () {
						console.log('feed', _this2.state.feed);
					});
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// console.log('mount rpors');
			// this.setStatus();
			this.getFeed();
		}

		// componentWillReceiveProps(newProps) {
		// 	console.log('received rpors');
		// 	this.setStatus(newProps);
		// }

	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.feed) {
				return wp.element.createElement(
					'div',
					{ className: 'InstaFeed' },
					this.state.feed.map(function (post) {
						return wp.element.createElement(
							'div',
							null,
							wp.element.createElement(
								'div',
								null,
								wp.element.createElement('img', { src: post.images.standard_resolution.url })
							),
							wp.element.createElement(
								'div',
								null,
								wp.element.createElement(_InstaEmbed.InstaEmbed, { link: post.link })
							)
						);
					})
				);
			} else {
				return wp.element.createElement(
					'div',
					{ className: 'InstaFeed' },
					wp.element.createElement(
						'p',
						null,
						' Waiting for feed... '
					)
				);
			}
		}
	}]);

	return InstaFeed;
}(Component);

/***/ }),

/***/ "./blocks/src/instagram/api.js":
/*!*************************************!*\
  !*** ./blocks/src/instagram/api.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getEmbed = exports.getFeed = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFeed = exports.getFeed = function getFeed(args) {

	console.log('getting feed');

	var access_token = args.access_token;

	var base_url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';

	var call = base_url + access_token;

	// console.log('call', call);
	return _axios2.default.get(call);
};

var getEmbed = exports.getEmbed = function getEmbed(args) {

	console.log('getting feed');

	var link = args.link;


	var base_url = 'https://api.instagram.com/oembed?url=';

	var call = base_url + link;

	// console.log('call', call);
	return _axios2.default.get(call);
};

/***/ }),

/***/ "./blocks/src/instagram/block.js":
/*!***************************************!*\
  !*** ./blocks/src/instagram/block.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/instagram/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/instagram/editor.scss");

var _InstaFeed = __webpack_require__(/*! ./Components/InstaFeed */ "./blocks/src/instagram/Components/InstaFeed.js");

var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText;

// import * as api from './api';

/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls; // Import registerBlockType() from wp.blocks

var _wp = wp,
    apiRequest = _wp.apiRequest;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

// Inspired by https://codepen.io/abergin/pen/ihlDf

registerBlockType('vl-blocks/instagram', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('VL Instagram Feed'), // Block title.
	icon: 'share', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('VL Instagram Feed'), __('VL Gutenberg Extra Block'), __('Instagram Feed')],
	attributes: {
		// past <,  upcoming >=
		hashtag: {
			type: 'string',
			selector: '.vl-instagram__title'
		},
		insta_token: {
			type: 'string'
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		var _props$attributes = props.attributes,
		    hashtag = _props$attributes.hashtag,
		    insta_token = _props$attributes.insta_token,
		    setAttributes = props.setAttributes;

		// let getFeed = hashtag => {
		// 	// console.log('getting tweets');
		// }


		// let hashtagChange = hashtag => {

		// 	let args = {
		// 		hashtag,
		// 		access_token
		// 	}

		// 	console.log('args', args);

		// 	var feed = api.getFeed(args);

		// 	console.log('feed', feed);

		// 	setAttributes({
		// 		hashtag
		// 	})
		// }

		var args = {
			access_token: access_token
		};

		if (access_token) {
			// console.log('access_token', access_token);
			// setAttributes({
			// 	insta_token: access_token 
			// })

			// console.log('insta_token', insta_token);

			return wp.element.createElement(
				'div',
				{ className: [props.className] },
				wp.element.createElement(
					'div',
					{ className: ['vl-instagram'] },
					wp.element.createElement(
						'div',
						{ className: 'vl-instagram__header' },
						wp.element.createElement(
							'div',
							{ className: 'vl-instagram__logo__wrapper' },
							wp.element.createElement('span', { 'class': 'dashicons dashicons-instagram' })
						)
					),
					wp.element.createElement(
						'div',
						{ className: 'vl-instagram__feed' },
						wp.element.createElement(_InstaFeed.InstaFeed, { access_token: access_token })
					)
				)
			);
		} else {
			return wp.element.createElement(
				'div',
				{ className: [props.className] },
				wp.element.createElement(
					'h2',
					null,
					'Please enter your instagram access token ',
					wp.element.createElement(
						'a',
						{ href: '/wp-admin/admin.php?page=vl_blocks' },
						'here'
					),
					' before we can get your feed.'
				)
			);
		}
	},

	// <PlainText onChange={ hashtagChange } value={ hashtag } placeholder="@user" />

	// <h2>Please enter your instagram access token <a href="/wp-admin/admin.php?page=vl_blocks">here</a> before we can get your feed.</h2>

	//<strong>Please enter your access token to view feed. For help/instructions on how to get this, please see <a href="/wp-admin/admin.php?page=vl_blocks">here</a></strong>
	//  <TextControl label="Insta access_token" value={ access_token } onChange={ (access_token) => setAttributes({
	//                                                                            	access_token
	//                                                                            }) } />


	/**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	save: function save(props) {
		var _props$attributes2 = props.attributes,
		    hashtag = _props$attributes2.hashtag,
		    insta_token = _props$attributes2.insta_token,
		    setAttributes = props.setAttributes;


		var args = {
			access_token: access_token
		};

		if (access_token) {
			return wp.element.createElement(
				'div',
				{ className: [props.className] },
				wp.element.createElement(
					'div',
					{ className: ['vl-instagram'] },
					wp.element.createElement(
						'div',
						{ className: 'vl-instagram__header' },
						wp.element.createElement(
							'div',
							{ className: 'vl-instagram__logo__wrapper' },
							wp.element.createElement('span', { 'class': 'dashicons dashicons-instagram' })
						)
					),
					wp.element.createElement(
						'div',
						{ className: 'vl-instagram__feed' },
						wp.element.createElement(_InstaFeed.InstaFeed, { access_token: access_token })
					)
				)
			);
		} else {
			return wp.element.createElement(
				'div',
				{ className: [props.className] },
				wp.element.createElement(
					'h2',
					null,
					'Please enter your instagram access token ',
					wp.element.createElement(
						'a',
						{ href: '/wp-admin/admin.php?page=vl_blocks' },
						'here'
					),
					' before we can get your feed.'
				)
			);
		}
	}
});

/***/ }),

/***/ "./blocks/src/instagram/editor.scss":
/*!******************************************!*\
  !*** ./blocks/src/instagram/editor.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/instagram/style.scss":
/*!*****************************************!*\
  !*** ./blocks/src/instagram/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/toggle/block.js":
/*!************************************!*\
  !*** ./blocks/src/toggle/block.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/toggle/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/toggle/editor.scss");

var _Toggle = __webpack_require__(/*! ./components/Toggle */ "./blocks/src/toggle/components/Toggle.js");

var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText; /**
                                     * BLOCK: main
                                     *
                                     * Registering a basic block with Gutenberg.
                                     * Simple block, renders and saves the same content without any interactivity.
                                     */

//  Import CSS.

var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp = wp,
    apiRequest = _wp.apiRequest;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    BaseControl = _wp$components.BaseControl,
    ColorPalette = _wp$components.ColorPalette;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

// Inspired by https://codepen.io/abergin/pen/ihlDf

registerBlockType('vl-blocks/toggle', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('VL Accordion'), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('VL Accordion'), __('VL Gutenberg Extra Block'), __('Accordion')],
	attributes: {
		// past <,  upcoming >=
		accordionTitle: {
			type: 'array',
			source: 'children',
			selector: '.vl-accordion__title h1'
		},
		toggleTitle: {
			// type: 'array',
			// source: 'children',
			// selector: '.vl-accordion__content-toggle__title h2' 
		},
		titleMediaId: {
			type: 'string'
		},
		toggleTitleMediaAlt: {
			attribute: 'alt',
			selector: '.vl-accordion__title__image'
		},
		toggleTitleMediaUrl: {
			attribute: 'src',
			selector: '.vl-accordion__title__image'
		},
		toggleContent: {
			type: 'array',
			source: 'children',
			selector: '.vl-accordion__content-toggle__content p'
		},
		theme: {
			type: 'string',
			default: 'vl-accordion-theme-classic'
		},
		// toggleTitle: {
		// 	type: 'string'
		// },
		// toggleTitleChild: {
		// 	type: 'string'
		// },
		// toggleContentChild: {
		// 	type: 'string'
		// },
		// toggleContent: {
		// 	type: 'string'
		// },
		toggleTitleHeight: {
			type: 'string'
		},
		toggleContentHeight: {
			type: 'string'
		},
		textColor: { // Serialized by default
			type: 'string'
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		var _props$attributes = props.attributes,
		    accordionTitle = _props$attributes.accordionTitle,
		    toggleTitle = _props$attributes.toggleTitle,
		    toggleContent = _props$attributes.toggleContent,
		    theme = _props$attributes.theme,
		    titleMediaId = _props$attributes.titleMediaId,
		    toggleTitleMediaAlt = _props$attributes.toggleTitleMediaAlt,
		    toggleTitleMediaUrl = _props$attributes.toggleTitleMediaUrl,
		    toggleTitleHeight = _props$attributes.toggleTitleHeight,
		    toggleContentHeight = _props$attributes.toggleContentHeight,
		    attributes = props.attributes,
		    isSelected = props.isSelected,
		    setAttributes = props.setAttributes;

		// TODO : isSelected

		var getImageButton = function getImageButton(openEvent) {
			if (toggleTitleMediaUrl) {
				return wp.element.createElement(
					Button,
					{ onClick: function onClick() {
							setAttributes({
								titleMediaId: '',
								toggleTitleMediaAlt: '',
								toggleTitleMediaUrl: ''
							});
						}, className: 'button button-large' },
					'Remove title background image'
				);
			} else {
				return wp.element.createElement(
					Button,
					{ onClick: openEvent, className: 'button button-large' },
					'Pick an title background image'
				);
			}
		};

		var onMediaSelect = function onMediaSelect(media) {
			console.log('media selected', media);
			setAttributes({
				toggleTitleMediaAlt: media.alt,
				toggleTitleMediaUrl: media.url
			});
		};

		//InspectorControls depracted... waiting to see how to do now

		// var renderInspector = ({isSelected, attributes, setAttributes}) => {
		// 	if (!isSelected) {
		// 		return null;
		// 	}
		// 	const {textColor} = attributes
		// 	return (
		// 		<InspectorControls>
		//     <div>
		//       <h2>Text Color</h2>
		//       <BaseControl>
		//         <ColorPalette value={ textColor } onChange={ (textColor) => setAttributes({
		//                                                      	textColor
		//                                                      }) } />
		//       </BaseControl>
		//     </div>
		//   </InspectorControls>
		// 	)
		// }

		// inblock not practical  ->  end new way to put in sidebar

		// var renderInspector = ({isSelected, attributes, setAttributes}) => {
		// 	if (!isSelected) {
		// 		return null;
		// 	}
		// 	const {textColor} = attributes
		// 	return (
		// 		<div>
		//     <h2>Text Color</h2>
		//     <BaseControl>
		//       <ColorPalette value={ textColor } onChange={ (textColor) => setAttributes({
		//                                                    	textColor
		//                                                    }) } />
		//     </BaseControl>
		//   </div>
		// 	)
		// }

		// { renderInspector({ 
		//      	isSelected,
		//      	attributes,
		//      	setAttributes
		//      }) }

		var themeSelector = function themeSelector(isSelected) {
			if (!isSelected) {
				return null;
			}
			return wp.element.createElement(
				'select',
				{ value: theme, className: 'vl-accordion__theme-selector', onChange: function onChange(event) {
						return setAttributes({
							theme: event.target.value
						});
					} },
				wp.element.createElement(
					'option',
					{ value: 'vl-accordion-theme-classic' },
					'Classic'
				),
				wp.element.createElement(
					'option',
					{ value: 'vl-accordion-theme-neptune' },
					'Neptune'
				)
			);
		};

		var wrapperClasses = {};

		var titleMediaUpload = function titleMediaUpload(isSelected) {
			if (!isSelected) return null;
			return wp.element.createElement(MediaUpload, { onSelect: onMediaSelect, value: titleMediaId, render: function render(_ref) {
					var open = _ref.open;
					return getImageButton(open);
				} });
		};

		var updateAttributes = function updateAttributes(attributeOjbect) {
			// console.log('attributeOjbect', attributeOjbect);
			setAttributes(attributeOjbect);
			// console.log(attributes);
		};

		var titleMedia = function titleMedia(src, alt) {
			if (!src) return null;

			if (alt) {
				return wp.element.createElement(
					'div',
					{ className: 'vl-accordion__title__image__wrapper' },
					wp.element.createElement('img', { className: 'vl-accordion__title__image', src: src, alt: alt })
				);
			}

			// No alt set, so let's hide it from screen readers
			return wp.element.createElement(
				'div',
				{ className: 'vl-accordion__title__image__wrapper' },
				wp.element.createElement('img', { className: 'vl-accordion__title__image', src: src, alt: '', 'aria-hidden': 'true' })
			);
		};

		// let handleInputChange = (dis) => {
		// 	// setAttributes({ 
		// 	// 	[input]: content 
		// 	// })
		// 	console.log('dis', dis);
		// }


		return wp.element.createElement(
			'div',
			{ className: [props.className] },
			wp.element.createElement(
				'div',
				{ className: ['vl-accordion' + ' ' + theme] },
				wp.element.createElement(
					'div',
					{ className: 'vl-accordion__theme-selector__wrapper' },
					themeSelector(isSelected),
					titleMediaUpload(isSelected)
				),
				wp.element.createElement(
					'div',
					{ className: 'vl-accordion__title' },
					wp.element.createElement(
						'h1',
						null,
						wp.element.createElement(RichText, { keepPlaceholderOnFocus: 'true', label: 'Accordion title', help: 'Enter some text', value: accordionTitle, placeholder: 'Optional accordion title', onChange: function onChange(content) {
								return setAttributes({
									accordionTitle: content
								});
							} })
					)
				),
				wp.element.createElement(
					'ul',
					{ className: 'vl-accordion__content' },
					wp.element.createElement(
						'li',
						{ className: 'vl-accordion__content-toggle' },
						wp.element.createElement(_Toggle.Toggle, { toggleTitle: toggleTitle, toggleContent: toggleContent, toggleTitleHeight: toggleTitleHeight, toggleContentHeight: toggleContentHeight, toggleTitleMediaUrl: toggleTitleMediaUrl,
							toggleTitleMediaAlt: toggleTitleMediaAlt, updateAttributes: updateAttributes, setAttributes: setAttributes })
					)
				)
			)
		);
	},

	// <Toggle toggleTitle={ toggleTitle } toggleContent={ toggleContent } toggleTitleHeight={ toggleTitleHeight } toggleContentHeight={ toggleContentHeight } toggleTitleMediaUrl={ toggleTitleMediaUrl }toggleTitleMediaAlt={ toggleTitleMediaAlt } updateAttributes={ updateAttributes } />


	/**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	save: function save(props) {
		var _props$attributes2 = props.attributes,
		    accordionTitle = _props$attributes2.accordionTitle,
		    toggleTitle = _props$attributes2.toggleTitle,
		    toggleContent = _props$attributes2.toggleContent,
		    theme = _props$attributes2.theme,
		    titleMediaId = _props$attributes2.titleMediaId,
		    toggleTitleMediaAlt = _props$attributes2.toggleTitleMediaAlt,
		    toggleTitleMediaUrl = _props$attributes2.toggleTitleMediaUrl,
		    toggleTitleHeight = _props$attributes2.toggleTitleHeight,
		    toggleContentHeight = _props$attributes2.toggleContentHeight,
		    attributes = props.attributes,
		    isSelected = props.isSelected,
		    setAttributes = props.setAttributes;


		var titleMedia = function titleMedia(src, alt) {
			if (!src) return null;

			if (alt) {
				return wp.element.createElement(
					'div',
					{ className: 'vl-accordion__title__image__wrapper' },
					wp.element.createElement('img', { className: 'vl-accordion__title__image', src: src, alt: alt })
				);
			}

			// No alt set, so let's hide it from screen readers
			return wp.element.createElement(
				'div',
				{ className: 'vl-accordion__title__image__wrapper' },
				wp.element.createElement('img', { className: 'vl-accordion__title__image', src: src, alt: '', 'aria-hidden': 'true' })
			);
		};

		return wp.element.createElement(
			'div',
			{ className: [props.className] },
			wp.element.createElement(
				'div',
				{ className: 'vl-accordion' + ' ' + theme },
				wp.element.createElement(
					'div',
					{ className: theme },
					theme
				),
				wp.element.createElement(
					'div',
					{ className: 'vl-accordion__title' },
					wp.element.createElement(
						'h1',
						null,
						accordionTitle
					)
				),
				wp.element.createElement(
					'ul',
					{ className: 'vl-accordion__content' },
					wp.element.createElement(
						'li',
						{ className: 'vl-accordion__content-toggle' },
						wp.element.createElement('input', { type: 'checkbox' }),
						wp.element.createElement('i', null),
						wp.element.createElement(
							'div',
							{ className: 'vl-accordion__content-toggle__title' },
							titleMedia(toggleTitleMediaUrl, toggleTitleMediaAlt),
							wp.element.createElement(
								'h2',
								null,
								toggleTitle,
								' '
							)
						),
						wp.element.createElement(
							'div',
							{ className: 'vl-accordion__content-toggle__content' },
							wp.element.createElement(
								'p',
								null,
								toggleContent
							)
						)
					)
				)
			)
		);
	}
});

/***/ }),

/***/ "./blocks/src/toggle/components/Toggle.js":
/*!************************************************!*\
  !*** ./blocks/src/toggle/components/Toggle.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Toggle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ToggleTitle = __webpack_require__(/*! ./ToggleTitle */ "./blocks/src/toggle/components/ToggleTitle.js");

var _ToggleContent = __webpack_require__(/*! ./ToggleContent */ "./blocks/src/toggle/components/ToggleContent.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;
var RichText = wp.editor.RichText;

var Toggle = exports.Toggle = function (_Component) {
	_inherits(Toggle, _Component);

	function Toggle(props) {
		_classCallCheck(this, Toggle);

		var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));

		_this.props = props;
		_this.state = {
			toggleTitle: '',
			toggleContent: '',
			toggleTitleHeight: '',
			toggleContentHeight: '',
			toggleTitleMediaUrl: '',
			toggleTitleMediaAlt: ''
		};

		_this.setStatus = _this.setStatus.bind(_this);
		_this.titleMedia = _this.titleMedia.bind(_this);

		return _this;
	}

	_createClass(Toggle, [{
		key: 'titleMedia',
		value: function titleMedia(src, alt) {
			if (!src) return null;

			if (alt) {
				return wp.element.createElement(
					'div',
					{ className: 'vl-accordion__title__image__wrapper' },
					wp.element.createElement('img', { className: 'vl-accordion__title__image', src: src, alt: alt })
				);
			}

			// No alt set, so let's hide it from screen readers
			return wp.element.createElement(
				'div',
				{ className: 'vl-accordion__title__image__wrapper' },
				wp.element.createElement('img', { className: 'vl-accordion__title__image', src: src, alt: '', 'aria-hidden': 'true' })
			);
		}
	}, {
		key: 'setStatus',
		value: function setStatus(newProps) {

			var props = newProps ? newProps : this.props;

			// console.log('setStatus props', props);

			if (props.toggleTitle) {
				this.setState({
					toggleTitle: props.toggleTitle
				}, function () {});
			}
			if (props.toggleContent) {
				this.setState({
					toggleContent: props.toggleContent
				}, function () {});
			}
			if (props.toggleTitleHeight) {
				this.setState({
					toggleTitleHeight: props.toggleTitleHeight
				}, function () {});
			}
			if (props.toggleContentHeight) {
				this.setState({
					toggleContentHeight: props.toggleContentHeight
				}, function () {});
			}
			if (props.toggleTitleMediaUrl) {
				this.setState({
					toggleTitleMediaUrl: props.toggleTitleMediaUrl
				}, function () {});
			}
			if (props.toggleTitleMediaAlt) {
				this.setState({
					toggleTitleMediaAlt: props.toggleTitleMediaAlt
				}, function () {});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// console.log('mount props');
			this.setStatus();
			// this.props.history.goBack();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			// console.log('received props');
			this.setStatus(newProps);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {}
	}, {
		key: 'render',
		value: function render() {
			console.log('props', this.props);
			return wp.element.createElement(
				'div',
				{ className: 'Toggle' },
				wp.element.createElement('input', { type: 'checkbox' }),
				wp.element.createElement('i', null),
				wp.element.createElement(
					'div',
					{ className: 'vl-accordion__content-toggle__title' },
					this.titleMedia(this.toggleTitleMediaUrl, this.toggleTitleMediaAlt),
					wp.element.createElement(_ToggleTitle.ToggleTitle /*toggleTitle={ this.state.toggleTitle }*/, { toggleTitle: this.props.toggleTitle, toggleTitleHeight: this.state.toggleTitleHeight, updateAttributes: this.props.updateAttributes,
						setAttributes: this.props.setAttributes })
				),
				wp.element.createElement(
					'div',
					{ className: 'vl-accordion__content-toggle__content' },
					wp.element.createElement(_ToggleContent.ToggleContent /*toggleTitle={ this.state.toggleTitle }*/, { toggleContent: this.props.toggleContent, toggleContentHeight: this.state.toggleContentHeight, updateAttributes: this.props.updateAttributes,
						setAttributes: this.props.setAttributes })
				)
			);
		}
	}]);

	return Toggle;
}(Component);

// <div className={ 'vl-accordion__content-toggle__content' }>
//        <RichText label="Toggle content" help="Enter some text" value={ this.toggleContent } name="content" placeholder="Content body..." onChange={ this.handleInputChange } />
//      </div>

/***/ }),

/***/ "./blocks/src/toggle/components/ToggleContent.js":
/*!*******************************************************!*\
  !*** ./blocks/src/toggle/components/ToggleContent.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;
var RichText = wp.editor.RichText;
var withSelect = wp.data.withSelect;

// const inputs = ['pastOrUpcoming', 'howManyEvents']

var ToggleContent = exports.ToggleContent = function (_Component) {
	_inherits(ToggleContent, _Component);

	function ToggleContent(props) {
		_classCallCheck(this, ToggleContent);

		var _this = _possibleConstructorReturn(this, (ToggleContent.__proto__ || Object.getPrototypeOf(ToggleContent)).apply(this, arguments));

		_this.props = props;
		_this.state = {
			toggleTitle: [''],
			toggleTitleHeight: '',
			touched: false,
			height: 0
		};

		_this.setStatus = _this.setStatus.bind(_this);
		_this.handleInputChange = _this.handleInputChange.bind(_this);

		return _this;
	}

	//Richtext gives straight value array apparently, no event


	_createClass(ToggleContent, [{
		key: 'handleInputChange',
		value: function handleInputChange(value) {
			var _this2 = this;

			console.log('value', value);
			// let name = event.target.name
			this.setState({
				toggleTitle: value,
				touched: true
			}, function () {
				console.log('this.state.toggleTitle', _this2.state.toggleTitle);
				_this2.props.updateAttributes({
					toggleTitle: _this2.state.toggleTitle
				});
			});
		}
	}, {
		key: 'setStatus',
		value: function setStatus(newProps) {

			var props = newProps ? newProps : this.props;

			// console.log('setStatus props', props);

			if (props.toggleTitle) {
				this.setState({
					toggleTitle: props.toggleTitle
				}, function () {
					// console.log('this.state after set toggleTitle', this.state);
					// this.handleInputChange(props.toggleTitle);
				});
			}
			if (props.toggleTitleHeight) {
				this.setState({
					toggleTitleHeight: props.toggleTitleHeight
				}, function () {});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// console.log('mount props');
			this.setStatus();
			var height = this.divElement.clientHeight;
			this.setState({
				height: height
			});
			// setTimeout(function() {
			// 	console.log('timeout');
			// 	this.setState({
			// 		toggleTitle: 'TIMOEUT MADAFAQA'
			// 	}, () => {
			// 		console.log('this.state after set toggleTitle', this.state);
			// 	});
			// }, 2000);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			// console.log('received props');
			this.setStatus(newProps);
		}

		// componentDidUpdate() {
		// 	console.log('update');
		// }


	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			console.log('render state', this.state);
			// console.log('props', this.props);


			return wp.element.createElement(
				'div',
				{ className: 'ToggleContent', ref: function ref(divElement) {
						return _this3.divElement = divElement;
					} },
				wp.element.createElement(RichText, { keepPlaceholderOnFocus: 'true', tagName: 'h2', label: 'ToggleContent title', help: 'Enter some text' /*value={ this.state.toggleTitle }*/, value: this.props.toggleContent,
					name: 'title', placeholder: 'Content title' /*onChange={ this.handleInputChange }*/, onChange: function onChange(content) {
						return _this3.props.setAttributes({
							toggleContent: content
						});
					} })
			);
		}
	}]);

	return ToggleContent;
}(Component);

// <h1>{ this.state.toggleTitle }</h1>

/***/ }),

/***/ "./blocks/src/toggle/components/ToggleTitle.js":
/*!*****************************************************!*\
  !*** ./blocks/src/toggle/components/ToggleTitle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;
var RichText = wp.editor.RichText;
var withSelect = wp.data.withSelect;

// const inputs = ['pastOrUpcoming', 'howManyEvents']

var ToggleTitle = exports.ToggleTitle = function (_Component) {
	_inherits(ToggleTitle, _Component);

	function ToggleTitle(props) {
		_classCallCheck(this, ToggleTitle);

		var _this = _possibleConstructorReturn(this, (ToggleTitle.__proto__ || Object.getPrototypeOf(ToggleTitle)).apply(this, arguments));

		_this.props = props;
		_this.state = {
			toggleTitle: [''],
			toggleTitleHeight: '',
			touched: false
		};

		_this.setStatus = _this.setStatus.bind(_this);
		_this.handleInputChange = _this.handleInputChange.bind(_this);

		return _this;
	}

	//Richtext gives straight value array apparently, no event


	_createClass(ToggleTitle, [{
		key: 'handleInputChange',
		value: function handleInputChange(value) {
			var _this2 = this;

			console.log('value', value);
			// let name = event.target.name
			this.setState({
				toggleTitle: value,
				touched: true
			}, function () {
				console.log('this.state.toggleTitle', _this2.state.toggleTitle);
				_this2.props.updateAttributes({
					toggleTitle: _this2.state.toggleTitle
				});
			});
		}
	}, {
		key: 'setStatus',
		value: function setStatus(newProps) {

			var props = newProps ? newProps : this.props;

			// console.log('setStatus props', props);

			if (props.toggleTitle) {
				this.setState({
					toggleTitle: props.toggleTitle
				}, function () {
					// console.log('this.state after set toggleTitle', this.state);
					// this.handleInputChange(props.toggleTitle);
				});
			}
			if (props.toggleTitleHeight) {
				this.setState({
					toggleTitleHeight: props.toggleTitleHeight
				}, function () {});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// console.log('mount props');
			this.setStatus();

			// setTimeout(function() {
			// 	console.log('timeout');
			// 	this.setState({
			// 		toggleTitle: 'TIMOEUT MADAFAQA'
			// 	}, () => {
			// 		console.log('this.state after set toggleTitle', this.state);
			// 	});
			// }, 2000);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			// console.log('received props');
			this.setStatus(newProps);
		}

		// componentDidUpdate() {
		// 	console.log('update');
		// }


	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			console.log('render state', this.state);
			// console.log('props', this.props);


			return wp.element.createElement(
				'div',
				{ className: 'ToggleTitle' },
				wp.element.createElement(RichText, { keepPlaceholderOnFocus: 'true', tagName: 'h2', label: 'ToggleTitle title', help: 'Enter some text' /*value={ this.state.toggleTitle }*/, value: this.props.toggleTitle,
					name: 'title', placeholder: 'Content title' /*onChange={ this.handleInputChange }*/, onChange: function onChange(content) {
						return _this3.props.setAttributes({
							toggleTitle: content
						});
					} })
			);
		}
	}]);

	return ToggleTitle;
}(Component);

// <h1>{ this.state.toggleTitle }</h1>

/***/ }),

/***/ "./blocks/src/toggle/editor.scss":
/*!***************************************!*\
  !*** ./blocks/src/toggle/editor.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/toggle/style.scss":
/*!**************************************!*\
  !*** ./blocks/src/toggle/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/twitter/api.js":
/*!***********************************!*\
  !*** ./blocks/src/twitter/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./blocks/src/twitter/block.js":
/*!*************************************!*\
  !*** ./blocks/src/twitter/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/twitter/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/twitter/editor.scss");

var _api = __webpack_require__(/*! ./api */ "./blocks/src/twitter/api.js");

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText; /**
                                     * BLOCK: main
                                     *
                                     * Registering a basic block with Gutenberg.
                                     * Simple block, renders and saves the same content without any interactivity.
                                     */

//  Import CSS.

var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls; // Import registerBlockType() from wp.blocks

var _wp = wp,
    apiRequest = _wp.apiRequest;
var Button = wp.components.Button;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

// Inspired by https://codepen.io/abergin/pen/ihlDf

registerBlockType('vl-blocks/twitter', {
		// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		title: __('VL Twitter Tweets'), // Block title.
		icon: 'twitter', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
		category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
		keywords: [__('VL Twitter Tweets'), __('VL Gutenberg Extra Block'), __('Twitter Tweets')],
		attributes: {
				// past <,  upcoming >=
				hashtag: {
						type: 'string',
						selector: '.vl-twitter__title'
				}
		},

		/**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
		edit: function edit(props) {
				var hashtag = props.attributes.hashtag,
				    setAttributes = props.setAttributes;

				// let getTweets = hashtag => {
				// 	// console.log('getting tweets');
				// }

				var hashtagChange = function hashtagChange(hashtag) {

						// let args = {
						// 	hashtag
						// } 

						// api.getTweets(args);

						setAttributes({
								hashtag: hashtag
						});
				};

				return wp.element.createElement(
						'div',
						{ className: [props.className] },
						wp.element.createElement(
								'div',
								{ className: ['vl-twitter'] },
								wp.element.createElement(
										'div',
										{ className: 'vl-twitter__header' },
										wp.element.createElement(
												'div',
												{ className: 'vl-twitter__logo__wrapper' },
												wp.element.createElement('span', { 'class': 'dashicons dashicons-twitter' })
										),
										wp.element.createElement(PlainText, { onChange: hashtagChange, value: hashtag, placeholder: '@user' })
								),
								wp.element.createElement(
										'div',
										{ className: 'vl-twitter__feed' },
										wp.element.createElement(
												'a',
												{ 'class': 'twitter-timeline', 'data-chrome': 'noheader nofooter noborders', href: "https://twitter.com/" + hashtag },
												'Tweets by ',
												hashtag
										),
										wp.element.createElement('script', { async: true, src: 'https://platform.twitter.com/widgets.js', charset: 'utf-8' })
								)
						)
				);
		},

		/**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
		save: function save(props) {
				var hashtag = props.attributes.hashtag,
				    setAttributes = props.setAttributes;


				return wp.element.createElement(
						'div',
						{ className: [props.className] },
						wp.element.createElement(
								'div',
								{ className: ['vl-twitter'] },
								wp.element.createElement(
										'div',
										{ className: 'vl-twitter__header' },
										wp.element.createElement(
												'div',
												{ className: 'vl-twitter__logo__wrapper' },
												wp.element.createElement('span', { 'class': 'dashicons dashicons-twitter' })
										),
										wp.element.createElement(
												'div',
												{ className: 'vl-twitter__title' },
												hashtag
										)
								),
								wp.element.createElement(
										'div',
										{ className: 'vl-twitter__feed' },
										wp.element.createElement(
												'a',
												{ 'class': 'twitter-timeline', 'data-chrome': 'noheader nofooter noborders', href: "https://twitter.com/" + hashtag },
												'Tweets by ',
												hashtag
										),
										wp.element.createElement('script', { async: true, src: 'https://platform.twitter.com/widgets.js', charset: 'utf-8' })
								)
						)
				);
		}
});

/***/ }),

/***/ "./blocks/src/twitter/editor.scss":
/*!****************************************!*\
  !*** ./blocks/src/twitter/editor.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/twitter/style.scss":
/*!***************************************!*\
  !*** ./blocks/src/twitter/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9pbnN0YWdyYW0vQ29tcG9uZW50cy9JbnN0YUVtYmVkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvaW5zdGFncmFtL0NvbXBvbmVudHMvSW5zdGFGZWVkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvaW5zdGFncmFtL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2luc3RhZ3JhbS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2luc3RhZ3JhbS9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2luc3RhZ3JhbS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2NvbXBvbmVudHMvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2NvbXBvbmVudHMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3RvZ2dsZS9jb21wb25lbnRzL1RvZ2dsZVRpdGxlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy90d2l0dGVyL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3R3aXR0ZXIvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy90d2l0dGVyL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdHdpdHRlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbImFwaSIsIkNvbXBvbmVudCIsIndwIiwiZWxlbWVudCIsIkluc3RhRW1iZWQiLCJwcm9wcyIsImFyZ3VtZW50cyIsInN0YXRlIiwiZW1iZWQiLCJnZXRFbWJlZCIsImJpbmQiLCJsaW5rIiwiYXJncyIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZGF0YSIsImh0bWwiLCJfX2h0bWwiLCJJbnN0YUZlZWQiLCJmZWVkIiwiZ2V0RmVlZCIsImFjY2Vzc190b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiaW1hZ2VzIiwic3RhbmRhcmRfcmVzb2x1dGlvbiIsInVybCIsImJhc2VfdXJsIiwiY2FsbCIsImF4aW9zIiwiZ2V0IiwiZWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIl9fIiwiaTE4biIsImJsb2NrcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJhcGlSZXF1ZXN0IiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIlRleHRDb250cm9sIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJrZXl3b3JkcyIsImF0dHJpYnV0ZXMiLCJoYXNodGFnIiwidHlwZSIsInNlbGVjdG9yIiwiaW5zdGFfdG9rZW4iLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNsYXNzTmFtZSIsInNhdmUiLCJCYXNlQ29udHJvbCIsIkNvbG9yUGFsZXR0ZSIsImFjY29yZGlvblRpdGxlIiwic291cmNlIiwidG9nZ2xlVGl0bGUiLCJ0aXRsZU1lZGlhSWQiLCJ0b2dnbGVUaXRsZU1lZGlhQWx0IiwiYXR0cmlidXRlIiwidG9nZ2xlVGl0bGVNZWRpYVVybCIsInRvZ2dsZUNvbnRlbnQiLCJ0aGVtZSIsImRlZmF1bHQiLCJ0b2dnbGVUaXRsZUhlaWdodCIsInRvZ2dsZUNvbnRlbnRIZWlnaHQiLCJ0ZXh0Q29sb3IiLCJpc1NlbGVjdGVkIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJvbk1lZGlhU2VsZWN0IiwibWVkaWEiLCJhbHQiLCJ0aGVtZVNlbGVjdG9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndyYXBwZXJDbGFzc2VzIiwidGl0bGVNZWRpYVVwbG9hZCIsIm9wZW4iLCJ1cGRhdGVBdHRyaWJ1dGVzIiwiYXR0cmlidXRlT2piZWN0IiwidGl0bGVNZWRpYSIsInNyYyIsImNvbnRlbnQiLCJUb2dnbGUiLCJzZXRTdGF0dXMiLCJuZXdQcm9wcyIsIndpdGhTZWxlY3QiLCJUb2dnbGVDb250ZW50IiwidG91Y2hlZCIsImhlaWdodCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZGl2RWxlbWVudCIsImNsaWVudEhlaWdodCIsIlRvZ2dsZVRpdGxlIiwiaGFzaHRhZ0No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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbkxBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDeERBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQ0FBa0MsY0FBYztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUM5RUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25EQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDckZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGVBQWU7QUFDMUIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7OzsrQ0NuQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUMvRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25DQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDLE9BQU87O0FBRVA7QUFDQSwwREFBMEQsd0JBQXdCO0FBQ2xGO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLDZCQUE2QixhQUFhLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3BEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNuRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxHQUFHLFNBQVM7QUFDNUMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL3RvZ2dsZS9ibG9jayc7XG5pbXBvcnQgJy4vdHdpdHRlci9ibG9jayc7XG5pbXBvcnQgJy4vaW5zdGFncmFtL2Jsb2NrJzsiLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpJztcblxuZXhwb3J0IGNsYXNzIEluc3RhRW1iZWQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKTtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVtYmVkOiAnJ1xuXHRcdH1cblxuXHRcdHRoaXMuZ2V0RW1iZWQgPSB0aGlzLmdldEVtYmVkLmJpbmQodGhpcyk7XG5cdFx0Ly8gdGhpcy5zZXRTdGF0dXMgPSB0aGlzLnNldFN0YXR1cy5iaW5kKHRoaXMpOyBcblxuXHR9XG5cblx0Z2V0RW1iZWQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMubGluaykge1xuXG5cdFx0XHR2YXIgYXJncyA9IHtcblx0XHRcdFx0bGluazogdGhpcy5wcm9wcy5saW5rXG5cdFx0XHR9O1xuXG5cdFx0XHRhcGkuZ2V0RW1iZWQoYXJncylcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldEVtYmVkIHJlc3BvbnNlJywgcmVzcG9uc2UpO1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0ZW1iZWQ6IHJlc3BvbnNlLmRhdGEuaHRtbFxuXHRcdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdlbWJlZCcsIHRoaXMuc3RhdGUuZW1iZWQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdH1cblxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ21vdW50IHJwb3JzJyk7XG5cdFx0Ly8gdGhpcy5zZXRTdGF0dXMoKTtcblx0XHR0aGlzLmdldEVtYmVkKCk7XG5cdH1cblxuXG5cdC8vIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygncmVjZWl2ZWQgcnBvcnMnKTtcblx0Ly8gXHR0aGlzLnNldFN0YXR1cyhuZXdQcm9wcyk7XG5cdC8vIH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5lbWJlZCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJJbnN0YUVtYmVkXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogdGhpcy5zdGF0ZS5lbWJlZCB9IH0+XG4gICAgPC9kaXY+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiSW5zdGFFbWJlZFwiPlxuICAgICAgPHA+IFdhaXRpbmcgZm9yIGVtYmVkLi4uIDwvcD5cbiAgICA8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH1cbn0iLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7IEluc3RhRW1iZWQgfSBmcm9tICcuL0luc3RhRW1iZWQnO1xuXG5leHBvcnQgY2xhc3MgSW5zdGFGZWVkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRmZWVkOiAnJ1xuXHRcdH1cblxuXHRcdHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0RmVlZC5iaW5kKHRoaXMpO1xuXHRcdC8vIHRoaXMuc2V0U3RhdHVzID0gdGhpcy5zZXRTdGF0dXMuYmluZCh0aGlzKTsgXG5cblx0fVxuXG5cdGdldEZlZWQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjZXNzX3Rva2VuKSB7XG5cblx0XHRcdHZhciBhcmdzID0ge1xuXHRcdFx0XHRhY2Nlc3NfdG9rZW46IHRoaXMucHJvcHMuYWNjZXNzX3Rva2VuXG5cdFx0XHR9O1xuXG5cdFx0XHRhcGkuZ2V0RmVlZChhcmdzKVxuXHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZ2V0RmVlZCByZXNwb25zZScsIHJlc3BvbnNlKTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGZlZWQ6IHJlc3BvbnNlLmRhdGEuZGF0YVxuXHRcdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmZWVkJywgdGhpcy5zdGF0ZS5mZWVkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHR9XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdtb3VudCBycG9ycycpO1xuXHRcdC8vIHRoaXMuc2V0U3RhdHVzKCk7XG5cdFx0dGhpcy5nZXRGZWVkKCk7XG5cdH1cblxuXG5cdC8vIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygncmVjZWl2ZWQgcnBvcnMnKTtcblx0Ly8gXHR0aGlzLnNldFN0YXR1cyhuZXdQcm9wcyk7XG5cdC8vIH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5mZWVkKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkluc3RhRmVlZFwiPlxuICAgICAgeyB0aGlzLnN0YXRlLmZlZWQubWFwKChwb3N0KSA9PiB7XG4gICAgICAgIFx0cmV0dXJuIChcbiAgICAgICAgXHRcdDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17IHBvc3QuaW1hZ2VzLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEluc3RhRW1iZWQgbGluaz17IHBvc3QubGluayB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXHRcdCk7XG4gICAgICAgIH0pIH1cbiAgICA8L2Rpdj5cblx0XHRcdClcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJJbnN0YUZlZWRcIj5cbiAgICAgIDxwPiBXYWl0aW5nIGZvciBmZWVkLi4uIDwvcD5cbiAgICA8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgZ2V0RmVlZCA9IChhcmdzKSA9PiB7XG5cblx0Y29uc29sZS5sb2coJ2dldHRpbmcgZmVlZCcpO1xuXG5cdHZhciB7YWNjZXNzX3Rva2VufSA9IGFyZ3M7XG5cdHZhciBiYXNlX3VybCA9ICdodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL3YxL3VzZXJzL3NlbGYvbWVkaWEvcmVjZW50Lz9hY2Nlc3NfdG9rZW49JztcblxuXHR2YXIgY2FsbCA9IGJhc2VfdXJsICsgYWNjZXNzX3Rva2VuO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdjYWxsJywgY2FsbCk7XG5cdHJldHVybiBheGlvcy5nZXQoY2FsbCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRFbWJlZCA9IChhcmdzKSA9PiB7XG5cblx0Y29uc29sZS5sb2coJ2dldHRpbmcgZmVlZCcpO1xuXG5cdHZhciB7bGlua30gPSBhcmdzO1xuXG5cdHZhciBiYXNlX3VybCA9ICdodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL29lbWJlZD91cmw9JztcblxuXG5cdHZhciBjYWxsID0gYmFzZV91cmwgKyBsaW5rO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdjYWxsJywgY2FsbCk7XG5cdHJldHVybiBheGlvcy5nZXQoY2FsbCk7XG59IiwiLyoqXG4gKiBCTE9DSzogbWFpblxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbi8vIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaSc7XG5cbmltcG9ydCB7IEluc3RhRmVlZCB9IGZyb20gJy4vQ29tcG9uZW50cy9JbnN0YUZlZWQnO1xuXG5jb25zdCB7TWVkaWFVcGxvYWQsIFBsYWluVGV4dCwgUmljaFRleHR9ID0gd3AuZWRpdG9yO1xuY29uc3Qge19ffSA9IHdwLmkxOG47IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuY29uc3Qge3JlZ2lzdGVyQmxvY2tUeXBlLCBJbnNwZWN0b3JDb250cm9sc30gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5jb25zdCB7YXBpUmVxdWVzdH0gPSB3cDtcbmNvbnN0IHtCdXR0b24sIFRleHRDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vY29kZXBlbi5pby9hYmVyZ2luL3Blbi9paGxEZlxucmVnaXN0ZXJCbG9ja1R5cGUoJ3ZsLWJsb2Nrcy9pbnN0YWdyYW0nLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1ZMIEluc3RhZ3JhbSBGZWVkJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc2hhcmUnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbXG5cdFx0X18oJ1ZMIEluc3RhZ3JhbSBGZWVkJyksXG5cdFx0X18oJ1ZMIEd1dGVuYmVyZyBFeHRyYSBCbG9jaycpLFxuXHRcdF9fKCdJbnN0YWdyYW0gRmVlZCcpLFxuXHRdLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Ly8gcGFzdCA8LCAgdXBjb21pbmcgPj1cblx0XHRoYXNodGFnOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNlbGVjdG9yOiAnLnZsLWluc3RhZ3JhbV9fdGl0bGUnXG5cdFx0fSxcblx0XHRpbnN0YV90b2tlbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9XG5cdH0sXG5cblxuXHQvKipcblx0ICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuXHQgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG5cdCAqXG5cdCAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0ICovXG5cdGVkaXQ6IGZ1bmN0aW9uKHByb3BzKSB7XG5cblx0XHRjb25zdCB7YXR0cmlidXRlczoge2hhc2h0YWcsIGluc3RhX3Rva2VufSwgc2V0QXR0cmlidXRlc30gPSBwcm9wcztcblxuXHRcdC8vIGxldCBnZXRGZWVkID0gaGFzaHRhZyA9PiB7XG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZygnZ2V0dGluZyB0d2VldHMnKTtcblx0XHQvLyB9XG5cblxuXHRcdC8vIGxldCBoYXNodGFnQ2hhbmdlID0gaGFzaHRhZyA9PiB7XG5cblx0XHQvLyBcdGxldCBhcmdzID0ge1xuXHRcdC8vIFx0XHRoYXNodGFnLFxuXHRcdC8vIFx0XHRhY2Nlc3NfdG9rZW5cblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0Y29uc29sZS5sb2coJ2FyZ3MnLCBhcmdzKTtcblxuXHRcdC8vIFx0dmFyIGZlZWQgPSBhcGkuZ2V0RmVlZChhcmdzKTtcblxuXHRcdC8vIFx0Y29uc29sZS5sb2coJ2ZlZWQnLCBmZWVkKTtcblxuXHRcdC8vIFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0Ly8gXHRcdGhhc2h0YWdcblx0XHQvLyBcdH0pXG5cdFx0Ly8gfVxuXG5cdFx0bGV0IGFyZ3MgPSB7XG5cdFx0XHRhY2Nlc3NfdG9rZW5cblx0XHR9XG5cblxuXHRcdGlmIChhY2Nlc3NfdG9rZW4pIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdhY2Nlc3NfdG9rZW4nLCBhY2Nlc3NfdG9rZW4pO1xuXHRcdFx0Ly8gc2V0QXR0cmlidXRlcyh7XG5cdFx0XHQvLyBcdGluc3RhX3Rva2VuOiBhY2Nlc3NfdG9rZW4gXG5cdFx0XHQvLyB9KVxuXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnaW5zdGFfdG9rZW4nLCBpbnN0YV90b2tlbik7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgW3Byb3BzLmNsYXNzTmFtZV0gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgWyd2bC1pbnN0YWdyYW0nXSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1pbnN0YWdyYW1fX2hlYWRlcicgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1pbnN0YWdyYW1fX2xvZ29fX3dyYXBwZXInIH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtaW5zdGFncmFtXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtaW5zdGFncmFtX19mZWVkJyB9PlxuICAgICAgICAgIDxJbnN0YUZlZWQgYWNjZXNzX3Rva2VuPXsgYWNjZXNzX3Rva2VuIH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBbcHJvcHMuY2xhc3NOYW1lXSB9PlxuICAgICAgPGgyPlBsZWFzZSBlbnRlciB5b3VyIGluc3RhZ3JhbSBhY2Nlc3MgdG9rZW4gPGEgaHJlZj1cIi93cC1hZG1pbi9hZG1pbi5waHA/cGFnZT12bF9ibG9ja3NcIj5oZXJlPC9hPiBiZWZvcmUgd2UgY2FuIGdldCB5b3VyIGZlZWQuPC9oMj5cbiAgICA8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH0sXG5cblxuXG5cdC8vIDxQbGFpblRleHQgb25DaGFuZ2U9eyBoYXNodGFnQ2hhbmdlIH0gdmFsdWU9eyBoYXNodGFnIH0gcGxhY2Vob2xkZXI9XCJAdXNlclwiIC8+XG5cblx0Ly8gPGgyPlBsZWFzZSBlbnRlciB5b3VyIGluc3RhZ3JhbSBhY2Nlc3MgdG9rZW4gPGEgaHJlZj1cIi93cC1hZG1pbi9hZG1pbi5waHA/cGFnZT12bF9ibG9ja3NcIj5oZXJlPC9hPiBiZWZvcmUgd2UgY2FuIGdldCB5b3VyIGZlZWQuPC9oMj5cblxuXHQvLzxzdHJvbmc+UGxlYXNlIGVudGVyIHlvdXIgYWNjZXNzIHRva2VuIHRvIHZpZXcgZmVlZC4gRm9yIGhlbHAvaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0byBnZXQgdGhpcywgcGxlYXNlIHNlZSA8YSBocmVmPVwiL3dwLWFkbWluL2FkbWluLnBocD9wYWdlPXZsX2Jsb2Nrc1wiPmhlcmU8L2E+PC9zdHJvbmc+XG5cdC8vICA8VGV4dENvbnRyb2wgbGFiZWw9XCJJbnN0YSBhY2Nlc3NfdG9rZW5cIiB2YWx1ZT17IGFjY2Vzc190b2tlbiB9IG9uQ2hhbmdlPXsgKGFjY2Vzc190b2tlbikgPT4gc2V0QXR0cmlidXRlcyh7XG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0YWNjZXNzX3Rva2VuXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0gLz5cblxuXG5cdC8qKlxuXHQgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuXHQgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG5cdCAqXG5cdCAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG5cdCAqL1xuXHRzYXZlOiBmdW5jdGlvbihwcm9wcykge1xuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7aGFzaHRhZywgaW5zdGFfdG9rZW59LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cdFx0bGV0IGFyZ3MgPSB7XG5cdFx0XHRhY2Nlc3NfdG9rZW5cblx0XHR9XG5cblxuXG5cdFx0aWYgKGFjY2Vzc190b2tlbikge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBbcHJvcHMuY2xhc3NOYW1lXSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBbJ3ZsLWluc3RhZ3JhbSddIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWluc3RhZ3JhbV9faGVhZGVyJyB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWluc3RhZ3JhbV9fbG9nb19fd3JhcHBlcicgfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy1pbnN0YWdyYW1cIj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1pbnN0YWdyYW1fX2ZlZWQnIH0+XG4gICAgICAgICAgPEluc3RhRmVlZCBhY2Nlc3NfdG9rZW49eyBhY2Nlc3NfdG9rZW4gfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFtwcm9wcy5jbGFzc05hbWVdIH0+XG4gICAgICA8aDI+UGxlYXNlIGVudGVyIHlvdXIgaW5zdGFncmFtIGFjY2VzcyB0b2tlbiA8YSBocmVmPVwiL3dwLWFkbWluL2FkbWluLnBocD9wYWdlPXZsX2Jsb2Nrc1wiPmhlcmU8L2E+IGJlZm9yZSB3ZSBjYW4gZ2V0IHlvdXIgZmVlZC48L2gyPlxuICAgIDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblxuXG5cblx0fSxcbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8qKlxuICogQkxPQ0s6IG1haW5cbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5pbXBvcnQgeyBUb2dnbGUgfSBmcm9tICcuL2NvbXBvbmVudHMvVG9nZ2xlJztcblxuY29uc3Qge01lZGlhVXBsb2FkLCBQbGFpblRleHQsIFJpY2hUZXh0fSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtfX30gPSB3cC5pMThuOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cbmNvbnN0IHtyZWdpc3RlckJsb2NrVHlwZX0gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5jb25zdCB7YXBpUmVxdWVzdH0gPSB3cDtcbmNvbnN0IHtCdXR0b24sIEJhc2VDb250cm9sLCBDb2xvclBhbGV0dGV9ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9jb2RlcGVuLmlvL2FiZXJnaW4vcGVuL2lobERmXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd2bC1ibG9ja3MvdG9nZ2xlJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdWTCBBY2NvcmRpb24nKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdzaGllbGQnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbXG5cdFx0X18oJ1ZMIEFjY29yZGlvbicpLFxuXHRcdF9fKCdWTCBHdXRlbmJlcmcgRXh0cmEgQmxvY2snKSxcblx0XHRfXygnQWNjb3JkaW9uJyksXG5cdF0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHQvLyBwYXN0IDwsICB1cGNvbWluZyA+PVxuXHRcdGFjY29yZGlvblRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICcudmwtYWNjb3JkaW9uX190aXRsZSBoMSdcblx0XHR9LFxuXHRcdHRvZ2dsZVRpdGxlOiB7XG5cdFx0XHQvLyB0eXBlOiAnYXJyYXknLFxuXHRcdFx0Ly8gc291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0Ly8gc2VsZWN0b3I6ICcudmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fdGl0bGUgaDInIFxuXHRcdH0sXG5cdFx0dGl0bGVNZWRpYUlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0dG9nZ2xlVGl0bGVNZWRpYUFsdDoge1xuXHRcdFx0YXR0cmlidXRlOiAnYWx0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLnZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlJ1xuXHRcdH0sXG5cdFx0dG9nZ2xlVGl0bGVNZWRpYVVybDoge1xuXHRcdFx0YXR0cmlidXRlOiAnc3JjJyxcblx0XHRcdHNlbGVjdG9yOiAnLnZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlJ1xuXHRcdH0sXG5cdFx0dG9nZ2xlQ29udGVudDoge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAnLnZsLWFjY29yZGlvbl9fY29udGVudC10b2dnbGVfX2NvbnRlbnQgcCdcblx0XHR9LFxuXHRcdHRoZW1lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICd2bC1hY2NvcmRpb24tdGhlbWUtY2xhc3NpYydcblx0XHR9LFxuXHRcdC8vIHRvZ2dsZVRpdGxlOiB7XG5cdFx0Ly8gXHR0eXBlOiAnc3RyaW5nJ1xuXHRcdC8vIH0sXG5cdFx0Ly8gdG9nZ2xlVGl0bGVDaGlsZDoge1xuXHRcdC8vIFx0dHlwZTogJ3N0cmluZydcblx0XHQvLyB9LFxuXHRcdC8vIHRvZ2dsZUNvbnRlbnRDaGlsZDoge1xuXHRcdC8vIFx0dHlwZTogJ3N0cmluZydcblx0XHQvLyB9LFxuXHRcdC8vIHRvZ2dsZUNvbnRlbnQ6IHtcblx0XHQvLyBcdHR5cGU6ICdzdHJpbmcnXG5cdFx0Ly8gfSxcblx0XHR0b2dnbGVUaXRsZUhlaWdodDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdHRvZ2dsZUNvbnRlbnRIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHR0ZXh0Q29sb3I6IHsgLy8gU2VyaWFsaXplZCBieSBkZWZhdWx0XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdH0sXG5cblx0LyoqXG5cdCAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cblx0ICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuXHQgKlxuXHQgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG5cdCAqL1xuXHRlZGl0OiBmdW5jdGlvbihwcm9wcykge1xuXG5cdFx0Y29uc3Qge2F0dHJpYnV0ZXM6IHthY2NvcmRpb25UaXRsZSwgdG9nZ2xlVGl0bGUsIHRvZ2dsZUNvbnRlbnQsIHRoZW1lLCB0aXRsZU1lZGlhSWQsIHRvZ2dsZVRpdGxlTWVkaWFBbHQsIHRvZ2dsZVRpdGxlTWVkaWFVcmwsIHRvZ2dsZVRpdGxlSGVpZ2h0LCB0b2dnbGVDb250ZW50SGVpZ2h0fSwgYXR0cmlidXRlcywgaXNTZWxlY3RlZCwgc2V0QXR0cmlidXRlc30gPSBwcm9wcztcblxuXG5cdFx0Ly8gVE9ETyA6IGlzU2VsZWN0ZWRcblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcblx0XHRcdGlmICh0b2dnbGVUaXRsZU1lZGlhVXJsKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBcdHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgXHRcdHRpdGxlTWVkaWFJZDogJycsXG4gICAgICAgICAgICAgICAgICBcdFx0dG9nZ2xlVGl0bGVNZWRpYUFsdDogJycsXG4gICAgICAgICAgICAgICAgICBcdFx0dG9nZ2xlVGl0bGVNZWRpYVVybDogJydcbiAgICAgICAgICAgICAgICAgIFx0fSk7XG4gICAgICAgICAgICAgICAgICB9IH0gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiPlxuICAgICAgIFJlbW92ZSB0aXRsZSBiYWNrZ3JvdW5kIGltYWdlXG4gICAgIDwvQnV0dG9uPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsgb3BlbkV2ZW50IH0gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiPlxuICAgICAgIFBpY2sgYW4gdGl0bGUgYmFja2dyb3VuZCBpbWFnZVxuICAgICA8L0J1dHRvbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblxuXHRcdGNvbnN0IG9uTWVkaWFTZWxlY3QgPSAobWVkaWEpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdtZWRpYSBzZWxlY3RlZCcsIG1lZGlhKTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHR0b2dnbGVUaXRsZU1lZGlhQWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdHRvZ2dsZVRpdGxlTWVkaWFVcmw6IG1lZGlhLnVybFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly9JbnNwZWN0b3JDb250cm9scyBkZXByYWN0ZWQuLi4gd2FpdGluZyB0byBzZWUgaG93IHRvIGRvIG5vd1xuXG5cdFx0Ly8gdmFyIHJlbmRlckluc3BlY3RvciA9ICh7aXNTZWxlY3RlZCwgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30pID0+IHtcblx0XHQvLyBcdGlmICghaXNTZWxlY3RlZCkge1xuXHRcdC8vIFx0XHRyZXR1cm4gbnVsbDtcblx0XHQvLyBcdH1cblx0XHQvLyBcdGNvbnN0IHt0ZXh0Q29sb3J9ID0gYXR0cmlidXRlc1xuXHRcdC8vIFx0cmV0dXJuIChcblx0XHQvLyBcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdC8vICAgICA8ZGl2PlxuXHRcdC8vICAgICAgIDxoMj5UZXh0IENvbG9yPC9oMj5cblx0XHQvLyAgICAgICA8QmFzZUNvbnRyb2w+XG5cdFx0Ly8gICAgICAgICA8Q29sb3JQYWxldHRlIHZhbHVlPXsgdGV4dENvbG9yIH0gb25DaGFuZ2U9eyAodGV4dENvbG9yKSA9PiBzZXRBdHRyaWJ1dGVzKHtcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0dGV4dENvbG9yXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9IC8+XG5cdFx0Ly8gICAgICAgPC9CYXNlQ29udHJvbD5cblx0XHQvLyAgICAgPC9kaXY+XG5cdFx0Ly8gICA8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdC8vIFx0KVxuXHRcdC8vIH1cblxuXHRcdC8vIGluYmxvY2sgbm90IHByYWN0aWNhbCAgLT4gIGVuZCBuZXcgd2F5IHRvIHB1dCBpbiBzaWRlYmFyXG5cblx0XHQvLyB2YXIgcmVuZGVySW5zcGVjdG9yID0gKHtpc1NlbGVjdGVkLCBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSkgPT4ge1xuXHRcdC8vIFx0aWYgKCFpc1NlbGVjdGVkKSB7XG5cdFx0Ly8gXHRcdHJldHVybiBudWxsO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0Y29uc3Qge3RleHRDb2xvcn0gPSBhdHRyaWJ1dGVzXG5cdFx0Ly8gXHRyZXR1cm4gKFxuXHRcdC8vIFx0XHQ8ZGl2PlxuXHRcdC8vICAgICA8aDI+VGV4dCBDb2xvcjwvaDI+XG5cdFx0Ly8gICAgIDxCYXNlQ29udHJvbD5cblx0XHQvLyAgICAgICA8Q29sb3JQYWxldHRlIHZhbHVlPXsgdGV4dENvbG9yIH0gb25DaGFuZ2U9eyAodGV4dENvbG9yKSA9PiBzZXRBdHRyaWJ1dGVzKHtcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRleHRDb2xvclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0gLz5cblx0XHQvLyAgICAgPC9CYXNlQ29udHJvbD5cblx0XHQvLyAgIDwvZGl2PlxuXHRcdC8vIFx0KVxuXHRcdC8vIH1cblxuXHRcdC8vIHsgcmVuZGVySW5zcGVjdG9yKHsgXG5cdFx0Ly8gICAgICBcdGlzU2VsZWN0ZWQsXG5cdFx0Ly8gICAgICBcdGF0dHJpYnV0ZXMsXG5cdFx0Ly8gICAgICBcdHNldEF0dHJpYnV0ZXNcblx0XHQvLyAgICAgIH0pIH1cblxuXHRcdGNvbnN0IHRoZW1lU2VsZWN0b3IgPSAoaXNTZWxlY3RlZCkgPT4ge1xuXHRcdFx0aWYgKCFpc1NlbGVjdGVkKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PHNlbGVjdCB2YWx1ZT17IHRoZW1lIH0gY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fdGhlbWUtc2VsZWN0b3InIH0gb25DaGFuZ2U9eyAoZXZlbnQpID0+IHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRoZW1lOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfT5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJ2bC1hY2NvcmRpb24tdGhlbWUtY2xhc3NpY1wiPkNsYXNzaWM8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJ2bC1hY2NvcmRpb24tdGhlbWUtbmVwdHVuZVwiPk5lcHR1bmU8L29wdGlvbj5cbiAgICA8L3NlbGVjdD4pXG5cdFx0fVxuXG5cdFx0bGV0IHdyYXBwZXJDbGFzc2VzID0ge1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgdGl0bGVNZWRpYVVwbG9hZCA9IChpc1NlbGVjdGVkKSA9PiB7XG5cdFx0XHRpZiAoIWlzU2VsZWN0ZWQpIHJldHVybiBudWxsO1xuXHRcdFx0cmV0dXJuIDxNZWRpYVVwbG9hZCBvblNlbGVjdD17IG9uTWVkaWFTZWxlY3QgfSB2YWx1ZT17IHRpdGxlTWVkaWFJZCB9IHJlbmRlcj17ICh7b3Blbn0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pIH0gLz5cblx0XHR9XG5cblx0XHRsZXQgdXBkYXRlQXR0cmlidXRlcyA9IChhdHRyaWJ1dGVPamJlY3QpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdhdHRyaWJ1dGVPamJlY3QnLCBhdHRyaWJ1dGVPamJlY3QpO1xuXHRcdFx0c2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVPamJlY3QpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGxldCB0aXRsZU1lZGlhID0gKHNyYywgYWx0KSA9PiB7XG5cdFx0XHRpZiAoIXNyYykgcmV0dXJuIG51bGw7XG5cblx0XHRcdGlmIChhbHQpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZV9fd3JhcHBlcicgfT5cbiAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlXCIgc3JjPXsgc3JjIH0gYWx0PXsgYWx0IH0gLz5cbiAgICAgPC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTm8gYWx0IHNldCwgc28gbGV0J3MgaGlkZSBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZV9fd3JhcHBlcicgfT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VcIiBzcmM9eyBzcmMgfSBhbHQ9XCJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgIDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGxldCBoYW5kbGVJbnB1dENoYW5nZSA9IChkaXMpID0+IHtcblx0XHQvLyBcdC8vIHNldEF0dHJpYnV0ZXMoeyBcblx0XHQvLyBcdC8vIFx0W2lucHV0XTogY29udGVudCBcblx0XHQvLyBcdC8vIH0pXG5cdFx0Ly8gXHRjb25zb2xlLmxvZygnZGlzJywgZGlzKTtcblx0XHQvLyB9XG5cblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgW3Byb3BzLmNsYXNzTmFtZV0gfT5cbiAgICAgPGRpdiBjbGFzc05hbWU9eyBbJ3ZsLWFjY29yZGlvbicgKyAnICcgKyB0aGVtZV0gfT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RoZW1lLXNlbGVjdG9yX193cmFwcGVyJyB9PlxuICAgICAgICAgeyB0aGVtZVNlbGVjdG9yKGlzU2VsZWN0ZWQpIH1cbiAgICAgICAgIHsgdGl0bGVNZWRpYVVwbG9hZChpc1NlbGVjdGVkKSB9XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX190aXRsZScgfT5cbiAgICAgICAgIDxoMT48UmljaFRleHQga2VlcFBsYWNlaG9sZGVyT25Gb2N1cz1cInRydWVcIiBsYWJlbD1cIkFjY29yZGlvbiB0aXRsZVwiIGhlbHA9XCJFbnRlciBzb21lIHRleHRcIiB2YWx1ZT17IGFjY29yZGlvblRpdGxlIH0gcGxhY2Vob2xkZXI9XCJPcHRpb25hbCBhY2NvcmRpb24gdGl0bGVcIiBvbkNoYW5nZT17IChjb250ZW50KSA9PiBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdGFjY29yZGlvblRpdGxlOiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfSAvPjwvaDE+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPHVsIGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX2NvbnRlbnQnIH0+XG4gICAgICAgICA8bGkgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fY29udGVudC10b2dnbGUnIH0+XG4gICAgICAgICAgIDxUb2dnbGUgdG9nZ2xlVGl0bGU9eyB0b2dnbGVUaXRsZSB9IHRvZ2dsZUNvbnRlbnQ9eyB0b2dnbGVDb250ZW50IH0gdG9nZ2xlVGl0bGVIZWlnaHQ9eyB0b2dnbGVUaXRsZUhlaWdodCB9IHRvZ2dsZUNvbnRlbnRIZWlnaHQ9eyB0b2dnbGVDb250ZW50SGVpZ2h0IH0gdG9nZ2xlVGl0bGVNZWRpYVVybD17IHRvZ2dsZVRpdGxlTWVkaWFVcmwgfVxuICAgICAgICAgICAgIHRvZ2dsZVRpdGxlTWVkaWFBbHQ9eyB0b2dnbGVUaXRsZU1lZGlhQWx0IH0gdXBkYXRlQXR0cmlidXRlcz17IHVwZGF0ZUF0dHJpYnV0ZXMgfSBzZXRBdHRyaWJ1dGVzPXsgc2V0QXR0cmlidXRlcyB9IC8+XG4gICAgICAgICA8L2xpPlxuICAgICAgIDwvdWw+XG4gICAgIDwvZGl2PlxuICAgPC9kaXY+XG5cdFx0XHQpO1xuXHR9LFxuXG5cdC8vIDxUb2dnbGUgdG9nZ2xlVGl0bGU9eyB0b2dnbGVUaXRsZSB9IHRvZ2dsZUNvbnRlbnQ9eyB0b2dnbGVDb250ZW50IH0gdG9nZ2xlVGl0bGVIZWlnaHQ9eyB0b2dnbGVUaXRsZUhlaWdodCB9IHRvZ2dsZUNvbnRlbnRIZWlnaHQ9eyB0b2dnbGVDb250ZW50SGVpZ2h0IH0gdG9nZ2xlVGl0bGVNZWRpYVVybD17IHRvZ2dsZVRpdGxlTWVkaWFVcmwgfXRvZ2dsZVRpdGxlTWVkaWFBbHQ9eyB0b2dnbGVUaXRsZU1lZGlhQWx0IH0gdXBkYXRlQXR0cmlidXRlcz17IHVwZGF0ZUF0dHJpYnV0ZXMgfSAvPlxuXG5cblxuXG5cdC8qKlxuXHQgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuXHQgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG5cdCAqXG5cdCAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG5cdCAqL1xuXHRzYXZlOiBmdW5jdGlvbihwcm9wcykge1xuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7YWNjb3JkaW9uVGl0bGUsIHRvZ2dsZVRpdGxlLCB0b2dnbGVDb250ZW50LCB0aGVtZSwgdGl0bGVNZWRpYUlkLCB0b2dnbGVUaXRsZU1lZGlhQWx0LCB0b2dnbGVUaXRsZU1lZGlhVXJsLCB0b2dnbGVUaXRsZUhlaWdodCwgdG9nZ2xlQ29udGVudEhlaWdodH0sIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQsIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cblx0XHRjb25zdCB0aXRsZU1lZGlhID0gKHNyYywgYWx0KSA9PiB7XG5cdFx0XHRpZiAoIXNyYykgcmV0dXJuIG51bGw7XG5cblx0XHRcdGlmIChhbHQpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZV9fd3JhcHBlcicgfT5cbiAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlXCIgc3JjPXsgc3JjIH0gYWx0PXsgYWx0IH0gLz5cbiAgICAgPC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTm8gYWx0IHNldCwgc28gbGV0J3MgaGlkZSBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZV9fd3JhcHBlcicgfT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VcIiBzcmM9eyBzcmMgfSBhbHQ9XCJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgIDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFtwcm9wcy5jbGFzc05hbWVdIH0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbicgKyAnICcgK1xuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lIH0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9eyB0aGVtZSB9PlxuICAgICAgICAgeyB0aGVtZSB9XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX190aXRsZScgfT5cbiAgICAgICAgIDxoMT57IGFjY29yZGlvblRpdGxlIH08L2gxPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDx1bCBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX19jb250ZW50JyB9PlxuICAgICAgICAgPGxpIGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlJyB9PlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgPGk+PC9pPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlX190aXRsZScgfT5cbiAgICAgICAgICAgICB7IHRpdGxlTWVkaWEodG9nZ2xlVGl0bGVNZWRpYVVybCwgdG9nZ2xlVGl0bGVNZWRpYUFsdCkgfVxuICAgICAgICAgICAgIDxoMj57IHRvZ2dsZVRpdGxlIH0gPC9oMj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fY29udGVudC10b2dnbGVfX2NvbnRlbnQnIH0+XG4gICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICB7IHRvZ2dsZUNvbnRlbnQgfVxuICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2xpPlxuICAgICAgIDwvdWw+XG4gICAgIDwvZGl2PlxuICAgPC9kaXY+XG5cdFx0XHQpO1xuXG5cblxuXHR9LFxufSk7XG4iLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7UmljaFRleHR9ID0gd3AuZWRpdG9yO1xuXG5pbXBvcnQgeyBUb2dnbGVUaXRsZSB9IGZyb20gJy4vVG9nZ2xlVGl0bGUnO1xuaW1wb3J0IHsgVG9nZ2xlQ29udGVudCB9IGZyb20gJy4vVG9nZ2xlQ29udGVudCc7XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKTtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZ2dsZVRpdGxlOiAnJyxcblx0XHRcdHRvZ2dsZUNvbnRlbnQ6ICcnLFxuXHRcdFx0dG9nZ2xlVGl0bGVIZWlnaHQ6ICcnLFxuXHRcdFx0dG9nZ2xlQ29udGVudEhlaWdodDogJycsXG5cdFx0XHR0b2dnbGVUaXRsZU1lZGlhVXJsOiAnJyxcblx0XHRcdHRvZ2dsZVRpdGxlTWVkaWFBbHQ6ICcnXG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0dXMgPSB0aGlzLnNldFN0YXR1cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudGl0bGVNZWRpYSA9IHRoaXMudGl0bGVNZWRpYS5iaW5kKHRoaXMpO1xuXG5cdH1cblxuXHR0aXRsZU1lZGlhKHNyYywgYWx0KSB7XG5cdFx0aWYgKCFzcmMpIHJldHVybiBudWxsO1xuXG5cdFx0aWYgKGFsdCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VfX3dyYXBwZXInIH0+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlXCIgc3JjPXsgc3JjIH0gYWx0PXsgYWx0IH0gLz5cbiAgICA8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBObyBhbHQgc2V0LCBzbyBsZXQncyBoaWRlIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VfX3dyYXBwZXInIH0+XG4gICAgIDxpbWcgY2xhc3NOYW1lPVwidmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VcIiBzcmM9eyBzcmMgfSBhbHQ9XCJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgPC9kaXY+XG5cdFx0XHQpO1xuXHR9XG5cdDtcblxuXG5cdHNldFN0YXR1cyhuZXdQcm9wcykge1xuXG5cdFx0dmFyIHByb3BzID0gbmV3UHJvcHMgPyBuZXdQcm9wcyA6IHRoaXMucHJvcHM7XG5cblx0XHQvLyBjb25zb2xlLmxvZygnc2V0U3RhdHVzIHByb3BzJywgcHJvcHMpO1xuXG5cdFx0aWYgKHByb3BzLnRvZ2dsZVRpdGxlKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG9nZ2xlVGl0bGU6IHByb3BzLnRvZ2dsZVRpdGxlXG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLnRvZ2dsZUNvbnRlbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVDb250ZW50OiBwcm9wcy50b2dnbGVDb250ZW50XG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLnRvZ2dsZVRpdGxlSGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG9nZ2xlVGl0bGVIZWlnaHQ6IHByb3BzLnRvZ2dsZVRpdGxlSGVpZ2h0XG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLnRvZ2dsZUNvbnRlbnRIZWlnaHQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVDb250ZW50SGVpZ2h0OiBwcm9wcy50b2dnbGVDb250ZW50SGVpZ2h0XG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLnRvZ2dsZVRpdGxlTWVkaWFVcmwpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVUaXRsZU1lZGlhVXJsOiBwcm9wcy50b2dnbGVUaXRsZU1lZGlhVXJsXG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLnRvZ2dsZVRpdGxlTWVkaWFBbHQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVUaXRsZU1lZGlhQWx0OiBwcm9wcy50b2dnbGVUaXRsZU1lZGlhQWx0XG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdtb3VudCBwcm9wcycpO1xuXHRcdHRoaXMuc2V0U3RhdHVzKCk7XG5cdC8vIHRoaXMucHJvcHMuaGlzdG9yeS5nb0JhY2soKTtcblx0fVxuXG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdyZWNlaXZlZCBwcm9wcycpO1xuXHRcdHRoaXMuc2V0U3RhdHVzKG5ld1Byb3BzKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Byb3BzJywgdGhpcy5wcm9wcyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiVG9nZ2xlXCI+XG4gICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICA8aT48L2k+XG4gICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fY29udGVudC10b2dnbGVfX3RpdGxlJyB9PlxuICAgICAgIHsgdGhpcy50aXRsZU1lZGlhKHRoaXMudG9nZ2xlVGl0bGVNZWRpYVVybCwgdGhpcy50b2dnbGVUaXRsZU1lZGlhQWx0KSB9XG4gICAgICAgPFRvZ2dsZVRpdGxlIC8qdG9nZ2xlVGl0bGU9eyB0aGlzLnN0YXRlLnRvZ2dsZVRpdGxlIH0qLyB0b2dnbGVUaXRsZT17IHRoaXMucHJvcHMudG9nZ2xlVGl0bGUgfSB0b2dnbGVUaXRsZUhlaWdodD17IHRoaXMuc3RhdGUudG9nZ2xlVGl0bGVIZWlnaHQgfSB1cGRhdGVBdHRyaWJ1dGVzPXsgdGhpcy5wcm9wcy51cGRhdGVBdHRyaWJ1dGVzIH1cbiAgICAgICAgIHNldEF0dHJpYnV0ZXM9eyB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMgfSAvPlxuICAgICA8L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fY29udGVudCcgfT5cbiAgICAgICA8VG9nZ2xlQ29udGVudCAvKnRvZ2dsZVRpdGxlPXsgdGhpcy5zdGF0ZS50b2dnbGVUaXRsZSB9Ki8gdG9nZ2xlQ29udGVudD17IHRoaXMucHJvcHMudG9nZ2xlQ29udGVudCB9IHRvZ2dsZUNvbnRlbnRIZWlnaHQ9eyB0aGlzLnN0YXRlLnRvZ2dsZUNvbnRlbnRIZWlnaHQgfSB1cGRhdGVBdHRyaWJ1dGVzPXsgdGhpcy5wcm9wcy51cGRhdGVBdHRyaWJ1dGVzIH1cbiAgICAgICAgIHNldEF0dHJpYnV0ZXM9eyB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMgfSAvPlxuICAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuXHRcdFx0KTtcblx0fVxufVxuXG4vLyA8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlX19jb250ZW50JyB9PlxuLy8gICAgICAgIDxSaWNoVGV4dCBsYWJlbD1cIlRvZ2dsZSBjb250ZW50XCIgaGVscD1cIkVudGVyIHNvbWUgdGV4dFwiIHZhbHVlPXsgdGhpcy50b2dnbGVDb250ZW50IH0gbmFtZT1cImNvbnRlbnRcIiBwbGFjZWhvbGRlcj1cIkNvbnRlbnQgYm9keS4uLlwiIG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSB9IC8+XG4vLyAgICAgIDwvZGl2PiIsIlxuXG5jb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7UmljaFRleHR9ID0gd3AuZWRpdG9yO1xuY29uc3Qge3dpdGhTZWxlY3R9ID0gd3AuZGF0YTtcblxuLy8gY29uc3QgaW5wdXRzID0gWydwYXN0T3JVcGNvbWluZycsICdob3dNYW55RXZlbnRzJ11cblxuZXhwb3J0IGNsYXNzIFRvZ2dsZUNvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKTtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZ2dsZVRpdGxlOiBbJyddLFxuXHRcdFx0dG9nZ2xlVGl0bGVIZWlnaHQ6ICcnLFxuXHRcdFx0dG91Y2hlZDogZmFsc2UsXG5cdFx0XHRoZWlnaHQ6IDBcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXR1cyA9IHRoaXMuc2V0U3RhdHVzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcblxuXHR9XG5cblx0Ly9SaWNodGV4dCBnaXZlcyBzdHJhaWdodCB2YWx1ZSBhcnJheSBhcHBhcmVudGx5LCBubyBldmVudFxuXHRoYW5kbGVJbnB1dENoYW5nZSh2YWx1ZSkge1xuXHRcdGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKTtcblx0XHQvLyBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0b2dnbGVUaXRsZTogdmFsdWUsXG5cdFx0XHR0b3VjaGVkOiB0cnVlXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuc3RhdGUudG9nZ2xlVGl0bGUnLCB0aGlzLnN0YXRlLnRvZ2dsZVRpdGxlKTtcblx0XHRcdHRoaXMucHJvcHMudXBkYXRlQXR0cmlidXRlcyh7XG5cdFx0XHRcdHRvZ2dsZVRpdGxlOiB0aGlzLnN0YXRlLnRvZ2dsZVRpdGxlXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHR9XG5cblx0c2V0U3RhdHVzKG5ld1Byb3BzKSB7XG5cblx0XHR2YXIgcHJvcHMgPSBuZXdQcm9wcyA/IG5ld1Byb3BzIDogdGhpcy5wcm9wcztcblxuXHRcdC8vIGNvbnNvbGUubG9nKCdzZXRTdGF0dXMgcHJvcHMnLCBwcm9wcyk7XG5cblx0XHRpZiAocHJvcHMudG9nZ2xlVGl0bGUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVUaXRsZTogcHJvcHMudG9nZ2xlVGl0bGVcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3RoaXMuc3RhdGUgYWZ0ZXIgc2V0IHRvZ2dsZVRpdGxlJywgdGhpcy5zdGF0ZSk7XG5cdFx0XHRcdC8vIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UocHJvcHMudG9nZ2xlVGl0bGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmIChwcm9wcy50b2dnbGVUaXRsZUhlaWdodCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZVRpdGxlSGVpZ2h0OiBwcm9wcy50b2dnbGVUaXRsZUhlaWdodFxuXHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnbW91bnQgcHJvcHMnKTtcblx0XHR0aGlzLnNldFN0YXR1cygpO1xuXHRcdGNvbnN0IGhlaWdodCA9IHRoaXMuZGl2RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRoZWlnaHRcblx0XHR9KTtcblx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygndGltZW91dCcpO1xuXHQvLyBcdHRoaXMuc2V0U3RhdGUoe1xuXHQvLyBcdFx0dG9nZ2xlVGl0bGU6ICdUSU1PRVVUIE1BREFGQVFBJ1xuXHQvLyBcdH0sICgpID0+IHtcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlIGFmdGVyIHNldCB0b2dnbGVUaXRsZScsIHRoaXMuc3RhdGUpO1xuXHQvLyBcdH0pO1xuXHQvLyB9LCAyMDAwKTtcblx0fVxuXG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdyZWNlaXZlZCBwcm9wcycpO1xuXHRcdHRoaXMuc2V0U3RhdHVzKG5ld1Byb3BzKTtcblx0fVxuXG5cdC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygndXBkYXRlJyk7XG5cdC8vIH1cblxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnNvbGUubG9nKCdyZW5kZXIgc3RhdGUnLCB0aGlzLnN0YXRlKTtcblx0XHQvLyBjb25zb2xlLmxvZygncHJvcHMnLCB0aGlzLnByb3BzKTtcblxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiVG9nZ2xlQ29udGVudFwiIHJlZj17IChkaXZFbGVtZW50KSA9PiB0aGlzLmRpdkVsZW1lbnQgPSBkaXZFbGVtZW50IH0+XG4gICAgIDxSaWNoVGV4dCBrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPVwidHJ1ZVwiIHRhZ05hbWU9XCJoMlwiIGxhYmVsPVwiVG9nZ2xlQ29udGVudCB0aXRsZVwiIGhlbHA9XCJFbnRlciBzb21lIHRleHRcIiAvKnZhbHVlPXsgdGhpcy5zdGF0ZS50b2dnbGVUaXRsZSB9Ki8gdmFsdWU9eyB0aGlzLnByb3BzLnRvZ2dsZUNvbnRlbnQgfVxuICAgICAgIG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiQ29udGVudCB0aXRsZVwiIC8qb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlIH0qLyBvbkNoYW5nZT17IChjb250ZW50KSA9PiB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0b2dnbGVDb250ZW50OiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9IC8+XG4gICA8L2Rpdj5cblx0XHRcdCk7XG5cdH1cbn1cblxuLy8gPGgxPnsgdGhpcy5zdGF0ZS50b2dnbGVUaXRsZSB9PC9oMT4iLCJcblxuY29uc3Qge0NvbXBvbmVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1JpY2hUZXh0fSA9IHdwLmVkaXRvcjtcbmNvbnN0IHt3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5cbi8vIGNvbnN0IGlucHV0cyA9IFsncGFzdE9yVXBjb21pbmcnLCAnaG93TWFueUV2ZW50cyddXG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVUaXRsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dG9nZ2xlVGl0bGU6IFsnJ10sXG5cdFx0XHR0b2dnbGVUaXRsZUhlaWdodDogJycsXG5cdFx0XHR0b3VjaGVkOiBmYWxzZSxcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXR1cyA9IHRoaXMuc2V0U3RhdHVzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcblxuXHR9XG5cblx0Ly9SaWNodGV4dCBnaXZlcyBzdHJhaWdodCB2YWx1ZSBhcnJheSBhcHBhcmVudGx5LCBubyBldmVudFxuXHRoYW5kbGVJbnB1dENoYW5nZSh2YWx1ZSkge1xuXHRcdGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKTtcblx0XHQvLyBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0b2dnbGVUaXRsZTogdmFsdWUsXG5cdFx0XHR0b3VjaGVkOiB0cnVlXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuc3RhdGUudG9nZ2xlVGl0bGUnLCB0aGlzLnN0YXRlLnRvZ2dsZVRpdGxlKTtcblx0XHRcdHRoaXMucHJvcHMudXBkYXRlQXR0cmlidXRlcyh7XG5cdFx0XHRcdHRvZ2dsZVRpdGxlOiB0aGlzLnN0YXRlLnRvZ2dsZVRpdGxlXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHR9XG5cblx0c2V0U3RhdHVzKG5ld1Byb3BzKSB7XG5cblx0XHR2YXIgcHJvcHMgPSBuZXdQcm9wcyA/IG5ld1Byb3BzIDogdGhpcy5wcm9wcztcblxuXHRcdC8vIGNvbnNvbGUubG9nKCdzZXRTdGF0dXMgcHJvcHMnLCBwcm9wcyk7XG5cblx0XHRpZiAocHJvcHMudG9nZ2xlVGl0bGUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVUaXRsZTogcHJvcHMudG9nZ2xlVGl0bGVcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3RoaXMuc3RhdGUgYWZ0ZXIgc2V0IHRvZ2dsZVRpdGxlJywgdGhpcy5zdGF0ZSk7XG5cdFx0XHRcdC8vIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UocHJvcHMudG9nZ2xlVGl0bGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmIChwcm9wcy50b2dnbGVUaXRsZUhlaWdodCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZVRpdGxlSGVpZ2h0OiBwcm9wcy50b2dnbGVUaXRsZUhlaWdodFxuXHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnbW91bnQgcHJvcHMnKTtcblx0XHR0aGlzLnNldFN0YXR1cygpO1xuXG5cdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ3RpbWVvdXQnKTtcblx0Ly8gXHR0aGlzLnNldFN0YXRlKHtcblx0Ly8gXHRcdHRvZ2dsZVRpdGxlOiAnVElNT0VVVCBNQURBRkFRQSdcblx0Ly8gXHR9LCAoKSA9PiB7XG5cdC8vIFx0XHRjb25zb2xlLmxvZygndGhpcy5zdGF0ZSBhZnRlciBzZXQgdG9nZ2xlVGl0bGUnLCB0aGlzLnN0YXRlKTtcblx0Ly8gXHR9KTtcblx0Ly8gfSwgMjAwMCk7XG5cdH1cblxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcblx0XHQvLyBjb25zb2xlLmxvZygncmVjZWl2ZWQgcHJvcHMnKTtcblx0XHR0aGlzLnNldFN0YXR1cyhuZXdQcm9wcyk7XG5cdH1cblxuXHQvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ3VwZGF0ZScpO1xuXHQvLyB9XG5cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zb2xlLmxvZygncmVuZGVyIHN0YXRlJywgdGhpcy5zdGF0ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ3Byb3BzJywgdGhpcy5wcm9wcyk7XG5cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlRvZ2dsZVRpdGxlXCI+XG4gICAgIDxSaWNoVGV4dCBrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPVwidHJ1ZVwiIHRhZ05hbWU9XCJoMlwiIGxhYmVsPVwiVG9nZ2xlVGl0bGUgdGl0bGVcIiBoZWxwPVwiRW50ZXIgc29tZSB0ZXh0XCIgLyp2YWx1ZT17IHRoaXMuc3RhdGUudG9nZ2xlVGl0bGUgfSovIHZhbHVlPXsgdGhpcy5wcm9wcy50b2dnbGVUaXRsZSB9XG4gICAgICAgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJDb250ZW50IHRpdGxlXCIgLypvbkNoYW5nZT17IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgfSovIG9uQ2hhbmdlPXsgKGNvbnRlbnQpID0+IHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRvZ2dsZVRpdGxlOiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9IC8+XG4gICA8L2Rpdj5cblx0XHRcdCk7XG5cdH1cbn1cblxuLy8gPGgxPnsgdGhpcy5zdGF0ZS50b2dnbGVUaXRsZSB9PC9oMT4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gZXhwb3J0IGNvbnN0IGdldFR3ZWV0cyA9IChhcmdzKSA9PiB7XG5cbi8vIFx0dmFyIHtoYXNodGFnfSA9IGFyZ3M7XG5cbi8vIFx0dmFyIGNhbGwgPSAnJztcblxuLy8gXHRyZXR1cm4gYXhpb3MuZ2V0KGNhbGwpO1xuLy8gfVxuIiwiLyoqXG4gKiBCTE9DSzogbWFpblxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHtNZWRpYVVwbG9hZCwgUGxhaW5UZXh0LCBSaWNoVGV4dH0gPSB3cC5lZGl0b3I7XG5jb25zdCB7X199ID0gd3AuaTE4bjsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5jb25zdCB7cmVnaXN0ZXJCbG9ja1R5cGUsIEluc3BlY3RvckNvbnRyb2xzfSA9IHdwLmJsb2NrczsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcbmNvbnN0IHthcGlSZXF1ZXN0fSA9IHdwO1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2NvZGVwZW4uaW8vYWJlcmdpbi9wZW4vaWhsRGZcbnJlZ2lzdGVyQmxvY2tUeXBlKCd2bC1ibG9ja3MvdHdpdHRlcicsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnVkwgVHdpdHRlciBUd2VldHMnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICd0d2l0dGVyJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW1xuXHRcdF9fKCdWTCBUd2l0dGVyIFR3ZWV0cycpLFxuXHRcdF9fKCdWTCBHdXRlbmJlcmcgRXh0cmEgQmxvY2snKSxcblx0XHRfXygnVHdpdHRlciBUd2VldHMnKSxcblx0XSxcblx0YXR0cmlidXRlczoge1xuXHRcdC8vIHBhc3QgPCwgIHVwY29taW5nID49XG5cdFx0aGFzaHRhZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzZWxlY3RvcjogJy52bC10d2l0dGVyX190aXRsZSdcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cblx0ICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuXHQgKlxuXHQgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG5cdCAqL1xuXHRlZGl0OiBmdW5jdGlvbihwcm9wcykge1xuXG5cdFx0Y29uc3Qge2F0dHJpYnV0ZXM6IHtoYXNodGFnfSwgc2V0QXR0cmlidXRlc30gPSBwcm9wcztcblxuXHRcdC8vIGxldCBnZXRUd2VldHMgPSBoYXNodGFnID0+IHtcblx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKCdnZXR0aW5nIHR3ZWV0cycpO1xuXHRcdC8vIH1cblxuXHRcdGxldCBoYXNodGFnQ2hhbmdlID0gaGFzaHRhZyA9PiB7XG5cblx0XHRcdC8vIGxldCBhcmdzID0ge1xuXHRcdFx0Ly8gXHRoYXNodGFnXG5cdFx0XHQvLyB9IFxuXG5cdFx0XHQvLyBhcGkuZ2V0VHdlZXRzKGFyZ3MpO1xuXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aGFzaHRhZ1xuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXG5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyBbcHJvcHMuY2xhc3NOYW1lXSB9PlxuICAgICA8ZGl2IGNsYXNzTmFtZT17IFsndmwtdHdpdHRlciddIH0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtdHdpdHRlcl9faGVhZGVyJyB9PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtdHdpdHRlcl9fbG9nb19fd3JhcHBlcicgfT5cbiAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLXR3aXR0ZXJcIj48L3NwYW4+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxQbGFpblRleHQgb25DaGFuZ2U9eyBoYXNodGFnQ2hhbmdlIH0gdmFsdWU9eyBoYXNodGFnIH0gcGxhY2Vob2xkZXI9XCJAdXNlclwiIC8+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtdHdpdHRlcl9fZmVlZCcgfT5cbiAgICAgICAgIDxhIGNsYXNzPVwidHdpdHRlci10aW1lbGluZVwiIGRhdGEtY2hyb21lPVwibm9oZWFkZXIgbm9mb290ZXIgbm9ib3JkZXJzXCIgaHJlZj17IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiArIGhhc2h0YWcgfT5Ud2VldHMgYnkgeyBoYXNodGFnIH08L2E+XG4gICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qc1wiIGNoYXJzZXQ9XCJ1dGYtOFwiPjwvc2NyaXB0PlxuICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuXHRcdFx0KTtcblx0fSxcblxuXG5cblxuXG5cdC8qKlxuXHQgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuXHQgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG5cdCAqXG5cdCAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG5cdCAqL1xuXHRzYXZlOiBmdW5jdGlvbihwcm9wcykge1xuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7aGFzaHRhZ30sIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cblx0XHRyZXR1cm4gKFxuXG5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyBbcHJvcHMuY2xhc3NOYW1lXSB9PlxuICAgICA8ZGl2IGNsYXNzTmFtZT17IFsndmwtdHdpdHRlciddIH0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtdHdpdHRlcl9faGVhZGVyJyB9PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtdHdpdHRlcl9fbG9nb19fd3JhcHBlcicgfT5cbiAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLXR3aXR0ZXJcIj48L3NwYW4+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLXR3aXR0ZXJfX3RpdGxlJyB9PlxuICAgICAgICAgICB7IGhhc2h0YWcgfVxuICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtdHdpdHRlcl9fZmVlZCcgfT5cbiAgICAgICAgIDxhIGNsYXNzPVwidHdpdHRlci10aW1lbGluZVwiIGRhdGEtY2hyb21lPVwibm9oZWFkZXIgbm9mb290ZXIgbm9ib3JkZXJzXCIgaHJlZj17IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiArIGhhc2h0YWcgfT5Ud2VldHMgYnkgeyBoYXNodGFnIH08L2E+XG4gICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qc1wiIGNoYXJzZXQ9XCJ1dGYtOFwiPjwvc2NyaXB0PlxuICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuXHRcdFx0KTtcblxuXG5cblx0fSxcbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB7bWV0aG9kOiAnZ2V0J30sIHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=