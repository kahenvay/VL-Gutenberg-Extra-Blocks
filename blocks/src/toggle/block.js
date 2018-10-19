/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import { Toggle } from './components/Toggle';

const {MediaUpload, PlainText, RichText} = wp.editor;
const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {apiRequest} = wp;
const {Button, BaseControl, ColorPalette} = wp.components;

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
		},
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

		const {attributes: {accordionTitle, toggleTitle, toggleContent, theme, titleMediaId, toggleTitleMediaAlt, toggleTitleMediaUrl, toggleTitleHeight, toggleContentHeight}, attributes, isSelected, setAttributes} = props;


		// TODO : isSelected
		const getImageButton = (openEvent) => {
			if (toggleTitleMediaUrl) {
				return (

					<Button onClick={ () => {
                  	setAttributes({
                  		titleMediaId: '',
                  		toggleTitleMediaAlt: '',
                  		toggleTitleMediaUrl: ''
                  	});
                  } } className="button button-large">
       Remove title background image
     </Button>
					);
			} else {
				return (

					<Button onClick={ openEvent } className="button button-large">
       Pick an title background image
     </Button>
					);
			}
		};


		const onMediaSelect = (media) => {
			console.log('media selected', media);
			setAttributes({
				toggleTitleMediaAlt: media.alt,
				toggleTitleMediaUrl: media.url
			});
		}

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

		const themeSelector = (isSelected) => {
			if (!isSelected) {
				return null;
			}
			return (
				<select value={ theme } className={ 'vl-accordion__theme-selector' } onChange={ (event) => setAttributes({
                                                                                	theme: event.target.value
                                                                                }) }>
      <option value="vl-accordion-theme-classic">Classic</option>
      <option value="vl-accordion-theme-neptune">Neptune</option>
    </select>)
		}

		const titleMediaUpload = (isSelected) => {
			if (!isSelected) return null;
			return <MediaUpload onSelect={ onMediaSelect } value={ titleMediaId } render={ ({open}) => getImageButton(open) } />
		}

		let updateAttributes = (attributeOjbect) => {
			// console.log('attributeOjbect', attributeOjbect);
			setAttributes(attributeOjbect);
		// console.log(attributes);
		}

		let titleMedia = (src, alt) => {
			if (!src) return null;

			if (alt) {
				return (
					<div className={ 'vl-accordion__title__image__wrapper' }>
       <img className="vl-accordion__title__image" src={ src } alt={ alt } />
     </div>
					);
			}

			// No alt 
			return (
				<div className={ 'vl-accordion__title__image__wrapper' }>
      <img className="vl-accordion__title__image" src={ src } alt="" aria-hidden="true" />
    </div>
				);
		}


		return (

			<div className={ [props.className] }>
     <div className={ ['vl-accordion' + ' ' + theme] }>
       <div className={ 'vl-accordion__theme-selector__wrapper' }>
         { themeSelector(isSelected) }
         { titleMediaUpload(isSelected) }
       </div>
       <div className={ 'vl-accordion__title' }>
         <h1><RichText keepPlaceholderOnFocus="true" label="Accordion title" help="Enter some text" value={ accordionTitle } placeholder="Optional accordion title" onChange={ (content) => setAttributes({
                                                                                                                                                                               	accordionTitle: content
                                                                                                                                                                               }) } /></h1>
       </div>
       <ul className={ 'vl-accordion__content' }>
         <li className={ 'vl-accordion__content-toggle' }>
           <Toggle toggleTitle={ toggleTitle } toggleContent={ toggleContent } toggleTitleHeight={ toggleTitleHeight } toggleContentHeight={ toggleContentHeight } toggleTitleMediaUrl={ toggleTitleMediaUrl }
             toggleTitleMediaAlt={ toggleTitleMediaAlt } updateAttributes={ updateAttributes } setAttributes={ setAttributes } />
         </li>
       </ul>
     </div>
   </div>
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
	save: function(props) {
		const {attributes: {accordionTitle, toggleTitle, toggleContent, theme, titleMediaId, toggleTitleMediaAlt, toggleTitleMediaUrl, toggleTitleHeight, toggleContentHeight}, attributes, isSelected, setAttributes} = props;

		const titleMedia = (src, alt) => {
			if (!src) return null;

			if (alt) {
				return (
					<div className={ 'vl-accordion__title__image__wrapper' }>
       <img className="vl-accordion__title__image" src={ src } alt={ alt } />
     </div>
					);
			}

			// No alt set, so let's hide it from screen readers
			return (
				<div className={ 'vl-accordion__title__image__wrapper' }>
      <img className="vl-accordion__title__image" src={ src } alt="" aria-hidden="true" />
    </div>
				);
		};

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
             { titleMedia(toggleTitleMediaUrl, toggleTitleMediaAlt) }
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
