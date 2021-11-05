function solve(arr) {

    let cars = new Map();
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' | ');
        let brand = current[0];
        let model = current[1];
        let count = Number(current[2]);


        if (cars.has(brand)) {
            let carBrand = cars.get(brand);
            if (!carBrand.has(model)) {
                carBrand.set(model, count);
            } else {
                let countCars = carBrand.get(model);
                countCars += count;
                carBrand.set(model, countCars);
            }
        } else {
            cars.set(brand, new Map());
            let car = cars.get(brand);
            car.set(model, count);
        }
    }
    for (let key of cars.keys()) {
        console.log(`${key}`);
        let brand = cars.get(key);
        for (let [model,count] of brand) {
            console.log(`###${model} -> ${count}`);
        }
    }
}

console.log(solve(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10']));