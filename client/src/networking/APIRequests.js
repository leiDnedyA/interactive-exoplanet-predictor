
const requestPrediction = async (data) => {
    
    const request = new Request('/predict?' + new URLSearchParams(
        data
    ));
    
    return new Promise((resolve, rej) => {
        fetch(request)
            .then((res) => {resolve(res.json())})
    });

}

const requestPresets = async () => {

    const request = new Request('/presets');

    return new Promise((resolve, rej) => {
        fetch(request)
            .then((res) => {
                resolve(res.json())
            });
    })

}

export {requestPrediction, requestPresets};