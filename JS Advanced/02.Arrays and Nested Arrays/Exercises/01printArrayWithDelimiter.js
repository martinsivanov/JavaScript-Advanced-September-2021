function solve(arr, delimiter) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            result += arr[i];
        } else {
            result += arr[i] + delimiter;    
        }
    }
    return result;
}

console.log(solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
));
console.log(solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
));