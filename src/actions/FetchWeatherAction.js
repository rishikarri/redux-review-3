import $ from 'jquery';
//import axios from axios;

var APIKEY = '482c145ce8edf1d69ea5168f9d06460c';

const weatherURL = 'api.openweathermap.org/data/2.5/weather?units=imperial,us&appid=' + APIKEY + '&zip=';

export default function GetTheWeather(){
	return {
		type: 'getWeather', 
		payload: []
	}
}

// actions return one property and the property has to have one type
//payload is goingt to be a reducer that it optionally is going to update its state to

