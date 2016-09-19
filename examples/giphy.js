'use strict';


const fetch = require('node-fetch');

function giphy(theme) {
 	return fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + theme).then(res => {
  	return res.json();
	}).then(json => {
		return fetch(json.data.image_url).then(res => {
			return res.body;
		});
	}); 
}

module.exports = giphy;
