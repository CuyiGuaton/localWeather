
function getCurrentLocation(){
  $.getJSON("http://ip-api.com/json/?callback=", function(data){
    var lat=data.lat;
    var lon= data.lon;
    getCurrentWeather(lat, lon);
  });
}

function getCurrentWeather(lat, lon){
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +"&appid=424337f4099555b5b5d0da826201e9c2", function(data){

    $("#temp").html(Math.round(data.main.temp - 273.15) + "°C");

  });
}

$(document).ready(function() {
  getCurrentLocation();
  $('body').css('background-image', 'url(background/rem.png)');

});
