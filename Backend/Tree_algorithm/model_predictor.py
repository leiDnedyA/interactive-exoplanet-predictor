import joblib
from sys import platform

def Predict_Simple(x):
    # Load the model
    planet_predictor = joblib.load(('Backend\Tree_algorithm\Saved_models\exoplanet_predictor.joblib' if platform == "win32" else 'Backend/Tree_algorithm/Saved_models/exoplanet_predictor.joblib'))
    return planet_predictor.predict(x)
