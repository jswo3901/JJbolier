```
myApp/
  webpack.config.js -- 웹팩설정
  package.json -- dev 패키지

  server/
      package.json -- server 패키지
      src/ -- 서버코드
      build/ -- 서버코드 빌드
  
  client/
      package.json -- client 패키지
      src/ -- 클라이언트 코드

  public/
    index.html
    dist/ -- 클라이언트 코드 번들
    
```

## Client
* React
* React-DOM

## Server
* Express

## DEV(ROOT)
* babel(preset : react, env)
* babel-watch
* eslint(airbnb style)
* webpack

## 'root', 'client', 'server'에서 각각 npm install

### 배포
1. "clean": 빌드, 번들링 파일 삭제(유닉스 쉘에서 작동)
2. "build": 서버파일 빌드 (preset:env, react)
3. "start": 서버 시작(node)

### 개발
1. "webpack": 클라이언트 파일 번들링
2. "lint": 서버 린트 (npm run lint -s 로 실행해야 오류 없음)
3. "dev": 서버 실행 (babel-watch)

#### 추가할 사항
1. react router
2. webpack style loader

3. babel polyfill
4. webpack chunk && code splitting