/*
switch (key) {
    case value1:   //key가 value1일 때 실행문
        break;
    case value2:   //key가 value2일 때 실행문
        break;
    case value3:   //key가 value3일 때 실행문
        break;
    default:
        break;
}
*/

let animal = 'Dog';
switch (animal) {
    case 'Cat':
        console.log('야옹');
        break;
    case 'Dog':
        console.log('멍멍');
        break;
    case 'Cow':
        console.log('음메');
        break;
    default:
        console.log('일치하는 동물 소리가 없습니다.');
        break;
}


let animal2 = 'Cat';
switch (animal2) {
    case 'Cat':
        console.log('야옹');
    case 'Dog':
        console.log('멍멍');
        break;
    case 'Cow':
        console.log('음메');
        break;
    default:
        console.log('일치하는 동물 소리가 없습니다.');
        break;
}