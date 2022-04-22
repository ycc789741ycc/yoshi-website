if [ "$DEV" = "true" ]
    then
        echo "Start web with development environment."
        yarn run start --host=0.0.0.0 --port=3000
else
    echo "Start web with production environment."
    yarn run serve --build --port 3000 --host 0.0.0.0
fi
