import * as THREE from 'three';

class WorldEngine {
    constructor(canvasRef) {

        this.canvas = canvasRef.current;

        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera(75, this.canvas.height / this.canvas.width, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });

    }

    render() {

        this.renderer.render(this.scene, this.camera);

    }

    update() {

        this.render();

        requestAnimationFrame(this.update);
    }

    start() {
        //creating sample scene
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);

        this.camera.position.z = 5;

        requestAnimationFrame(this.update);

    }

}


export default WorldEngine