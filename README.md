# Star System Generator

### Demo:
![DEMO](demo.gif)

## HOW TO RUN:

Clone the repo and open the project directory.
```
git clone https://github.com/leiDnedyA/interactive-exoplanet-predictor
cd interactive-exoplanet-predictor
./setup # installs dependencies for API and frontend
```

### Run in development mode
1. Run `./devstart` to start the API and frontend. The API and client should be started automatically, and your browser will open an instance of the client.

### Build and run
1. run `./buildstart`
2. Open your browser to http://localhost:3000/. If you've changed any of the ports in `.env`, you may have to open localhost with at different port.

# What happens in the model:
We implemented the Random Forest machine learning model mainly because it has the highest accuracy of all the models we tested. We used the scikit-learn library to implement the model. We used the data from the [Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=PS) to train the model. We used the following features to train the model:
- Stellar Mass
- Stellar Radius
- Stellar Density
- Stellar Temperature
- Stellar Metallicity
- Stellar Radial Velocity
- Stellar Surface Gravity
- Stellar Age

By training and testing the model with a 0.2 sample rate, we got a 92% (First Release) / 98% (Current Beta Version) accuracy score, which is expected to rise each monthly data update. In order to predict the number of planets a star could have, we used sklearn's RandomForest model.

## We are currently working on:
- Allowing multiple predictions to be made at once as a big data set.
- Adding more features to the model to increase accuracy.
- Updating the model with new data each month. (Completed)
- Comparing the accuracy of the model to other machine learning models
