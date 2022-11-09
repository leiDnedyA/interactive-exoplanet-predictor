import pandas as pd
import joblib

# Load the model
planet_predictor = joblib.load('Backend\Tree_algorithm\Saved_models\exoplanet_predictor.joblib')

def Predict_Simple(x):
    return planet_predictor.predict(x)
