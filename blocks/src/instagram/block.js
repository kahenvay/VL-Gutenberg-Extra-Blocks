/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

// import * as api from './api';

import { InstaFeed } from './Components/InstaFeed';

const {MediaUpload, PlainText, RichText} = wp.editor;
const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType, InspectorControls} = wp.blocks; // Import registerBlockType() from wp.blocks
const {apiRequest} = wp;
const {Button, TextControl} = wp.components;

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
	keywords: [
		__('VL Instagram Feed'),
		__('VL Gutenberg Extra Block'),
		__('Instagram Feed'),
	],
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
	edit: function(props) {

		const {attributes: {hashtag, insta_token}, setAttributes} = props;

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

		let args = {
			access_token
		}


		if (access_token) {
			// console.log('access_token', access_token);
			// setAttributes({
			// 	insta_token: access_token 
			// })

			// console.log('insta_token', insta_token);

			return (
				<div className={ [props.className] }>
      <div className={ ['vl-instagram'] }>
        <div className={ 'vl-instagram__header' }>
          <div className={ 'vl-instagram__logo__wrapper' }>
            <span class="dashicons dashicons-instagram"></span>
          </div>
        </div>
        <div className={ 'vl-instagram__feed' }>
          <InstaFeed access_token={ access_token } />
        </div>
      </div>
    </div>
				);
		} else {
			return (
				<div className={ [props.className] }>
      <h2>Please enter your instagram access token <a href="/wp-admin/admin.php?page=vl_blocks">here</a> before we can get your feed.</h2>
    </div>
			)
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
	save: function(props) {
		const {attributes: {hashtag, insta_token}, setAttributes} = props;

		let args = {
			access_token
		}



		if (access_token) {
			return (
				<div className={ [props.className] }>
      <div className={ ['vl-instagram'] }>
        <div className={ 'vl-instagram__header' }>
          <div className={ 'vl-instagram__logo__wrapper' }>
            <span class="dashicons dashicons-instagram"></span>
          </div>
        </div>
        <div className={ 'vl-instagram__feed' }>
          <InstaFeed access_token={ access_token } />
        </div>
      </div>
    </div>
				);
		} else {
			return (
				<div className={ [props.className] }>
      <h2>Please enter your instagram access token <a href="/wp-admin/admin.php?page=vl_blocks">here</a> before we can get your feed.</h2>
    </div>
			)
		}



	},
});
