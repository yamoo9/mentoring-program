import { isElement } from './typeOf';
import { throwError } from './throwError';

/* -------------------------------------------------------------------------- */

const classNameControl = (methodName, domNode, className) => {
  if (!isElement(domNode)) {
    throwError('첫번째 인자인 domNode는 문서 요소노드여야 합니다.');
  }

  if (!methodName.includes('contains')) {
    // 메서드 이름이 contains 문자 값을 포함하지 않는 경우
    domNode.classList[methodName](className);
    return domNode;
  }
  else {
    // 메서드 이름이 contains 문자 값을 포함하는 경우
    return domNode.classList.contains(className);
  }
};

/* -------------------------------------------------------------------------- */

// 클래스 속성 이름 추가 유틸리티
export const addClass = (domNode, className) => classNameControl('add', domNode, className);

// 클래스 속성 이름 제거 유틸리티
export const removeClass = (domNode, className) => classNameControl('remove', domNode, className);

// 클래스 속성 이름 토글 유틸리티
export const toggleClass = (domNode, className) => classNameControl('toggle', domNode, className);

// 클래스 속성 이름 포함 유무 확인 유틸리티
export const hasClass = (domNode, className) => classNameControl('contains', domNode, className);
