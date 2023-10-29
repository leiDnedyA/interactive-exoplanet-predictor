# Star System Generator

### Demo of Client Model:
![Demo of server user interacting with model interface](https://media3.giphy.com/media/nix4uXdw3cUvqcy6Dh/giphy.gif?cid=790b7611daf1c8c5a60014aca7ad6717d5ef551f886a5918&rid=giphy.gif&ct=g)


### Demo of Client Form:
![Demo of server interacting with client](https://media1.giphy.com/media/sKIkl2ERPk7vKhhq5E/giphy.gif?cid=790b76115b0e75f9b740ecd5d4cbb60e4dc7d09b8a13c228&rid=giphy.gif&ct=g)


## HOW TO RUN:

Clone the repo and open the project directory.
```
git clone https://github.com/leiDnedyA/interactive-exoplanet-predictor
cd interactive-exoplanet-predictor
```

### Client
1. Open the client directory by running `cd client`
2. Install NPM dependencies by running `npm i` (first you'll need NPM installed on your machine)
3. Run the client in a dev server with `npm start`

### Server
1. In the main project directory, run `source venv/src/activate` to load the python virtual environment
2. Install Python dependencies by running `pip3 install -r requirements.txt`
3. CD into the `/api` directory by running `cd api`
4. Start the server with `python3 -m main`

# What happens in the backend:
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
