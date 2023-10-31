const requestPrediction = async (data) => {
    
    const response = await fetch('/api/predict?' + new URLSearchParams(
        data
    ));
    
    const responseJSON = await response.json();

    return responseJSON;
}

const requestPresets = async () => {

    const response = await fetch('/api/presets');
    const responseJSON = await response.json();

    return responseJSON;

}

export {requestPrediction, requestPresets};
