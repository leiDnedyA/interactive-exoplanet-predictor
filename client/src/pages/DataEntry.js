import './DataEntry.css';
import {useNavigate} from 'react-router-dom';

const DataEntry = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const http = new XMLHttpRequest();
        http.open("GET", '/predict');
        http.send();

        http.onreadystatechange = (e) => {
            let responseJSON = JSON.parse(http.responseText);
            console.log(responseJSON);

            let data = []

            for (let i in Object.keys(responseJSON)){
                let key = Object.keys(responseJSON)[i];
                data.push({
                    "property": key,
                    "value": responseJSON[key]
                })
            }

            navigate('/predictions', {state: {data: data}});
        }
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