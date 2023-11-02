#!/usr/bin/env bash

bash build.sh

bash api.sh & xdg-open http://localhost:3001/

exit 0
