function sum(number1, number2){
    return number1 + number2;
}

const sum_result_1 = sum(10,20);
const sum_result_2 = sum(20,30);

const sum_result = sum_result_1 + sum_result_2;

console.log('총합은 ' + sum_result + '입니다.');



function printReturn(){
    console.log('return 실행 전');
    return;   //return 만나는 순간 함수 실행 종료됨
    console.log('return 실행 후');   //실행되지않음
}

printReturn();