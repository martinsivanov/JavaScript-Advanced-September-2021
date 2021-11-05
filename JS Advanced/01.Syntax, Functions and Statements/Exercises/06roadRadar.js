function solve(speedStr,areaStr) {
    let speed = Number(speedStr);
    let result = '';
    let difference = 0;
    let speedStatus = '';
    let speedLimit = 0;
    switch (areaStr) {
        case 'motorway':
        speedLimit = 130;
        if (speed <= speedLimit) {
            result = `Driving ${speed} km/h in a ${speedLimit} zone`
        }
        else{
            difference = speed - speedLimit;
                if (difference <= 20) {
                    speedStatus = 'speeding';
                }
                else if (difference <= 40 && difference > 20){
                    speedStatus = 'excessive speeding';
                }
                else{
                    speedStatus = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`;
            }
        break;
        case 'interstate':
            speedLimit = 90;
        if (speed <= speedLimit) {
            result = `Driving ${speed} km/h in a ${speedLimit} zone`
        }
        else{
            difference = speed - speedLimit;
                if (difference <= 20) {
                    speedStatus = 'speeding';
                }
                else if (difference <= 40 && difference > 20) {
                    speedStatus = 'excessive speeding';
                }
                else{
                    speedStatus = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`;
            }
        break;
        case 'residential':
            speedLimit = 20;
        if (speed <= speedLimit) {
            result = `Driving ${speed} km/h in a ${speedLimit} zone`
        }
        else{
            difference = speed - speedLimit;
                if (difference <= 20) {
                    speedStatus = 'speeding';
                }
                else if (difference <= 40 && difference > 20) {
                    speedStatus = 'excessive speeding';
                }
                else{
                    speedStatus = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`;
            }
        break;
        case 'city':
            speedLimit = 50;
            if (speed <= speedLimit) {
                result = `Driving ${speed} km/h in a ${speedLimit} zone`
            }
            else{
                difference = speed - speedLimit;
                if (difference <= 20) {
                    speedStatus = 'speeding';
                }
                else if (difference <= 40 && difference > 20) {
                    speedStatus = 'excessive speeding';
                }
                else{
                    speedStatus = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`;
            }
        break;
                            
        default:
            break;
    }
    return result;
}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));