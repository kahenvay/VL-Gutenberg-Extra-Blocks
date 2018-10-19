

const {Component} = wp.element;
const {RichText} = wp.editor;
const {withSelect} = wp.data;

// const inputs = ['pastOrUpcoming', 'howManyEvents']

export class ToggleContent extends Component {

	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			toggleTitle: [''],
			toggleTitleHeight: '',
			touched: false,
			height: 0
		}

		this.setStatus = this.setStatus.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

	}

	//Richtext gives straight value array apparently, no event
	handleInputChange(value) {
		console.log('value', value);
		// let name = event.target.name
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

		// console.log('setStatus props', props);

		if (props.toggleTitle) {
			this.setState({
				toggleTitle: props.toggleTitle
			}, () => {
				// console.log('this.state after set toggleTitle', this.state);
				// this.handleInputChange(props.toggleTitle);
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
		// console.log('mount props');
		this.setStatus();
		const height = this.divElement.clientHeight;
		this.setState({
			height
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


	componentWillReceiveProps(newProps) {
		// console.log('received props');
		this.setStatus(newProps);
	}

	// componentDidUpdate() {
	// 	console.log('update');
	// }


	render() {

		console.log('render state', this.state);
		// console.log('props', this.props);


		return (
			<div className="ToggleContent" ref={ (divElement) => this.divElement = divElement }>
     <RichText keepPlaceholderOnFocus="true" tagName="h2" label="ToggleContent title" help="Enter some text" /*value={ this.state.toggleTitle }*/ value={ this.props.toggleContent }
       name="title" placeholder="Content title" /*onChange={ this.handleInputChange }*/ onChange={ (content) => this.props.setAttributes({
                                                                                                   	toggleContent: content
                                                                                                   }) } />
   </div>
			);
	}
}

// <h1>{ this.state.toggleTitle }</h1>