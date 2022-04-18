let integer = 10; //10진수
let hex = 0xa; //16진수
let binary = 0b1010; //2진수
let octal = 0o12; //8진수

console.log(integer, hex, binary, octal);  //전부 10진수 형태로 변환되어 출력


let negative = -10; //음의 정수
let indices = 1.0e1; //지수
let double = 10.12; //소수

console.log(negative, double, indices);


let IsInfinity = 10 / 0; //Infinity
let IsNaN = 10 / "칠"; //NaN(Not a Number)

console.log(IsNaN);


let sum = 0.1 + 0.2;
console.log(sum);  //연산 시 근사치 출력될 수 있음