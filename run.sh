echo "Starting server and client..."
gnome-terminal -e 'sh -c "python3 main.py"'
gnome-terminal -e 'sh -c "cd client; npm start"'