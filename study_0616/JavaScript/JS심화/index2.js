const me = {
    name: "유예빈",
    age: 26,
    gender: 'male',
};

const someone = {
    name: "홍길순",
    age: 27,
    gender: "female",
};

function addMilitaryStateIfMale(person) {
    if (person.gender === 'male') {
        person.militaryState = false;
    }
}

addMilitaryStateIfMale(me);
addMilitaryStateIfMale(someone);

function parseBoolean(value) {
    if (value === true) {
        return "참";
    } else if (value === false) {
        return "거짓";
    }
}

me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
if (someone.militaryState !== undefined) {
    console.log(parseBoolean(someone.militaryState));
}