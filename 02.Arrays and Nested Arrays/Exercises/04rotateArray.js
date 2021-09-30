function solve(arr, num) {
    let counter = 0;

    for (let j = 0; j < num; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (counter == num) {
                break;
            }
            let last = arr.pop();
            arr.unshift(last);
            counter++;
        }
        if (counter == num) {
            break;
        }
    }
    return arr.join(' ');
}

console.log(solve(['1',
    '2',
    '3',
    '4'],
    2
));
console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));