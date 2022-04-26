function printFruit(name){
    console.log(name);
}
printFruit('banana');
printFruit('apple');

function printFruits(name, price){
    console.log(name + "는 " + price + "원 입니다.");
}
printFruits('banana', 20000);

function printFruitArr(arr){
    console.log(arr[0] + "는 " + arr[1] + "원 입니다.");
}
printFruitArr(['banana', 2000]);

function printFruitObj(obj){
    console.log(obj.name + "은 " + obj.price + "원 입니다.");
}
printFruitObj({name:'apple', price:3000});