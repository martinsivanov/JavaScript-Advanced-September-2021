function solve(arr) {
    let result = [];
    let splitted = arr[0].split('|');
    let town = splitted[1].trim();
    let latitude = splitted[2].trim();
    let longitude = splitted[3].trim();
    for (let i = 1; i < arr.length; i++) {
        let obj = {};
        let splittedInfo = arr[i].split('|');
        obj[town] = splittedInfo[1].trim();
        obj[latitude] = Number(Number(splittedInfo[2].trim()).toFixed(2));
        obj[longitude] = Number(Number(splittedInfo[3].trim()).toFixed(2));
        result.push(obj);
    }
    return JSON.stringify(result);
}
console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
