import requests

# Get the response from the server with prediction
response = requests.get('http://localhost:3001/predict?1=0.0&2=0.0&3=0.0&4=0.0&5=0.0&6=0.0&7=0.0&8=0.0')

# Print the response
print(response.text)
