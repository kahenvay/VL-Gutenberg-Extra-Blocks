const {Component} = wp.element;
import * as api from '../api';
import { InstaEmbed } from './InstaEmbed';

export class InstaFeed extends Component {

	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			feed: ''
		}

		this.getFeed = this.getFeed.bind(this);
		// this.setStatus = this.setStatus.bind(this); 

	}

	getFeed() {
		if (this.props.access_token) {

			var args = {
				access_token: this.props.access_token
			};

			api.getFeed(args)
				.then((response) => {
					// console.log('getFeed response', response);
					this.setState({
						feed: response.data.data
					}, () => {
						console.log('feed', this.state.feed);
					});
				})
		}

	}

	componentDidMount() {
		// console.log('mount rpors');
		// this.setStatus();
		this.getFeed();
	}


	// componentWillReceiveProps(newProps) {
	// 	console.log('received rpors');
	// 	this.setStatus(newProps);
	// }

	componentDidUpdate() {}

	render() {
		if (this.state.feed) {
			return (
				<div className="vl-instagram__feed">
      { this.state.feed.map((post) => {
        	return (
        		<div className="vl-instagram__feed__post">
            <img src={ post.images.standard_resolution.url } />
            <InstaEmbed link={ post.link } />
          </div>
        		);
        }) }
    </div>
			)
		} else {
			return (
				<div className="InstaFeed">
      <p> Waiting for feed... </p>
    </div>
			)
		}
	}
}