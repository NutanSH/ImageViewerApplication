const axios = require('axios');
axios.defaults.baseURL = 'https://graph.instagram.com/';

function CommonClient() {}

CommonClient.prototype.getMdeia = () => {
	const accessToken = sessionStorage.getItem('access-token');
	return axios.get(`me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${accessToken}`, {}, {
			headers: {
				"Accept": "application/json",
				"content-type": "application/json"
			}
		})
		.then(response => {
			console.log(" response ", response.data);
			return response && response.data;
		}).catch((error) => {
			throw error;
		});
}


export default CommonClient;