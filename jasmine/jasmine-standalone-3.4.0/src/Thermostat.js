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
  if (this._temp > minimumTemperature) {
    this._temp -= defaultTempChange;
  }
};
