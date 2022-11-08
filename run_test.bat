echo "Starting test server and client..."
start cmd /k "cd test_server & python main.py"
start cmd /c "cd client & npm start"