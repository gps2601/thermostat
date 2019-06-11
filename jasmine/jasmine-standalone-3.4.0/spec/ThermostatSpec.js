describe('Thermostat', function() {
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('#temperature to be defined', function() {
    expect(thermostat.temperature()).toBeDefined();
  });

  it('#temperature to return a number', function() {
    expect(thermostat.temperature()).toEqual(jasmine.any(Number));
  });

  it('#temperature to start at 20', function() {
    expect(thermostat.temperature()).toEqual(defaultTemperature);
  });

  it('#up to increase by ' + defaultTempChange, function() {
    thermostat.up();
    expect(thermostat.temperature())
      .toEqual(defaultTemperature + defaultTempChange);
  });

  it('#down to increase by -' + defaultTempChange, function() {
    thermostat.down();
    expect(thermostat.temperature())
      .toEqual(defaultTemperature - defaultTempChange);
  });

  it('#down wont decrease temperature below ' + minimumTemperature, function() {
    thermostat._temp = 10
    thermostat.down();
    expect(thermostat.temperature())
      .toEqual(minimumTemperature);
  });

  it('#powerSaving to be defined', function() {
    expect(thermostat.powerSaving).toBeDefined();
  });

  it('#powerSaving to be boolean', function() {
    expect(thermostat.powerSaving).toMatch(/true|false/);
  });
});
