//let과 const
//let 재할당 가능 / 오브젝트의 값 변경 가능
let a = 1;
a =2;

//const 재할당이 불가능 / 오브젝트의 값 변경 가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
//text = 'hi'; // 작성했을 때는 문제없어 보이지만, 실행하면 crash가 난다
//TypeError: Assignment to constant variable. (상수로 작성한 변수에 재할당을 시도했다)

//1. 상수 (상수 사용할때는 대문자를 사용한다)
const MAX_FRUITS = 5;

//2. 재할당 불가능한 상수변수 또는 변수
//한번 할당하면 재할당이 불필요한 경우 let말고 const를 사용하는게 안전.
//웬만하면 코딩할 때 let보다 const를 더 많이 쓴다
const apple = {
    name : 'apple',
    color : 'red',
    display: '🍎'
};

//apple = {}; // 크러시가 난다.

// ※중요 유의사항※  apple을 재할당 할순 없지만, apple.name을 변경하면 바뀌어버려.
apple.name = 'orange';
console.log(apple);
// why ? const를 통해서는 apple이 가리키는 메모리셀의 주소를 바꿀 수 없는 것 뿐. 
// apple.을 하는순간, apple 메모리셀에 있는 주소로 이동하기 때문에,
// 오브젝트 내부에 있는 값의 변경이 가능한 것이다.
