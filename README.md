# 이듬(E.UID) 멘토링 프로그램

이듬 멘토링 프로그램 학습용 프로젝트 킷(Project Kit) 입니다.

<br>

## ☕︎ 인클루드 HTML

프로젝트는 [posthtml-modules](https://www.npmjs.com/package/posthtml-modules)을 사용해 HTML 문서에 다른 HTML 문서를 포함(include)할 수 있습니다.

### 사용 예시

[./src/includes/appHeader.html](./src/includes/appHeader.html) 파일 코드

```html
<header class="appHeader">
  <div class="container flex xBetween">
    <h1 class="appHeader__title">{{headline}}</h1>
    <button class="appHeader__button button" aria-label="{{buttonLabel}}">
      <svg height="21" viewbox="0 0 21 21" width="21">
        <g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round">
          <path d="m4.5 7.5h12" />
          <path d="m4.498 10.5h11.997" />
          <path d="m4.5 13.5h11.995" />
        </g>
      </svg>
    </button>

    <content/>
  </div>
</header>
```

[./src/index.html](./src/index.html) 파일 코드

```html
<body>

  <!-- 앱 헤더 include -->
  <include
    src="/includes/appHeader.html"
    locals='{
    "headline": "이듬(E.UID) 멘토링 프로그램",
    "buttonLabel": "메뉴 열기"
    }'>

    <!-- <p>이 곳에 작성된 내용은 content 영역으로 삽입됩니다.</p> -->
  </include>

</body>
```

### 결과

```html
<body>

  <header class="appHeader">
    <div class="container flex xBetween">
      <h1 class="appHeader__title">이듬(E.UID) 멘토링 프로그램</h1>

      <button class="appHeader__button button" aria-label="메뉴 열기">
        <svg height="21" viewBox="0 0 21 21" width="21">
          <g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round">
            <path d="m4.5 7.5h12"></path>
            <path d="m4.498 10.5h11.997"></path>
            <path d="m4.5 13.5h11.995"></path>
          </g>
        </svg>
      </button>

      <!-- <p>이 곳에 작성된 내용은 content 영역으로 삽입됩니다.</p> -->
    </div>
  </header>

</body>
```