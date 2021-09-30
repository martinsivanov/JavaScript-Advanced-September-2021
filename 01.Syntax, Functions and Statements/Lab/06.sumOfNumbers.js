function solve(num1,num2) {
    let numOne = Number(num1);
    let numTwo = Number(num2);
    let result = 0;
   for (let index = numOne; index <= numTwo; index++) {
       result += index;
   }
   console.log(result);
}
solve('-8', '20')