import Engine from "./Engine";
import BoxObject from "./game_objects/BoxObject";
import * as THREE from 'three';


/**
 * Features of WorldEngine Class
 * contains all features of Engine
 * 
 * - updatesbased on new queries to API
 * - gameObjects contained in Engine are based on data from API
 * - responds to DAT.gui updates
 * 
 */
class WorldEngine extends Engine {
    constructor(canvasRef, worldData = {}) {
        super(canvasRef);
    }

    start() {

        // // Creating sample scene with rotating cube
        // const box = new BoxObject(new THREE.Vector3(0, 0, 0,), new THREE.Vector3(10, 10, 10));
        // this.addGameObject(box);
        // this.camera.position.z = 20;

        // this.camera.lookAt(box.position);

        // this.addUpdateFunction((deltaTime) => {
        //     box.mesh.rotation.x += deltaTime / 1000;
        // })

        super.start();

    }

}

export default WorldEngine;