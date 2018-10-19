

const {Component} = wp.element;
const {RichText} = wp.editor;
const {withSelect} = wp.data;

// const inputs = ['pastOrUpcoming', 'howManyEvents']

export class ToggleTitle extends Component {

	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			toggleTitle: [''],
			toggleTitleHeight: '',
			touched: false,
		}

		this.setStatus = this.setStatus.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.titleMedia = this.titleMedia.bind(this);

	}

	//Richtext gives straight value array, no event
	handleInputChange(value) {
		console.log('value', value);
		this.setState({
			toggleTitle: value,
			touched: true
		}, () => {
			console.log('this.state.toggleTitle', this.state.toggleTitle);
			this.props.updateAttributes({
				toggleTitle: this.state.toggleTitle
			});
		});

	}

	setStatus(newProps) {

		var props = newProps ? newProps : this.props;


		if (props.toggleTitle) {
			this.setState({
				toggleTitle: props.toggleTitle
			}, () => {
			});
		}
		if (props.toggleTitleHeight) {
			this.setState({
				toggleTitleHeight: props.toggleTitleHeight
			}, () => {
			});
		}

	}

	componentDidMount() {
		this.setStatus();
	}


	componentWillReceiveProps(newProps) {
		this.setStatus(newProps);
	}

	titleMedia(src, alt) {

		console.log('titleMedia src', src);
		console.log('titleMedia alt', alt);

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

	// componentDidUpdate() {
	// 	console.log('update');
	// }


	render() {

		console.log('props', this.props);

		return (
			<div className="vl-accordion__content-toggle__title">
     { this.titleMedia(this.props.toggleTitleMediaUrl, this.props.toggleTitleMediaAlt) }
     <RichText keepPlaceholderOnFocus="true" tagName="h2" className={ "vl-accordion__content-toggle__title__text" } label="ToggleTitle title" help="Enter some text" /*value={ this.state.toggleTitle
       }*/ value={ this.props.toggleTitle } name="title" placeholder="Content title" /*onChange={ this.handleInputChange }*/ onChange={ (content) => this.props.setAttributes({
                                                                                                                                        	toggleTitle: content
                                                                                                                                        }) } />
   </div>
			);
	}
}