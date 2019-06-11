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
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
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

  it('#powerSaving to be true by default', function() {
    expect(thermostat.powerSaving).toEqual(true);
  });

  it('#togglePowerSaving make powerSaving false', function() {
    thermostat.togglePowerSaving();
    expect(thermostat.powerSaving).toEqual(false);
  });

  it('#togglePowerSaving make powerSaving true', function() {
    thermostat.togglePowerSaving();
    thermostat.togglePowerSaving();
    expect(thermostat.powerSaving).toEqual(true);
  });

  it('wont exceed max temperature when power saving on', function(){
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.temp).toEqual(25);
  });

  it('wont exceed max temperature when power saving off', function(){
    thermostat.togglePowerSaving();
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.temp).toEqual(32);
  });
});
