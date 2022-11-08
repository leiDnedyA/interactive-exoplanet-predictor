import socketserver
import json
from http.server import BaseHTTPRequestHandler

import time

_hostName = "localhost"
_serverPort = 3001

class _Server(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/predict':
            print('predict')
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        sample_data = {
            "name": "Alpha Centauri-B",
            "mass": "500",
            "circumference": "600"
        }
        self.wfile.write(json.dumps(sample_data).encode("utf-8"))

def startServer(port):
    httpd = socketserver.TCPServer(("", port), _Server)
    httpd.serve_forever()
