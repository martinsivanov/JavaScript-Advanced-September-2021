function solve(arrayStrings, targetOne, targetTwo) {
    let first = arrayStrings.indexOf(targetOne);
    let second = arrayStrings.indexOf(targetTwo);
    let result = arrayStrings.slice(first, second + 1);
    return result;
}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));