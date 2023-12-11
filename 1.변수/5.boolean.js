// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isEnrolled);

console.clear();

//!! : 해당 값의 true/false를 알려줌
//어떤 값이 true 처리인지 false처리인지 알아놔야 조건문 사용에 능숙할 수 있어.
// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);


// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);