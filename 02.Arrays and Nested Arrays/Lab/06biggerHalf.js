function solve(arrayNums) {
    arrayNums.sort((a, b) => (a - b));
    let result = [];
    if (arrayNums.length % 2 == 0) {
      result =  arrayNums.slice(arrayNums.length / 2);
    } else {
       let index = Math.abs(arrayNums.length / 2);
       result = arrayNums.slice(index);
    }
    return result;
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));