var Yahoo_flickr = (function(){
	var api_end_point = 'http://api.flickr.com/services/rest/?method=flickr.photos.search';
	var _api_key = '';
	var options = {
		has_geo:true,
		radius:30,
		page:1,
		format: 'json',
		per_page:30
	}
	var setAPIKey = function(key){
		_api_key = key;
	}
	var showPhotos = function(places)
	{
		var photo_details = [],
			i = 0;
			l = places.length;

		for(i; i <l; i++)
		{
			var place = places[i];
			photo_details.push(getPhotosforLoc(place.lat, place.lon));
		}

	}
	var _getPhotosforLoc = function(lat, lon)
	{
		var url = api_end_point + '&api_key=' + _api_key + '&lat=' + lat + '&lon=' + lon;
	}
	return {
		setAPIKey: setAPIKey,
		showPhotos: showPhotos
	}
})();



