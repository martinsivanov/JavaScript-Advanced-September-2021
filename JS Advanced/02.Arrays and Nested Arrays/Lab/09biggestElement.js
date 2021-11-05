function solve(matrix) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] > maxNum) {
                maxNum = row[j];
            }
        }
    }
    return maxNum;
}

console.log(solve([[20, 50, 10],
                   [8, 33, 145]]
                 ));

console.log(solve([[3, 5, 7, 12],
                   [-1, 4, 33, 2],
                   [8, 3, 0, 4]]
                 ));