//증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
// a = a + 1;
a++; // a = a + 1와 동일하다 
console.log(a);

// 주의할 점!
// a++ : 필요한 연산을 하고, 그 뒤에 값을 증가시킴.
// ++a : 값을 먼저 증가하고, 필요한 연산을 함.
console.clear();

a = 0;
let b = a++;
console.log(b); 
console.log(a);
// 0, 1 출력  (a는 0이고, b는 a의 값과 같고, 그 후 a에 +1)
// 앞뒤로 ++ 위치를 바꿔보며 연습할 것! 

// 생각해보기
c = 0;
console.log(c++); // 결과 : 0
// WHY? 우선 해야하는 연산(console.log(c) 출력)를 한 후, c의 값을 +1 함.
