function solve(arrayNums) {

    let result = [];
    for (let i = 0; i < arrayNums.length; i++) {
        if (arrayNums[i] >= 0) {
            result.push(arrayNums[i]);
        } else{
            result.unshift(arrayNums[i]);
        }
    }
    return result.join('\n');
}

console.log(solve([7, -2, 8, 9]));
console.log('-------');
console.log(solve([3, -2, 0, -1]));