
function getCurrentLocationWeather(){

  $.getJSON("http://ip-api.com/json/?callback=", function(data){
    var lat=data.lat;
    var lon= data.lon;
    $("#pico").html(lon);
  });
}

$(document).ready(function() {
  getCurrentLocationWeather();
});
