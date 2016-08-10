var temp, temp_min, temp_max=0;

function getCurrentLocation(){
  $.getJSON("http://ip-api.com/json/?callback=", function(data){
    $("#city").html(data.city );
    $(".flag-icon").addClass("flag-icon-" + data.countryCode.toLowerCase());
    getCurrentWeather(data.lat, data.lon);
  });
}

function getCurrentWeather(lat, lon){
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +"&appid=424337f4099555b5b5d0da826201e9c2", function(data){
    temp = data.main.temp;
    temp_min= data.main.temp_min ;
    temp_max = data.main.temp_max;
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
        $("#temp").html(Math.round(temp - 273.15) + "°C");
        $("#max").html(Math.round(temp_max- 273.15) + "°C");
        $("#min").html(Math.round(temp_min- 273.15) + "°C");
        flag = 1;
    }else{
      $("#grade").html("Celsius");
      $("#temp").html(Math.round(temp*9/5 - 459.67) + "°F");
      $("#max").html(Math.round(temp_max*9/5 - 459.67) + "°F");
      $("#min").html(Math.round(temp_min*9/5 - 459.67) + "°F");
      flag = 0;
    }
    });
  $('body').css('background-image', 'url(background/earth.jpg)');
});
