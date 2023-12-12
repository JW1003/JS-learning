// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) {}
// 실행순서 :
// 1. 변수선언문
// 2. 조건식의 값이 참이면 {} 코드블럭 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때 까지 2,3을 반복

for (let i = 0; i < 3; i++) {
  for (let j = 1; j < 5; j++) {
    console.log(i, j);
  }
}
console.log("루프 종료");

//무한루프에 주의

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; // continue는 해당 실행문 안에 내용을 더이상 진행하지 않고, 다음 조건으로 넘어감.

    console.log("i가 10이 되었다");
    break;
  }
  console.log(i);
}
