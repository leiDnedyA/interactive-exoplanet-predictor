import socketserver
import json
import random
import math
from urllib.parse import urlparse, parse_qs
from http.server import BaseHTTPRequestHandler

import time

_hostName = "localhost"
_serverPort = 3001

_names = ['Alpha Centauri-B', 'Beetlejuce', 'The Sun', 'Cool Star Name']


class _Server(BaseHTTPRequestHandler):
    def do_GET(self):
        
        url = self.path
        parsedUrl = urlparse(url)

        responseBody = {}

        if parsedUrl.path == '/predict':
            # parsing request URL
            data = parse_qs(parsedUrl.query)
            # note: data recieved in form {'key': ['value']}
            
            # reformatting data:
            data = {k: float(v[0]) for k, v in data.items()}
            
            responseBody = {
                "name": random.choice(_names),
                "density": str(float(data['mass']) * 50),
                "number of planets": str(math.floor(float(data['circumference']) / 3))
            }

        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(responseBody).encode("utf-8"))

def startServer(port):
    httpd = socketserver.TCPServer(("", port), _Server)
    print(f'Test server started on port {port}...')
    httpd.serve_forever()
