//삼항 조건 연산자 Ternary Operator
// 조건식 ? 표현식(true일때) : 표현식(false일때)

let fruit = "orang";
if (fruit === "apple") {
  console.log("사과");
} else if (fruit === "orange") {
  console.log("오렌지");
} else {
  console.log("사과도 오렌지도 아닙니다");
}

fruit === "apple" ? console.log("사과") : console.log("사과아님");

let fruit2 = fruit === "apple" ? "사과" : "사과아님";
console.log(fruit2);
