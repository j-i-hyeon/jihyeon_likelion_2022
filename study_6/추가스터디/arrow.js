/* 일반함수
funtion sum(num1,num2){
    return num1 + num2;
}
*/

// 화살표함수 : 호출하기 위해서는 변수에 할당해줘야함.
const sum = (num1,num2) => {
    return num1 + num2;
}

const result = sum(20,20);
console.log(result);


const pow = x => x * x;   //매개변수가 하나일 때 괄호 생략가능
const result2 = pow(10);
console.log(result2);


const printPie = () => 3.14   //매개변수 없는 경우
const result3 = printPie();
console.log(result3);


const getObject = () => ({   //객체를 반환하는 경우
    name:"철수",
    age:20
});
const obj = getObject();
console.log(obj.name);


function outer(x){
    return function inner(){
        return x * x;
    }
}
const innerFuc = outer(10);
const result4 = innerFuc();
console.log(result4);


const outer2 = (x) => () => x * x;
const innerFuc2 = outer2(10);
const result5 = innerFuc2();
console.log(result5);

//34-41 code = 44-47 code