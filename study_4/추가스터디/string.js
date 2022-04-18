//시작따옴표와 끝따옴표가 같아야함
let str = "abc"; //큰따옴표
let str2 = 'def'; //작은따옴표

console.log(str, str2);


//큰 따옴표가 포함되어져 있으면 작은따옴표로 문자열 작성
let str3 = "I'm Fine Thank You!";
console.log(str3);

//작은 따옴표가 포함되어져 있으면 큰따옴표로 문자열 작성
let str4 = 'I"m Fine Thank You!';
console.log(str4);

//두 따옴표 모두 포함되어 있을 때 -> 문제가 되는 따옴표 앞에 이스케이프 문자[\] 사용
//ex. I'm Fine Thank You! "and you?"
let str5 = "I'm Fine Thank You!\"and you?\"";
console.log(str5);