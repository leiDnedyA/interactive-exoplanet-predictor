import './DataEntry.css';
import { useNavigate } from 'react-router-dom';

const DataEntry = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const rawFormData = new FormData(e.target)
        const formData = Object.fromEntries(rawFormData.entries());

        for(let i in formData){
            if(isNaN(parseInt(formData[i]))){
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

    return <div className="data-entry">
        <h3>Data About Star</h3>
        <form className="data-entry-form" onSubmit={handleSubmit}>
            <label for="mass">Mass:</label>
            <input id="massInput" className="input text-input" name="mass" type="text" placeholder="mass of star..." />
            <label for="circumference">Circumference:</label>
            <input id="circumference-input" className="input text-input" name="circumference" type="text" placeholder="circumference of star..." />
            <input className="input submit-button" type="submit" value="Submit" />
        </form>
    </div>
}


export default DataEntry