var yahoomaps = (function(){
	var api_end_point = 'http://api.flickr.com/services/rest/?method=flickr.photos.search';
	var _api_key = '';
	var options = {
		has_geo:true,
		radius:30,
		page:1,
		format: 'json',
		per_page:30
	}
	var _setAPIKey = function(key){
		_api_key = key;
	}
	var search = function(lat, lon)
	{
		var url = api_end_point + '&api_key=' + _api_key + '&lat=' + lat + '&lon=' + lon;
	}
	return {
		setoAuthToken: setOAuthToken;
	}
})();



