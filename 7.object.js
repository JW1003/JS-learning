//객체(Object) 복합데이터 {key:value}
//예시
let apple = {
    name : 'apple',
    color : 'red',
    display: '🍎'
}
//메모리 (Code / Data / Stack / Heap) 에서
//원시타입은 (Data / Stack) 에 존재한다. > 전역은 Data에, 로컬은 Stack에.
//객체타입은 (Heap)에 존재한다. (heap은 사이즈가 유동적인 데이터가 들어감)
//셀 하나에 예시의 모든 데이터가 들어갈 수 없어, heap의 셀 여러개에 걸쳐 저장함.
//apple이라는 객체명을 저장한 셀은 실제 apple의 데이터를 가지고 있는 메모리셀의 주소를 가지고있음.
//apple.name 식으로 객체명을 쓰면, 객체 내부에 name값을 가져올 수 있다.

console.log(apple);
console.log(apple.display);

