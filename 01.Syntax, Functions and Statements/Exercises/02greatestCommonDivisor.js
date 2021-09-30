function solve(num1,num2) {
    let greatestDivisor = 0;
    if (num2 > 0) {
        for (let i = 1; i <= num2; i++) {
           if (num1 % i == 0 && num2 % i == 0) {
               greatestDivisor = i;
           }
        }
    }
    console.log(greatestDivisor);
}
solve(15,5);
solve(2154, 458);