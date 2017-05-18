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