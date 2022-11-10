import './RangeForm.css'
import React, { useState } from "react";

/**
 * 
 * Shape of inputFields:
 * [
 *      {
 *          'label': string,
 *          'name': string,
 *          'min': number,
 *          'max': number,
 *      }
 * ]
 * 
 */
// const RangeForm = ({ inputFields, className, onSubmit }) => {
//     const fieldElements = []

//     //creates a stateful object containing the inputs and their current values
//     const [inputValues, setInputValues] = useState(
//         inputFields.reduce((prev, input) => {
//             prev[input.name] = input.min;
//             return prev;
//         }, {})
//     )

//     for (let i in inputFields) {
//         //styles string in different ways
//         let field = inputFields[i];
//         let labelText = field.label;

//         //creates elements based on string
//         let label = <label key={`label${i}`} for={field.name}>{labelText}:</label>
//         let output = <output>{inputValues[field]}</output>
//         let input = <input
//             key={`input${i}`} className="input text-input" name={field.name} type="range" 
//             defaultValue={field.min} min={field.min} max={field.max} step={(field.max - field.min) / 25}
//             onChange={(e)=>{
//                 setInputValues((inputVals)=>{
//                     inputVals[field.name] = parseFloat(e.target.value);
//                     return inputVals;
//                 });

//             }}
//             />

//         //adds elements to fieldElements list
//         fieldElements.push(label);
//         fieldElements.push(input);
//         fieldElements.push(output);
//     }

//     return <form className={className ? className : ''} onSubmit={onSubmit}>
//         {fieldElements}
//         <input className="input submit-button" type="submit" value="Submit" />
//     </form>
// }

class RangeForm extends React.Component {

    constructor({ className, inputFields, onSubmit }) {
        super({ className, inputFields, onSubmit });

        this.fieldElements = []

        this.state = inputFields.reduce((prev, input) => {
            prev[input.name] = input.min;
            return prev;
        }, {});

        for (let i in inputFields) {
            //styles string in different ways
            let field = inputFields[i];
            let labelText = field.label;

            //creates elements based on string
            let label = <label key={`label${i}`} htmlFor={field.name}>{labelText}:</label>
            // let output = <output key={`output${i}`}>{this.state[field.name]}</output>
            let input = <input
                key={`input${i}`} className="input text-input" name={field.name} type="range"
                defaultValue={field.min} min={field.min} max={field.max} step={(field.max - field.min) / 100}
                onChange={(e) => {
                    let newState = {}
                    newState[field.name] = parseFloat(e.target.value);
                    this.setState(newState);
                }}
            />

            //adds elements to fieldElements list
            this.fieldElements.push(label);
            this.fieldElements.push(input);
            // this.fieldElements.push(output);
        }

    }

    render() {

        return <form className={this.props.className ? this.props.className : ''} onSubmit={this.props.onSubmit}>
            {   //Filters through elements and adds text stating the current values
                this.fieldElements.reduce((prev, curr, i) => {
                    if (curr.type == 'input') {
                        prev.push(
                            <div className="range-input-div" key={`input${i}`}>
                                {curr}
                                <output key={`output${i}`}>{this.state[curr.props.name]}</output>
                            </div>
                        )
                    }else{
                        prev.push(curr);
                    }
                    return prev
                }, [])}
            <input className="input submit-button" type="submit" value="Submit" />
        </form>
    }

}

export default RangeForm
