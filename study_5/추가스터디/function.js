//함수선언식
function gugudan(){
    console.log("3 * 1 = 3");
    console.log("3 * 2 = 6");
    console.log("3 * 3 = 9");
    console.log("3 * 4 = 12");
    console.log("3 * 5 = 15");
    console.log("3 * 6 = 18");
    console.log("3 * 7 = 21");
    console.log("3 * 8 = 24");
    console.log("3 * 9 = 27");
}
gugudan();   //함수명으로 호출

//함수표현식
const gugudan2 = function ggd(){   //함수명 없어도됨(익명함수)
    console.log("3 * 1 = 3");
    console.log("3 * 2 = 6");
    console.log("3 * 3 = 9");
    console.log("3 * 4 = 12");
    console.log("3 * 5 = 15");
    console.log("3 * 6 = 18");
    console.log("3 * 7 = 21");
    console.log("3 * 8 = 24");
    console.log("3 * 9 = 27");
};   //세미콜론 필수는 아니지만 일관성을 위해 찍어주는 것이 좋음
gugudan2();   //변수명으로 호출(함수명으로 호출불가)