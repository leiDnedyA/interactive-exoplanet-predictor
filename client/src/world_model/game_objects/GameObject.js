import * as THREE from 'three';
import generateId from '../math/generateId';

const idLength = 15;

/**
 * Features of a GameObject:
 * 
 * - generates and stores a random ID
 * - update function
 * - stores position
 * - position is read-only, and can be set with the setPosition() method
 * 
 */
class GameObject{
    constructor(position = new THREE.Vector3(0, 0, 0)){
        this.position = position;
        this.id = generateId(idLength);
    }

    update(deltaTime){
        
    }

    setPosition(position){
        this.position = position;
    }

}

export default GameObject