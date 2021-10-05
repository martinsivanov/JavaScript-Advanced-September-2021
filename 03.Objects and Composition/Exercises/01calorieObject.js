function solve(arrayStrings) {
    let products = {};
    for (let i = 0; i < arrayStrings.length; i += 2) {
        products[arrayStrings[i]] = Number(arrayStrings[i + 1]);
    }
    console.log(products);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);