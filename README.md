# on linux react app boilerplate

## npm install on
1. root
2. client
3. server

## npm script
1. "clean": "rm server/build -r -f && rm public/dist -r -f",
2. "build": "babel server/src --out-dir server/build",
3. "start": "supervisor server/src/server.js",
* not compiled by babel
4. "dev": "webpack --watch"

## pre install -g
1. npm install -g babel-cli
2. npm install -g supervisor