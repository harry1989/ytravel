var foursquare = (function(){
	var _oAuthToken = '';
	var api_end_point = 'https://api.foursquare.com/v2/venues/search?&intent=checkin';

	var setAPIKey = function(token)
	{
		_oAuthToken = token;
	}
	var search = function(lat, lon){
		var url = api_end_point + '&ll' + lat + ',' + lon + '&oauth_token=' + _oAuthToken;
	}
	return {
		setAPIKey: setAPIKey
	}
})();

