function Thermostat() {
  this._temp = 20;
};

Thermostat.prototype.temperature = function () {
  return this._temp;
};

Thermostat.prototype.increaseTemperature = function () {
  this._temp += 1;
};
