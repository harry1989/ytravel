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
        $('#placetitle').html($('#placename').val());
        $('#weatherimage').attr('src','images/'+data.query.results.channel.item.condition.code+'.png');
        $('#temperature').html(data.query.results.channel.item.condition.temp+' &deg;F');
        $('#condition').html(data.query.results.channel.item.condition.text);
        var winddirection=parseInt(data.query.results.channel.wind.direction);
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
        $('#dirspeed').html('Wind: '+direction+' at '+data.query.results.channel.wind.speed+' mph');
        $('#humidity').html('Humidity: '+data.query.results.channel.atmosphere.humidity+'%');
        $('#weathercontainer').show();
	}
	return {
		setAPIKey: setAPIKey,
		showWeatherDetails: showWeatherDetails
	}
})();



