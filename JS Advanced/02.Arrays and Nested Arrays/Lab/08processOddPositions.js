function solve(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i += 2) {
        let value = arr[i] * 2;
        result.push(value);
    }
    return result
                .reverse()
                .join(' ');
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));