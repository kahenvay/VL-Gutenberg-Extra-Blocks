/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';


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
registerBlockType('vl-blocks/toggle', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('VL Accordion'), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('VL Accordion'),
		__('VL Gutenberg Extra Block'),
		__('Accordion'),
	],
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
			selector: '.vl-accordion__content-toggle__title h2'
		},
		toggleContent: {
			type: 'array',
			source: 'children',
			selector: '.vl-accordion__content-toggle__content p'
		},
		theme: {
			type: 'string',
			default: 'vl-accordion-theme-classic'
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

		const {attributes: {accordionTitle, toggleTitle, toggleContent, theme}, setAttributes} = props;

		//Later add options for different themese, which would change which class => css

		// let setDefault = () => {
		// 	if (accordionTitle == null || accordionTitle == undefined || accordionTitle == '') {
		// 		accordionTitle = "I'm an optional title for the accordion, click the arrow !";
		// 	}
		// 	if (toggleTitle == null || toggleTitle == undefined || toggleTitle == '') {
		// 		toggleTitle = "Content title (clickable for users on the frontend)";
		// 	}
		// 	if (toggleContent == null || toggleContent == undefined || toggleContent == '') {
		// 		toggleContent = "And this is where your super text content will be ! Here's a little bit of text so you can have an idea what it would look like with some text in :)";
		// 	}
		// }

		let wrapperClasses = {

		}

		// console.log('props', props);

		return (



			<div className={ [props.className] }>
     <div className={ ['vl-accordion' + ' ' + theme] }>
       <div className={ 'vl-accordion__theme-selector__wrapper' }>
         <select value={ theme } className={ 'vl-accordion__theme-selector' } onChange={ (event) => setAttributes({
                                                                                         	theme: event.target.value
                                                                                         }) }>
           <option value="vl-accordion-theme-classic">Classic</option>
           <option value="vl-accordion-theme-neptune">Neptune</option>
         </select>
       </div>
       <div className={ 'vl-accordion__title' }>
         <RichText label="Accordion title" help="Enter some text" value={ accordionTitle } placeholder="Accordion title" onChange={ (content) => setAttributes({
                                                                                                                                    	accordionTitle: content
                                                                                                                                    }) } />
       </div>
       <ul className={ 'vl-accordion__content' }>
         <li className={ 'vl-accordion__content-toggle' }>
           <input type="checkbox" />
           <i></i>
           <div className={ 'vl-accordion__content-toggle__title' }>
             <RichText label="Toggle title" help="Enter some text" value={ toggleTitle } placeholder="Content title" onChange={ (content) => setAttributes({
                                                                                                                                	toggleTitle: content
                                                                                                                                }) } />
           </div>
           <div className={ 'vl-accordion__content-toggle__content' }>
             <RichText label="Toggle content" help="Enter some text" value={ toggleContent } placeholder="Content body..." onChange={ (content) => setAttributes({
                                                                                                                                      	toggleContent: content
                                                                                                                                      }) } />
           </div>
         </li>
       </ul>
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
		const {attributes: {accordionTitle, toggleTitle, toggleContent, theme}, setAttributes} = props;

		return (

			<div className={ [props.className] }>
     <div className={ 'vl-accordion' + ' ' +
                      theme }>
       <div className={ theme }>
         { theme }
       </div>
       <div className={ 'vl-accordion__title' }>
         <h1>{ accordionTitle }</h1>
       </div>
       <ul className={ 'vl-accordion__content' }>
         <li className={ 'vl-accordion__content-toggle' }>
           <input type="checkbox" />
           <i></i>
           <div className={ 'vl-accordion__content-toggle__title' }>
             <h2>{ toggleTitle } </h2>
           </div>
           <div className={ 'vl-accordion__content-toggle__content' }>
             <p>
               { toggleContent }
             </p>
           </div>
         </li>
       </ul>
     </div>
   </div>
			);



	},
});
