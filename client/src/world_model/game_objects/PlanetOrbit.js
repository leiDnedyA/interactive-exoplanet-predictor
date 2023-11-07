import * as THREE from 'three';
import Planet from './Planet';
import MeshGameObject from './MeshGameObject';

const CIRCLE_THICKNESS = .05;

class PlanetOrbit extends MeshGameObject{
	constructor(radius = 1, orbitDistance = 1, orbitSpeed = 1, color = 0x0000ff){
		super(new THREE.Vector3(0, 0, 0),
			new THREE.RingGeometry(orbitDistance, orbitDistance + CIRCLE_THICKNESS, 100),
			new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide}));
		this.orbitDistance = orbitDistance;
		this.orbitSpeed = orbitSpeed;

		this.planet = new Planet(new THREE.Vector3(orbitDistance, 0, 0), radius, color);

		this.orbitState = 0; // number 0 - 2*pi for where the planet is in its orbit

		this.mesh.attach(this.planet.mesh);
		this.started = true;
	}
	update(deltaTime){
		if (this.started !== true){
			return;
		}

		console.assert(this.planet !== undefined);
		this.orbitState += this.orbitSpeed * (deltaTime / 1000);
		
		if (this.orbitState >= 2 * Math.PI){
			this.orbitState = this.orbitState - (2 * Math.PI);
		}

		this.planet.mesh.position.set(Math.cos(this.orbitState) * this.orbitDistance, Math.sin(this.orbitState) * this.orbitDistance, 0);
	}
}

export default PlanetOrbit;
