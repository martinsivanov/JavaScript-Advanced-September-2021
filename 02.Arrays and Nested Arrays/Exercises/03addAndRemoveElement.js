function solve(arrStrings) {
    let result = [];
    let initialNumber = 0;
    for (let i = 0; i < arrStrings.length; i++) {
        initialNumber++;
        if (arrStrings[i] === 'add') {
            result.push(initialNumber);
        } else {
            result.pop();
        }
    }
    if (result.length == 0) {
        return 'Empty';
    }
    return result.join('\n');
}

console.log(solve(['add',
    'add',
    'add',
    'add']
));
console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));
console.log(solve(['remove',
    'remove',
    'remove']
));