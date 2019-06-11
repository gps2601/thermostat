const defaultTemperature = 20
const defaultTempChange = 1

function Thermostat() {
  this._temp = defaultTemperature;
};

Thermostat.prototype.temperature = function () {
  return this._temp;
};

Thermostat.prototype.up = function () {
  this._temp += defaultTempChange;
};
