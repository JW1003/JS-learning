//null, undefined 의 차이
let variable;
console.log(variable); // 여기선 undefined (정의되지않음)이 출력

variable = null;
console.log(variable); // 여기선 null 로 출력.

let activeItem; // 활성화된 아이템이 있는지 없는지 모르는 상태 (=undefined)
activeItem = null; // 활성화된 아이템이 없는 상태(=null)

console.log(typeof undefined); //undefined의 타입은 undefined임.
console.log(typeof null); // null의 타입은 object 임