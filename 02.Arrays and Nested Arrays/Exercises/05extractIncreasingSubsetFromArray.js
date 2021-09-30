function solve(array) {
    let result = [];
    let curMaxNum;
    for (let i = 0; i < array.length; i++) {
        if (curMaxNum > array[i]) {
            continue;
        }
        curMaxNum = array[i];
        result.push(curMaxNum);
    }
    return result;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));
console.log(solve([1, 
    2, 
    3,
    4]
    ));
console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));