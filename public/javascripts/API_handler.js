var travel_handler = (function(){
      var locations;
	var yahoo_API = 'hdUlhivV34G4VNeoQ4FyPAJetaTJkMRv8bb1n8aRB9lys7pD.x__RBtIHfO7bYetCB_s';
	var flicker_API = '6cc5b7b572d18ae137e04bc9899f7697';
	var google_API = 'AIzaSyDH7xBmQWvchh9Pe0QHT7-RIljFnZ2jSsA';
	//var foursquare_API = '';

	var _authenticate = function()
	{
		GoogleMaps.setAPIKey(google_API);
		Yahoo_flickr.setAPIKey(flicker_API);
		Yahoo_weather.setAPIKey(yahoo_API);
	}

	var getDetails = function(){		
		var fromLoc = new google.maps.LatLng(19.0144100	,72.8479400); // Mumbai
		var toLoc = new google.maps.LatLng(22.5697200,88.3697200); // hyd
		locations = GoogleMaps.search(fromLoc, toLoc);
		//Yahoo_flickr.showPhotos(locations);
		//Yahoo_weather.showWeatherDetails(locations);
            return locations;
	}

	_authenticate();

	return {
		getDetails: getDetails	
          }
})();


