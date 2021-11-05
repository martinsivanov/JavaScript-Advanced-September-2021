function solve(strings) {

    let result = '';
    for (let i = 0; i < strings.length; i += 2) {
        result += strings[i] + ' ';
    }
    return result;
}

console.log(solve(['20', '30', '40', '50', '60']));