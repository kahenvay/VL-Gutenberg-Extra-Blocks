import axios from 'axios';

export const getFeed = (args) => {

	console.log('getting feed');

	var {access_token} = args;
	var base_url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';

	var call = base_url + access_token;

	console.log('call', call);
	return axios.get(call);
}

export const getEmbed = (args) => {

	console.log('getting feed');

	var {link} = args;

	var base_url = 'https://api.instagram.com/oembed?url=';


	var call = base_url + link;

	console.log('call', call);
	return axios.get(call);
}