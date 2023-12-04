//원시값과 참조값
//원시타입은 갓이 복사되어 전달됨
let a = 1;
let b = a; //1
b=2;
console.log(a); //1
console.log(b); //2 * a와 b는 별개이다

//객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = { //0x1234
    name: '사과'
};
let orange = apple; //0x1234 //orange에는 apple 객체 내부의 값이 아니라, apple의 주소값이 복사됨.
orange.name = '오렌지'; // 동일한 주소를 갖고 있으므로, 한곳에서만 바꿔도, apple.name도 오렌지로 바뀜. ※ 중요
console.log(apple);
console.log(orange); 