import * as THREE from 'three';

class InputHandler {
	constructor(scene, camera, outlinePass) {
		this.scene = scene;
		this.camera = camera;

		this.raycaster = new THREE.Raycaster();
		this.pointer = new THREE.Vector2();

		window.addEventListener('pointermove', this.onPointerMove.bind(this));

		this.outlinePass = outlinePass;
	}

	onPointerMove(event) {
		this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
		this.pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
	}

	update() {
		this.raycaster.setFromCamera(this.pointer, this.camera);

		const intersects = this.raycaster.intersectObjects(this.scene.children);

		if (intersects.length > 0) {
			this.outlinePass.selectedObjects = [intersects[0].object];
		}

	}
}

export default InputHandler;
