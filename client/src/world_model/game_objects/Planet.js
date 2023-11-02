import * as THREE from 'three';
import MeshGameObject from './MeshGameObject';

class Planet extends MeshGameObject{
    constructor(position, color = 0x0000ff, radius = 1){
        super(position,
            new THREE.SphereGeometry(radius),
            new THREE.MeshStandardMaterial({color: color}));
    }
}

export default Planet;
