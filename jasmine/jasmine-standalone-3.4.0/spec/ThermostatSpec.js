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
    expect(thermostat.temperature()).toEqual(20);
  });
});
