//동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 둘다 다름

console.log(2==2); //true
console.log(2!=2); //false
console.log(2!=3); //true
console.log(2==3); //false
console.log(2=='2'); //true (타입은 다르지만, 비교할때 '2'가 자동으로 2로 바뀌어서 비교함)
console.log(2==='2'); //🌟false (값은 같지만 타입이 달라서 false)
console.log(true==1); // 1 은 boolean으로 true이므로.

// 코딩할 땐 웬만하면 타입도 함께 확인하는게 좋으므로, === 를 애용하자. 

const obj1 = {
    name: 'js'
};

const obj2 = {
    name: 'js'
};

console.log(obj1 == obj2); // false
//내용물의 내용(key-value)은 같지만, 주소값은 달라.

console.log(obj1.name == obj2.name); //true
console.log(obj1.name === obj2.name); //true
//내용물의 name값이 서로 같으므로 

const obj3 = obj2;

console.log(obj3 == obj2); //true (주소값을 복사해서 복제하기 때문)
console.log(obj3 === obj2); //true
