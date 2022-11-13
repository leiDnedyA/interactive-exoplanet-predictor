import * as THREE from 'three';

/**
 * Engine Class
 * 
 * Features:
 * - stores object containing gameObjects with UID keys
 * - stores object containing update functions with UID keys
 * - render function
 * - update function (updates gameObjects => runs all update functions => calls render function)
 * 
 */
class Engine {
    constructor(canvasRef, gameObjects = {}, updateFunctions = {}) {

        this.canvas = canvasRef.current;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.lastTime = Date.now();

        this.gameObjects = gameObjects;
        this.updateFunctions = updateFunctions;

    }

    update() {

        //setting deltaTime
        let now = Date.now();
        let deltaTime = now - this.lastTime;
        this.lastTime = now;

        for (let i in this.gameObjects) {
            this.gameObjects[i].update(deltaTime);
        }

        for (let i in this.updateFunctions) {
            this.updateFunctions[i](deltaTime);
        }

        requestAnimationFrame(this.update.bind(this));
        this.render();
    }

    addGameObject(gameObject) {
        let id = gameObject.id;

        if (this.gameObjects.hasOwnProperty(id)) {
            console.log(`WARNING: gameObject with ID: ${id} is being overwritten because addGameObject has been passed another object with the same ID.`);
        }

        this.gameObjects[id] = gameObject;
        if(gameObject.hasOwnProperty('mesh')){
            this.scene.add(gameObject.mesh);
        }

    }

    removeGameObject(id) {

        if (this.gameObjects.hasOwnProperty(id)) {

            if(this.gameObjects[id].hasOwnProperty('mesh')){
                this.scene.remove(this.gameObjects[id].mesh);
            }

            delete this.gameObjects[id];

        } else {

            console.log(`WARNING: removeGameObject() was passed the ID: ${id}, but a gameObject with that ID does not exist.`);

        }

    }

    addUpdateFunction(func, id) {
        if (this.updateFunctions.hasOwnProperty(id)) {
            console.log(`WARNING: update function with ID: ${id} is being overwritten because addUpdateFunction() was passed a function with the same ID.`);
        }

        this.updateFunctions[id] = func;
    }

    removeUpdateFunction(id) {
        if (this.updateFunctions.hasOwnProperty(id)) {
            delete this.updateFunctions[id];
        } else {
            console.log(`WARNING: removeUpdateFunction() was passed the ID: ${id}, but an update function with that ID does not exist.`);
        }
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    start() {
        requestAnimationFrame(this.update.bind(this));
    }

}


export default Engine