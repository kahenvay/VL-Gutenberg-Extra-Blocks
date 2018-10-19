const {Component} = wp.element;
const {RichText} = wp.editor;

import { ToggleTitle } from './ToggleTitle';
import { ToggleContent } from './ToggleContent';

export class Toggle extends Component {

	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			toggleTitle: '',
			toggleContent: '',
			toggleTitleHeight: '',
			toggleContentHeight: '',
			toggleTitleMediaUrl: '',
			toggleTitleMediaAlt: ''
		}

		this.setStatus = this.setStatus.bind(this);
		this.titleMedia = this.titleMedia.bind(this);

	}

	titleMedia(src, alt) {
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
	}
	;


	setStatus(newProps) {

		var props = newProps ? newProps : this.props;

		// console.log('setStatus props', props);

		if (props.toggleTitle) {
			this.setState({
				toggleTitle: props.toggleTitle
			}, () => {
			});
		}
		if (props.toggleContent) {
			this.setState({
				toggleContent: props.toggleContent
			}, () => {
			});
		}
		if (props.toggleTitleHeight) {
			this.setState({
				toggleTitleHeight: props.toggleTitleHeight
			}, () => {
			});
		}
		if (props.toggleContentHeight) {
			this.setState({
				toggleContentHeight: props.toggleContentHeight
			}, () => {
			});
		}
		if (props.toggleTitleMediaUrl) {
			this.setState({
				toggleTitleMediaUrl: props.toggleTitleMediaUrl
			}, () => {
			});
		}
		if (props.toggleTitleMediaAlt) {
			this.setState({
				toggleTitleMediaAlt: props.toggleTitleMediaAlt
			}, () => {
			});
		}

	}

	componentDidMount() {
		// console.log('mount props');
		this.setStatus();
	// this.props.history.goBack();
	}


	componentWillReceiveProps(newProps) {
		// console.log('received props');
		this.setStatus(newProps);
	}

	componentDidUpdate() {}


	render() {
		console.log('props', this.props);
		return (
			<div className="Toggle">
     <input type="checkbox" />
     <i></i>
     <div className={ 'vl-accordion__content-toggle__title' }>
       { this.titleMedia(this.toggleTitleMediaUrl, this.toggleTitleMediaAlt) }
       <ToggleTitle /*toggleTitle={ this.state.toggleTitle }*/ toggleTitle={ this.props.toggleTitle } toggleTitleHeight={ this.state.toggleTitleHeight } updateAttributes={ this.props.updateAttributes }
         setAttributes={ this.props.setAttributes } />
     </div>
     <div className={ 'vl-accordion__content-toggle__content' }>
       <ToggleContent /*toggleTitle={ this.state.toggleTitle }*/ toggleContent={ this.props.toggleContent } toggleContentHeight={ this.state.toggleContentHeight } updateAttributes={ this.props.updateAttributes }
         setAttributes={ this.props.setAttributes } />
     </div>
   </div>
			);
	}
}

// <div className={ 'vl-accordion__content-toggle__content' }>
//        <RichText label="Toggle content" help="Enter some text" value={ this.toggleContent } name="content" placeholder="Content body..." onChange={ this.handleInputChange } />
//      </div>