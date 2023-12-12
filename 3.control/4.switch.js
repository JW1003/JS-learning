// 조건문 Conditional Statement
//switch (※ if-else와 조금 다르다)
//정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우
let day = 6; //0:월, 1:화 ... 6:일
let dayName;
if (day === 0) {
  dayName = "월요일";
} else if (day === 1) {
  dayName = "화요일";
} else if (day === 2) {
  dayName = "수요일";
} else if (day === 3) {
  dayName = "목요일";
} else if (day === 4) {
  dayName = "금요일";
} else if (day === 5) {
  dayName = "토요일";
} else if (day === 6) {
  dayName = "일요일";
}

switch (day) {
  case 0:
    dayName = "월요일";
    console.log(dayName);
    break;
  case 1:
    dayName = "화요일";
    console.log(dayName);
    break;
  case 2:
    dayName = "수요일";
    console.log(dayName);
    break;
  case 3:
    dayName = "목요일";
    console.log(dayName);
    break;
  case 4:
    dayName = "금요일";
    console.log(dayName);
    break;
  case 5:
    dayName = "토요일";
    console.log(dayName);
    break;
  case 6:
    dayName = "일요일";
    console.log(dayName);
    break;
}

// 2개이상 case가 같은 행위를 해야할 경우 break가 없을 때도 있다
let condition = "okay";
switch (condition) {
  case "okay":
  case "good":
    text = "좋음";
    break;
  case "bad":
    text = "나쁨";
    break;
}
console.log(text);

// switch의 else 는 default

switch (day) {
  case 0:
    dayName = "월요일";
    console.log(dayName);
    break;
  case 1:
    dayName = "화요일";
    console.log(dayName);
    break;
  case 2:
    dayName = "수요일";
    console.log(dayName);
    break;
  case 3:
    dayName = "목요일";
    console.log(dayName);
    break;
  case 4:
    dayName = "금요일";
    console.log(dayName);
    break;
  case 5:
    dayName = "토요일";
    console.log(dayName);
    break;
  case 6:
    dayName = "일요일";
    console.log(dayName);
    break;
  default: 
  console.log('해당하는 요일이 없다');
  
}