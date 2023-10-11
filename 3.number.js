let integer = 123; // 정수
let negative = -123; //음수
let double = 1.23; //실수

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; //2진수
let octal = 0o173; //8진수
let hex = 0x7b; // 16진수
console.log(binary); //123
console.log(octal); //123
console.log(hex); //123

/** 이하 유의 */
console.log(0/123); // 0
console.log(123 / 0); //Infinity
console.log(123 / -0); //-Infinity (* 숫자를 0으로 나누면 무한이다)
console.log(123 / 'text'); // NaN = Not a Number

/**2^53-1(Number.MAX_SAFE_INTEGER / 9,007,199,254,740,991으로 대강 16자리 이상) 이상의 정수값을 다루고 싶으면 BigInt를 사용.
 * */  
let bigInt = 12345678901234567890123456789012345678901234567890n;
console.log(bigInt); 