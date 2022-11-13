import GameObject from "./GameObject";
import * as THREE from 'three';



class MeshGameObject extends GameObject {
    constructor(position, geometry, material) {
        super(position);
        this.mesh = new THREE.Mesh(geometry, material);
        this.position = this.mesh.position;
    }

    getDimensions() {
        let geometry = this.mesh.geometry;
        let dimensions = new THREE.Vector3(geometry.width, geometry.height, geometry.depth);
        return dimensions;
    }

}

export default MeshGameObject;