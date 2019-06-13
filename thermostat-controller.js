$(document).ready(function() {
  thermostat = new Thermostat();
  var cityId = '2643743'
  updateTemperature();
  updateWeather();

  $.get( "http://lvh.me:9292/temperature", function( data ) {
    alert( data );
  });

  $("#up").click( function() {
    thermostat.up();
    updateTemperature()
  });

  $("#down").click( function() {
    thermostat.down();
    updateTemperature()
  });

  $("#reset").click( function() {
    thermostat.reset();
    updateTemperature()
  });

  $("#powerSaving").click( function() {
    thermostat.togglePowerSaving();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperatureFormatted());
    $('#temperature').attr('class', thermostat.energyUsage())
  }

  function updateWeather() {
    $.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=" + weatherApiKey + "&units=metric", function(data) {
      response = data;
      console.log(response.weather[0]['main'])
      var icon = response.weather[0]['icon']
      var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
      $('#weather_disp').attr('src', iconUrl);
    });
  }
});
