var GoogleMaps = (function(){

	//var origin = new google.maps.LatLng(12.9762300, 77.6032900); // bengaluru
	//var destination = new google.maps.LatLng(23.5,91.25); // KOL
	var JUMPS = 50000;
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
          
	var _internal_search = function(slocation,elocation){
	  var heading = google.maps.geometry.spherical.computeHeading(slocation, elocation);
	  var computed_distance = google.maps.geometry.spherical.computeDistanceBetween(slocation, elocation);   
	  var iterations = Math.round(computed_distance/JUMPS);
	  var distance_to_move_each_time = computed_distance/iterations;
	  var points = [];
	  for(var i=0;i<iterations;i++){   
          heading = google.maps.geometry.spherical.computeHeading(slocation, elocation);
	    slocation = google.maps.geometry.spherical.computeOffset(slocation,distance_to_move_each_time,heading);
	    points[i] = google.maps.geometry.spherical.computeOffset(slocation,distance_to_move_each_time,heading); 
          }
          return points;
        }
        
      var search = function(query_string){ 
        console.log(query_string);
        var steps = [];
        $.ajax({
          url: 'http://maps.googleapis.com/maps/api/directions/json?&sensor=false&' + query_string ,
          dataType: 'json',
          async: false,
          success: function(data) {            
            console.log(data);
            steps = data.routes[0].legs[0].steps;
          }
        });
        var allpoints = $.map(steps,function(obj,idx){
          if(obj.distance.value > 5000){
            return new google.maps.LatLng(obj.start_location.lat, obj.start_location.lng);
          }
        });
        var inner_points;
          for(i=0; i < steps.length; i++)
          {
            var step = steps[i];
            if(step.distance.value > 50000)
              {
                inner_points  = _internal_search(
                  new google.maps.LatLng(step.start_location.lat, step.start_location.lng),
                  new google.maps.LatLng(step.end_location.lat, step.end_location.lng)
                );                
                $.each(inner_points,function(idx,obj){
                  allpoints.push(obj);
                });
              }
          } 
          return allpoints;
        }

	return {
		setAPIKey: setAPIKey,
		search: search
	}
})();

