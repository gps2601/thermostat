const defaultTemperature = 20;
const defaultTempChange = 1;
const minimumTemperature = 10;

function Thermostat() {
  this._temp = defaultTemperature;
};

Thermostat.prototype.temperature = function () {
  return this._temp;
};

Thermostat.prototype.up = function () {
  this._temp += defaultTempChange;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this._temp -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this._temp === minimumTemperature;
}
