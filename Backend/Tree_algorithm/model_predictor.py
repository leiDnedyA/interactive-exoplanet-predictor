import pandas as pd
import joblib

# Args needed for the function, the values for x as a list:
simple_args = ['stellareffectivetemp', 'stellarradius', 'stellarmass', 'stellarmetallicity', 'stellarage', 'stellardensity', 'stellarradialvelocity', 'stellsurfacegravity']

# Load the model
planet_predictor = joblib.load('Backend\Tree_algorithm\Saved_models\exoplanet_predictor.joblib')

def Predict_Simple(x):
    predTree = planet_predictor.predict([x])
    return print(f"The number of planets that the system you entered has is: |{predTree}| With 92% accuracy.")

# Use http to receive the values from the frontend.
