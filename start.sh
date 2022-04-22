if [ "$DEV" = "true" ]
    then
        echo "Start web with development environment."
        npx docusaurus start --host=0.0.0.0 --port=3000
else
    echo "Start web with production environment."
    npm run serve --build=true --host=0.0.0.0 --port=3000
fi
