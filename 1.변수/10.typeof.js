// typeof : 데이터 타입을 확인하는 연산자
// 값을 타입 문자열로 반환해줌

let variable;
console.log(typeof variable); //undefined

variable = '';
console.log(typeof variable); //string

variable = 123;
console.log(typeof variable); //number

variable = {};
console.log(typeof variable); //object

variable = function() {};
console.log(typeof variable); //function

variable = Symbol();
console.log(typeof variable); //symbol

console.log(typeof 123); //number

console.log(typeof '123'); // string


// 자바스크립트(및 인터프리터 언어)는 할당된 값에 따라 동적으로 타입이 결정된다
// 자바나 C(및 컴파일언어)는 Int, String 등으로 정적으로 타입을 결정함. 한번 타입이 결정되면 다른 타입으로 바꿀 수 없음.

//자바스크립트는 weakly type(느슨한 타입), 동적타입(실행할때 타입이 결정됨)의 특징.
//자바는 strongly type(확정된 타입), 정적타입(실행전에 타입을 결정함)의 특징.