const {Component} = wp.element;
import * as api from '../api';

export class InstaEmbed extends Component {

	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			embed: ''
		}

		this.getEmbed = this.getEmbed.bind(this);
		// this.setStatus = this.setStatus.bind(this); 

	}

	getEmbed() {
		if (this.props.link) {

			var args = {
				link: this.props.link
			};

			api.getEmbed(args)
				.then((response) => {
					// console.log('getEmbed response', response);
					this.setState({
						embed: response.data.html
					}, () => {
						// console.log('embed', this.state.embed);
					});
				})
		}

	}

	componentDidMount() {
		// console.log('mount rpors');
		// this.setStatus();
		this.getEmbed();
	}


	// componentWillReceiveProps(newProps) {
	// 	console.log('received rpors');
	// 	this.setStatus(newProps);
	// }

	componentDidUpdate() {}

	render() {
		if (this.state.embed) {
			return (
				<div className="vl-instagram__embed" dangerouslySetInnerHTML={ { __html: this.state.embed } }>
    </div>
			)
		} else {
			return (
				<div className="InstaEmbed">
      <p> Waiting for embed... </p>
    </div>
			)
		}
	}
}