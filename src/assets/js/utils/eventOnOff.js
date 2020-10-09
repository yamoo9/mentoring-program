import { isString, isObject, isFunction, isDocument, isElement, isGlobal } from './typeOf';
import { throwError } from './throwError';

/* -------------------------------------------------------------------------- */

const _on = (domNode, eventType, eventHandler, eventOptions = false) => {
  domNode.addEventListener(eventType, eventHandler, eventOptions);
  return domNode;
};

const _off = (domNode, eventType, eventHandler, eventOptions = false) => {
  domNode.removeEventListener(eventType, eventHandler, eventOptions);
};

const _onOff = (isOn, domNode, eventType, eventHandler, eventOptions) => {
  // 이벤트 메서드 설정
  const method = isOn ? _on : _off;

  // 유효성 검사
  if (!isDocument(domNode) && !isElement(domNode) && !isGlobal(domNode)) {
    throwError('첫번째 인자인 domNode는 window 또는 document 또는 문서의 요소노드 유형이 전달되어야 합니다.');
  }

  if (eventHandler && !isFunction(eventHandler)) {
    throwError('세번째 인자인 eventHandler는 함수 유형이 전달되어야 합니다.');
  }

  /**
    함수 오버로딩(Function Overoading)

    다양한 프로그래밍 언어에서 사용되는 함수의 특징으로 같은 함수 이름을 가지고 있으나 
    매개변수, 반환 타입 등이 다른 여러 개의 서브프로그램 생성합니다.
  --------------------------------------------------------------------------- */

  // 전달된 eventType 데이터 유형이 `문자`인 경우
  if (isString(eventType)) {
    // 함수 종료
    return method(domNode, eventType, eventHandler, eventOptions);
  }

  // 전달된 eventType 데이터 유형이 `객체`인 경우
  if (isObject(eventType)) {
    // 블록 스코프(상위 영역의 매개변수 이름과 for문 내부의 매개변수 이름이 같아도 다른 대상을 가리킴)
    for (const [ eventType, eventHandler ] of Object.entries(eventType)) {
      method(domNode, eventType, eventHandler, eventOptions);
    }
    // 함수 종료
    return domNode;
  }

  // 경고 메시지 출력
  console.warn('on 유틸리티의 전달인자 eventType은 `문자` 또는 `객체` 유형의 데이터를 설정해야 합니다.');
};

/* -------------------------------------------------------------------------- */

// DOM 노드에 이벤트를 연결하는 유틸리티
export const on = (domNode, eventType, eventHandler, eventOptions) =>
  _onOff(true, domNode, eventType, eventHandler, eventOptions);

// DOM 노드에 이벤트를 제거하는 유틸리티
export const off = (domNode, eventType, eventHandler, eventOptions) =>
  _onOff(false, domNode, eventType, eventHandler, eventOptions);
