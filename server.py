import socketserver
from urllib.parse import urlparse, parse_qs
from http.server import BaseHTTPRequestHandler
from Backend.Tree_algorithm import model_predictor


_hostName = "localhost"
_serverPort = 3001

class _Server(BaseHTTPRequestHandler):
    def do_GET(self):
        
        url = self.path
        print(url)
        parsedUrl = urlparse(url)

        responseBody = {}

        if parsedUrl.path == '/predict':
            # parsing request URL
            data = parse_qs(parsedUrl.query)
            # note: data recieved in form {'key': ['value']}
            
            # reformatting data:
            data = {k: float(v[0]) for k, v in data.items()}

        # Create a list with the 8 values in data.
        x = [data['temperature'], data['radius'], data['stellar_mass'], data['metallicity'], data['age'], data['density'], data['radial_velocity'], data['surface_gravity']]
        # x = [data['1'], data['2'], data['3'], data['4'], data['5'], data['6'], data['7'], data['8']]
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        # Send the response message to the request with the prediction.
        self.wfile.write(bytes(str('{"number of planets":"' + str(model_predictor.Predict_Simple([x])[0]) +'"}'), "utf-8"))


def startServer(port):
    httpd = socketserver.TCPServer(("", port), _Server)
    print(f'Test server started on port {port}...')
    httpd.serve_forever()