```
myApp/
  webpack.config.js -> 웹팩설정
  package.json -> 개발용 npm 패키지

  server/
      package.json -> 서버 npm
      src/ -> 서버코드
      build/ -> 서버코드 빌드
  
  client/
      package.json -> 클라이언트 npm
      src/ -> 클라이언트 코드

  public/
    index.html
    dist/ -> 클라이언트 코드 번들
    
```

## Client
* React
* React-DOM

## Server
* Express

## DEV(ROOT)
* babel(preset : react, env)
* webpack
* nodemon
* eslint (npm install -g eslint)

## 'root', 'client', 'server'에서 각각 npm install

## npm script
1. "build": 클라이언트 파일 번들링
2. "start": 서버 실행 (nodemon with babel-node)

* "clean": 빌드, 번들링 파일 삭제(유닉스 쉘에서 작동)

#### 추가할 사항
1. react router
2. webpack style loader
3. babel polyfill
4. webpack chunk && code splitting