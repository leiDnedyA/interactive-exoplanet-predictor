import './DataEntry.css';
import { useNavigate } from 'react-router-dom';
import TextForm from '../elements/TextForm'

const DataEntry = () => {

    const navigate = useNavigate();

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

    return <div className="DataEntry flex-card">
        <h3>Star Data</h3>
        {/* <form className="data-entry-form" onSubmit={handleSubmit}>
            <label for="mass">Mass:</label>
            <input id="massInput" className="input text-input" name="mass" type="text" placeholder="mass of star..." />
            <label for="circumference">Circumference:</label>
            <input id="circumference-input" className="input text-input" name="circumference" type="text" placeholder="circumference of star..." />
            <input className="input submit-button" type="submit" value="Submit" />
        </form> */}
        <TextForm
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
        />
    </div>
}


export default DataEntry