var travel_handler = (function(){
	
	var yahoo_API = 'hdUlhivV34G4VNeoQ4FyPAJetaTJkMRv8bb1n8aRB9lys7pD.x__RBtIHfO7bYetCB_s';
	var flicker_API = '6cc5b7b572d18ae137e04bc9899f7697';
	var google_API = 'AIzaSyDH7xBmQWvchh9Pe0QHT7-RIljFnZ2jSsA';
	//var foursquare_API = '';

	var _authenticate = function()
	{
		GoogleMaps.setAPIKey();
		Yahoo_flickr.setAPIKey();
		Yahoo_weather.setAPIKey();
	}

	var getDetails = function(){
		//var fromLoc = $("#fromloc");
		//var loLoc - $('#toloc');
		var fromLoc = 'Bangalore';
		var loLoc = 'Mumbai';

		var locations = GoogleMaps.search(formLoc, toLoc);
		Yahoo_flickr.showPhotos(locations);
		Yahoo_weather.showWeatherDetails(locations);		
	}

	_authenticate();

	return {
		getDetails: getDetails
	}
})();


