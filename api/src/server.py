from flask import Flask, request, send_from_directory
from Backend.Tree_algorithm import model_predictor, preset
from Backend.Tree_algorithm.train_predictor import true_df

app = Flask(__name__)

BUILD_PATH = '../../client/dist'

@app.route('/')
def home():
    return send_from_directory(BUILD_PATH, 'index.html')

@app.route('/<path:path>')
def send_report(path):
    return send_from_directory(BUILD_PATH, path)

@app.route('/api/presets')
def get_presets():
    return preset.allPlanets(true_df)

@app.route('/api/predict')
def prediction():
    args = request.args
    data = [args.get('temperature'), args.get('radius'), args.get('stellar_mass'), args.get('metallicity'), args.get('age'), args.get('density'), args.get('radial_velocity'), args.get('surface_gravity')]
    return {
                'number of planets': str(model_predictor.Predict_Simple([data])[0])
            }

if __name__ == '__main__':
    app.run()
