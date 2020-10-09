const { toString } = Object.prototype;
const { ELEMENT_NODE, DOCUMENT_NODE } = document;

/* -------------------------------------------------------------------------- */

// 전달된 데이터 타입을 (소)문자로 반환하는 유틸리티
export const typeOf = (data) => toString.call(data).slice(8, -1).toLowerCase();

// 전달된 데이터 타입이 `숫자`인지 결과를 Boolean으로 반환하는 유틸리티
export const isNumber = (data) => typeOf(data) === 'number';

// 전달된 데이터 타입이 `문자`인지 결과를 Boolean으로 반환하는 유틸리티
export const isString = (data) => typeOf(data) === 'string';

// 전달된 데이터 타입이 `불리언`인지 결과를 Boolean으로 반환하는 유틸리티
export const isBoolean = (data) => typeOf(data) === 'boolean';

// 전달된 데이터 타입이 `함수`인지 결과를 Boolean으로 반환하는 유틸리티
export const isFunction = (data) => typeOf(data) === 'function';

// 전달된 데이터 타입이 `배열`인지 결과를 Boolean으로 반환하는 유틸리티
export const isArray = (data) => typeOf(data) === 'array';

// 전달된 데이터 타입이 객체인지 결과를 Boolean으로 반환하는 유틸리티
export const isObject = (data) => typeOf(data) === 'object';

// 전달된 데이터 타입이 HTML 요소노드인지 결과를 Boolean으로 반환하는 유틸리티
export const isElement = (node) => node.nodeType === ELEMENT_NODE;

// 전달된 데이터 타입이 Document 노드인지 결과를 Boolean으로 반환하는 유틸리티
export const isDocument = (node) => node.nodeType === DOCUMENT_NODE;

// 전달된 데이터가 글로벌 객체인지 결과를 Boolean으로 반환하는 유틸리티
export const isGlobal = (target) => [ window, global, globalThis ].some((item) => item === target);
