function solution() {
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    function restock(microelement, quantity) {
        storage[microelement] += quantity;
        return 'Success';
    }
    function prepare(recipeName, quantity) {
        for (let element in recipes[recipeName]) {
            let remaining = storage[element] - (recipes[recipeName][element] * quantity);
            if (remaining < 0) {
                return `Error: not enough ${element} in stock`
            } else {
                storage[element] = remaining;
            }
        }
        return 'Success'
    }
    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    }

    return function commands(str) {
        let strSplited = str.split(' ');
        let command = strSplited[0];
        if (command == 'restock') {
            return restock(strSplited[1], Number(strSplited[2]));
        } else if (command == 'prepare') {
            return prepare(strSplited[1], Number(strSplited[2]));
        } else {
            return report();
        }
    }


}
let manager = solution();

console.log(manager("restock flavour 50")); // Success  

console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));