var Yahoo_weather = (function(){
	var api_end_point = 'http://query.yahooapis.com/v1/public/yql?';
	var _api_key = '';
	var yql = 'select * from weather.forecast where woeid in (select woeid From geo.placefinder where text ="LAT,LON" and gflags="R")';
     
	var setAPIKey = function(key){
		_api_key = key;
	}

	var showWeatherDetails = function(place)
	{
		var weather = _getWeatherForLocation(place.jb, place.kb);
	}

	var _getWeatherForLocation = function(lat, lon)
	{
        var q =  encodeURIComponent(yql.replace('LAT', lat).replace('LON', lon));
		var url = api_end_point + '&api_key=' + _api_key + '&q=' + q + '&format=json';

		$.ajax({
			url: url,
			aysnc: false,
			complete: function(data,status){
          		var response = JSON.parse(data.responseText);
          		_plotWeatherData(response);
          	}
        });
	}

	var _plotWeatherData = function(data){
		$('#weathertext').empty();

		try{
	        var placetitle = $('#placename').val();
	        var weatherimage = 'images/'+ data.query.results.channel.item.condition.code + '.png';
	        var temperature  = data.query.results.channel.item.condition.temp +' F';
	        var condition = data.query.results.channel.item.condition.text;
	        var winddirection = parseInt(data.query.results.channel.wind.direction);
	        var direction='';
	        switch(true)
	        {
	            case (winddirection==0):
	                direction='N';
	                break;
	            case (winddirection<90):
	                direction='NE';
	                break;
	            case (winddirection==90):
	                direction='E';
	                break;
	            case (winddirection<180):
	                direction='SE';
	                break;
	            case (winddirection==180):
	                direction='S';
	                break;
	            case (winddirection<270):
	                direction='SW';
	                break;
	            case (winddirection==270):
	                direction='W';
	                break;
	            case (winddirection<360):
	                direction='NW';
	                break;
	            case (winddirection==360):
	                direction='N';
	                break;
	        }
	        var dirspeed = 'Wind: '+direction+' at '+data.query.results.channel.wind.speed+' mph';
	        var humidity = 'Humidity: '+data.query.results.channel.atmosphere.humidity+'%';

	        var options = {
	        	placetitle: placetitle,
	        	weatherimage: weatherimage,
	        	dirspeed: dirspeed,
	        	humidity: humidity,
	        	temperature: temperature,
	        	condition: condition
	        }

	        var source   = $("#weather_template").html();
	        var template = Handlebars.compile(source);
	        $('#weathertext').append(template(options));
	    }
	    catch(err)
	    {
	    	$('#weathertext').append('<span>No weather data available for this place</span>');
	    	$('#weathercontainer').show();
	    }
        $('#weathercontainer').show();
	}
	return {
		setAPIKey: setAPIKey,
		showWeatherDetails: showWeatherDetails
	}
})();



