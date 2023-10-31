from src.server import app

if __name__ == '__main__':
    port = 3001
    app.run(host='0.0.0.0', port=port)
