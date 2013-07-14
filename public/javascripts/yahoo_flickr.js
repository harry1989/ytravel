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
	var showPhotos = function(place)
	{
         getPhotosforLoc(place.jb, place.kb);
	}
	var getPhotosforLoc = function(lat, lon)
	{            
		var url = api_end_point ;
            options.api_key = _api_key;
            options.lat = lat;
            options.lon = lon;
            
            $.ajax({
              url: url,
              data : options,
              dataType: 'json',
              async: false,
              success: function(data) {            
                console.log(data);                
              }
            });                      
	}
	return {
		setAPIKey: setAPIKey,
		showPhotos: showPhotos
	}
})();



