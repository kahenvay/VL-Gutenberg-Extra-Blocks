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
			toggleContentHeight: ''
		}

		this.setStatus = this.setStatus.bind(this);

		this.registerChangeHeight = this.registerChangeHeight.bind(this);

	}




	setStatus(newProps) {

		var props = newProps ? newProps : this.props;

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

	}

	componentDidMount() {
		this.setStatus();
	}


	componentWillReceiveProps(newProps) {
		this.setStatus(newProps);
	}

	registerChangeHeight(attr, height) {
		this.setState({
			[attr]: height
		}, () => {
			this.props.updateAttributes({
				[attr]: height
			});
		});
	}

	componentDidUpdate() {}


	render() {
		// console.log('props', this.props);
		return (
			<li className="vl-accordion__content-toggle">
     <input type="checkbox" />
     <i></i>
     <ToggleTitle /*toggleTitle={ this.state.toggleTitle }*/ toggleTitle={ this.props.toggleTitle } toggleTitleHeight={ this.state.toggleTitleHeight } registerChangeHeight={ this.registerChangeHeight }
       updateAttributes={ this.props.updateAttributes } setAttributes={ this.props.setAttributes } toggleTitleMediaUrl={ this.props.toggleTitleMediaUrl } toggleTitleMediaAlt={ this.props.toggleTitleMediaAlt } />
     <ToggleContent /*toggleTitle={ this.state.toggleTitle }*/ toggleContent={ this.props.toggleContent } toggleContentHeight={ this.state.toggleContentHeight } registerChangeHeight={ this.registerChangeHeight }
       updateAttributes={ this.props.updateAttributes } setAttributes={ this.props.setAttributes } />
   </li>
			);
	}
}
