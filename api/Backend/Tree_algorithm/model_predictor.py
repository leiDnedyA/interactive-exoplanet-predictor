import joblib
from ..Utils import directory_manager

def Predict_Simple(x):
    # Load the model
    planet_predictor = joblib.load((directory_manager.getDirectory('Backend/Tree_algorithm/Saved_models/exoplanet_predictor.joblib')))
    return planet_predictor.predict(x)
