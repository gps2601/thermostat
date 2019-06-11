function Thermostat() {
  this._temp = 20;
};

Thermostat.prototype.temperature = function () {
  return this._temp;
};
