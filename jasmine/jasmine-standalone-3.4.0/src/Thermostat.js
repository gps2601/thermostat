const defaultTemperature = 20;
const defaultTempChange = 1;
const minimumTemperature = 10;

function Thermostat() {
  this.temp = defaultTemperature;
  this.powerSaving = true;
};

Thermostat.prototype.temperature = function () {
  return this.temp;
};

Thermostat.prototype.temperatureFormatted = function () {
  return this.temp + "°C";
};

Thermostat.prototype.APItemperature = function () {
  $.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4c1a3536febad70a64e3f920a03f372a&units=metric", function(data) {
    response = data;
    console.log(response.weather[0]['main'])
    var icon = response.weather[0]['icon']
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $('#weather_disp').attr('src', iconUrl);
  });
};

Thermostat.prototype.up = function () {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temp += defaultTempChange;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temp -= defaultTempChange;
};

Thermostat.prototype.isMaximumTemperature = function() {
  var maximumTemperature;

  if (this.powerSaving) {
    maximumTemperature = 25;
  } else {
    maximumTemperature = 32;
  }

  return this.temp === maximumTemperature;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temp === minimumTemperature;
}


Thermostat.prototype.togglePowerSaving = function() {
  this.powerSaving = !this.powerSaving;

  if (this.temp > 25) {
    this.temp = 25;
  }
}

Thermostat.prototype.reset = function () {
  this.temp = defaultTemperature;
};

Thermostat.prototype.energyUsage = function () {
  if(this.temp < 18) {
    return 'low-usage';
  } else if (this.temp < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
