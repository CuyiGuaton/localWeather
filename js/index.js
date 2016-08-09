var latitude = 0;
var longitude = 0;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    latitude= position.coords.latitude ;
     longitude= position.coords.longitude;
    
  });
      $("#latitude").html(latitude);
}