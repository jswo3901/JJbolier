* npm install on 'root', 'client', 'server'

##1. Client
* React
* React-DOM

##2. Server
* Express

##3. DEV(ROOT)
* babel(preset : react, env)
* babel-watch
* eslint(airbnb style)
* webpack

### 배포
1. "clean": delete 'build folder & dist folder' (on unix shell)
2. "build": build server file (preset:env, react)
3. "start": node build server

### 개발
1. "webpack": forntend bundling with watching
2. "lint": server eslinter (npm run lint -s)
3. "dev": running server on babel-watch

#### 추가할 사항
1. react router
2. webpack style loader

3. babel polyfill
4. webpack chunk && code splitting