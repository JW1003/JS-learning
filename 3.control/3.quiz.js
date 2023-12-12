// 퀴즈
let num = 2;
// num의 숫자가 짝수이면 GOOD 홀수면 BAD 출력하도록
// (1) if로 구현
if (num % 2 === 0) {
  console.log("GOOD");
} else {
  console.log("BAD");
}

// (2) ternary 로 구현
num % 2 === 0 ? console.log("GOOD") : console.log("BAD");
