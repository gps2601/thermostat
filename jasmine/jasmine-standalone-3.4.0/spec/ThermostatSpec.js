describe('Thermostat', function() {
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('has a temperature', function() {
    expect(thermostat.temperature).toBeDefined();
  });
});
