
const requestPrediction = async (data) => {
    
    const request = new Request('/predict?' + new URLSearchParams(
        data
    ));
    
    return new Promise((resolve, rej) => {
        fetch(request)
            .then((res) => {resolve(res.json())})
    });

}

export default requestPrediction;