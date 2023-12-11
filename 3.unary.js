// 단항연산자 Unary Operators
// + 양
// - 음
// ! 부정
let a = 5;
a = -a;
console.log(a); //-5
console.log(-a); //5

let boolean = true;
console.log(boolean); // true
console.log(!boolean); //false
console.log(!!boolean); // true

// + 숫자가 아닌 타입을 숫자로 변환하면 어떤 값이 나올까
console.clear();
console.log(+false); //0
console.log(+null); //0
console.log(+''); //0
console.log(+true); //1
console.log(+'text'); //NaN
console.log(+undefined); //NaN


// ! : 부정연산자 // !! : 값을 boolean타입으로 변환하는 효과
console.log(!0); //true
console.log(!!0); //false

console.log(!1); //false
console.log(!!1); //true



