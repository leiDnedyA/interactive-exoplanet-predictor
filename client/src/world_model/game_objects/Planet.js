import * as THREE from 'three';
import MeshGameObject from './MeshGameObject';

class Planet extends MeshGameObject{
    constructor(position, radius = 1, color = 0x0000ff){
        super(position,
            new THREE.SphereGeometry(radius),
            new THREE.MeshStandardMaterial({color: color}));
    }
}

export default Planet;
