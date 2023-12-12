// 산술연산자 ( arithmetic operators)
console.log( 5 + 2); // + 더하기
console.log( 5 - 2); // - 빼기
console.log( 5 * 2); // * 곱하기
console.log( 5 / 2); // / 나누기
console.log( 5 % 2); // % 나머지값
console.log(5 ** 2); // ** 지수 (es7에 추가됨)
console.log(Math.pow(5,2)); // ** 지수 (이전버전)

// + 연산자 사용시 주의점
let test = '두개의' + '문자연결'
console.log(test);
let text = '1' + 1
console.log(text); // 결과 : 하얀11 (*문자열 11)
// ※ 숫자와 문자열을 더하면 문자열로 반환된다.
// ※ 터미널에서 노란색 : 숫자 / 하얀색 : 문자