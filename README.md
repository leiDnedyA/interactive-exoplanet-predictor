# Star System Generator

### Demo of Client:
![Demo of server interacting with client](https://media1.giphy.com/media/sKIkl2ERPk7vKhhq5E/giphy.gif?cid=790b76115b0e75f9b740ecd5d4cbb60e4dc7d09b8a13c228&rid=giphy.gif&ct=g)

## HOW TO RUN:
### Client
1. Install the latest version of Node.js and npm (node package manager)
2. Open a terminal window (make sure you're in the client directory)
3. Run ... npm install ... to install all required Node modules
4. Run ... npm start ..., and a browser window will pop up containing the webpage

### Server
1. Make sure that you have Python 3 installed
2. Install all of the dependencies in the dependency list (coming soon)
3. Open a terminal in the root directory of the project (./)
4. run ... python main.py ...

### Test Server
0. Make sure you have Python 3 installed
1. Open a terminal in the ./test_server directory
2. Run ... python main.py ...

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

By training and testing the model with a 0.2 sample rate, we got a 92% accuracy score, which is expected to rise each monthly data update. In order to predict the number of planets a star could have, we used sklearn's RandomForest model.

## We are currently working on:
- Allowing multiple predictions to be made at once as a big data set.
- Adding more features to the model to increase accuracy.
- Updating the model with new data each month.
- Comparing the accuracy of the model to other machine learning models
