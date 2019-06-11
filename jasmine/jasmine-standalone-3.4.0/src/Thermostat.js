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
}
