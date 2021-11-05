function solve(obj) {
    let car = {};
    car.model = obj.model;
    let power;
    let volumes;
    if (obj.power <= 90) {
        volumes = 1800;
        power = 90;
    } else if (obj.power > 90 && obj.power <= 120) {
        volumes = 2400;
        power = 120;
    } else if (obj.power > 120) {
        volumes = 3500;
        power = 200;
    }
    car.engine = {
        power: power,
        volume: volumes
    };
    car.carriage = {
        type: obj.carriage,
        color: obj.color
    }
    car.wheels = findWheelsizes(Number(obj.wheelsize));
    function findWheelsizes(num) {
        let array = [];
        if (num % 2 == 0) {
            num--;
        }
        for (let i = 0; i < 4; i++) {
            array.push(num);
        }
        return array;
    }

    return car;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));
console.log('---------');

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}

));