function solve(arr) {
    let juicesBottles = new Map();
    let juicesStore = new Map();

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' => ');
        let juiceName = current[0];
        let juiceQty = Number(current[1]);

        if (!juicesStore.has(juiceName)) {
            juicesStore.set(juiceName, 0);
        }

        let total = juicesStore.get(juiceName) + juiceQty;

        if (total >= 1000) {
            if (!juicesBottles.get(juiceName)) {
                juicesBottles.set(juiceName, 0);
            }
            let newBottles = Math.trunc(total / 1000);
            let totalBottles = juicesBottles.get(juiceName) + newBottles;
            juicesBottles.set(juiceName, totalBottles)
        }

        juicesStore.set(juiceName, total % 1000);

    }

    return [...juicesBottles].map(([key,value]) => `${key} => ${value}`).join('\n');
}

console.log(solve(['Orange => 2000',

'Peach => 1432',

'Banana => 450',

'Peach => 600',

'Strawberry => 549']));