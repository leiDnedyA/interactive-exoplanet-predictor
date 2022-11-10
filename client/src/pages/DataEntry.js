import './DataEntry.css';
import { useNavigate } from 'react-router-dom';
import TextForm from '../elements/TextForm'
import RangeForm from '../elements/RangeForm';
import { useState } from 'react';

const DataEntry = () => {

    const navigate = useNavigate();

    const [rangeEnabled, setRangeEnabled] = useState(true);

    //Handles form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target)

        const rawFormData = new FormData(e.target)
        const formData = Object.fromEntries(rawFormData.entries());

        console.log(formData)

        // //Test data
        // x = [data['temperature'], data['radius'], data['stellar_mass'], data['metallicity'], data['age'], data['density'], data['radial_velocity'], data['surface_gravity']]

        // let formData = {
        //     'temperature': 1,
        //     'radius': 50,
        //     'stellar_mass': 400,
        //     'metallicity': 10,
        //     'age': 10,
        //     'density': 11,
        //     'radial_velocity': 123,
        //     'surface_gravity': 11
        // }

        // let formData = {

        // }

        // for(let i in Object.keys(formData0)){
        //     let key = Object.keys(formData0)[i]
        //     formData[parseInt(i)+1] = formData0[key];

        // }

        //makes sure data is valid
        for (let i in formData) {
            if (isNaN(parseInt(formData[i]))) {
                alert('ERROR: Invalid Input');
                return;
            }
        }

        const request = new Request('/predict?' + new URLSearchParams(
            formData
        ));

        fetch(request)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                let data = [];

                for (let i in Object.keys(json)) {
                    let key = Object.keys(json)[i];
                    data.push({
                        "property": key,
                        "value": json[key]
                    })
                }

                navigate('/predictions', { state: { data: data } });

            });
    }

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

    return <div className="DataEntry flex-card">
        <h3>Star Data</h3>
        {/* <form className="data-entry-form" onSubmit={handleSubmit}>
            <label for="mass">Mass:</label>
            <input id="massInput" className="input text-input" name="mass" type="text" placeholder="mass of star..." />
            <label for="circumference">Circumference:</label>
            <input id="circumference-input" className="input text-input" name="circumference" type="text" placeholder="circumference of star..." />
            <input className="input submit-button" type="submit" value="Submit" />
        </form> */}

        <div>

            <input type="checkbox" name="useRange" defaultChecked onChange={()=>{setRangeEnabled(v=>!v)}}/><label htmlFor='useRange'>Use Range</label>

        </div>

        {rangeEnabled ? <RangeForm
            className="data-entry-form"
            inputFields={inputFields}
            onSubmit={handleSubmit}
        /> : <TextForm
            className="data-entry-form"
            textFields={[
                'temperature',
                'radius',
                'stellar_mass',
                'metallicity',
                'age',
                'density',
                'radial_velocity',
                'surface_gravity',]}
            onSubmit={handleSubmit}
        />}



    </div>
}


export default DataEntry