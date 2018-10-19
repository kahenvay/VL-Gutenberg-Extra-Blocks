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
			type: 'array',
			source: 'children',
			selector: '.vl-accordion__content-toggle__title__text'
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
			selector: '.vl-accordion__content-toggle__content__text'
		},
		theme: {
			type: 'string',
			default: 'vl-accordion-theme-classic'
		},
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

			// No alt 
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
					wp.element.createElement(_Toggle.Toggle, { toggleTitle: toggleTitle, toggleContent: toggleContent, toggleTitleHeight: toggleTitleHeight, toggleContentHeight: toggleContentHeight, toggleTitleMediaUrl: toggleTitleMediaUrl,
						toggleTitleMediaAlt: toggleTitleMediaAlt, updateAttributes: updateAttributes, setAttributes: setAttributes })
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
								{ className: "vl-accordion__content-toggle__title__text" },
								' ',
								toggleTitle,
								' '
							)
						),
						wp.element.createElement(
							'div',
							{ className: 'vl-accordion__content-toggle__content' },
							wp.element.createElement(
								'div',
								{ className: "vl-accordion__content-toggle__content__text" },
								toggleContent,
								' '
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
			toggleContentHeight: ''
		};

		_this.setStatus = _this.setStatus.bind(_this);

		_this.registerChangeHeight = _this.registerChangeHeight.bind(_this);

		return _this;
	}

	_createClass(Toggle, [{
		key: 'setStatus',
		value: function setStatus(newProps) {

			var props = newProps ? newProps : this.props;

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
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setStatus();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			this.setStatus(newProps);
		}
	}, {
		key: 'registerChangeHeight',
		value: function registerChangeHeight(attr, height) {
			var _this2 = this;

			this.setState(_defineProperty({}, attr, height), function () {
				_this2.props.updateAttributes(_defineProperty({}, attr, height));
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {}
	}, {
		key: 'render',
		value: function render() {
			// console.log('props', this.props);
			return wp.element.createElement(
				'li',
				{ className: 'vl-accordion__content-toggle' },
				wp.element.createElement('input', { type: 'checkbox' }),
				wp.element.createElement('i', null),
				wp.element.createElement(_ToggleTitle.ToggleTitle /*toggleTitle={ this.state.toggleTitle }*/, { toggleTitle: this.props.toggleTitle, toggleTitleHeight: this.state.toggleTitleHeight, registerChangeHeight: this.registerChangeHeight,
					updateAttributes: this.props.updateAttributes, setAttributes: this.props.setAttributes, toggleTitleMediaUrl: this.props.toggleTitleMediaUrl, toggleTitleMediaAlt: this.props.toggleTitleMediaAlt }),
				wp.element.createElement(_ToggleContent.ToggleContent /*toggleTitle={ this.state.toggleTitle }*/, { toggleContent: this.props.toggleContent, toggleContentHeight: this.state.toggleContentHeight, registerChangeHeight: this.registerChangeHeight,
					updateAttributes: this.props.updateAttributes, setAttributes: this.props.setAttributes })
			);
		}
	}]);

	return Toggle;
}(Component);

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

var ToggleContent = exports.ToggleContent = function (_Component) {
	_inherits(ToggleContent, _Component);

	function ToggleContent(props) {
		_classCallCheck(this, ToggleContent);

		var _this = _possibleConstructorReturn(this, (ToggleContent.__proto__ || Object.getPrototypeOf(ToggleContent)).apply(this, arguments));

		_this.props = props;
		_this.state = {
			toggleContent: [''],
			toggleContentHeight: 0,
			touched: false
		};

		_this.setStatus = _this.setStatus.bind(_this);

		return _this;
	}

	_createClass(ToggleContent, [{
		key: "setStatus",
		value: function setStatus(newProps) {

			var props = newProps ? newProps : this.props;

			if (props.toggleContent) {
				this.setState({
					toggleContent: props.toggleContent
				}, function () {});
			}
			if (props.toggleContentHeight) {
				this.setState({
					toggleContentHeight: props.toggleContentHeight
				}, function () {});
			}
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.setStatus();
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(newProps) {
			this.setStatus(newProps);
		}

		// componentDidUpdate() {
		// 	// console.log('update');
		// }


	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return wp.element.createElement(
				"div",
				{ className: "vl-accordion__content-toggle__content", ref: function ref(divElement) {
						return _this2.divElement = divElement;
					} },
				wp.element.createElement(RichText, { keepPlaceholderOnFocus: "true", className: "vl-accordion__content-toggle__content__text", label: "ToggleContent title", help: "Enter some text" /*value={ this.state.toggleContent }*/
					, value: this.props.toggleContent, name: "title", placeholder: "Content title" /*onChange={ this.handleInputChange }*/, onChange: function onChange(content) {
						_this2.props.setAttributes({
							toggleContent: content
						});
						// this.props.registerChangeHeight('toggleContentHeight', this.divElement.clientHeight);
					} })
			);
		}
	}]);

	return ToggleContent;
}(Component);

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
		_this.titleMedia = _this.titleMedia.bind(_this);

		return _this;
	}

	//Richtext gives straight value array, no event


	_createClass(ToggleTitle, [{
		key: 'handleInputChange',
		value: function handleInputChange(value) {
			var _this2 = this;

			console.log('value', value);
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

			if (props.toggleTitle) {
				this.setState({
					toggleTitle: props.toggleTitle
				}, function () {});
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
			this.setStatus();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			this.setStatus(newProps);
		}
	}, {
		key: 'titleMedia',
		value: function titleMedia(src, alt) {

			console.log('titleMedia src', src);
			console.log('titleMedia alt', alt);

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

		// componentDidUpdate() {
		// 	console.log('update');
		// }


	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			console.log('props', this.props);

			return wp.element.createElement(
				'div',
				{ className: 'vl-accordion__content-toggle__title' },
				this.titleMedia(this.props.toggleTitleMediaUrl, this.props.toggleTitleMediaAlt),
				wp.element.createElement(RichText, { keepPlaceholderOnFocus: 'true', tagName: 'h2', className: "vl-accordion__content-toggle__title__text", label: 'ToggleTitle title', help: 'Enter some text' /*value={ this.state.toggleTitle
                                                                                                                                                                                                    }*/, value: this.props.toggleTitle, name: 'title', placeholder: 'Content title' /*onChange={ this.handleInputChange }*/, onChange: function onChange(content) {
						return _this3.props.setAttributes({
							toggleTitle: content
						});
					} })
			);
		}
	}]);

	return ToggleTitle;
}(Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9pbnN0YWdyYW0vQ29tcG9uZW50cy9JbnN0YUVtYmVkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvaW5zdGFncmFtL0NvbXBvbmVudHMvSW5zdGFGZWVkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvaW5zdGFncmFtL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2luc3RhZ3JhbS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2luc3RhZ3JhbS9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2luc3RhZ3JhbS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2NvbXBvbmVudHMvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2NvbXBvbmVudHMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3RvZ2dsZS9jb21wb25lbnRzL1RvZ2dsZVRpdGxlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy90d2l0dGVyL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3R3aXR0ZXIvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy90d2l0dGVyL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdHdpdHRlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbImFwaSIsIkNvbXBvbmVudCIsIndwIiwiZWxlbWVudCIsIkluc3RhRW1iZWQiLCJwcm9wcyIsImFyZ3VtZW50cyIsInN0YXRlIiwiZW1iZWQiLCJnZXRFbWJlZCIsImJpbmQiLCJsaW5rIiwiYXJncyIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZGF0YSIsImh0bWwiLCJfX2h0bWwiLCJJbnN0YUZlZWQiLCJmZWVkIiwiZ2V0RmVlZCIsImFjY2Vzc190b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiaW1hZ2VzIiwic3RhbmRhcmRfcmVzb2x1dGlvbiIsInVybCIsImJhc2VfdXJsIiwiY2FsbCIsImF4aW9zIiwiZ2V0IiwiZWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIl9fIiwiaTE4biIsImJsb2NrcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJhcGlSZXF1ZXN0IiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIlRleHRDb250cm9sIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJrZXl3b3JkcyIsImF0dHJpYnV0ZXMiLCJoYXNodGFnIiwidHlwZSIsInNlbGVjdG9yIiwiaW5zdGFfdG9rZW4iLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNsYXNzTmFtZSIsInNhdmUiLCJCYXNlQ29udHJvbCIsIkNvbG9yUGFsZXR0ZSIsImFjY29yZGlvblRpdGxlIiwic291cmNlIiwidG9nZ2xlVGl0bGUiLCJ0aXRsZU1lZGlhSWQiLCJ0b2dnbGVUaXRsZU1lZGlhQWx0IiwiYXR0cmlidXRlIiwidG9nZ2xlVGl0bGVNZWRpYVVybCIsInRvZ2dsZUNvbnRlbnQiLCJ0aGVtZSIsImRlZmF1bHQiLCJ0b2dnbGVUaXRsZUhlaWdodCIsInRvZ2dsZUNvbnRlbnRIZWlnaHQiLCJ0ZXh0Q29sb3IiLCJpc1NlbGVjdGVkIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJvbk1lZGlhU2VsZWN0IiwibWVkaWEiLCJhbHQiLCJ0aGVtZVNlbGVjdG9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlTWVkaWFVcGxvYWQiLCJvcGVuIiwidXBkYXRlQXR0cmlidXRlcyIsImF0dHJpYnV0ZU9qYmVjdCIsInRpdGxlTWVkaWEiLCJzcmMiLCJjb250ZW50IiwiVG9nZ2xlIiwic2V0U3RhdHVzIiwicmVnaXN0ZXJDaGFuZ2VIZWlnaHQiLCJuZXdQcm9wcyIsImF0dHIiLCJoZWlnaHQiLCJ3aXRoU2VsZWN0IiwiVG9nZ2xlQ29udGVudCIsInRvdWNoZWQiLCJkaXZFbGVtZW50IiwiVG9nZ2xlVGl0bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhc2h0YWdDaGFu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QUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbkxBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDeERBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQ0FBa0MsY0FBYztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL3RvZ2dsZS9ibG9jayc7XG5pbXBvcnQgJy4vdHdpdHRlci9ibG9jayc7XG5pbXBvcnQgJy4vaW5zdGFncmFtL2Jsb2NrJzsiLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpJztcblxuZXhwb3J0IGNsYXNzIEluc3RhRW1iZWQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKTtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVtYmVkOiAnJ1xuXHRcdH1cblxuXHRcdHRoaXMuZ2V0RW1iZWQgPSB0aGlzLmdldEVtYmVkLmJpbmQodGhpcyk7XG5cdFx0Ly8gdGhpcy5zZXRTdGF0dXMgPSB0aGlzLnNldFN0YXR1cy5iaW5kKHRoaXMpOyBcblxuXHR9XG5cblx0Z2V0RW1iZWQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMubGluaykge1xuXG5cdFx0XHR2YXIgYXJncyA9IHtcblx0XHRcdFx0bGluazogdGhpcy5wcm9wcy5saW5rXG5cdFx0XHR9O1xuXG5cdFx0XHRhcGkuZ2V0RW1iZWQoYXJncylcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldEVtYmVkIHJlc3BvbnNlJywgcmVzcG9uc2UpO1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0ZW1iZWQ6IHJlc3BvbnNlLmRhdGEuaHRtbFxuXHRcdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdlbWJlZCcsIHRoaXMuc3RhdGUuZW1iZWQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdH1cblxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ21vdW50IHJwb3JzJyk7XG5cdFx0Ly8gdGhpcy5zZXRTdGF0dXMoKTtcblx0XHR0aGlzLmdldEVtYmVkKCk7XG5cdH1cblxuXG5cdC8vIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygncmVjZWl2ZWQgcnBvcnMnKTtcblx0Ly8gXHR0aGlzLnNldFN0YXR1cyhuZXdQcm9wcyk7XG5cdC8vIH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5lbWJlZCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJJbnN0YUVtYmVkXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogdGhpcy5zdGF0ZS5lbWJlZCB9IH0+XG4gICAgPC9kaXY+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiSW5zdGFFbWJlZFwiPlxuICAgICAgPHA+IFdhaXRpbmcgZm9yIGVtYmVkLi4uIDwvcD5cbiAgICA8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH1cbn0iLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7IEluc3RhRW1iZWQgfSBmcm9tICcuL0luc3RhRW1iZWQnO1xuXG5leHBvcnQgY2xhc3MgSW5zdGFGZWVkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRmZWVkOiAnJ1xuXHRcdH1cblxuXHRcdHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0RmVlZC5iaW5kKHRoaXMpO1xuXHRcdC8vIHRoaXMuc2V0U3RhdHVzID0gdGhpcy5zZXRTdGF0dXMuYmluZCh0aGlzKTsgXG5cblx0fVxuXG5cdGdldEZlZWQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjZXNzX3Rva2VuKSB7XG5cblx0XHRcdHZhciBhcmdzID0ge1xuXHRcdFx0XHRhY2Nlc3NfdG9rZW46IHRoaXMucHJvcHMuYWNjZXNzX3Rva2VuXG5cdFx0XHR9O1xuXG5cdFx0XHRhcGkuZ2V0RmVlZChhcmdzKVxuXHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZ2V0RmVlZCByZXNwb25zZScsIHJlc3BvbnNlKTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGZlZWQ6IHJlc3BvbnNlLmRhdGEuZGF0YVxuXHRcdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmZWVkJywgdGhpcy5zdGF0ZS5mZWVkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHR9XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdtb3VudCBycG9ycycpO1xuXHRcdC8vIHRoaXMuc2V0U3RhdHVzKCk7XG5cdFx0dGhpcy5nZXRGZWVkKCk7XG5cdH1cblxuXG5cdC8vIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygncmVjZWl2ZWQgcnBvcnMnKTtcblx0Ly8gXHR0aGlzLnNldFN0YXR1cyhuZXdQcm9wcyk7XG5cdC8vIH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5mZWVkKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkluc3RhRmVlZFwiPlxuICAgICAgeyB0aGlzLnN0YXRlLmZlZWQubWFwKChwb3N0KSA9PiB7XG4gICAgICAgIFx0cmV0dXJuIChcbiAgICAgICAgXHRcdDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17IHBvc3QuaW1hZ2VzLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEluc3RhRW1iZWQgbGluaz17IHBvc3QubGluayB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXHRcdCk7XG4gICAgICAgIH0pIH1cbiAgICA8L2Rpdj5cblx0XHRcdClcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJJbnN0YUZlZWRcIj5cbiAgICAgIDxwPiBXYWl0aW5nIGZvciBmZWVkLi4uIDwvcD5cbiAgICA8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgZ2V0RmVlZCA9IChhcmdzKSA9PiB7XG5cblx0Y29uc29sZS5sb2coJ2dldHRpbmcgZmVlZCcpO1xuXG5cdHZhciB7YWNjZXNzX3Rva2VufSA9IGFyZ3M7XG5cdHZhciBiYXNlX3VybCA9ICdodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL3YxL3VzZXJzL3NlbGYvbWVkaWEvcmVjZW50Lz9hY2Nlc3NfdG9rZW49JztcblxuXHR2YXIgY2FsbCA9IGJhc2VfdXJsICsgYWNjZXNzX3Rva2VuO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdjYWxsJywgY2FsbCk7XG5cdHJldHVybiBheGlvcy5nZXQoY2FsbCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRFbWJlZCA9IChhcmdzKSA9PiB7XG5cblx0Y29uc29sZS5sb2coJ2dldHRpbmcgZmVlZCcpO1xuXG5cdHZhciB7bGlua30gPSBhcmdzO1xuXG5cdHZhciBiYXNlX3VybCA9ICdodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL29lbWJlZD91cmw9JztcblxuXG5cdHZhciBjYWxsID0gYmFzZV91cmwgKyBsaW5rO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdjYWxsJywgY2FsbCk7XG5cdHJldHVybiBheGlvcy5nZXQoY2FsbCk7XG59IiwiLyoqXG4gKiBCTE9DSzogbWFpblxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbi8vIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaSc7XG5cbmltcG9ydCB7IEluc3RhRmVlZCB9IGZyb20gJy4vQ29tcG9uZW50cy9JbnN0YUZlZWQnO1xuXG5jb25zdCB7TWVkaWFVcGxvYWQsIFBsYWluVGV4dCwgUmljaFRleHR9ID0gd3AuZWRpdG9yO1xuY29uc3Qge19ffSA9IHdwLmkxOG47IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuY29uc3Qge3JlZ2lzdGVyQmxvY2tUeXBlLCBJbnNwZWN0b3JDb250cm9sc30gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5jb25zdCB7YXBpUmVxdWVzdH0gPSB3cDtcbmNvbnN0IHtCdXR0b24sIFRleHRDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vY29kZXBlbi5pby9hYmVyZ2luL3Blbi9paGxEZlxucmVnaXN0ZXJCbG9ja1R5cGUoJ3ZsLWJsb2Nrcy9pbnN0YWdyYW0nLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1ZMIEluc3RhZ3JhbSBGZWVkJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc2hhcmUnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbXG5cdFx0X18oJ1ZMIEluc3RhZ3JhbSBGZWVkJyksXG5cdFx0X18oJ1ZMIEd1dGVuYmVyZyBFeHRyYSBCbG9jaycpLFxuXHRcdF9fKCdJbnN0YWdyYW0gRmVlZCcpLFxuXHRdLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Ly8gcGFzdCA8LCAgdXBjb21pbmcgPj1cblx0XHRoYXNodGFnOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNlbGVjdG9yOiAnLnZsLWluc3RhZ3JhbV9fdGl0bGUnXG5cdFx0fSxcblx0XHRpbnN0YV90b2tlbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9XG5cdH0sXG5cblxuXHQvKipcblx0ICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuXHQgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG5cdCAqXG5cdCAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0ICovXG5cdGVkaXQ6IGZ1bmN0aW9uKHByb3BzKSB7XG5cblx0XHRjb25zdCB7YXR0cmlidXRlczoge2hhc2h0YWcsIGluc3RhX3Rva2VufSwgc2V0QXR0cmlidXRlc30gPSBwcm9wcztcblxuXHRcdC8vIGxldCBnZXRGZWVkID0gaGFzaHRhZyA9PiB7XG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZygnZ2V0dGluZyB0d2VldHMnKTtcblx0XHQvLyB9XG5cblxuXHRcdC8vIGxldCBoYXNodGFnQ2hhbmdlID0gaGFzaHRhZyA9PiB7XG5cblx0XHQvLyBcdGxldCBhcmdzID0ge1xuXHRcdC8vIFx0XHRoYXNodGFnLFxuXHRcdC8vIFx0XHRhY2Nlc3NfdG9rZW5cblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0Y29uc29sZS5sb2coJ2FyZ3MnLCBhcmdzKTtcblxuXHRcdC8vIFx0dmFyIGZlZWQgPSBhcGkuZ2V0RmVlZChhcmdzKTtcblxuXHRcdC8vIFx0Y29uc29sZS5sb2coJ2ZlZWQnLCBmZWVkKTtcblxuXHRcdC8vIFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0Ly8gXHRcdGhhc2h0YWdcblx0XHQvLyBcdH0pXG5cdFx0Ly8gfVxuXG5cdFx0bGV0IGFyZ3MgPSB7XG5cdFx0XHRhY2Nlc3NfdG9rZW5cblx0XHR9XG5cblxuXHRcdGlmIChhY2Nlc3NfdG9rZW4pIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdhY2Nlc3NfdG9rZW4nLCBhY2Nlc3NfdG9rZW4pO1xuXHRcdFx0Ly8gc2V0QXR0cmlidXRlcyh7XG5cdFx0XHQvLyBcdGluc3RhX3Rva2VuOiBhY2Nlc3NfdG9rZW4gXG5cdFx0XHQvLyB9KVxuXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnaW5zdGFfdG9rZW4nLCBpbnN0YV90b2tlbik7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgW3Byb3BzLmNsYXNzTmFtZV0gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgWyd2bC1pbnN0YWdyYW0nXSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1pbnN0YWdyYW1fX2hlYWRlcicgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1pbnN0YWdyYW1fX2xvZ29fX3dyYXBwZXInIH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtaW5zdGFncmFtXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtaW5zdGFncmFtX19mZWVkJyB9PlxuICAgICAgICAgIDxJbnN0YUZlZWQgYWNjZXNzX3Rva2VuPXsgYWNjZXNzX3Rva2VuIH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBbcHJvcHMuY2xhc3NOYW1lXSB9PlxuICAgICAgPGgyPlBsZWFzZSBlbnRlciB5b3VyIGluc3RhZ3JhbSBhY2Nlc3MgdG9rZW4gPGEgaHJlZj1cIi93cC1hZG1pbi9hZG1pbi5waHA/cGFnZT12bF9ibG9ja3NcIj5oZXJlPC9hPiBiZWZvcmUgd2UgY2FuIGdldCB5b3VyIGZlZWQuPC9oMj5cbiAgICA8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH0sXG5cblxuXG5cdC8vIDxQbGFpblRleHQgb25DaGFuZ2U9eyBoYXNodGFnQ2hhbmdlIH0gdmFsdWU9eyBoYXNodGFnIH0gcGxhY2Vob2xkZXI9XCJAdXNlclwiIC8+XG5cblx0Ly8gPGgyPlBsZWFzZSBlbnRlciB5b3VyIGluc3RhZ3JhbSBhY2Nlc3MgdG9rZW4gPGEgaHJlZj1cIi93cC1hZG1pbi9hZG1pbi5waHA/cGFnZT12bF9ibG9ja3NcIj5oZXJlPC9hPiBiZWZvcmUgd2UgY2FuIGdldCB5b3VyIGZlZWQuPC9oMj5cblxuXHQvLzxzdHJvbmc+UGxlYXNlIGVudGVyIHlvdXIgYWNjZXNzIHRva2VuIHRvIHZpZXcgZmVlZC4gRm9yIGhlbHAvaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0byBnZXQgdGhpcywgcGxlYXNlIHNlZSA8YSBocmVmPVwiL3dwLWFkbWluL2FkbWluLnBocD9wYWdlPXZsX2Jsb2Nrc1wiPmhlcmU8L2E+PC9zdHJvbmc+XG5cdC8vICA8VGV4dENvbnRyb2wgbGFiZWw9XCJJbnN0YSBhY2Nlc3NfdG9rZW5cIiB2YWx1ZT17IGFjY2Vzc190b2tlbiB9IG9uQ2hhbmdlPXsgKGFjY2Vzc190b2tlbikgPT4gc2V0QXR0cmlidXRlcyh7XG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0YWNjZXNzX3Rva2VuXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0gLz5cblxuXG5cdC8qKlxuXHQgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuXHQgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG5cdCAqXG5cdCAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG5cdCAqL1xuXHRzYXZlOiBmdW5jdGlvbihwcm9wcykge1xuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7aGFzaHRhZywgaW5zdGFfdG9rZW59LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cdFx0bGV0IGFyZ3MgPSB7XG5cdFx0XHRhY2Nlc3NfdG9rZW5cblx0XHR9XG5cblxuXG5cdFx0aWYgKGFjY2Vzc190b2tlbikge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBbcHJvcHMuY2xhc3NOYW1lXSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBbJ3ZsLWluc3RhZ3JhbSddIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWluc3RhZ3JhbV9faGVhZGVyJyB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWluc3RhZ3JhbV9fbG9nb19fd3JhcHBlcicgfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy1pbnN0YWdyYW1cIj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1pbnN0YWdyYW1fX2ZlZWQnIH0+XG4gICAgICAgICAgPEluc3RhRmVlZCBhY2Nlc3NfdG9rZW49eyBhY2Nlc3NfdG9rZW4gfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFtwcm9wcy5jbGFzc05hbWVdIH0+XG4gICAgICA8aDI+UGxlYXNlIGVudGVyIHlvdXIgaW5zdGFncmFtIGFjY2VzcyB0b2tlbiA8YSBocmVmPVwiL3dwLWFkbWluL2FkbWluLnBocD9wYWdlPXZsX2Jsb2Nrc1wiPmhlcmU8L2E+IGJlZm9yZSB3ZSBjYW4gZ2V0IHlvdXIgZmVlZC48L2gyPlxuICAgIDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblxuXG5cblx0fSxcbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8qKlxuICogQkxPQ0s6IG1haW5cbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5pbXBvcnQgeyBUb2dnbGUgfSBmcm9tICcuL2NvbXBvbmVudHMvVG9nZ2xlJztcblxuY29uc3Qge01lZGlhVXBsb2FkLCBQbGFpblRleHQsIFJpY2hUZXh0fSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtfX30gPSB3cC5pMThuOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cbmNvbnN0IHtyZWdpc3RlckJsb2NrVHlwZX0gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5jb25zdCB7YXBpUmVxdWVzdH0gPSB3cDtcbmNvbnN0IHtCdXR0b24sIEJhc2VDb250cm9sLCBDb2xvclBhbGV0dGV9ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9jb2RlcGVuLmlvL2FiZXJnaW4vcGVuL2lobERmXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd2bC1ibG9ja3MvdG9nZ2xlJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdWTCBBY2NvcmRpb24nKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdzaGllbGQnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbXG5cdFx0X18oJ1ZMIEFjY29yZGlvbicpLFxuXHRcdF9fKCdWTCBHdXRlbmJlcmcgRXh0cmEgQmxvY2snKSxcblx0XHRfXygnQWNjb3JkaW9uJyksXG5cdF0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHQvLyBwYXN0IDwsICB1cGNvbWluZyA+PVxuXHRcdGFjY29yZGlvblRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICcudmwtYWNjb3JkaW9uX190aXRsZSBoMSdcblx0XHR9LFxuXHRcdHRvZ2dsZVRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICcudmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fdGl0bGVfX3RleHQnXG5cdFx0fSxcblx0XHR0aXRsZU1lZGlhSWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHR0b2dnbGVUaXRsZU1lZGlhQWx0OiB7XG5cdFx0XHRhdHRyaWJ1dGU6ICdhbHQnLFxuXHRcdFx0c2VsZWN0b3I6ICcudmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2UnXG5cdFx0fSxcblx0XHR0b2dnbGVUaXRsZU1lZGlhVXJsOiB7XG5cdFx0XHRhdHRyaWJ1dGU6ICdzcmMnLFxuXHRcdFx0c2VsZWN0b3I6ICcudmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2UnXG5cdFx0fSxcblx0XHR0b2dnbGVDb250ZW50OiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICcudmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fY29udGVudF9fdGV4dCdcblx0XHR9LFxuXHRcdHRoZW1lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICd2bC1hY2NvcmRpb24tdGhlbWUtY2xhc3NpYydcblx0XHR9LFxuXHRcdHRvZ2dsZVRpdGxlSGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0dG9nZ2xlQ29udGVudEhlaWdodDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdHRleHRDb2xvcjogeyAvLyBTZXJpYWxpemVkIGJ5IGRlZmF1bHRcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0fSxcblxuXHQvKipcblx0ICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuXHQgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG5cdCAqXG5cdCAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0ICovXG5cdGVkaXQ6IGZ1bmN0aW9uKHByb3BzKSB7XG5cblx0XHRjb25zdCB7YXR0cmlidXRlczoge2FjY29yZGlvblRpdGxlLCB0b2dnbGVUaXRsZSwgdG9nZ2xlQ29udGVudCwgdGhlbWUsIHRpdGxlTWVkaWFJZCwgdG9nZ2xlVGl0bGVNZWRpYUFsdCwgdG9nZ2xlVGl0bGVNZWRpYVVybCwgdG9nZ2xlVGl0bGVIZWlnaHQsIHRvZ2dsZUNvbnRlbnRIZWlnaHR9LCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkLCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cblx0XHQvLyBUT0RPIDogaXNTZWxlY3RlZFxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYgKHRvZ2dsZVRpdGxlTWVkaWFVcmwpIHtcblx0XHRcdFx0cmV0dXJuIChcblxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIFx0c2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICBcdFx0dGl0bGVNZWRpYUlkOiAnJyxcbiAgICAgICAgICAgICAgICAgIFx0XHR0b2dnbGVUaXRsZU1lZGlhQWx0OiAnJyxcbiAgICAgICAgICAgICAgICAgIFx0XHR0b2dnbGVUaXRsZU1lZGlhVXJsOiAnJ1xuICAgICAgICAgICAgICAgICAgXHR9KTtcbiAgICAgICAgICAgICAgICAgIH0gfSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLWxhcmdlXCI+XG4gICAgICAgUmVtb3ZlIHRpdGxlIGJhY2tncm91bmQgaW1hZ2VcbiAgICAgPC9CdXR0b24+XG5cdFx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLWxhcmdlXCI+XG4gICAgICAgUGljayBhbiB0aXRsZSBiYWNrZ3JvdW5kIGltYWdlXG4gICAgIDwvQnV0dG9uPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXG5cdFx0Y29uc3Qgb25NZWRpYVNlbGVjdCA9IChtZWRpYSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ21lZGlhIHNlbGVjdGVkJywgbWVkaWEpO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHRvZ2dsZVRpdGxlTWVkaWFBbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0dG9nZ2xlVGl0bGVNZWRpYVVybDogbWVkaWEudXJsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvL0luc3BlY3RvckNvbnRyb2xzIGRlcHJhY3RlZC4uLiB3YWl0aW5nIHRvIHNlZSBob3cgdG8gZG8gbm93XG5cblx0XHQvLyB2YXIgcmVuZGVySW5zcGVjdG9yID0gKHtpc1NlbGVjdGVkLCBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSkgPT4ge1xuXHRcdC8vIFx0aWYgKCFpc1NlbGVjdGVkKSB7XG5cdFx0Ly8gXHRcdHJldHVybiBudWxsO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0Y29uc3Qge3RleHRDb2xvcn0gPSBhdHRyaWJ1dGVzXG5cdFx0Ly8gXHRyZXR1cm4gKFxuXHRcdC8vIFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0Ly8gICAgIDxkaXY+XG5cdFx0Ly8gICAgICAgPGgyPlRleHQgQ29sb3I8L2gyPlxuXHRcdC8vICAgICAgIDxCYXNlQ29udHJvbD5cblx0XHQvLyAgICAgICAgIDxDb2xvclBhbGV0dGUgdmFsdWU9eyB0ZXh0Q29sb3IgfSBvbkNoYW5nZT17ICh0ZXh0Q29sb3IpID0+IHNldEF0dHJpYnV0ZXMoe1xuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0ZXh0Q29sb3Jcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0gLz5cblx0XHQvLyAgICAgICA8L0Jhc2VDb250cm9sPlxuXHRcdC8vICAgICA8L2Rpdj5cblx0XHQvLyAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0Ly8gXHQpXG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaW5ibG9jayBub3QgcHJhY3RpY2FsICAtPiAgZW5kIG5ldyB3YXkgdG8gcHV0IGluIHNpZGViYXJcblxuXHRcdC8vIHZhciByZW5kZXJJbnNwZWN0b3IgPSAoe2lzU2VsZWN0ZWQsIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9KSA9PiB7XG5cdFx0Ly8gXHRpZiAoIWlzU2VsZWN0ZWQpIHtcblx0XHQvLyBcdFx0cmV0dXJuIG51bGw7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRjb25zdCB7dGV4dENvbG9yfSA9IGF0dHJpYnV0ZXNcblx0XHQvLyBcdHJldHVybiAoXG5cdFx0Ly8gXHRcdDxkaXY+XG5cdFx0Ly8gICAgIDxoMj5UZXh0IENvbG9yPC9oMj5cblx0XHQvLyAgICAgPEJhc2VDb250cm9sPlxuXHRcdC8vICAgICAgIDxDb2xvclBhbGV0dGUgdmFsdWU9eyB0ZXh0Q29sb3IgfSBvbkNoYW5nZT17ICh0ZXh0Q29sb3IpID0+IHNldEF0dHJpYnV0ZXMoe1xuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0dGV4dENvbG9yXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfSAvPlxuXHRcdC8vICAgICA8L0Jhc2VDb250cm9sPlxuXHRcdC8vICAgPC9kaXY+XG5cdFx0Ly8gXHQpXG5cdFx0Ly8gfVxuXG5cdFx0Ly8geyByZW5kZXJJbnNwZWN0b3IoeyBcblx0XHQvLyAgICAgIFx0aXNTZWxlY3RlZCxcblx0XHQvLyAgICAgIFx0YXR0cmlidXRlcyxcblx0XHQvLyAgICAgIFx0c2V0QXR0cmlidXRlc1xuXHRcdC8vICAgICAgfSkgfVxuXG5cdFx0Y29uc3QgdGhlbWVTZWxlY3RvciA9IChpc1NlbGVjdGVkKSA9PiB7XG5cdFx0XHRpZiAoIWlzU2VsZWN0ZWQpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8c2VsZWN0IHZhbHVlPXsgdGhlbWUgfSBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX190aGVtZS1zZWxlY3RvcicgfSBvbkNoYW5nZT17IChldmVudCkgPT4gc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0dGhlbWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9PlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInZsLWFjY29yZGlvbi10aGVtZS1jbGFzc2ljXCI+Q2xhc3NpYzwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInZsLWFjY29yZGlvbi10aGVtZS1uZXB0dW5lXCI+TmVwdHVuZTwvb3B0aW9uPlxuICAgIDwvc2VsZWN0Pilcblx0XHR9XG5cblx0XHRjb25zdCB0aXRsZU1lZGlhVXBsb2FkID0gKGlzU2VsZWN0ZWQpID0+IHtcblx0XHRcdGlmICghaXNTZWxlY3RlZCkgcmV0dXJuIG51bGw7XG5cdFx0XHRyZXR1cm4gPE1lZGlhVXBsb2FkIG9uU2VsZWN0PXsgb25NZWRpYVNlbGVjdCB9IHZhbHVlPXsgdGl0bGVNZWRpYUlkIH0gcmVuZGVyPXsgKHtvcGVufSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfSAvPlxuXHRcdH1cblxuXHRcdGxldCB1cGRhdGVBdHRyaWJ1dGVzID0gKGF0dHJpYnV0ZU9qYmVjdCkgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2F0dHJpYnV0ZU9qYmVjdCcsIGF0dHJpYnV0ZU9qYmVjdCk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZU9qYmVjdCk7XG5cdFx0fVxuXG5cdFx0bGV0IHRpdGxlTWVkaWEgPSAoc3JjLCBhbHQpID0+IHtcblx0XHRcdGlmICghc3JjKSByZXR1cm4gbnVsbDtcblxuXHRcdFx0aWYgKGFsdCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlX193cmFwcGVyJyB9PlxuICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VcIiBzcmM9eyBzcmMgfSBhbHQ9eyBhbHQgfSAvPlxuICAgICA8L2Rpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBObyBhbHQgXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZV9fd3JhcHBlcicgfT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VcIiBzcmM9eyBzcmMgfSBhbHQ9XCJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgIDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdH1cblxuXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyBbcHJvcHMuY2xhc3NOYW1lXSB9PlxuICAgICA8ZGl2IGNsYXNzTmFtZT17IFsndmwtYWNjb3JkaW9uJyArICcgJyArIHRoZW1lXSB9PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fdGhlbWUtc2VsZWN0b3JfX3dyYXBwZXInIH0+XG4gICAgICAgICB7IHRoZW1lU2VsZWN0b3IoaXNTZWxlY3RlZCkgfVxuICAgICAgICAgeyB0aXRsZU1lZGlhVXBsb2FkKGlzU2VsZWN0ZWQpIH1cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RpdGxlJyB9PlxuICAgICAgICAgPGgxPjxSaWNoVGV4dCBrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPVwidHJ1ZVwiIGxhYmVsPVwiQWNjb3JkaW9uIHRpdGxlXCIgaGVscD1cIkVudGVyIHNvbWUgdGV4dFwiIHZhbHVlPXsgYWNjb3JkaW9uVGl0bGUgfSBwbGFjZWhvbGRlcj1cIk9wdGlvbmFsIGFjY29yZGlvbiB0aXRsZVwiIG9uQ2hhbmdlPXsgKGNvbnRlbnQpID0+IHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0YWNjb3JkaW9uVGl0bGU6IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9IC8+PC9oMT5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8dWwgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fY29udGVudCcgfT5cbiAgICAgICAgIDxUb2dnbGUgdG9nZ2xlVGl0bGU9eyB0b2dnbGVUaXRsZSB9IHRvZ2dsZUNvbnRlbnQ9eyB0b2dnbGVDb250ZW50IH0gdG9nZ2xlVGl0bGVIZWlnaHQ9eyB0b2dnbGVUaXRsZUhlaWdodCB9IHRvZ2dsZUNvbnRlbnRIZWlnaHQ9eyB0b2dnbGVDb250ZW50SGVpZ2h0IH0gdG9nZ2xlVGl0bGVNZWRpYVVybD17IHRvZ2dsZVRpdGxlTWVkaWFVcmwgfVxuICAgICAgICAgICB0b2dnbGVUaXRsZU1lZGlhQWx0PXsgdG9nZ2xlVGl0bGVNZWRpYUFsdCB9IHVwZGF0ZUF0dHJpYnV0ZXM9eyB1cGRhdGVBdHRyaWJ1dGVzIH0gc2V0QXR0cmlidXRlcz17IHNldEF0dHJpYnV0ZXMgfSAvPlxuICAgICAgIDwvdWw+XG4gICAgIDwvZGl2PlxuICAgPC9kaXY+XG5cdFx0XHQpO1xuXHR9LFxuXG5cblxuXHQvKipcblx0ICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcblx0ICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuXHQgKlxuXHQgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0c2F2ZTogZnVuY3Rpb24ocHJvcHMpIHtcblx0XHRjb25zdCB7YXR0cmlidXRlczoge2FjY29yZGlvblRpdGxlLCB0b2dnbGVUaXRsZSwgdG9nZ2xlQ29udGVudCwgdGhlbWUsIHRpdGxlTWVkaWFJZCwgdG9nZ2xlVGl0bGVNZWRpYUFsdCwgdG9nZ2xlVGl0bGVNZWRpYVVybCwgdG9nZ2xlVGl0bGVIZWlnaHQsIHRvZ2dsZUNvbnRlbnRIZWlnaHR9LCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkLCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cdFx0Y29uc3QgdGl0bGVNZWRpYSA9IChzcmMsIGFsdCkgPT4ge1xuXHRcdFx0aWYgKCFzcmMpIHJldHVybiBudWxsO1xuXG5cdFx0XHRpZiAoYWx0KSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VfX3dyYXBwZXInIH0+XG4gICAgICAgPGltZyBjbGFzc05hbWU9XCJ2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZVwiIHNyYz17IHNyYyB9IGFsdD17IGFsdCB9IC8+XG4gICAgIDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE5vIGFsdCBzZXQsIHNvIGxldCdzIGhpZGUgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VfX3dyYXBwZXInIH0+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlXCIgc3JjPXsgc3JjIH0gYWx0PVwiXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICA8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyBbcHJvcHMuY2xhc3NOYW1lXSB9PlxuICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb24nICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZSB9PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGhlbWUgfT5cbiAgICAgICAgIHsgdGhlbWUgfVxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fdGl0bGUnIH0+XG4gICAgICAgICA8aDE+eyBhY2NvcmRpb25UaXRsZSB9PC9oMT5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8dWwgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fY29udGVudCcgfT5cbiAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZScgfT5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgIDxpPjwvaT5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fdGl0bGUnIH0+XG4gICAgICAgICAgICAgeyB0aXRsZU1lZGlhKHRvZ2dsZVRpdGxlTWVkaWFVcmwsIHRvZ2dsZVRpdGxlTWVkaWFBbHQpIH1cbiAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsgXCJ2bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlX190aXRsZV9fdGV4dFwiIH0+IHsgdG9nZ2xlVGl0bGUgfSA8L2gyPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fY29udGVudCcgfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFwidmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fY29udGVudF9fdGV4dFwiIH0+XG4gICAgICAgICAgICAgICB7IHRvZ2dsZUNvbnRlbnQgfSA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2xpPlxuICAgICAgIDwvdWw+XG4gICAgIDwvZGl2PlxuICAgPC9kaXY+XG5cdFx0XHQpO1xuXG5cblxuXHR9LFxufSk7XG4iLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7UmljaFRleHR9ID0gd3AuZWRpdG9yO1xuXG5pbXBvcnQgeyBUb2dnbGVUaXRsZSB9IGZyb20gJy4vVG9nZ2xlVGl0bGUnO1xuaW1wb3J0IHsgVG9nZ2xlQ29udGVudCB9IGZyb20gJy4vVG9nZ2xlQ29udGVudCc7XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKTtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZ2dsZVRpdGxlOiAnJyxcblx0XHRcdHRvZ2dsZUNvbnRlbnQ6ICcnLFxuXHRcdFx0dG9nZ2xlVGl0bGVIZWlnaHQ6ICcnLFxuXHRcdFx0dG9nZ2xlQ29udGVudEhlaWdodDogJydcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXR1cyA9IHRoaXMuc2V0U3RhdHVzLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyQ2hhbmdlSGVpZ2h0ID0gdGhpcy5yZWdpc3RlckNoYW5nZUhlaWdodC5iaW5kKHRoaXMpO1xuXG5cdH1cblxuXG5cblxuXHRzZXRTdGF0dXMobmV3UHJvcHMpIHtcblxuXHRcdHZhciBwcm9wcyA9IG5ld1Byb3BzID8gbmV3UHJvcHMgOiB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKHByb3BzLnRvZ2dsZVRpdGxlKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG9nZ2xlVGl0bGU6IHByb3BzLnRvZ2dsZVRpdGxlXG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLnRvZ2dsZUNvbnRlbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVDb250ZW50OiBwcm9wcy50b2dnbGVDb250ZW50XG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLnRvZ2dsZVRpdGxlSGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG9nZ2xlVGl0bGVIZWlnaHQ6IHByb3BzLnRvZ2dsZVRpdGxlSGVpZ2h0XG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLnRvZ2dsZUNvbnRlbnRIZWlnaHQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVDb250ZW50SGVpZ2h0OiBwcm9wcy50b2dnbGVDb250ZW50SGVpZ2h0XG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdHVzKCk7XG5cdH1cblxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcblx0XHR0aGlzLnNldFN0YXR1cyhuZXdQcm9wcyk7XG5cdH1cblxuXHRyZWdpc3RlckNoYW5nZUhlaWdodChhdHRyLCBoZWlnaHQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFthdHRyXTogaGVpZ2h0XG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy51cGRhdGVBdHRyaWJ1dGVzKHtcblx0XHRcdFx0W2F0dHJdOiBoZWlnaHRcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge31cblxuXG5cdHJlbmRlcigpIHtcblx0XHQvLyBjb25zb2xlLmxvZygncHJvcHMnLCB0aGlzLnByb3BzKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGNsYXNzTmFtZT1cInZsLWFjY29yZGlvbl9fY29udGVudC10b2dnbGVcIj5cbiAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgIDxpPjwvaT5cbiAgICAgPFRvZ2dsZVRpdGxlIC8qdG9nZ2xlVGl0bGU9eyB0aGlzLnN0YXRlLnRvZ2dsZVRpdGxlIH0qLyB0b2dnbGVUaXRsZT17IHRoaXMucHJvcHMudG9nZ2xlVGl0bGUgfSB0b2dnbGVUaXRsZUhlaWdodD17IHRoaXMuc3RhdGUudG9nZ2xlVGl0bGVIZWlnaHQgfSByZWdpc3RlckNoYW5nZUhlaWdodD17IHRoaXMucmVnaXN0ZXJDaGFuZ2VIZWlnaHQgfVxuICAgICAgIHVwZGF0ZUF0dHJpYnV0ZXM9eyB0aGlzLnByb3BzLnVwZGF0ZUF0dHJpYnV0ZXMgfSBzZXRBdHRyaWJ1dGVzPXsgdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzIH0gdG9nZ2xlVGl0bGVNZWRpYVVybD17IHRoaXMucHJvcHMudG9nZ2xlVGl0bGVNZWRpYVVybCB9IHRvZ2dsZVRpdGxlTWVkaWFBbHQ9eyB0aGlzLnByb3BzLnRvZ2dsZVRpdGxlTWVkaWFBbHQgfSAvPlxuICAgICA8VG9nZ2xlQ29udGVudCAvKnRvZ2dsZVRpdGxlPXsgdGhpcy5zdGF0ZS50b2dnbGVUaXRsZSB9Ki8gdG9nZ2xlQ29udGVudD17IHRoaXMucHJvcHMudG9nZ2xlQ29udGVudCB9IHRvZ2dsZUNvbnRlbnRIZWlnaHQ9eyB0aGlzLnN0YXRlLnRvZ2dsZUNvbnRlbnRIZWlnaHQgfSByZWdpc3RlckNoYW5nZUhlaWdodD17IHRoaXMucmVnaXN0ZXJDaGFuZ2VIZWlnaHQgfVxuICAgICAgIHVwZGF0ZUF0dHJpYnV0ZXM9eyB0aGlzLnByb3BzLnVwZGF0ZUF0dHJpYnV0ZXMgfSBzZXRBdHRyaWJ1dGVzPXsgdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzIH0gLz5cbiAgIDwvbGk+XG5cdFx0XHQpO1xuXHR9XG59XG4iLCJcblxuY29uc3Qge0NvbXBvbmVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1JpY2hUZXh0fSA9IHdwLmVkaXRvcjtcbmNvbnN0IHt3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0b2dnbGVDb250ZW50OiBbJyddLFxuXHRcdFx0dG9nZ2xlQ29udGVudEhlaWdodDogMCxcblx0XHRcdHRvdWNoZWQ6IGZhbHNlXG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0dXMgPSB0aGlzLnNldFN0YXR1cy5iaW5kKHRoaXMpO1xuXG5cdH1cblxuXHRzZXRTdGF0dXMobmV3UHJvcHMpIHtcblxuXHRcdHZhciBwcm9wcyA9IG5ld1Byb3BzID8gbmV3UHJvcHMgOiB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKHByb3BzLnRvZ2dsZUNvbnRlbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVDb250ZW50OiBwcm9wcy50b2dnbGVDb250ZW50XG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLnRvZ2dsZUNvbnRlbnRIZWlnaHQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVDb250ZW50SGVpZ2h0OiBwcm9wcy50b2dnbGVDb250ZW50SGVpZ2h0XG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0dXMoKTtcblx0fVxuXG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuXHRcdHRoaXMuc2V0U3RhdHVzKG5ld1Byb3BzKTtcblx0fVxuXG5cdC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0Ly8gXHQvLyBjb25zb2xlLmxvZygndXBkYXRlJyk7XG5cdC8vIH1cblxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZsLWFjY29yZGlvbl9fY29udGVudC10b2dnbGVfX2NvbnRlbnRcIiByZWY9eyAoZGl2RWxlbWVudCkgPT4gdGhpcy5kaXZFbGVtZW50ID0gZGl2RWxlbWVudCB9PlxuICAgICA8UmljaFRleHQga2VlcFBsYWNlaG9sZGVyT25Gb2N1cz1cInRydWVcIiBjbGFzc05hbWU9eyBcInZsLWFjY29yZGlvbl9fY29udGVudC10b2dnbGVfX2NvbnRlbnRfX3RleHRcIiB9IGxhYmVsPVwiVG9nZ2xlQ29udGVudCB0aXRsZVwiIGhlbHA9XCJFbnRlciBzb21lIHRleHRcIiAvKnZhbHVlPXsgdGhpcy5zdGF0ZS50b2dnbGVDb250ZW50IH0qL1xuICAgICAgIHZhbHVlPXsgdGhpcy5wcm9wcy50b2dnbGVDb250ZW50IH0gbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJDb250ZW50IHRpdGxlXCIgLypvbkNoYW5nZT17IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgfSovIG9uQ2hhbmdlPXsgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0dG9nZ2xlQ29udGVudDogY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMucmVnaXN0ZXJDaGFuZ2VIZWlnaHQoJ3RvZ2dsZUNvbnRlbnRIZWlnaHQnLCB0aGlzLmRpdkVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9IC8+XG4gICA8L2Rpdj5cblx0XHRcdCk7XG5cdH1cbn0iLCJcblxuY29uc3Qge0NvbXBvbmVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1JpY2hUZXh0fSA9IHdwLmVkaXRvcjtcbmNvbnN0IHt3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5cbi8vIGNvbnN0IGlucHV0cyA9IFsncGFzdE9yVXBjb21pbmcnLCAnaG93TWFueUV2ZW50cyddXG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVUaXRsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dG9nZ2xlVGl0bGU6IFsnJ10sXG5cdFx0XHR0b2dnbGVUaXRsZUhlaWdodDogJycsXG5cdFx0XHR0b3VjaGVkOiBmYWxzZSxcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXR1cyA9IHRoaXMuc2V0U3RhdHVzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRpdGxlTWVkaWEgPSB0aGlzLnRpdGxlTWVkaWEuYmluZCh0aGlzKTtcblxuXHR9XG5cblx0Ly9SaWNodGV4dCBnaXZlcyBzdHJhaWdodCB2YWx1ZSBhcnJheSwgbm8gZXZlbnRcblx0aGFuZGxlSW5wdXRDaGFuZ2UodmFsdWUpIHtcblx0XHRjb25zb2xlLmxvZygndmFsdWUnLCB2YWx1ZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0b2dnbGVUaXRsZTogdmFsdWUsXG5cdFx0XHR0b3VjaGVkOiB0cnVlXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuc3RhdGUudG9nZ2xlVGl0bGUnLCB0aGlzLnN0YXRlLnRvZ2dsZVRpdGxlKTtcblx0XHRcdHRoaXMucHJvcHMudXBkYXRlQXR0cmlidXRlcyh7XG5cdFx0XHRcdHRvZ2dsZVRpdGxlOiB0aGlzLnN0YXRlLnRvZ2dsZVRpdGxlXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHR9XG5cblx0c2V0U3RhdHVzKG5ld1Byb3BzKSB7XG5cblx0XHR2YXIgcHJvcHMgPSBuZXdQcm9wcyA/IG5ld1Byb3BzIDogdGhpcy5wcm9wcztcblxuXG5cdFx0aWYgKHByb3BzLnRvZ2dsZVRpdGxlKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG9nZ2xlVGl0bGU6IHByb3BzLnRvZ2dsZVRpdGxlXG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHByb3BzLnRvZ2dsZVRpdGxlSGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG9nZ2xlVGl0bGVIZWlnaHQ6IHByb3BzLnRvZ2dsZVRpdGxlSGVpZ2h0XG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdHVzKCk7XG5cdH1cblxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcblx0XHR0aGlzLnNldFN0YXR1cyhuZXdQcm9wcyk7XG5cdH1cblxuXHR0aXRsZU1lZGlhKHNyYywgYWx0KSB7XG5cblx0XHRjb25zb2xlLmxvZygndGl0bGVNZWRpYSBzcmMnLCBzcmMpO1xuXHRcdGNvbnNvbGUubG9nKCd0aXRsZU1lZGlhIGFsdCcsIGFsdCk7XG5cblx0XHRpZiAoIXNyYykgcmV0dXJuIG51bGw7XG5cblx0XHRpZiAoYWx0KSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZV9fd3JhcHBlcicgfT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VcIiBzcmM9eyBzcmMgfSBhbHQ9eyBhbHQgfSAvPlxuICAgIDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIE5vIGFsdCBzZXQsIHNvIGxldCdzIGhpZGUgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZV9fd3JhcHBlcicgfT5cbiAgICAgPGltZyBjbGFzc05hbWU9XCJ2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZVwiIHNyYz17IHNyYyB9IGFsdD1cIlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICA8L2Rpdj5cblx0XHRcdCk7XG5cdH1cblxuXHQvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ3VwZGF0ZScpO1xuXHQvLyB9XG5cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zb2xlLmxvZygncHJvcHMnLCB0aGlzLnByb3BzKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZsLWFjY29yZGlvbl9fY29udGVudC10b2dnbGVfX3RpdGxlXCI+XG4gICAgIHsgdGhpcy50aXRsZU1lZGlhKHRoaXMucHJvcHMudG9nZ2xlVGl0bGVNZWRpYVVybCwgdGhpcy5wcm9wcy50b2dnbGVUaXRsZU1lZGlhQWx0KSB9XG4gICAgIDxSaWNoVGV4dCBrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPVwidHJ1ZVwiIHRhZ05hbWU9XCJoMlwiIGNsYXNzTmFtZT17IFwidmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fdGl0bGVfX3RleHRcIiB9IGxhYmVsPVwiVG9nZ2xlVGl0bGUgdGl0bGVcIiBoZWxwPVwiRW50ZXIgc29tZSB0ZXh0XCIgLyp2YWx1ZT17IHRoaXMuc3RhdGUudG9nZ2xlVGl0bGVcbiAgICAgICB9Ki8gdmFsdWU9eyB0aGlzLnByb3BzLnRvZ2dsZVRpdGxlIH0gbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJDb250ZW50IHRpdGxlXCIgLypvbkNoYW5nZT17IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgfSovIG9uQ2hhbmdlPXsgKGNvbnRlbnQpID0+IHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0b2dnbGVUaXRsZTogY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0gLz5cbiAgIDwvZGl2PlxuXHRcdFx0KTtcblx0fVxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0VHdlZXRzID0gKGFyZ3MpID0+IHtcblxuLy8gXHR2YXIge2hhc2h0YWd9ID0gYXJncztcblxuLy8gXHR2YXIgY2FsbCA9ICcnO1xuXG4vLyBcdHJldHVybiBheGlvcy5nZXQoY2FsbCk7XG4vLyB9XG4iLCIvKipcbiAqIEJMT0NLOiBtYWluXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vYXBpJztcblxuY29uc3Qge01lZGlhVXBsb2FkLCBQbGFpblRleHQsIFJpY2hUZXh0fSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtfX30gPSB3cC5pMThuOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cbmNvbnN0IHtyZWdpc3RlckJsb2NrVHlwZSwgSW5zcGVjdG9yQ29udHJvbHN9ID0gd3AuYmxvY2tzOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuY29uc3Qge2FwaVJlcXVlc3R9ID0gd3A7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vY29kZXBlbi5pby9hYmVyZ2luL3Blbi9paGxEZlxucmVnaXN0ZXJCbG9ja1R5cGUoJ3ZsLWJsb2Nrcy90d2l0dGVyJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdWTCBUd2l0dGVyIFR3ZWV0cycpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ3R3aXR0ZXInLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbXG5cdFx0X18oJ1ZMIFR3aXR0ZXIgVHdlZXRzJyksXG5cdFx0X18oJ1ZMIEd1dGVuYmVyZyBFeHRyYSBCbG9jaycpLFxuXHRcdF9fKCdUd2l0dGVyIFR3ZWV0cycpLFxuXHRdLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Ly8gcGFzdCA8LCAgdXBjb21pbmcgPj1cblx0XHRoYXNodGFnOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNlbGVjdG9yOiAnLnZsLXR3aXR0ZXJfX3RpdGxlJ1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuXHQgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG5cdCAqXG5cdCAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0ICovXG5cdGVkaXQ6IGZ1bmN0aW9uKHByb3BzKSB7XG5cblx0XHRjb25zdCB7YXR0cmlidXRlczoge2hhc2h0YWd9LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cdFx0Ly8gbGV0IGdldFR3ZWV0cyA9IGhhc2h0YWcgPT4ge1xuXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coJ2dldHRpbmcgdHdlZXRzJyk7XG5cdFx0Ly8gfVxuXG5cdFx0bGV0IGhhc2h0YWdDaGFuZ2UgPSBoYXNodGFnID0+IHtcblxuXHRcdFx0Ly8gbGV0IGFyZ3MgPSB7XG5cdFx0XHQvLyBcdGhhc2h0YWdcblx0XHRcdC8vIH0gXG5cblx0XHRcdC8vIGFwaS5nZXRUd2VldHMoYXJncyk7XG5cblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRoYXNodGFnXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cblxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFtwcm9wcy5jbGFzc05hbWVdIH0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPXsgWyd2bC10d2l0dGVyJ10gfT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC10d2l0dGVyX19oZWFkZXInIH0+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC10d2l0dGVyX19sb2dvX193cmFwcGVyJyB9PlxuICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtdHdpdHRlclwiPjwvc3Bhbj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPFBsYWluVGV4dCBvbkNoYW5nZT17IGhhc2h0YWdDaGFuZ2UgfSB2YWx1ZT17IGhhc2h0YWcgfSBwbGFjZWhvbGRlcj1cIkB1c2VyXCIgLz5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC10d2l0dGVyX19mZWVkJyB9PlxuICAgICAgICAgPGEgY2xhc3M9XCJ0d2l0dGVyLXRpbWVsaW5lXCIgZGF0YS1jaHJvbWU9XCJub2hlYWRlciBub2Zvb3RlciBub2JvcmRlcnNcIiBocmVmPXsgXCJodHRwczovL3R3aXR0ZXIuY29tL1wiICsgaGFzaHRhZyB9PlR3ZWV0cyBieSB7IGhhc2h0YWcgfTwvYT5cbiAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzXCIgY2hhcnNldD1cInV0Zi04XCI+PC9zY3JpcHQ+XG4gICAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgPC9kaXY+XG5cdFx0XHQpO1xuXHR9LFxuXG5cblxuXG5cblx0LyoqXG5cdCAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG5cdCAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cblx0ICpcblx0ICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0ICovXG5cdHNhdmU6IGZ1bmN0aW9uKHByb3BzKSB7XG5cdFx0Y29uc3Qge2F0dHJpYnV0ZXM6IHtoYXNodGFnfSwgc2V0QXR0cmlidXRlc30gPSBwcm9wcztcblxuXHRcdHJldHVybiAoXG5cblxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFtwcm9wcy5jbGFzc05hbWVdIH0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPXsgWyd2bC10d2l0dGVyJ10gfT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC10d2l0dGVyX19oZWFkZXInIH0+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC10d2l0dGVyX19sb2dvX193cmFwcGVyJyB9PlxuICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtdHdpdHRlclwiPjwvc3Bhbj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtdHdpdHRlcl9fdGl0bGUnIH0+XG4gICAgICAgICAgIHsgaGFzaHRhZyB9XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC10d2l0dGVyX19mZWVkJyB9PlxuICAgICAgICAgPGEgY2xhc3M9XCJ0d2l0dGVyLXRpbWVsaW5lXCIgZGF0YS1jaHJvbWU9XCJub2hlYWRlciBub2Zvb3RlciBub2JvcmRlcnNcIiBocmVmPXsgXCJodHRwczovL3R3aXR0ZXIuY29tL1wiICsgaGFzaHRhZyB9PlR3ZWV0cyBieSB7IGhhc2h0YWcgfTwvYT5cbiAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzXCIgY2hhcnNldD1cInV0Zi04XCI+PC9zY3JpcHQ+XG4gICAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgPC9kaXY+XG5cdFx0XHQpO1xuXG5cblxuXHR9LFxufSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==