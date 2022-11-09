
//textFields should be a list of strings
const TextForm = ({ textFields, className, onSubmit }) => {
    
    const fieldElements = []

    for(let i in textFields){
        let field = textFields[i];
        let label = <label key={`label${i}`} for={field}>{field}:</label>
        let input = <input key={`input${i}`} className="input text-input" name={field} type="text" placeholder={`${field} of star...`} />
        fieldElements.push(label);
        fieldElements.push(input);
    }

    return <form className={className ? className : ''} onSubmit={onSubmit}>
        {fieldElements}
        <input className="input submit-button" type="submit" value="Submit" />
    </form>
}

export default TextForm