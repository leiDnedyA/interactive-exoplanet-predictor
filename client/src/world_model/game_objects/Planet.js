import * as THREE from 'three';
import MeshGameObject from './MeshGameObject';

class Planet extends MeshGameObject{
    constructor(radius = 1, orbitDistance = 1, color = 0x0000ff){
        super(new THREE.Vector3(3 * orbitDistance),
            new THREE.SphereGeometry(radius),
            new THREE.MeshStandardMaterial({color: color}));
    }
}

export default Planet;
