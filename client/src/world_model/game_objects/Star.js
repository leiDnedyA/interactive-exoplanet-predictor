import MeshGameObject from "./MeshGameObject";
import * as THREE from 'three';

function calculateStarColor(temperature) {
  // Convert temperature to Kelvin if necessary
  if (temperature < 0) {
    temperature = (temperature - 32) * 5/9 + 273.15;
  }

  // Calculate the peak wavelength in nanometers using Wien's Law
  const peakWavelength = 2.898e6 / temperature;

  // Determine the star's color on a sliding scale and return a number representation
  if (peakWavelength >= 380 && peakWavelength < 440) {
    return parseInt("9900CC", 16); // Violet
  } else if (peakWavelength >= 440 && peakWavelength < 490) {
    return parseInt("0000FF", 16); // Blue
  } else if (peakWavelength >= 490 && peakWavelength < 560) {
    return parseInt("00FFFF", 16); // Cyan
  } else if (peakWavelength >= 560 && peakWavelength < 580) {
    return parseInt("00FF00", 16); // Green
  } else if (peakWavelength >= 580 && peakWavelength < 645) {
    return parseInt("FFCC00", 16); // Yellow
  } else if (peakWavelength >= 645 && peakWavelength < 780) {
    return parseInt("FF6600", 16); // Orange
  } else {
    return parseInt("FF0000", 16); // Red
  }
}


/* Class representing a Star GameObject */
class Star extends MeshGameObject{
    /**
     * 
     * @param {THREE.Vector3} position position of gameObject in scene
     * @param {Object} data data about the star
     * @param {string} data.name name of the star
     * @param {number} data.temperature temperature of star
     * @param {number} data.radius radius of star
     * @param {number} data.stellar_mass mass of star
     * @param {number} data.metallicity metallicity of star
     * @param {number} data.age age of star
     * @param {number} data.density density of star
     * @param {number} data.radial_velocity radial velocity of star
     * @param {number} data.surface_gravity surface gravity of star
     */
    constructor(position, data){
        super(position, 
            new THREE.SphereGeometry(1),
            new THREE.MeshBasicMaterial({color: calculateStarColor(data.temperature)}));
        this.data = data;
    }
    setTemperature() {
    }
}

export default Star;
