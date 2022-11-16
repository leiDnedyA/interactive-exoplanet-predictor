import Engine from "./Engine";
import BoxObject from "./game_objects/BoxObject";
import * as THREE from 'three';
import { GUI } from 'dat.gui/build/dat.gui.js';
import Star from "./game_objects/Star";
import Planet from "./game_objects/Planet";

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
    constructor(canvasRef) {
        super(canvasRef);

        this.gui = new GUI();
        this.guiVarFolder = this.gui.addFolder('Variables');
    
        const inputFields = [
            { label: 'Temperature (Kelvin)', name: 'temperature', min: 575, max: 29300 },
            { label: 'Radius', name: 'radius', min: 0.04, max: 83.8 },
            { label: 'Stellar Mass', name: 'stellar_mass', min: 2.78, max: 10.94 },
            { label: 'Metallicity', name: 'metallicity', min: -1, max: .48 },
            { label: 'Age', name: 'age', min: 0, max: 14.9 },
            { label: 'Density', name: 'density', min: 0.00401, max: 114 },
            { label: 'Radial Velocity', name: 'radial_velocity', min: -118, max: 244.99 },
            { label: 'Surface Gravity', name: 'surface_gravity', min: 1.3, max: 5.52 },
        ]

        this.starVariables = {};
        this.starVarData = {};

        this.planetCount = 2;
        this.planetObjects = [];

        for(let i in inputFields){
            let input = inputFields[i];

            this.starVariables[input.name] = (parseFloat(input.min) + 0);

            this.starVarData[input.name] = {
                label: input.label,
                min: input.min,
                max: input.max,
                name: input.name
            }
        }

        for(let key in this.starVariables){

            let varData = this.starVarData[key]
            this.guiVarFolder.add(this.starVariables, key, varData.min, varData.max)
                .onChange(()=>{
                    console.log(this.starVariables)
                });

        }


    }

    start() {

        //// Creating sample scene with rotating cube
        // const box = new BoxObject(new THREE.Vector3(0, 0, 0,), new THREE.Vector3(10, 10, 10));
        // this.addGameObject(box);
        // this.camera.position.z = 20;

        // this.camera.lookAt(box.position);

        // this.guiVarFolder.add(box.mesh.rotation, 'x', 0, Math.PI * 2);

        // this.addUpdateFunction((deltaTime) => {
        //     // box.mesh.rotation.x += deltaTime / 1000;
        // })

        this.star = new Star(new THREE.Vector3(0, 0, 0), this.starVariables);
        this.addGameObject(this.star);
        this.camera.position.z = 20;
        this.camera.position.x = 5;
        this.camera.lookAt(this.star.position);

        this.updatePlanets();

        super.start();

    }

    updatePlanets(){
        while (this.planetObjects.length != this.planetCount){
            if(this.planetCount > this.planetObjects.length){
                this.addPlanet();
            }else{
                this.removePlanet();
            }
        }
    }

    addPlanet(){
        let newPlanet = new Planet(new THREE.Vector3(3 * (this.planetObjects.length + 1), 0, 0), 0x00ffff, .25);
        this.planetObjects.push(newPlanet);
        this.addGameObject(newPlanet);
    }

    removePlanet(){
        let planet = this.planetObjects.pop();
        this.removeGameObject(planet.id);
    }

    end(){
        this.gui.destroy();
    }

}

export default WorldEngine;