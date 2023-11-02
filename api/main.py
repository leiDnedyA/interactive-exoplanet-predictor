from os import environ

from src.server import app

if __name__ == '__main__':
    DEBUG_MODE = True if environ['DEBUG_MODE'] == 'true' else False
    port = environ['PORT']
    app.run(host='0.0.0.0', port=port, debug=DEBUG_MODE)
