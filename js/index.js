/**
* Open Weather api
* api.openweathermap.org/data/2.5/weather?q={city name}
*/
$(document).ready(function(){


  var wCity;
  var latitude;
  var longitude;
  var country;
  var postal;
  var weatherApi;
  var temp;
  var weatherMain;
  var weatherTemp;
  var weatherIcon;
  var tempC;
  var tempF;

  $.get("http://ip-api.com/json", function(response) {
    wCity = response.city;
    postal = response.postal;
    country = response.country;
    latitude = response.lat;
    longitude = response.lon;
    $("#city").html(wCity);
    $("#country").html(country);
    getWeather(latitude, longitude);
    }, "jsonp")

  function getWeather(lat, lon){
    weatherApi = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=60aa92c78b7d34035a9a01766511670c";
    $.get(weatherApi, function(data){
      weatherMain = data.weather[0].main;
      weatherTemp = data.main.temp;
      weatherIcon = '<img class="center " src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" alt="Weather Icon">';
      tempC = Math.round(weatherTemp -  273.15) + ' C';
      tempF = Math.round((( weatherTemp - 273.15) * 9/5) + 32) + ' F';
      $("#weather-main").html(weatherMain);
      $("#weather-temp").html(tempC);
      $("#weather-icon").html(weatherIcon);

      $("#weather-temp").on("click", function(){
        if ($("#weather-temp").hasClass("c")) {
          $("#weather-temp").removeClass("c").addClass("f").html(tempF);
        } else {
          $("#weather-temp").removeClass("f").addClass("c").html(tempC);
        }
      });








    })

  }






  });
