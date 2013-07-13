var foursquare = (funtion(){
	var _oAuthToken = '';
	var api_end_point = 'https://api.foursquare.com/v2/venues/search?&intent=checkin';

	var _setAPIKey = function(token)
	{
		_oAuthToken = token;
	}
	var search = function(lat, lon){
		var url = api_end_point + '&ll' + lat + ',' + lon + '&oauth_token=' + _oAuthToken;
	}
	return {
		setoAuthToken: setOAuthToken;
	}
})();

