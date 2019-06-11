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

  it('#up to increase by 1', function() {
    thermostat.up();
    expect(thermostat.temperature())
      .toEqual(defaultTemperature + defaultTempChange);
  });
});
