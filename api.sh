#!/usr/bin/env bash

export DEBUG_MODE=false

while getopts "hd" option; do
	case $option in
		h|help)
			echo "Usage:"
			echo "\"./api.sh\" Runs the API normally"
			echo "\"./api.sh -d\" Runs the API in debug mode"
			echo "\"./api.sh -h\" Shows this help menu"
			exit 0
			;;
		d) # run in debug mode
			export DEBUG_MODE=true
			;;
	esac
done

source venv/bin/activate
cd api
python3 -m main

exit 0