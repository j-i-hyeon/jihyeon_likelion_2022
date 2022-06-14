const input = prompt();
if (!input) /*(input === "")*/ {
    console.log("입력값이 없습니다.");
} else{
    console.log(input);
}

/*
!undefined => true
!null => true
!0 => true
!'' => true
!NaN => true
*/