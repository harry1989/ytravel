var GoogleMaps = (function(){

	var origin = new google.maps.LatLng(19.0144100,72.8479400); // mum 
	var destination = new google.maps.LatLng(17.3752800,78.4744400) // hyd
	var JUMPS = 30000;
	var tPoint;
	var MAPIKEY = '';

	var _getLocality = function(loc) 
	{
	  var result;
	  var locality;        
	  var url = 'http://maps.googleapis.com/maps/api/geocode/json?key=' + MAPIKEY + '&latlng=' + loc.jb.toString() + ',' + loc.kb.toString() + '&sensor=false'
	  $.getJSON(url,
	    function (data) {
	      console.log(data);
	      if (data.status == "OK") {
	        result = data;
	        locality = result['results'][0].formatted_address;
	      }
	    });
	}

	var setAPIKey = function(token)
	{
		MAPIKEY = MAPIKEY;
	}
          
	var search = function(slocation,elocation){
	  var heading = google.maps.geometry.spherical.computeHeading(slocation, elocation);
	  var computed_distance = google.maps.geometry.spherical.computeDistanceBetween(slocation, elocation);   
	  var iterations = Math.round(computed_distance/JUMPS);
	  var distance_to_move_each_time = computed_distance/iterations;
	  var points = [];
	  for(var i=0;i<iterations;i++){         
	    slocation = google.maps.geometry.spherical.computeOffset(slocation,distance_to_move_each_time,heading);
	    points[i] = google.maps.geometry.spherical.computeOffset(slocation,distance_to_move_each_time,heading); 
	  }        
	  return points;
	}

	return {
		setAPIKey: setAPIKey,
		search: search
	}
})();

