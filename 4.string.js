//문자열 타입
let string = '안녕하세요';
string = `안녕?`;
console.log(string);

/** \n 은 string 내부 줄바꿈 */
string = '안녕! \n월드!'; 
console.log(string);

/** \t 는 TAB */
string = '안녕! \n월드!\t\t나는'; 
console.log(string);

/**백슬러시 자체가 보이게 하고싶을때는 \\ */
string = '안녕 \\';
console.log(string);

/**유니코드 작성 \u유니코드 */
string = '\u09AC'
console.log(string);

/** 필요할 땐 '이스케이프 표현' 을 찾아보면 된다 */


/** 템플릿 리터럴(Template Literal) `${}` */
let id = '운';
let greetings = "안녕!, " + id + "\n즐거운 하루 보내요!";
console.log(greetings);

/**위 처럼 하는 것은 귀찮기 때문에, 쓰는 것이 템플릿 리터럴. */
greetings = `안녕!, ${id} \n즐거운 하루 보내요!`;

console.log(greetings);