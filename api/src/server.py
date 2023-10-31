from flask import Flask, request
from Backend.Tree_algorithm import model_predictor, preset
from Backend.Tree_algorithm.train_predictor import true_df

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, world'

@app.route('/presets')
def get_presets():
    return preset.allPlanets(true_df)

@app.route('/predict')
def prediction():
    args = request.args
    data = [args.get('temperature'), args.get('radius'), args.get('stellar_mass'), args.get('metallicity'), args.get('age'), args.get('density'), args.get('radial_velocity'), args.get('surface_gravity')]
    return {
                'number of planets': str(model_predictor.Predict_Simple([data])[0])
            }

if __name__ == '__main__':
    app.run()
