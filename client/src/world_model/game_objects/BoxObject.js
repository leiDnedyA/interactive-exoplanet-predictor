import GameObject from "./GameObject";
import * as THREE from 'three';
import MeshGameObject from "./MeshGameObject";

class BoxObject extends MeshGameObject{
    constructor(position = new THREE.Vector3(0, 0, 0), dimensions = new THREE.Vector3(1, 1, 1), color = 0x00ffff){
        super(position, new THREE.BoxGeometry(dimensions.x, dimensions.y, dimensions.z), new THREE.MeshBasicMaterial({color: color}));
    }
}

export default BoxObject;