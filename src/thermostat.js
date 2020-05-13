'use strict';
class Thermostat {

constructor() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
}

isMinimumTemperature() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

  getCurrentTemperature(){
    return this.temperature;
  }
  up(){
  return this.temperature++;
  }
  down(){
    if (this.isMinimumTemperature()) {
      return;
    }
    return this.temperature--;
  }


}
