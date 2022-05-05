//덧셈 연산자
let addition = 20 + 10;
console.log(addition);

//뺄셈 연산자
let subtraction = 20-10;
console.log(subtraction);

//곱셈 연산자
let multiplication = 10 * 10;
console.log(multiplication);

//나눗셈 연산자
let division = 10 / 5;
console.log(division);

//나머지 연산자
let remainder = 10 % 3;
console.log(remainder);


//문자를 더할 경우 (문자열형은 더하기만 사용 가능)
let hello = '안녕하세요,' + '수코딩입니다.'  //문자열 연결 연산자
console.log(hello);


//숫자와 문자의 연산 : 더하기만 문자열형으로 작용하고, 나머지는 숫자끼리 연산과 똑같음
let changeType1 = 20 + '10';
console.log(changeType1);

let changeType2 = 20 - '10';
console.log(changeType2);

let changeType3 = 20 * '10';
console.log(changeType3);

let changeType4 = 20 / '10';
console.log(changeType4);