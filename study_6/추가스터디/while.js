let i=1;
while(i<10){
    //조건식 부분이 거짓이 되는 경우의 수가 반복문 코드 내부에 등장하는지 유념해야함
    console.log(i);
    i = i+1;
}


let flag = false;
do{
    console.log('do-while');
}while(flag === true);