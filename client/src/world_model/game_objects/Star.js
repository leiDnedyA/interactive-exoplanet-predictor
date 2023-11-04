import MeshGameObject from "./MeshGameObject";
import * as THREE from 'three';

function calculateStarColor(temperature) {
	if (temperature >= 33000) {
		return '#9aafff';
	}
	if (temperature >= 10000) {
		return '#ccd7fe';
	}
	if (temperature >= 7500) {
		return 'white';
	}
	if (temperature >= 6000) {
		return '#f9ffd6';
	}
	if (temperature >= 5200) {
		return '#fff2a1';
	}
	if (temperature >= 3700) {
		return '#ffa350';
	}
	return '#fa6350';
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
	updateData(newData) {
		this.data = newData;
		console.log(calculateStarColor(this.data.temperature));
		this.mesh.material.color = new THREE.Color(calculateStarColor(this.data.temperature));
		console.log(this.mesh.material.color);
	}
}

export default Star;
