$(document).ready(function() {
  thermostat = new Thermostat();

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
    $('#temperature').text(thermostat.temp);
  }
});
