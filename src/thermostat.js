'use strict';
class Thermostat {

constructor() {
  this.temperature = 20;
  
}

  getCurrentTemperature(){
    return this.temperature;
  }
  up(){
  return this.temperature++;
  }
  down(){
    return this.temperature--;
  }
}
