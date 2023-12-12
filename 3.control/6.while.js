//while (조건) {}
//조건이 false가 될 때 까지 코드 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log("아직 살아있다");
  if (i === 1000) {
    console.log("죽었다");

    break;
  }
  i++;
}

do {
    console.log('do-while 아직 살아있다!');
    
} while (isActive);

//while : 우선 조건 확인 후, 실행
//do-while : 우선 실행 후, 조건 확인

//무슨차이?) false이면 끝나는 반복문에 false값을 집어넣으면, 
//while은 실행문까지 가지 않고 끝나지만, do-while은 실행문이 한번 실행된 후 끝난다.
