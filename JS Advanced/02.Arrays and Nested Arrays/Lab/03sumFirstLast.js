function solve(arrayStrings) {
    let sum = 0;
    let first = Number(arrayStrings.shift());
    let last = Number(arrayStrings.pop());
    return first + last;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));