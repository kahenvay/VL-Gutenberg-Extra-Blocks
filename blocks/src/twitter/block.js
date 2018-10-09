/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import * as api from './api';

const {MediaUpload, PlainText, RichText} = wp.editor;
const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType, InspectorControls} = wp.blocks; // Import registerBlockType() from wp.blocks
const {apiRequest} = wp;
const {Button} = wp.components;

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
	keywords: [
		__('VL Twitter Tweets'),
		__('VL Gutenberg Extra Block'),
		__('Twitter Tweets'),
	],
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
	edit: function(props) {

		const {attributes: {hashtag}, setAttributes} = props;

		// let getTweets = hashtag => {
		// 	// console.log('getting tweets');
		// }

		let hashtagChange = hashtag => {

			// let args = {
			// 	hashtag
			// } 

			// api.getTweets(args);

			setAttributes({
				hashtag
			})
		}

		return (



			<div className={ [props.className] }>
     <div className={ ['vl-twitter'] }>
       <div className={ 'vl-twitter__header' }>
         <div className={ 'vl-twitter__logo__wrapper' }>
           <span class="dashicons dashicons-twitter"></span>
         </div>
         <PlainText onChange={ hashtagChange } value={ hashtag } placeholder="@user" />
       </div>
       <div className={ 'vl-twitter__feed' }>
         <a class="twitter-timeline" data-chrome="noheader nofooter noborders" href={ "https://twitter.com/" + hashtag }>Tweets by { hashtag }</a>
         <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
       </div>
     </div>
   </div>
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
	save: function(props) {
		const {attributes: {hashtag}, setAttributes} = props;

		return (



			<div className={ [props.className] }>
     <div className={ ['vl-twitter'] }>
       <div className={ 'vl-twitter__header' }>
         <div className={ 'vl-twitter__logo__wrapper' }>
           <span class="dashicons dashicons-twitter"></span>
         </div>
         <div className={ 'vl-twitter__title' }>
           { hashtag }
         </div>
       </div>
       <div className={ 'vl-twitter__feed' }>
         <a class="twitter-timeline" data-chrome="noheader nofooter noborders" href={ "https://twitter.com/" + hashtag }>Tweets by { hashtag }</a>
         <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
       </div>
     </div>
   </div>
			);



	},
});
