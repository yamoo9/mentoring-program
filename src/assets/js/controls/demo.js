import { ready, getNode, addClass, removeClass, delay, hasClass, toggleClass } from '../utils';

// 테스트 클래스 속성 이름
const TEST_CLASSNAME = 'appHeader__demo';

// 토글 클래스 컨트롤러
const toggleClassController = (target, time) =>
  delay(time).then(() => toggleClass(target, TEST_CLASSNAME));

// 문서 콘텐츠가 준비되면 ready() 실행
ready(() => {
  // <header class="appHeader"> 요소 참조
  const appHeader = getNode('.appHeader');

  // 클래스 속성 추가
  addClass(appHeader, TEST_CLASSNAME);

  // 클래스 속성 포함 유무 확인
  if (hasClass(appHeader, TEST_CLASSNAME)) {
    // 2초 뒤에 클래스 속성 제거
    delay(2000)
      .then(() => removeClass(appHeader, TEST_CLASSNAME))
      // toggleClassController() 함수 실행
      .then(() => toggleClassController(appHeader, 1100));
  }
});
