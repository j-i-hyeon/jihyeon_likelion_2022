let student1 = {
    koreanScore:90,
    "englishScore":70,   //문자열 형식으로 키 적어줘도됨(키 띄어쓰기 가능)
    'mathScore':80,
    scienceScore:60
};

//대괄호 연산자
console.log(student1["koreanScore"]);   //키를 문자열로 표현

//점(마침표) 연산자
console.log(student1.mathScore)   //키 이름을 바로 적어줌(문자열X)
//키에 공백이 있을 경우 점 연산자로 접근할 수는 없음