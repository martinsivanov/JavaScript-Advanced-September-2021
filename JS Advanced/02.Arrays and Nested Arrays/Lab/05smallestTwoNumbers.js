function solve(arrayNums) {
    let result = [];
    for (let i = 0; i < 2; i++) {
        let minNum = Math.min(...arrayNums);
        let indexMinNum = arrayNums.indexOf(minNum);
        let el = arrayNums.splice(indexMinNum, 1);
        result.push(el);
    }
    return result.join(' ');
}

console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));