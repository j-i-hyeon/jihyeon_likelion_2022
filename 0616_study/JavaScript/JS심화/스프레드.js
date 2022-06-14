const me = {
    name: "유예빈",
    age: 26,
};

const militaryMe = {
    ...me,
    militaryState: false,
}

console.log(militaryMe);