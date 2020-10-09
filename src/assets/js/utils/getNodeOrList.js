// 노드 리스트 반환 유티릴티
export const getNodeList = (selector, context = document) => context.querySelectorAll(selector);

// 노드 반환 유틸리티
export const getNode = (selector, context) => getNodeList(selector, context)[0];
