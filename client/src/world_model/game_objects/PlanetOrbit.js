import * as THREE from 'three';
import Planet from './Planet';
import MeshGameObject from './MeshGameObject';

const CIRCLE_THICKNESS = .05;

class PlanetOrbit extends MeshGameObject{
    constructor(radius = 1, orbitDistance = 1, color = 0x0000ff){
	super(new THREE.Vector3(0, 0, 0),
		new THREE.RingGeometry(orbitDistance, orbitDistance + CIRCLE_THICKNESS, 100),
		new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide}));
	this.planet = new Planet(new THREE.Vector3(orbitDistance, 0, 0), radius, color);
	this.mesh.attach(this.planet.mesh);
    }
}

export default PlanetOrbit;
