function magicMatrices(input) {
 
    let rowSums = input.map(el => el.reduce((a, b) => a + b));
 
    let colToRow = input.map((row, i, arr) => arr[i].map((col, y) => arr[y][i]));
    let colSums = colToRow.map(ele => ele.reduce((a,b) => a + b));
 
    return rowSums.concat(colSums).every((el, i, arr) => el === arr[0])};

    console.log(
        magicMatrices([[4, 5, 6],
            [6, 5, 4],
            [5, 5, 5]]
           ));
