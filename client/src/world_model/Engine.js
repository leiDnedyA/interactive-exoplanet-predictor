/*
 * https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_outline.html
 *
 * See the above link for reference on outline effect rendering.
 *
 * */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';



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
		this.composer = new EffectComposer(this.renderer);

		this.outlinePass = new OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), this.scene, this.camera );
		this.renderPass = new RenderPass( this.scene, this.camera );
		this.outputPass = new OutputPass();

		this.outlinePass.edgeStrength = 5;
		this.outlinePass.edgeGlow = 1;
		this.outlinePass.edgeThickness = 2;
		this.outlinePass.pulsePeriod = 1;

		this.composer.addPass(this.renderPass);
		this.composer.addPass(this.outlinePass);
		this.composer.addPass(this.outputPass);

		this.controls = new OrbitControls(this.camera, this.renderer.domElement);

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
		this.controls.update();
		this.render();
		this.composer.render();
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
		if (gameObject.hasOwnProperty('childMeshes')) {
			for (let mesh of gameObject.childMeshes) {
				this.scene.add(mesh);
			}
		}

	}

	removeGameObject(id) {

		if (this.gameObjects.hasOwnProperty(id)) {

			if(this.gameObjects[id].hasOwnProperty('mesh')){
				this.scene.remove(this.gameObjects[id].mesh);
			}

			if(this.gameObjects[id].hasOwnProperty('childMeshes')) {
				for (let mesh of this.gameObjects[id].childMeshes) {
					this.scene.remove(mesh);
				}
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
		this.controls.update();
		requestAnimationFrame(this.update.bind(this));

		const handleResize = () => {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();

			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;

			this.renderer.setSize(window.innerWidth, window.innerHeight);
		}

		handleResize();

		window.addEventListener('resize', handleResize);
	}

}


export default Engine
