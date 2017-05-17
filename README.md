npm install
1. root
2. client
3. server

    "clean": "rm server/build -r -f && rm public/dist -r -f",
    "build": "babel server/src --out-dir server/build",
    "start": "babel-watch server/src/server.js",
    "dev": "webpack --watch"