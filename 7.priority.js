let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); //12

result = a++ + b * 4;
console.log(result); // 12 (* a는 계산이 끝난 후 3이된다)

// 연산자의 우선순위 : 실제 수학의 우선순위 처럼 */가 +-보다 먼저이다.
// 그룹()은 최고의 우선순위이다.