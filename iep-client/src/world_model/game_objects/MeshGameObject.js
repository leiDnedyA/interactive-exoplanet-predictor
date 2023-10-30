import GameObject from "./GameObject";
import * as THREE from 'three';



class MeshGameObject extends GameObject {
    constructor(position, geometry, material) {
        super(position);
        this.mesh = new THREE.Mesh(geometry, material);
    }

    getDimensions() {
        let geometry = this.mesh.geometry;
        let dimensions = new THREE.Vector3(geometry.width, geometry.height, geometry.depth);
        return dimensions;
    }

    update(deltaTime){
        this.mesh.position.x = this.position.x;
        this.mesh.position.y = this.position.y;
        this.mesh.position.z = this.position.z;
    }

}

export default MeshGameObject;