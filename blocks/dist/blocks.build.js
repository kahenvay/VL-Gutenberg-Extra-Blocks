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
				return wp.element.createElement('div', { className: 'vl-instagram__embed', dangerouslySetInnerHTML: { __html: this.state.embed } });
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
					{ className: 'vl-instagram__feed' },
					this.state.feed.map(function (post) {
						return wp.element.createElement(
							'div',
							{ className: 'vl-instagram__feed__post' },
							wp.element.createElement('img', { src: post.images.standard_resolution.url }),
							wp.element.createElement(_InstaEmbed.InstaEmbed, { link: post.link })
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

			/*<div className={ 'vl-instagram__header' }>
          <div className={ 'vl-instagram__logo__wrapper' }>
            <span class="dashicons dashicons-share"></span>
          </div>
        </div>*/

			return wp.element.createElement(
				'div',
				{ className: [props.className] },
				wp.element.createElement(
					'div',
					{ className: ['vl-instagram'] },
					wp.element.createElement(_InstaFeed.InstaFeed, { access_token: access_token })
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


		return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9pbnN0YWdyYW0vQ29tcG9uZW50cy9JbnN0YUVtYmVkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvaW5zdGFncmFtL0NvbXBvbmVudHMvSW5zdGFGZWVkLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvaW5zdGFncmFtL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2luc3RhZ3JhbS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2luc3RhZ3JhbS9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2luc3RhZ3JhbS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2NvbXBvbmVudHMvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2NvbXBvbmVudHMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3RvZ2dsZS9jb21wb25lbnRzL1RvZ2dsZVRpdGxlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdG9nZ2xlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy90d2l0dGVyL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3R3aXR0ZXIvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy90d2l0dGVyL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvdHdpdHRlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbImFwaSIsIkNvbXBvbmVudCIsIndwIiwiZWxlbWVudCIsIkluc3RhRW1iZWQiLCJwcm9wcyIsImFyZ3VtZW50cyIsInN0YXRlIiwiZW1iZWQiLCJnZXRFbWJlZCIsImJpbmQiLCJsaW5rIiwiYXJncyIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZGF0YSIsImh0bWwiLCJfX2h0bWwiLCJJbnN0YUZlZWQiLCJmZWVkIiwiZ2V0RmVlZCIsImFjY2Vzc190b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiaW1hZ2VzIiwic3RhbmRhcmRfcmVzb2x1dGlvbiIsInVybCIsImJhc2VfdXJsIiwiY2FsbCIsImF4aW9zIiwiZ2V0IiwiZWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIl9fIiwiaTE4biIsImJsb2NrcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJhcGlSZXF1ZXN0IiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIlRleHRDb250cm9sIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJrZXl3b3JkcyIsImF0dHJpYnV0ZXMiLCJoYXNodGFnIiwidHlwZSIsInNlbGVjdG9yIiwiaW5zdGFfdG9rZW4iLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNsYXNzTmFtZSIsInNhdmUiLCJCYXNlQ29udHJvbCIsIkNvbG9yUGFsZXR0ZSIsImFjY29yZGlvblRpdGxlIiwic291cmNlIiwidG9nZ2xlVGl0bGUiLCJ0aXRsZU1lZGlhSWQiLCJ0b2dnbGVUaXRsZU1lZGlhQWx0IiwiYXR0cmlidXRlIiwidG9nZ2xlVGl0bGVNZWRpYVVybCIsInRvZ2dsZUNvbnRlbnQiLCJ0aGVtZSIsImRlZmF1bHQiLCJ0b2dnbGVUaXRsZUhlaWdodCIsInRvZ2dsZUNvbnRlbnRIZWlnaHQiLCJ0ZXh0Q29sb3IiLCJpc1NlbGVjdGVkIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJvbk1lZGlhU2VsZWN0IiwibWVkaWEiLCJhbHQiLCJ0aGVtZVNlbGVjdG9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlTWVkaWFVcGxvYWQiLCJvcGVuIiwidXBkYXRlQXR0cmlidXRlcyIsImF0dHJpYnV0ZU9qYmVjdCIsInRpdGxlTWVkaWEiLCJzcmMiLCJjb250ZW50IiwiVG9nZ2xlIiwic2V0U3RhdHVzIiwicmVnaXN0ZXJDaGFuZ2VIZWlnaHQiLCJuZXdQcm9wcyIsImF0dHIiLCJoZWlnaHQiLCJ3aXRoU2VsZWN0IiwiVG9nZ2xlQ29udGVudCIsInRvdWNoZWQiLCJkaXZFbGVtZW50IiwiVG9nZ2xlVGl0bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhc2h0YWdDaGFu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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbkxBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDeERBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL3RvZ2dsZS9ibG9jayc7XG5pbXBvcnQgJy4vdHdpdHRlci9ibG9jayc7XG5pbXBvcnQgJy4vaW5zdGFncmFtL2Jsb2NrJzsiLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpJztcblxuZXhwb3J0IGNsYXNzIEluc3RhRW1iZWQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKTtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVtYmVkOiAnJ1xuXHRcdH1cblxuXHRcdHRoaXMuZ2V0RW1iZWQgPSB0aGlzLmdldEVtYmVkLmJpbmQodGhpcyk7XG5cdFx0Ly8gdGhpcy5zZXRTdGF0dXMgPSB0aGlzLnNldFN0YXR1cy5iaW5kKHRoaXMpOyBcblxuXHR9XG5cblx0Z2V0RW1iZWQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMubGluaykge1xuXG5cdFx0XHR2YXIgYXJncyA9IHtcblx0XHRcdFx0bGluazogdGhpcy5wcm9wcy5saW5rXG5cdFx0XHR9O1xuXG5cdFx0XHRhcGkuZ2V0RW1iZWQoYXJncylcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldEVtYmVkIHJlc3BvbnNlJywgcmVzcG9uc2UpO1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0ZW1iZWQ6IHJlc3BvbnNlLmRhdGEuaHRtbFxuXHRcdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdlbWJlZCcsIHRoaXMuc3RhdGUuZW1iZWQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdH1cblxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ21vdW50IHJwb3JzJyk7XG5cdFx0Ly8gdGhpcy5zZXRTdGF0dXMoKTtcblx0XHR0aGlzLmdldEVtYmVkKCk7XG5cdH1cblxuXG5cdC8vIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygncmVjZWl2ZWQgcnBvcnMnKTtcblx0Ly8gXHR0aGlzLnNldFN0YXR1cyhuZXdQcm9wcyk7XG5cdC8vIH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5lbWJlZCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2bC1pbnN0YWdyYW1fX2VtYmVkXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogdGhpcy5zdGF0ZS5lbWJlZCB9IH0+XG4gICAgPC9kaXY+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiSW5zdGFFbWJlZFwiPlxuICAgICAgPHA+IFdhaXRpbmcgZm9yIGVtYmVkLi4uIDwvcD5cbiAgICA8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH1cbn0iLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7IEluc3RhRW1iZWQgfSBmcm9tICcuL0luc3RhRW1iZWQnO1xuXG5leHBvcnQgY2xhc3MgSW5zdGFGZWVkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRmZWVkOiAnJ1xuXHRcdH1cblxuXHRcdHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0RmVlZC5iaW5kKHRoaXMpO1xuXHRcdC8vIHRoaXMuc2V0U3RhdHVzID0gdGhpcy5zZXRTdGF0dXMuYmluZCh0aGlzKTsgXG5cblx0fVxuXG5cdGdldEZlZWQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuYWNjZXNzX3Rva2VuKSB7XG5cblx0XHRcdHZhciBhcmdzID0ge1xuXHRcdFx0XHRhY2Nlc3NfdG9rZW46IHRoaXMucHJvcHMuYWNjZXNzX3Rva2VuXG5cdFx0XHR9O1xuXG5cdFx0XHRhcGkuZ2V0RmVlZChhcmdzKVxuXHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZ2V0RmVlZCByZXNwb25zZScsIHJlc3BvbnNlKTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGZlZWQ6IHJlc3BvbnNlLmRhdGEuZGF0YVxuXHRcdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmZWVkJywgdGhpcy5zdGF0ZS5mZWVkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHR9XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdtb3VudCBycG9ycycpO1xuXHRcdC8vIHRoaXMuc2V0U3RhdHVzKCk7XG5cdFx0dGhpcy5nZXRGZWVkKCk7XG5cdH1cblxuXG5cdC8vIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygncmVjZWl2ZWQgcnBvcnMnKTtcblx0Ly8gXHR0aGlzLnNldFN0YXR1cyhuZXdQcm9wcyk7XG5cdC8vIH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5mZWVkKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZsLWluc3RhZ3JhbV9fZmVlZFwiPlxuICAgICAgeyB0aGlzLnN0YXRlLmZlZWQubWFwKChwb3N0KSA9PiB7XG4gICAgICAgIFx0cmV0dXJuIChcbiAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwidmwtaW5zdGFncmFtX19mZWVkX19wb3N0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17IHBvc3QuaW1hZ2VzLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsIH0gLz5cbiAgICAgICAgICAgIDxJbnN0YUVtYmVkIGxpbms9eyBwb3N0LmxpbmsgfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcdFx0KTtcbiAgICAgICAgfSkgfVxuICAgIDwvZGl2PlxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkluc3RhRmVlZFwiPlxuICAgICAgPHA+IFdhaXRpbmcgZm9yIGZlZWQuLi4gPC9wPlxuICAgIDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblx0fVxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRGZWVkID0gKGFyZ3MpID0+IHtcblxuXHRjb25zb2xlLmxvZygnZ2V0dGluZyBmZWVkJyk7XG5cblx0dmFyIHthY2Nlc3NfdG9rZW59ID0gYXJncztcblx0dmFyIGJhc2VfdXJsID0gJ2h0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdXNlcnMvc2VsZi9tZWRpYS9yZWNlbnQvP2FjY2Vzc190b2tlbj0nO1xuXG5cdHZhciBjYWxsID0gYmFzZV91cmwgKyBhY2Nlc3NfdG9rZW47XG5cblx0Ly8gY29uc29sZS5sb2coJ2NhbGwnLCBjYWxsKTtcblx0cmV0dXJuIGF4aW9zLmdldChjYWxsKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEVtYmVkID0gKGFyZ3MpID0+IHtcblxuXHRjb25zb2xlLmxvZygnZ2V0dGluZyBmZWVkJyk7XG5cblx0dmFyIHtsaW5rfSA9IGFyZ3M7XG5cblx0dmFyIGJhc2VfdXJsID0gJ2h0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vb2VtYmVkP3VybD0nO1xuXG5cblx0dmFyIGNhbGwgPSBiYXNlX3VybCArIGxpbms7XG5cblx0Ly8gY29uc29sZS5sb2coJ2NhbGwnLCBjYWxsKTtcblx0cmV0dXJuIGF4aW9zLmdldChjYWxsKTtcbn0iLCIvKipcbiAqIEJMT0NLOiBtYWluXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuLy8gaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vYXBpJztcblxuaW1wb3J0IHsgSW5zdGFGZWVkIH0gZnJvbSAnLi9Db21wb25lbnRzL0luc3RhRmVlZCc7XG5cbmNvbnN0IHtNZWRpYVVwbG9hZCwgUGxhaW5UZXh0LCBSaWNoVGV4dH0gPSB3cC5lZGl0b3I7XG5jb25zdCB7X199ID0gd3AuaTE4bjsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5jb25zdCB7cmVnaXN0ZXJCbG9ja1R5cGUsIEluc3BlY3RvckNvbnRyb2xzfSA9IHdwLmJsb2NrczsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcbmNvbnN0IHthcGlSZXF1ZXN0fSA9IHdwO1xuY29uc3Qge0J1dHRvbiwgVGV4dENvbnRyb2x9ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9jb2RlcGVuLmlvL2FiZXJnaW4vcGVuL2lobERmXG5yZWdpc3RlckJsb2NrVHlwZSgndmwtYmxvY2tzL2luc3RhZ3JhbScsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnVkwgSW5zdGFncmFtIEZlZWQnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdzaGFyZScsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtcblx0XHRfXygnVkwgSW5zdGFncmFtIEZlZWQnKSxcblx0XHRfXygnVkwgR3V0ZW5iZXJnIEV4dHJhIEJsb2NrJyksXG5cdFx0X18oJ0luc3RhZ3JhbSBGZWVkJyksXG5cdF0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHQvLyBwYXN0IDwsICB1cGNvbWluZyA+PVxuXHRcdGhhc2h0YWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c2VsZWN0b3I6ICcudmwtaW5zdGFncmFtX190aXRsZSdcblx0XHR9LFxuXHRcdGluc3RhX3Rva2VuOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH1cblx0fSxcblxuXG5cdC8qKlxuXHQgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG5cdCAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cblx0ICpcblx0ICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0ZWRpdDogZnVuY3Rpb24ocHJvcHMpIHtcblxuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7aGFzaHRhZywgaW5zdGFfdG9rZW59LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cdFx0Ly8gbGV0IGdldEZlZWQgPSBoYXNodGFnID0+IHtcblx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKCdnZXR0aW5nIHR3ZWV0cycpO1xuXHRcdC8vIH1cblxuXG5cdFx0Ly8gbGV0IGhhc2h0YWdDaGFuZ2UgPSBoYXNodGFnID0+IHtcblxuXHRcdC8vIFx0bGV0IGFyZ3MgPSB7XG5cdFx0Ly8gXHRcdGhhc2h0YWcsXG5cdFx0Ly8gXHRcdGFjY2Vzc190b2tlblxuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRjb25zb2xlLmxvZygnYXJncycsIGFyZ3MpO1xuXG5cdFx0Ly8gXHR2YXIgZmVlZCA9IGFwaS5nZXRGZWVkKGFyZ3MpO1xuXG5cdFx0Ly8gXHRjb25zb2xlLmxvZygnZmVlZCcsIGZlZWQpO1xuXG5cdFx0Ly8gXHRzZXRBdHRyaWJ1dGVzKHtcblx0XHQvLyBcdFx0aGFzaHRhZ1xuXHRcdC8vIFx0fSlcblx0XHQvLyB9XG5cblx0XHRsZXQgYXJncyA9IHtcblx0XHRcdGFjY2Vzc190b2tlblxuXHRcdH1cblxuXG5cdFx0aWYgKGFjY2Vzc190b2tlbikge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2FjY2Vzc190b2tlbicsIGFjY2Vzc190b2tlbik7XG5cdFx0XHQvLyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdC8vIFx0aW5zdGFfdG9rZW46IGFjY2Vzc190b2tlbiBcblx0XHRcdC8vIH0pXG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdpbnN0YV90b2tlbicsIGluc3RhX3Rva2VuKTtcblxuXHRcdFx0Lyo8ZGl2IGNsYXNzTmFtZT17ICd2bC1pbnN0YWdyYW1fX2hlYWRlcicgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1pbnN0YWdyYW1fX2xvZ29fX3dyYXBwZXInIH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtc2hhcmVcIj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiovXG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgW3Byb3BzLmNsYXNzTmFtZV0gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgWyd2bC1pbnN0YWdyYW0nXSB9PlxuICAgICAgICA8SW5zdGFGZWVkIGFjY2Vzc190b2tlbj17IGFjY2Vzc190b2tlbiB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBbcHJvcHMuY2xhc3NOYW1lXSB9PlxuICAgICAgPGgyPlBsZWFzZSBlbnRlciB5b3VyIGluc3RhZ3JhbSBhY2Nlc3MgdG9rZW4gPGEgaHJlZj1cIi93cC1hZG1pbi9hZG1pbi5waHA/cGFnZT12bF9ibG9ja3NcIj5oZXJlPC9hPiBiZWZvcmUgd2UgY2FuIGdldCB5b3VyIGZlZWQuPC9oMj5cbiAgICA8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH0sXG5cblxuXG5cdC8vIDxQbGFpblRleHQgb25DaGFuZ2U9eyBoYXNodGFnQ2hhbmdlIH0gdmFsdWU9eyBoYXNodGFnIH0gcGxhY2Vob2xkZXI9XCJAdXNlclwiIC8+XG5cblx0Ly8gPGgyPlBsZWFzZSBlbnRlciB5b3VyIGluc3RhZ3JhbSBhY2Nlc3MgdG9rZW4gPGEgaHJlZj1cIi93cC1hZG1pbi9hZG1pbi5waHA/cGFnZT12bF9ibG9ja3NcIj5oZXJlPC9hPiBiZWZvcmUgd2UgY2FuIGdldCB5b3VyIGZlZWQuPC9oMj5cblxuXHQvLzxzdHJvbmc+UGxlYXNlIGVudGVyIHlvdXIgYWNjZXNzIHRva2VuIHRvIHZpZXcgZmVlZC4gRm9yIGhlbHAvaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0byBnZXQgdGhpcywgcGxlYXNlIHNlZSA8YSBocmVmPVwiL3dwLWFkbWluL2FkbWluLnBocD9wYWdlPXZsX2Jsb2Nrc1wiPmhlcmU8L2E+PC9zdHJvbmc+XG5cdC8vICA8VGV4dENvbnRyb2wgbGFiZWw9XCJJbnN0YSBhY2Nlc3NfdG9rZW5cIiB2YWx1ZT17IGFjY2Vzc190b2tlbiB9IG9uQ2hhbmdlPXsgKGFjY2Vzc190b2tlbikgPT4gc2V0QXR0cmlidXRlcyh7XG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0YWNjZXNzX3Rva2VuXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0gLz5cblxuXG5cdC8qKlxuXHQgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuXHQgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG5cdCAqXG5cdCAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG5cdCAqL1xuXHRzYXZlOiBmdW5jdGlvbihwcm9wcykge1xuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7aGFzaHRhZywgaW5zdGFfdG9rZW59LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cdFx0cmV0dXJuIG51bGw7XG5cblxuXHR9LFxufSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLyoqXG4gKiBCTE9DSzogbWFpblxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCB7IFRvZ2dsZSB9IGZyb20gJy4vY29tcG9uZW50cy9Ub2dnbGUnO1xuXG5jb25zdCB7TWVkaWFVcGxvYWQsIFBsYWluVGV4dCwgUmljaFRleHR9ID0gd3AuZWRpdG9yO1xuY29uc3Qge19ffSA9IHdwLmkxOG47IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuY29uc3Qge3JlZ2lzdGVyQmxvY2tUeXBlfSA9IHdwLmJsb2NrczsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcbmNvbnN0IHthcGlSZXF1ZXN0fSA9IHdwO1xuY29uc3Qge0J1dHRvbiwgQmFzZUNvbnRyb2wsIENvbG9yUGFsZXR0ZX0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2NvZGVwZW4uaW8vYWJlcmdpbi9wZW4vaWhsRGZcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3ZsLWJsb2Nrcy90b2dnbGUnLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1ZMIEFjY29yZGlvbicpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ3NoaWVsZCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtcblx0XHRfXygnVkwgQWNjb3JkaW9uJyksXG5cdFx0X18oJ1ZMIEd1dGVuYmVyZyBFeHRyYSBCbG9jaycpLFxuXHRcdF9fKCdBY2NvcmRpb24nKSxcblx0XSxcblx0YXR0cmlidXRlczoge1xuXHRcdC8vIHBhc3QgPCwgIHVwY29taW5nID49XG5cdFx0YWNjb3JkaW9uVGl0bGU6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicsXG5cdFx0XHRzZWxlY3RvcjogJy52bC1hY2NvcmRpb25fX3RpdGxlIGgxJ1xuXHRcdH0sXG5cdFx0dG9nZ2xlVGl0bGU6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicsXG5cdFx0XHRzZWxlY3RvcjogJy52bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlX190aXRsZV9fdGV4dCdcblx0XHR9LFxuXHRcdHRpdGxlTWVkaWFJZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdHRvZ2dsZVRpdGxlTWVkaWFBbHQ6IHtcblx0XHRcdGF0dHJpYnV0ZTogJ2FsdCcsXG5cdFx0XHRzZWxlY3RvcjogJy52bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZSdcblx0XHR9LFxuXHRcdHRvZ2dsZVRpdGxlTWVkaWFVcmw6IHtcblx0XHRcdGF0dHJpYnV0ZTogJ3NyYycsXG5cdFx0XHRzZWxlY3RvcjogJy52bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZSdcblx0XHR9LFxuXHRcdHRvZ2dsZUNvbnRlbnQ6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicsXG5cdFx0XHRzZWxlY3RvcjogJy52bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlX19jb250ZW50X190ZXh0J1xuXHRcdH0sXG5cdFx0dGhlbWU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ3ZsLWFjY29yZGlvbi10aGVtZS1jbGFzc2ljJ1xuXHRcdH0sXG5cdFx0dG9nZ2xlVGl0bGVIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHR0b2dnbGVDb250ZW50SGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0dGV4dENvbG9yOiB7IC8vIFNlcmlhbGl6ZWQgYnkgZGVmYXVsdFxuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG5cdCAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cblx0ICpcblx0ICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0ZWRpdDogZnVuY3Rpb24ocHJvcHMpIHtcblxuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7YWNjb3JkaW9uVGl0bGUsIHRvZ2dsZVRpdGxlLCB0b2dnbGVDb250ZW50LCB0aGVtZSwgdGl0bGVNZWRpYUlkLCB0b2dnbGVUaXRsZU1lZGlhQWx0LCB0b2dnbGVUaXRsZU1lZGlhVXJsLCB0b2dnbGVUaXRsZUhlaWdodCwgdG9nZ2xlQ29udGVudEhlaWdodH0sIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQsIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cblxuXHRcdC8vIFRPRE8gOiBpc1NlbGVjdGVkXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZiAodG9nZ2xlVGl0bGVNZWRpYVVybCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgXHRzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgIFx0XHR0aXRsZU1lZGlhSWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgXHRcdHRvZ2dsZVRpdGxlTWVkaWFBbHQ6ICcnLFxuICAgICAgICAgICAgICAgICAgXHRcdHRvZ2dsZVRpdGxlTWVkaWFVcmw6ICcnXG4gICAgICAgICAgICAgICAgICBcdH0pO1xuICAgICAgICAgICAgICAgICAgfSB9IGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIj5cbiAgICAgICBSZW1vdmUgdGl0bGUgYmFja2dyb3VuZCBpbWFnZVxuICAgICA8L0J1dHRvbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17IG9wZW5FdmVudCB9IGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIj5cbiAgICAgICBQaWNrIGFuIHRpdGxlIGJhY2tncm91bmQgaW1hZ2VcbiAgICAgPC9CdXR0b24+XG5cdFx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cblx0XHRjb25zdCBvbk1lZGlhU2VsZWN0ID0gKG1lZGlhKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnbWVkaWEgc2VsZWN0ZWQnLCBtZWRpYSk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0dG9nZ2xlVGl0bGVNZWRpYUFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHR0b2dnbGVUaXRsZU1lZGlhVXJsOiBtZWRpYS51cmxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vSW5zcGVjdG9yQ29udHJvbHMgZGVwcmFjdGVkLi4uIHdhaXRpbmcgdG8gc2VlIGhvdyB0byBkbyBub3dcblxuXHRcdC8vIHZhciByZW5kZXJJbnNwZWN0b3IgPSAoe2lzU2VsZWN0ZWQsIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9KSA9PiB7XG5cdFx0Ly8gXHRpZiAoIWlzU2VsZWN0ZWQpIHtcblx0XHQvLyBcdFx0cmV0dXJuIG51bGw7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRjb25zdCB7dGV4dENvbG9yfSA9IGF0dHJpYnV0ZXNcblx0XHQvLyBcdHJldHVybiAoXG5cdFx0Ly8gXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHQvLyAgICAgPGRpdj5cblx0XHQvLyAgICAgICA8aDI+VGV4dCBDb2xvcjwvaDI+XG5cdFx0Ly8gICAgICAgPEJhc2VDb250cm9sPlxuXHRcdC8vICAgICAgICAgPENvbG9yUGFsZXR0ZSB2YWx1ZT17IHRleHRDb2xvciB9IG9uQ2hhbmdlPXsgKHRleHRDb2xvcikgPT4gc2V0QXR0cmlidXRlcyh7XG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRleHRDb2xvclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfSAvPlxuXHRcdC8vICAgICAgIDwvQmFzZUNvbnRyb2w+XG5cdFx0Ly8gICAgIDwvZGl2PlxuXHRcdC8vICAgPC9JbnNwZWN0b3JDb250cm9scz5cblx0XHQvLyBcdClcblx0XHQvLyB9XG5cblx0XHQvLyBpbmJsb2NrIG5vdCBwcmFjdGljYWwgIC0+ICBlbmQgbmV3IHdheSB0byBwdXQgaW4gc2lkZWJhclxuXG5cdFx0Ly8gdmFyIHJlbmRlckluc3BlY3RvciA9ICh7aXNTZWxlY3RlZCwgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlc30pID0+IHtcblx0XHQvLyBcdGlmICghaXNTZWxlY3RlZCkge1xuXHRcdC8vIFx0XHRyZXR1cm4gbnVsbDtcblx0XHQvLyBcdH1cblx0XHQvLyBcdGNvbnN0IHt0ZXh0Q29sb3J9ID0gYXR0cmlidXRlc1xuXHRcdC8vIFx0cmV0dXJuIChcblx0XHQvLyBcdFx0PGRpdj5cblx0XHQvLyAgICAgPGgyPlRleHQgQ29sb3I8L2gyPlxuXHRcdC8vICAgICA8QmFzZUNvbnRyb2w+XG5cdFx0Ly8gICAgICAgPENvbG9yUGFsZXR0ZSB2YWx1ZT17IHRleHRDb2xvciB9IG9uQ2hhbmdlPXsgKHRleHRDb2xvcikgPT4gc2V0QXR0cmlidXRlcyh7XG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0ZXh0Q29sb3Jcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9IC8+XG5cdFx0Ly8gICAgIDwvQmFzZUNvbnRyb2w+XG5cdFx0Ly8gICA8L2Rpdj5cblx0XHQvLyBcdClcblx0XHQvLyB9XG5cblx0XHQvLyB7IHJlbmRlckluc3BlY3Rvcih7IFxuXHRcdC8vICAgICAgXHRpc1NlbGVjdGVkLFxuXHRcdC8vICAgICAgXHRhdHRyaWJ1dGVzLFxuXHRcdC8vICAgICAgXHRzZXRBdHRyaWJ1dGVzXG5cdFx0Ly8gICAgICB9KSB9XG5cblx0XHRjb25zdCB0aGVtZVNlbGVjdG9yID0gKGlzU2VsZWN0ZWQpID0+IHtcblx0XHRcdGlmICghaXNTZWxlY3RlZCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxzZWxlY3QgdmFsdWU9eyB0aGVtZSB9IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RoZW1lLXNlbGVjdG9yJyB9IG9uQ2hhbmdlPXsgKGV2ZW50KSA9PiBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0aGVtZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwidmwtYWNjb3JkaW9uLXRoZW1lLWNsYXNzaWNcIj5DbGFzc2ljPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwidmwtYWNjb3JkaW9uLXRoZW1lLW5lcHR1bmVcIj5OZXB0dW5lPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+KVxuXHRcdH1cblxuXHRcdGNvbnN0IHRpdGxlTWVkaWFVcGxvYWQgPSAoaXNTZWxlY3RlZCkgPT4ge1xuXHRcdFx0aWYgKCFpc1NlbGVjdGVkKSByZXR1cm4gbnVsbDtcblx0XHRcdHJldHVybiA8TWVkaWFVcGxvYWQgb25TZWxlY3Q9eyBvbk1lZGlhU2VsZWN0IH0gdmFsdWU9eyB0aXRsZU1lZGlhSWQgfSByZW5kZXI9eyAoe29wZW59KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9IC8+XG5cdFx0fVxuXG5cdFx0bGV0IHVwZGF0ZUF0dHJpYnV0ZXMgPSAoYXR0cmlidXRlT2piZWN0KSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnYXR0cmlidXRlT2piZWN0JywgYXR0cmlidXRlT2piZWN0KTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoYXR0cmlidXRlT2piZWN0KTtcblx0XHR9XG5cblx0XHRsZXQgdGl0bGVNZWRpYSA9IChzcmMsIGFsdCkgPT4ge1xuXHRcdFx0aWYgKCFzcmMpIHJldHVybiBudWxsO1xuXG5cdFx0XHRpZiAoYWx0KSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VfX3dyYXBwZXInIH0+XG4gICAgICAgPGltZyBjbGFzc05hbWU9XCJ2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZVwiIHNyYz17IHNyYyB9IGFsdD17IGFsdCB9IC8+XG4gICAgIDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE5vIGFsdCBcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlX193cmFwcGVyJyB9PlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJ2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZVwiIHNyYz17IHNyYyB9IGFsdD1cIlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgPC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0fVxuXG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFtwcm9wcy5jbGFzc05hbWVdIH0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPXsgWyd2bC1hY2NvcmRpb24nICsgJyAnICsgdGhlbWVdIH0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX190aGVtZS1zZWxlY3Rvcl9fd3JhcHBlcicgfT5cbiAgICAgICAgIHsgdGhlbWVTZWxlY3Rvcihpc1NlbGVjdGVkKSB9XG4gICAgICAgICB7IHRpdGxlTWVkaWFVcGxvYWQoaXNTZWxlY3RlZCkgfVxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fdGl0bGUnIH0+XG4gICAgICAgICA8aDE+PFJpY2hUZXh0IGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9XCJ0cnVlXCIgbGFiZWw9XCJBY2NvcmRpb24gdGl0bGVcIiBoZWxwPVwiRW50ZXIgc29tZSB0ZXh0XCIgdmFsdWU9eyBhY2NvcmRpb25UaXRsZSB9IHBsYWNlaG9sZGVyPVwiT3B0aW9uYWwgYWNjb3JkaW9uIHRpdGxlXCIgb25DaGFuZ2U9eyAoY29udGVudCkgPT4gc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRhY2NvcmRpb25UaXRsZTogY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0gLz48L2gxPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDx1bCBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX19jb250ZW50JyB9PlxuICAgICAgICAgPFRvZ2dsZSB0b2dnbGVUaXRsZT17IHRvZ2dsZVRpdGxlIH0gdG9nZ2xlQ29udGVudD17IHRvZ2dsZUNvbnRlbnQgfSB0b2dnbGVUaXRsZUhlaWdodD17IHRvZ2dsZVRpdGxlSGVpZ2h0IH0gdG9nZ2xlQ29udGVudEhlaWdodD17IHRvZ2dsZUNvbnRlbnRIZWlnaHQgfSB0b2dnbGVUaXRsZU1lZGlhVXJsPXsgdG9nZ2xlVGl0bGVNZWRpYVVybCB9XG4gICAgICAgICAgIHRvZ2dsZVRpdGxlTWVkaWFBbHQ9eyB0b2dnbGVUaXRsZU1lZGlhQWx0IH0gdXBkYXRlQXR0cmlidXRlcz17IHVwZGF0ZUF0dHJpYnV0ZXMgfSBzZXRBdHRyaWJ1dGVzPXsgc2V0QXR0cmlidXRlcyB9IC8+XG4gICAgICAgPC91bD5cbiAgICAgPC9kaXY+XG4gICA8L2Rpdj5cblx0XHRcdCk7XG5cdH0sXG5cblxuXG5cdC8qKlxuXHQgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuXHQgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG5cdCAqXG5cdCAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG5cdCAqL1xuXHRzYXZlOiBmdW5jdGlvbihwcm9wcykge1xuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7YWNjb3JkaW9uVGl0bGUsIHRvZ2dsZVRpdGxlLCB0b2dnbGVDb250ZW50LCB0aGVtZSwgdGl0bGVNZWRpYUlkLCB0b2dnbGVUaXRsZU1lZGlhQWx0LCB0b2dnbGVUaXRsZU1lZGlhVXJsLCB0b2dnbGVUaXRsZUhlaWdodCwgdG9nZ2xlQ29udGVudEhlaWdodH0sIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQsIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cblx0XHRjb25zdCB0aXRsZU1lZGlhID0gKHNyYywgYWx0KSA9PiB7XG5cdFx0XHRpZiAoIXNyYykgcmV0dXJuIG51bGw7XG5cblx0XHRcdGlmIChhbHQpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZV9fd3JhcHBlcicgfT5cbiAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlXCIgc3JjPXsgc3JjIH0gYWx0PXsgYWx0IH0gLz5cbiAgICAgPC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTm8gYWx0IHNldCwgc28gbGV0J3MgaGlkZSBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZV9fd3JhcHBlcicgfT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmwtYWNjb3JkaW9uX190aXRsZV9faW1hZ2VcIiBzcmM9eyBzcmMgfSBhbHQ9XCJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgIDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFtwcm9wcy5jbGFzc05hbWVdIH0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbicgKyAnICcgK1xuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lIH0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9eyB0aGVtZSB9PlxuICAgICAgICAgeyB0aGVtZSB9XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX190aXRsZScgfT5cbiAgICAgICAgIDxoMT57IGFjY29yZGlvblRpdGxlIH08L2gxPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDx1bCBjbGFzc05hbWU9eyAndmwtYWNjb3JkaW9uX19jb250ZW50JyB9PlxuICAgICAgICAgPGxpIGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlJyB9PlxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgPGk+PC9pPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlX190aXRsZScgfT5cbiAgICAgICAgICAgICB7IHRpdGxlTWVkaWEodG9nZ2xlVGl0bGVNZWRpYVVybCwgdG9nZ2xlVGl0bGVNZWRpYUFsdCkgfVxuICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9eyBcInZsLWFjY29yZGlvbl9fY29udGVudC10b2dnbGVfX3RpdGxlX190ZXh0XCIgfT4geyB0b2dnbGVUaXRsZSB9IDwvaDI+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlX19jb250ZW50JyB9PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgXCJ2bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlX19jb250ZW50X190ZXh0XCIgfT5cbiAgICAgICAgICAgICAgIHsgdG9nZ2xlQ29udGVudCB9IDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvbGk+XG4gICAgICAgPC91bD5cbiAgICAgPC9kaXY+XG4gICA8L2Rpdj5cblx0XHRcdCk7XG5cblxuXG5cdH0sXG59KTtcbiIsImNvbnN0IHtDb21wb25lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtSaWNoVGV4dH0gPSB3cC5lZGl0b3I7XG5cbmltcG9ydCB7IFRvZ2dsZVRpdGxlIH0gZnJvbSAnLi9Ub2dnbGVUaXRsZSc7XG5pbXBvcnQgeyBUb2dnbGVDb250ZW50IH0gZnJvbSAnLi9Ub2dnbGVDb250ZW50JztcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dG9nZ2xlVGl0bGU6ICcnLFxuXHRcdFx0dG9nZ2xlQ29udGVudDogJycsXG5cdFx0XHR0b2dnbGVUaXRsZUhlaWdodDogJycsXG5cdFx0XHR0b2dnbGVDb250ZW50SGVpZ2h0OiAnJ1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdHVzID0gdGhpcy5zZXRTdGF0dXMuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMucmVnaXN0ZXJDaGFuZ2VIZWlnaHQgPSB0aGlzLnJlZ2lzdGVyQ2hhbmdlSGVpZ2h0LmJpbmQodGhpcyk7XG5cblx0fVxuXG5cblxuXG5cdHNldFN0YXR1cyhuZXdQcm9wcykge1xuXG5cdFx0dmFyIHByb3BzID0gbmV3UHJvcHMgPyBuZXdQcm9wcyA6IHRoaXMucHJvcHM7XG5cblx0XHRpZiAocHJvcHMudG9nZ2xlVGl0bGUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVUaXRsZTogcHJvcHMudG9nZ2xlVGl0bGVcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAocHJvcHMudG9nZ2xlQ29udGVudCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZUNvbnRlbnQ6IHByb3BzLnRvZ2dsZUNvbnRlbnRcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAocHJvcHMudG9nZ2xlVGl0bGVIZWlnaHQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVUaXRsZUhlaWdodDogcHJvcHMudG9nZ2xlVGl0bGVIZWlnaHRcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAocHJvcHMudG9nZ2xlQ29udGVudEhlaWdodCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZUNvbnRlbnRIZWlnaHQ6IHByb3BzLnRvZ2dsZUNvbnRlbnRIZWlnaHRcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0dXMoKTtcblx0fVxuXG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuXHRcdHRoaXMuc2V0U3RhdHVzKG5ld1Byb3BzKTtcblx0fVxuXG5cdHJlZ2lzdGVyQ2hhbmdlSGVpZ2h0KGF0dHIsIGhlaWdodCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W2F0dHJdOiBoZWlnaHRcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLnVwZGF0ZUF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRbYXR0cl06IGhlaWdodFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuXG5cblx0cmVuZGVyKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdwcm9wcycsIHRoaXMucHJvcHMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPVwidmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZVwiPlxuICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgPGk+PC9pPlxuICAgICA8VG9nZ2xlVGl0bGUgLyp0b2dnbGVUaXRsZT17IHRoaXMuc3RhdGUudG9nZ2xlVGl0bGUgfSovIHRvZ2dsZVRpdGxlPXsgdGhpcy5wcm9wcy50b2dnbGVUaXRsZSB9IHRvZ2dsZVRpdGxlSGVpZ2h0PXsgdGhpcy5zdGF0ZS50b2dnbGVUaXRsZUhlaWdodCB9IHJlZ2lzdGVyQ2hhbmdlSGVpZ2h0PXsgdGhpcy5yZWdpc3RlckNoYW5nZUhlaWdodCB9XG4gICAgICAgdXBkYXRlQXR0cmlidXRlcz17IHRoaXMucHJvcHMudXBkYXRlQXR0cmlidXRlcyB9IHNldEF0dHJpYnV0ZXM9eyB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMgfSB0b2dnbGVUaXRsZU1lZGlhVXJsPXsgdGhpcy5wcm9wcy50b2dnbGVUaXRsZU1lZGlhVXJsIH0gdG9nZ2xlVGl0bGVNZWRpYUFsdD17IHRoaXMucHJvcHMudG9nZ2xlVGl0bGVNZWRpYUFsdCB9IC8+XG4gICAgIDxUb2dnbGVDb250ZW50IC8qdG9nZ2xlVGl0bGU9eyB0aGlzLnN0YXRlLnRvZ2dsZVRpdGxlIH0qLyB0b2dnbGVDb250ZW50PXsgdGhpcy5wcm9wcy50b2dnbGVDb250ZW50IH0gdG9nZ2xlQ29udGVudEhlaWdodD17IHRoaXMuc3RhdGUudG9nZ2xlQ29udGVudEhlaWdodCB9IHJlZ2lzdGVyQ2hhbmdlSGVpZ2h0PXsgdGhpcy5yZWdpc3RlckNoYW5nZUhlaWdodCB9XG4gICAgICAgdXBkYXRlQXR0cmlidXRlcz17IHRoaXMucHJvcHMudXBkYXRlQXR0cmlidXRlcyB9IHNldEF0dHJpYnV0ZXM9eyB0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMgfSAvPlxuICAgPC9saT5cblx0XHRcdCk7XG5cdH1cbn1cbiIsIlxuXG5jb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7UmljaFRleHR9ID0gd3AuZWRpdG9yO1xuY29uc3Qge3dpdGhTZWxlY3R9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZUNvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKTtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZ2dsZUNvbnRlbnQ6IFsnJ10sXG5cdFx0XHR0b2dnbGVDb250ZW50SGVpZ2h0OiAwLFxuXHRcdFx0dG91Y2hlZDogZmFsc2Vcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXR1cyA9IHRoaXMuc2V0U3RhdHVzLmJpbmQodGhpcyk7XG5cblx0fVxuXG5cdHNldFN0YXR1cyhuZXdQcm9wcykge1xuXG5cdFx0dmFyIHByb3BzID0gbmV3UHJvcHMgPyBuZXdQcm9wcyA6IHRoaXMucHJvcHM7XG5cblx0XHRpZiAocHJvcHMudG9nZ2xlQ29udGVudCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZUNvbnRlbnQ6IHByb3BzLnRvZ2dsZUNvbnRlbnRcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAocHJvcHMudG9nZ2xlQ29udGVudEhlaWdodCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvZ2dsZUNvbnRlbnRIZWlnaHQ6IHByb3BzLnRvZ2dsZUNvbnRlbnRIZWlnaHRcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnNldFN0YXR1cygpO1xuXHR9XG5cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG5cdFx0dGhpcy5zZXRTdGF0dXMobmV3UHJvcHMpO1xuXHR9XG5cblx0Ly8gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHQvLyBcdC8vIGNvbnNvbGUubG9nKCd1cGRhdGUnKTtcblx0Ly8gfVxuXG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fY29udGVudFwiIHJlZj17IChkaXZFbGVtZW50KSA9PiB0aGlzLmRpdkVsZW1lbnQgPSBkaXZFbGVtZW50IH0+XG4gICAgIDxSaWNoVGV4dCBrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPVwidHJ1ZVwiIGNsYXNzTmFtZT17IFwidmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fY29udGVudF9fdGV4dFwiIH0gbGFiZWw9XCJUb2dnbGVDb250ZW50IHRpdGxlXCIgaGVscD1cIkVudGVyIHNvbWUgdGV4dFwiIC8qdmFsdWU9eyB0aGlzLnN0YXRlLnRvZ2dsZUNvbnRlbnQgfSovXG4gICAgICAgdmFsdWU9eyB0aGlzLnByb3BzLnRvZ2dsZUNvbnRlbnQgfSBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIkNvbnRlbnQgdGl0bGVcIiAvKm9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSB9Ki8gb25DaGFuZ2U9eyAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR0b2dnbGVDb250ZW50OiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZWdpc3RlckNoYW5nZUhlaWdodCgndG9nZ2xlQ29udGVudEhlaWdodCcsIHRoaXMuZGl2RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0gLz5cbiAgIDwvZGl2PlxuXHRcdFx0KTtcblx0fVxufSIsIlxuXG5jb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7UmljaFRleHR9ID0gd3AuZWRpdG9yO1xuY29uc3Qge3dpdGhTZWxlY3R9ID0gd3AuZGF0YTtcblxuLy8gY29uc3QgaW5wdXRzID0gWydwYXN0T3JVcGNvbWluZycsICdob3dNYW55RXZlbnRzJ11cblxuZXhwb3J0IGNsYXNzIFRvZ2dsZVRpdGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0b2dnbGVUaXRsZTogWycnXSxcblx0XHRcdHRvZ2dsZVRpdGxlSGVpZ2h0OiAnJyxcblx0XHRcdHRvdWNoZWQ6IGZhbHNlLFxuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdHVzID0gdGhpcy5zZXRTdGF0dXMuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudGl0bGVNZWRpYSA9IHRoaXMudGl0bGVNZWRpYS5iaW5kKHRoaXMpO1xuXG5cdH1cblxuXHQvL1JpY2h0ZXh0IGdpdmVzIHN0cmFpZ2h0IHZhbHVlIGFycmF5LCBubyBldmVudFxuXHRoYW5kbGVJbnB1dENoYW5nZSh2YWx1ZSkge1xuXHRcdGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHRvZ2dsZVRpdGxlOiB2YWx1ZSxcblx0XHRcdHRvdWNoZWQ6IHRydWVcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygndGhpcy5zdGF0ZS50b2dnbGVUaXRsZScsIHRoaXMuc3RhdGUudG9nZ2xlVGl0bGUpO1xuXHRcdFx0dGhpcy5wcm9wcy51cGRhdGVBdHRyaWJ1dGVzKHtcblx0XHRcdFx0dG9nZ2xlVGl0bGU6IHRoaXMuc3RhdGUudG9nZ2xlVGl0bGVcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdH1cblxuXHRzZXRTdGF0dXMobmV3UHJvcHMpIHtcblxuXHRcdHZhciBwcm9wcyA9IG5ld1Byb3BzID8gbmV3UHJvcHMgOiB0aGlzLnByb3BzO1xuXG5cblx0XHRpZiAocHJvcHMudG9nZ2xlVGl0bGUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVUaXRsZTogcHJvcHMudG9nZ2xlVGl0bGVcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAocHJvcHMudG9nZ2xlVGl0bGVIZWlnaHQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b2dnbGVUaXRsZUhlaWdodDogcHJvcHMudG9nZ2xlVGl0bGVIZWlnaHRcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0dXMoKTtcblx0fVxuXG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuXHRcdHRoaXMuc2V0U3RhdHVzKG5ld1Byb3BzKTtcblx0fVxuXG5cdHRpdGxlTWVkaWEoc3JjLCBhbHQpIHtcblxuXHRcdGNvbnNvbGUubG9nKCd0aXRsZU1lZGlhIHNyYycsIHNyYyk7XG5cdFx0Y29uc29sZS5sb2coJ3RpdGxlTWVkaWEgYWx0JywgYWx0KTtcblxuXHRcdGlmICghc3JjKSByZXR1cm4gbnVsbDtcblxuXHRcdGlmIChhbHQpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlX193cmFwcGVyJyB9PlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJ2bC1hY2NvcmRpb25fX3RpdGxlX19pbWFnZVwiIHNyYz17IHNyYyB9IGFsdD17IGFsdCB9IC8+XG4gICAgPC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gYWx0IHNldCwgc28gbGV0J3MgaGlkZSBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlX193cmFwcGVyJyB9PlxuICAgICA8aW1nIGNsYXNzTmFtZT1cInZsLWFjY29yZGlvbl9fdGl0bGVfX2ltYWdlXCIgc3JjPXsgc3JjIH0gYWx0PVwiXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgIDwvZGl2PlxuXHRcdFx0KTtcblx0fVxuXG5cdC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygndXBkYXRlJyk7XG5cdC8vIH1cblxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnNvbGUubG9nKCdwcm9wcycsIHRoaXMucHJvcHMpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmwtYWNjb3JkaW9uX19jb250ZW50LXRvZ2dsZV9fdGl0bGVcIj5cbiAgICAgeyB0aGlzLnRpdGxlTWVkaWEodGhpcy5wcm9wcy50b2dnbGVUaXRsZU1lZGlhVXJsLCB0aGlzLnByb3BzLnRvZ2dsZVRpdGxlTWVkaWFBbHQpIH1cbiAgICAgPFJpY2hUZXh0IGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9XCJ0cnVlXCIgdGFnTmFtZT1cImgyXCIgY2xhc3NOYW1lPXsgXCJ2bC1hY2NvcmRpb25fX2NvbnRlbnQtdG9nZ2xlX190aXRsZV9fdGV4dFwiIH0gbGFiZWw9XCJUb2dnbGVUaXRsZSB0aXRsZVwiIGhlbHA9XCJFbnRlciBzb21lIHRleHRcIiAvKnZhbHVlPXsgdGhpcy5zdGF0ZS50b2dnbGVUaXRsZVxuICAgICAgIH0qLyB2YWx1ZT17IHRoaXMucHJvcHMudG9nZ2xlVGl0bGUgfSBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIkNvbnRlbnQgdGl0bGVcIiAvKm9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSB9Ki8gb25DaGFuZ2U9eyAoY29udGVudCkgPT4gdGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRvZ2dsZVRpdGxlOiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfSAvPlxuICAgPC9kaXY+XG5cdFx0XHQpO1xuXHR9XG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRUd2VldHMgPSAoYXJncykgPT4ge1xuXG4vLyBcdHZhciB7aGFzaHRhZ30gPSBhcmdzO1xuXG4vLyBcdHZhciBjYWxsID0gJyc7XG5cbi8vIFx0cmV0dXJuIGF4aW9zLmdldChjYWxsKTtcbi8vIH1cbiIsIi8qKlxuICogQkxPQ0s6IG1haW5cbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9hcGknO1xuXG5jb25zdCB7TWVkaWFVcGxvYWQsIFBsYWluVGV4dCwgUmljaFRleHR9ID0gd3AuZWRpdG9yO1xuY29uc3Qge19ffSA9IHdwLmkxOG47IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuY29uc3Qge3JlZ2lzdGVyQmxvY2tUeXBlLCBJbnNwZWN0b3JDb250cm9sc30gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5jb25zdCB7YXBpUmVxdWVzdH0gPSB3cDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9jb2RlcGVuLmlvL2FiZXJnaW4vcGVuL2lobERmXG5yZWdpc3RlckJsb2NrVHlwZSgndmwtYmxvY2tzL3R3aXR0ZXInLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1ZMIFR3aXR0ZXIgVHdlZXRzJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAndHdpdHRlcicsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtcblx0XHRfXygnVkwgVHdpdHRlciBUd2VldHMnKSxcblx0XHRfXygnVkwgR3V0ZW5iZXJnIEV4dHJhIEJsb2NrJyksXG5cdFx0X18oJ1R3aXR0ZXIgVHdlZXRzJyksXG5cdF0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHQvLyBwYXN0IDwsICB1cGNvbWluZyA+PVxuXHRcdGhhc2h0YWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c2VsZWN0b3I6ICcudmwtdHdpdHRlcl9fdGl0bGUnXG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG5cdCAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cblx0ICpcblx0ICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0ZWRpdDogZnVuY3Rpb24ocHJvcHMpIHtcblxuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7aGFzaHRhZ30sIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cblx0XHQvLyBsZXQgZ2V0VHdlZXRzID0gaGFzaHRhZyA9PiB7XG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZygnZ2V0dGluZyB0d2VldHMnKTtcblx0XHQvLyB9XG5cblx0XHRsZXQgaGFzaHRhZ0NoYW5nZSA9IGhhc2h0YWcgPT4ge1xuXG5cdFx0XHQvLyBsZXQgYXJncyA9IHtcblx0XHRcdC8vIFx0aGFzaHRhZ1xuXHRcdFx0Ly8gfSBcblxuXHRcdFx0Ly8gYXBpLmdldFR3ZWV0cyhhcmdzKTtcblxuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGhhc2h0YWdcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblxuXG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgW3Byb3BzLmNsYXNzTmFtZV0gfT5cbiAgICAgPGRpdiBjbGFzc05hbWU9eyBbJ3ZsLXR3aXR0ZXInXSB9PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLXR3aXR0ZXJfX2hlYWRlcicgfT5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLXR3aXR0ZXJfX2xvZ29fX3dyYXBwZXInIH0+XG4gICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy10d2l0dGVyXCI+PC9zcGFuPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8UGxhaW5UZXh0IG9uQ2hhbmdlPXsgaGFzaHRhZ0NoYW5nZSB9IHZhbHVlPXsgaGFzaHRhZyB9IHBsYWNlaG9sZGVyPVwiQHVzZXJcIiAvPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLXR3aXR0ZXJfX2ZlZWQnIH0+XG4gICAgICAgICA8YSBjbGFzcz1cInR3aXR0ZXItdGltZWxpbmVcIiBkYXRhLWNocm9tZT1cIm5vaGVhZGVyIG5vZm9vdGVyIG5vYm9yZGVyc1wiIGhyZWY9eyBcImh0dHBzOi8vdHdpdHRlci5jb20vXCIgKyBoYXNodGFnIH0+VHdlZXRzIGJ5IHsgaGFzaHRhZyB9PC9hPlxuICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcIiBjaGFyc2V0PVwidXRmLThcIj48L3NjcmlwdD5cbiAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICA8L2Rpdj5cblx0XHRcdCk7XG5cdH0sXG5cblxuXG5cblxuXHQvKipcblx0ICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcblx0ICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuXHQgKlxuXHQgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0c2F2ZTogZnVuY3Rpb24ocHJvcHMpIHtcblx0XHRjb25zdCB7YXR0cmlidXRlczoge2hhc2h0YWd9LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cdFx0cmV0dXJuIChcblxuXG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgW3Byb3BzLmNsYXNzTmFtZV0gfT5cbiAgICAgPGRpdiBjbGFzc05hbWU9eyBbJ3ZsLXR3aXR0ZXInXSB9PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLXR3aXR0ZXJfX2hlYWRlcicgfT5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLXR3aXR0ZXJfX2xvZ29fX3dyYXBwZXInIH0+XG4gICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy10d2l0dGVyXCI+PC9zcGFuPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd2bC10d2l0dGVyX190aXRsZScgfT5cbiAgICAgICAgICAgeyBoYXNodGFnIH1cbiAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3ZsLXR3aXR0ZXJfX2ZlZWQnIH0+XG4gICAgICAgICA8YSBjbGFzcz1cInR3aXR0ZXItdGltZWxpbmVcIiBkYXRhLWNocm9tZT1cIm5vaGVhZGVyIG5vZm9vdGVyIG5vYm9yZGVyc1wiIGhyZWY9eyBcImh0dHBzOi8vdHdpdHRlci5jb20vXCIgKyBoYXNodGFnIH0+VHdlZXRzIGJ5IHsgaGFzaHRhZyB9PC9hPlxuICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcIiBjaGFyc2V0PVwidXRmLThcIj48L3NjcmlwdD5cbiAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICA8L2Rpdj5cblx0XHRcdCk7XG5cblxuXG5cdH0sXG59KTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXSwic291cmNlUm9vdCI6IiJ9