var Geo = {};
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success,error);
}
else {
    alert('Geolocation is not supported');
}

function error() {
    alert("That's weird! We couldn't find you!");
}

function success(position) {
    Geo.lat = position.coords.latitude;
    Geo.lng = position.coords.longitude;
}

var key = "f672ff13193bfcc40427a678ebfdbc71";
var weather = "http://api.wunderground.com/api/”+ key +”/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";
$.ajax({
    url : weather,
    dataType : "jsonp",
    success : function(data) {
        var location =data['location']['city'];
        var temp = data['current_observation']['temp_f'];
        var img = data['current_observation']['icon_url'];
        var desc = data['current_observation']['weather'];
        var wind = data['current_observation']['wind_string'];
    }
})

$('#location').html(location);
$('#temp').html(temp);
$('#desc').html(desc);
$('#wind').html(wind);
$('#img').attr('src', img);