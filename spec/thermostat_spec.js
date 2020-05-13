'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  }); 

  it('increases temperature with up', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases temperature with down', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('min temperature is 10 degree', function() {
    for (var i = 0; i < 35; i++) {
    thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
    
  });

});