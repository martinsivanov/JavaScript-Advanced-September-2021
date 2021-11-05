class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(arrStrings) {
        for (let i = 0; i < arrStrings.length; i++) {
            let productInfo = arrStrings[i].split(' ');
            let productName = productInfo[0];
            let productQuantity = Number(productInfo[1]);
            let productTotalPrice = Number(productInfo[2]);
            if (productTotalPrice <= this.budgetMoney) {

                let productNames = Object.keys(this.stockProducts);

                if (!productNames.includes(productName)) {
                    this.stockProducts[productName] = productQuantity;
                    this.budgetMoney -= productTotalPrice;
                } else {
                    this.stockProducts[productName] += productQuantity;
                    this.budgetMoney -= productTotalPrice;
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.history.join('\n');
    }
    addToMenu(meal, products, price) {

        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: {},
                price: price
            }

            products.forEach(e => {
                let [productName, productQuantity] = e.split(' ');
                this.menu[meal].products[productName] = productQuantity;
            });

            let countMeals = Object.keys(this.menu).length;
            if (countMeals == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${countMeals} meals in the menu, other ideas?`
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }

    }
    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`;
        }
        let result = [];
        for (const [meal, mealPrice] of Object.entries(this.menu)) {
            result.push(`${meal} - $ ${mealPrice.price}`);
        }
        return result.join('\n');
    }
    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let neededProducts = {};

            for (let product in this.menu[meal].products) {
                if (!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].products[product]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                } else {
                    neededProducts[product] = this.menu[meal].products[product];
                }
            }

            for (let needProduct in neededProducts) {
                this.stockProducts[needProduct] -= neededProducts[needProduct];
            }

            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you {the current price of the meal}.`;
        }

    }
}

let kitchen = new Restaurant(1000);

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);

kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);

console.log(kitchen.makeTheOrder('frozenYogurt'));