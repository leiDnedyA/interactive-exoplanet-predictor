import Engine from "./Engine";
import BoxObject from "./game_objects/BoxObject";
import * as THREE from 'three';
import { GUI } from 'dat.gui/build/dat.gui.js';
import Star from "./game_objects/Star";
import Planet from "./game_objects/Planet";
import {requestPrediction, requestPresets} from "../networking/APIRequests";

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
            { label: 'Temperature (Kelvin)', name: 'temperature', min: 575, max: 29300, def: 5356.3},
            { label: 'Radius', name: 'radius', min: 0.04, max: 83.8, def: 0.86},
            { label: 'Stellar Mass', name: 'stellar_mass', min: 0, max: 23.56, def: 0.94},
            { label: 'Metallicity', name: 'metallicity', min: -1, max: .48, def: 0.14},
            { label: 'Age', name: 'age', min: 0, max: 14.9, def: 2.8},
            { label: 'Density', name: 'density', min: 0.00401, max: 276, def: 2.0640},
            { label: 'Radial Velocity', name: 'radial_velocity', min: -118, max: 244.99, def: 0.64},
            { label: 'Surface Gravity', name: 'surface_gravity', min: 1.3, max: 5.52, def: 1.3},
        ]

        this.starVariables = {};
        this.starVarData = {};

        this.presets = {};

        this.currentPreset = {
            'planetCount': null
        };

        this.planetCount = 2;
        this.planetObjects = [];

        for(let i in inputFields){
            let input = inputFields[i];

            this.starVariables[input.name] = (parseFloat(input.min) + 0);

            this.starVarData[input.name] = {
                label: input.label,
                min: input.min,
                max: input.max,
                default: input.def,
                name: input.name
            }
        }

        this.sliders = {};

        for(let key in this.starVariables){
            let varData = this.starVarData[key]
            let slider = this.guiVarFolder.add(this.starVariables, key, varData.min, varData.max);
            slider.setValue(varData.default);
            
            this.sliders[key] = slider;
        }


        this.gui.domElement.addEventListener('click', ()=>{
           this.fetchPlanetCount(); 
        })

        requestPresets()
            .then((json)=>{
                this.presets = json;

                let dropdownValues = Object.keys(this.presets).reduce(
                    (prev, val) => {
                        prev[`${val} Planet(s)`] = val;
                        return prev;
                    }, {}
                );
                
                this.gui.add(this.currentPreset, 'planetCount', dropdownValues)
                    .onChange(() => {
                        let preset = this.presets[this.currentPreset.planetCount];
                        
                        let keyTranslations = {
                            st_age: 'age',
                            st_dens: 'density',
                            st_met: 'metallicity',
                            st_logg: 'surface_gravity',
                            st_mass: 'stellar_mass',
                            st_rad: 'radius',
                            st_radv: 'radial_velocity',
                            st_teff: 'temperature'
                        }


                        for(let key in preset){
                            let val = preset[key];
                            this.starVariables[keyTranslations[key]] = val;
                            this.sliders[keyTranslations[key]].setValue(val);
                        }

                    });
            });

        this.fetchPlanetCount();

    }

    start() {

        this.star = new Star(new THREE.Vector3(0, 0, 0), this.starVariables);
	this.light = new THREE.PointLight( 0xffffff, 100, 0, 1.5);
        this.addGameObject(this.star);
        this.camera.position.z = 20;
        this.camera.position.x = 5;
        this.camera.lookAt(this.star.position);

	this.scene.add(this.light); // change this
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

    fetchPlanetCount() {
        requestPrediction(this.starVariables)
        .then(json=>{
            if(json.hasOwnProperty('number of planets')){
                this.planetCount = parseInt(json['number of planets'])
                this.updatePlanets();
            }else{
                console.log('WARNING: invalid JSON recieved from server...');
            }
        });
    }

    addPlanet(){
        let newPlanet = new Planet(.2, this.planetObjects.length + 1, 0x00ffff, .25);
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
