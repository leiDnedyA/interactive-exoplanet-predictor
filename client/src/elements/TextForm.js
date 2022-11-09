
//textFields should be a list of strings, format: ['word_word', 'second_element', ...]
const TextForm = ({ textFields, className, onSubmit }) => {
    
    const fieldElements = []

    for(let i in textFields){
        //styles string in different ways
        let field = textFields[i];
        let text = field.replace('_', ' ');
        let capitalizedText = text.split(' ').map(v=>v[0].toUpperCase() + v.substring(1)).join(' ');

        //creates elements based on string
        let label = <label key={`label${i}`} for={field}>{capitalizedText}:</label>
        let input = <input key={`input${i}`} className="input text-input" name={field} type="text" placeholder={`${text} of star...`} />
        
        //adds elements to fieldElements list
        fieldElements.push(label);
        fieldElements.push(input);
    }

    return <form className={className ? className : ''} onSubmit={onSubmit}>
        {fieldElements}
        <input className="input submit-button" type="submit" value="Submit" />
    </form>
}

export default TextForm