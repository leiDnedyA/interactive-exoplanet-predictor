import joblib

def Predict_Simple(x):
    # Load the model
    planet_predictor = joblib.load('Backend\Tree_algorithm\Saved_models\exoplanet_predictor.joblib')
    return planet_predictor.predict(x)
