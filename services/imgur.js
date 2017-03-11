const request		= require('request');

// exporting function to route file
// takes the search term and pagination option (default to 1)
exports.getImage = function(search, page = 1) {
	return new Promise((resolve, reject) => {
		// request takes an options object and a callback
		let options = {
			url: `https://api.imgur.com/3/gallery/search/${page}?q=${search}`,
			headers: { Authorization: 'Client-ID c5beeb632a90940' },
			json: true
		};
		function returnPics(error, response, body) {
			if(!error && response.statusCode == 200) {
				body = body.data.filter(image => {
					if(!image.is_album) {
						return image;
					}
				}).map(image => {
					return {
						url: image.link,
						snippet: image.title,
						context: image.description
					};
				});
			resolve(body);
			}
		}
		request(options, returnPics);
	});
};