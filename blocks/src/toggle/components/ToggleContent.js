

const {Component} = wp.element;
const {RichText} = wp.editor;
const {withSelect} = wp.data;

export class ToggleContent extends Component {

	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			toggleContent: [''],
			toggleContentHeight: 0,
			touched: false
		}

		this.setStatus = this.setStatus.bind(this);

	}

	setStatus(newProps) {

		var props = newProps ? newProps : this.props;

		if (props.toggleContent) {
			this.setState({
				toggleContent: props.toggleContent
			}, () => {
			});
		}
		if (props.toggleContentHeight) {
			this.setState({
				toggleContentHeight: props.toggleContentHeight
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

	// componentDidUpdate() {
	// 	// console.log('update');
	// }


	render() {

		return (
			<div className="vl-accordion__content-toggle__content" ref={ (divElement) => this.divElement = divElement }>
     <RichText keepPlaceholderOnFocus="true" className={ "vl-accordion__content-toggle__content__text" } label="ToggleContent title" help="Enter some text" /*value={ this.state.toggleContent }*/
       value={ this.props.toggleContent } name="title" placeholder="Content title" /*onChange={ this.handleInputChange }*/ onChange={ (content) => {
                                                                                                                                      	this.props.setAttributes({
                                                                                                                                      		toggleContent: content
                                                                                                                                      	})
                                                                                                                                      // this.props.registerChangeHeight('toggleContentHeight', this.divElement.clientHeight);
                                                                                                                                      } } />
   </div>
			);
	}
}