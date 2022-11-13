import * as THREE from 'three';

class WorldEngine {
    constructor(canvasRef) {

        this.canvas = canvasRef.current;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.lastTime = Date.now();
    }

    update() {

        //setting deltaTime
        let now = Date.now();
        let deltaTime = now - this.lastTime;
        this.lastTime = now;

        

        requestAnimationFrame(this.update.bind(this));
        this.render();
    }


    render() {

        this.renderer.render(this.scene, this.camera);

    }

    start() {
        //creating sample scene
        const geometry = new THREE.BoxGeometry(10, 10, 10);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        this.camera.position.z = 20;
        this.camera.lookAt(this.cube.position)

        requestAnimationFrame(this.update.bind(this));

    }

}


export default WorldEngine