import './DataEntry.css'

const DataEntry = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: do stuff with data
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