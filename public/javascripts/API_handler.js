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
		var fromLoc = new google.maps.LatLng(19.0144100,72.8479400); // mum 
		var toLoc = new google.maps.LatLng(17.3752800,78.4744400); // hyd
		var locations = GoogleMaps.search(fromLoc, toLoc);
            console.log(locations);            
		//Yahoo_flickr.showPhotos($.map(locations,function(obj,idx){return {'lat':obj['jb'],'lon':obj['kb']}}));
		Yahoo_flickr.showPhotos(locations);
		Yahoo_weather.showWeatherDetails(locations);		
	}

	_authenticate();

	return {
		getDetails: getDetails
	}
})();


