$.getJson("http://ip-api.com/json/?callback=?", function(data){
  var latitude = data.lat;
  var longitude = data.lon;
});
$("#latitude").html(latitude);
