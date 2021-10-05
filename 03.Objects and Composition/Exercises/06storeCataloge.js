function storeCataloge(arr) {
    let cataloge = {};
    arr.forEach(el => {
       let [productName,price] = el.split(' : ');
       price = Number(price);
       let index = productName[0];
       if (!cataloge[index]) {
           cataloge[index] = {};
       }
       cataloge[index][productName] = price;
    });
    let sortedCataloge = Object.keys(cataloge).sort((a,b) => a.localeCompare(b));
    for (const key of sortedCataloge) {
        let products = Object.entries(cataloge[key]).sort((a,b) => a[0].localeCompare(b[0]));
        console.log(`${key}`);
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`);
        });
    }
}

storeCataloge(['Appricot : 20.4',
                'Fridge : 1500',
                'TV : 1499',
                'Deodorant : 10',
                'Boiler : 300',
                'Apple : 1.25',
                'Anti-Bug Spray : 15',
                'T-Shirt : 10']);