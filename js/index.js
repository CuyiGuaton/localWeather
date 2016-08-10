var t=0;
var tmin=0;
var tmax=0;


function getCurrentLocation(){
  $.getJSON("https://freegeoip.net/json/", function(data){
    $("#city").html(data.city );
    $(".flag-icon").addClass("flag-icon-" + data.country_code.toLowerCase());
    getCurrentWeather(data.latitude, data.longitude);
  });
}
function getCurrentWeather(lat, lon){
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +"&appid=424337f4099555b5b5d0da826201e9c2", function(data){
    t = data.main.temp;
    tmin= data.main.temp_min ;
    tmax = data.main.temp_max;
    $("#temp").html(Math.round(data.main.temp - 273.15) + "°C");
    $("#max").html(Math.round(data.main.temp_max - 273.15) + "°C");
    $("#min").html(Math.round(data.main.temp_min - 273.15) + "°C");
    if(data.weather[0].icon[2] === "d"){
      $(".wi").addClass("wi-owm-day-"+ data.weather[0].id);
    } else{
      $(".wi").addClass("wi-owm-night-"+ data.weather[0].id);
    }
  });
}

$(document).ready(function() {
  getCurrentLocation();
  var flag=0;
  $("#change").unbind("click").click(function() {
    if(flag  == 0){
        $("#grade").html("Fahrenheit");
        $("#temp").html(Math.round(t*9/5 - 459.67) + "°F");
        $("#max").html(Math.round(tmax*9/5 - 459.67) + "°F");
        $("#min").html(Math.round(tmin*9/5 - 459.67) + "°F");
        flag = 1;
    }else{
      $("#grade").html("Celsius");
      $("#temp").html(Math.round(t - 273.15) + "°C");
      $("#max").html(Math.round(tmax- 273.15) + "°C");
      $("#min").html(Math.round(tmin- 273.15) + "°C");
      flag = 0;
    }
    });
  $('body').css('background-image', 'url(background/earth.jpg)');
});
