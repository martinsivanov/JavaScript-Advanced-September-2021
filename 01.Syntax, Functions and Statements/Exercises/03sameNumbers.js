function solve(input) {
    let numbersInString = String(input);
    let n = numbersInString.length;
    let result = true;
    let sumDigit = 0;
    for (let i = 0; i < n - 1; i++) {
       let firstNum = Number(numbersInString.charAt(i));
       let nextNum = Number(numbersInString.charAt(i + 1));
       if (firstNum !== nextNum) {
           result = false;
       }
    }
    for (let k = 0; k < n; k++) {
           
        sumDigit += Number(numbersInString.charAt(k));

    }
    console.log(result);
    console.log(sumDigit);
}

solve(2222222);
