import MeshGameObject from "./MeshGameObject";
import * as THREE from 'three';

function blendColors(colorA, colorB, amount) {
	const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
	const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
	const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
	const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
	const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
	return '#' + r + g + b;
}

/*
 * Calculates the approx. apparent color of a star based on temperature.
 *
 * @param {number} temperature - The star's temperature in degrees kelvin
 * @returns {string} The CSS hex string equivalent of the star's apparent color.
 * */
function calculateStarColor(temperature) {
	const minTemps = [
		[33000, '#9aafff'],
		[10000, '#ccd7fe'],
		[7500, '#ffffff'],
		[6000, '#f9ffd6'],
		[5200, '#fff2a1'],
		[3700, '#ffa350'],
		[0, '#fa6350']
	]
	for (const i in minTemps) {
		if (minTemps[i][0] <= temperature){
			if (i == minTemps.length - 1){
				return minTemps[i][1];
			}
			const nextColor = minTemps[i-1][1];
			const prevColor = minTemps[i][1];
			const nextTemp = minTemps[i-1][0];
			const prevTemp = minTemps[i][0];

			const mix = (temperature - prevTemp) / (nextTemp - prevTemp);

			return blendColors(minTemps[i][1], minTemps[i - 1][1], mix);
		}
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
	updateData(newData) {
		this.data = newData;
		this.mesh.material.color = new THREE.Color(calculateStarColor(this.data.temperature));
		console.log(this.mesh.material.color);
	}
}

export default Star;
