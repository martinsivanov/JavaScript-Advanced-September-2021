function solve(n,k) {
    let arr = [];
    let firstEl = 1;
    arr.push(firstEl);
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (arr.length > k) {
            for (let g = 1; g <= k; g++) {
                sum += arr[arr.length - g];
            }
        } else{
            for (let j = 0; j < arr.length; j++) {
                sum += arr[j];
            }
        }
        arr.push(sum);
        sum = 0;
    }
    return arr;
}

console.log(solve(6, 3)); // [1, 1, 2, 4, 7, 13]
console.log(solve(8, 2)); // [1, 1, 2, 4, 7, 13]