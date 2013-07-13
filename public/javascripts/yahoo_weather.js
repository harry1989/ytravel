var yahoo_weather = (function(){
	var api_end_point = 'http://query.yahooapis.com/v1/public/yql?format=json&q=';
	var _api_key = '';
	var yql = 'select * from weather.forecast where woeid in (select woeid From geo.placefinder where text ="LAT,LON" and gflags="R")';

	var _setAPIKey = function(key){
		_api_key = key;
	}
	var search = function(lat, lon)
	{
		var q = yql.replace('LAT', lat).replace('LON', lon);
		url = api_end_point +  q + '&api_key=' + _api_key;
	}
	return {
		setoAuthToken: setOAuthToken;
	}
})();



