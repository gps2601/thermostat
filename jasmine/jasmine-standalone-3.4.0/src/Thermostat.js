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
  this.temp += defaultTempChange;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temp -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temp === minimumTemperature;
}

Thermostat.prototype.togglePowerSaving = function() {
  this.powerSaving = !this.powerSaving;
}
