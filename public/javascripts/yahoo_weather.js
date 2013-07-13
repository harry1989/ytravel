var Yahoo_weather = (function(){
	var api_end_point = 'http://query.yahooapis.com/v1/public/yql?';
	var _api_key = '';
	var yql = 'select * from weather.forecast where woeid in (select woeid From geo.placefinder where text ="LAT,LON" and gflags="R")';
      var options = {
        format : 'json'
      }
	var setAPIKey = function(key){
		_api_key = key;
	}
	var showWeatherDetails = function(places)
	{
		var weather_details = [],
			i = 0;
			l = places.length;

		for(i; i <l; i++)
		{
			var place = places[i];
			weather_details.push(_getWeatherForLocation(place.jb, place.kb));
		}

	}
	var _getWeatherForLocation = function(lat, lon)
	{
            var q =  encodeURIComponent(yql.replace('LAT', lat).replace('LON', lon));
			var url = api_end_point + '&api_key=' + _api_key + '&q=' + q;

            $.get(url,function(data,status){
              console.log(data);
            });
	}
	return {
		setAPIKey: setAPIKey,
		showWeatherDetails: showWeatherDetails
	}
})();



