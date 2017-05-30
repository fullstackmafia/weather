var APPID = "0f692dea59473fc56b118cce9d5fb334";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function updateByZip(zip) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" + 
    "zip=" + zip +
    "&APPID=" + APPID;
    sendRequest(url);
}

function updateByGeo(lat, lon) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
        "lat=" + lat +
        "&lon=" + lon +
        "&APPID=" + APPID +
    sendRequest(url);
 }

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.icon = data.weather[0].main;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.direction = degreesToDirection(data.wind.deg);
            weather.loc = data.name;
            weather.temp = kelvintoCelsius(data.main.temp);
            update(weather);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function degreesToDirection(degrees) {
    var range = 360/16;
    var low = 360 - range/2;
    var high = (low + range) % 360;
    var angles = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    for (i in angles) {

        if(degrees>= low && degrees < high)
            return angles[i];

        low = (low + range) % 360;
        high = (high + range) % 360;
    }

}

function kelvintoCelsius(k) {
    return Math.round(k -273.15);
};

function kelvintoFarenheit() {
    return Math.round(k * (9/5) - 459.67);
};

var wImages = {
    Clouds: 'clouds.png',
    Rainy: 'rainy.png',
    Clear: 'clear.png'
}

function update(weather) {
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    humidity.innerHTML = weather.humidity + " %";
    temp.innerHTML = weather.temp;
    icon.src = "imgs/" + wImages[weather.icon];
    loc.innerHTML = weather.loc;
}

function showPosition(position) {
    updateByGeo(position.coords.latitude, position.coords.longitude);
}



window.onload = function() {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(showPosition);

   } else {
       var zip = window.prompt("Could not discover your location. What is your zip code?");
       updateByZip(zip);
   }
 }

