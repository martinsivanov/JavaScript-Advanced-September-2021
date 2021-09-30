function solve(type,grams,number) {
    let weightInKg = grams / 1000;
    let money = weightInKg * number;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);
}
solve('orange', 2500, 1.80);