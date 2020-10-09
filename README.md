# 이듬(E.UID) 멘토링 프로그램

이듬 멘토링 프로그램 학습용 프로젝트 킷(Project Kit) 입니다.

<br>

## ☕︎ 프리페어링

### 1. Node.js 설치

[Node.js](https://nodejs.org/ko/)를 컴퓨터 OS에 설치합니다.
설치 후 명령어 환경(CLI)에서 다음 명령을 입력했을 때 명령이 실행되어야 합니다.

```sh
$ node -v # Node.js 버전 출력
$ npm -v  # NPM 버전 출력
```

### 2. 의존 모듈 설치

NPM 설치(`install`) 명령을 실행해 프로젝트의 의존 모듈(dependency modules)을 설치합니다.

```sh
$ npm install
```

프로젝트에 사용되는 의존 모듈 정보는 [package.json](./package.json) 파일을 통해 확인할 수 있습니다.

```js
{
  "devDependencies": {
    // 크로스 플랫폼(windows, osx, linux) 도구
    "rimraf": "^3.0.2",
    "dotenv-cli": "^4.0.0",
    "cross-var": "^1.1.0",
    // Post HTML
    "posthtml-doctype": "^1.1.1",
    "posthtml-img-autosize": "^0.1.5",
    "posthtml-modules": "^0.6.2",
    // Post CSS
    "postcss": "^8.1.1",
    "autoprefixer": "^10.0.1",
    // Sass
    "sass": "^1.27.0",
    // Babel
    "@babel/core": "^7.11.6",
    // 라이브 서버
    "live-server": "^1.2.1",
  }
}
```

### 3. 환경 변수

`.env.dev` 파일 이름을 `.env`로 변경합니다.

<br>

## ☕︎ 개발/빌드 명령

### 개발

프로젝트 개발을 시작하려면 `dev` 명령을 실행합니다.

```sh
$ npm run dev
```

### 빌드

프로젝트를 빌드 하려면 `build` 명령을 실행합니다.

```sh
$ npm run build
```

프로젝트를 빌드 한 후, 빌드된 결과를 브라우저에서 확인하려면 `build:server` 명령을 실행합니다.

```sh
$ npm run build:server
```

프로젝트를 빌드 한 후, 분석된 빌드 결과를 브라우저에서 확인하려면 `build:analyzer` 명령을 실행합니다.

```sh
$ npm run build:analyzer
```