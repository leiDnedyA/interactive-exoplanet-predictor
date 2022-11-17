import MeshGameObject from "./MeshGameObject";
import * as THREE from 'three';

/* Class representing a Star GameObject */
class Star extends MeshGameObject{
    /**
     * 
     * @param {THREE.Vector3} position position of gameObject in scene
     * @param {Object} data data about the star
     * @param {string} data.name name of the star
     * @param {number} data.temperature temperature of star
     * @param {number} data.radius radius of star
     * @param {number} data.stellar_mass mass of star
     * @param {number} data.metallicity metallicity of star
     * @param {number} data.age age of star
     * @param {number} data.density density of star
     * @param {number} data.radial_velocity radial velocity of star
     * @param {number} data.surface_gravity surface gravity of star
     */
    constructor(position, data){
        super(position, 
            new THREE.SphereGeometry(1),
            new THREE.MeshBasicMaterial({color: 0xffff00}));
        this.data = data;
    }

    setColorFromRGB(rgb){

        let [r, g, b] = rgb;

        function valueToHex(c) {
            return c.toString(16);
        }

        const hexString = valueToHex(r) + valueToHex(g) + valueToHex(b);
        console.log(hexString)
        const hexNumber = Number("0x" + hexString)
        this.mesh.material.color.setHex(hexNumber);
    }
}

export default Star;