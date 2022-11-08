import pandas as pd
import joblib

# Args needed for the function, the values for x as a list:
simple_args = ['stellareffectivetemp', 'stellarradius', 'stellarmass', 'stellarmetallicity', 'stellarage', 'stellardensity', 'stellarradialvelocity', 'stellsurfacegravity']

# Load the model
planet_predictor = joblib.load('Backend\Tree_algorithm\Saved_models\exoplanet_predictor.joblib')

def Predict_Simple(x):
    return planet_predictor.predict(x)
