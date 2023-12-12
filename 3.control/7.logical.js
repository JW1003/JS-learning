//논리연산자 Logical operator

// && 그리고
// || 또는
// ! 부정(단항연산자에서 온것)
// !! 불리언값으로 변환(단항연산자 응용버전)

let num = 8;
if (num >= 0 || num < 9) {
  console.log("Good");
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); //false
console.log(false && true); //false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); //true
console.log(false || true); //true

console.log(!"text"); //false (*문자열은 true임)
console.log(!!"text"); //true
