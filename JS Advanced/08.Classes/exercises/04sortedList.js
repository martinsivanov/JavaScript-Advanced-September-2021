class List {
    constructor() {
        this.numbers = [];
        this.size = this.numbers.length;
    }

    updateSize = () => this.size = this.numbers.length;
    orderList = () => this.numbers.sort((a, b) => a - b);

    add(num) {
        this.numbers.push(num);
        this.updateSize();
        this.orderList();
    }
    remove(index) {
        if (this.numbers[index] !== undefined) {
            this.numbers.splice(index, 1);
            this.updateSize();
            this.orderList();
        }
    }
    get(index) {
        index = Number(index);
        if (this.numbers[index] !== undefined) {
            this.updateSize();
            this.orderList();
            return this.numbers[index];
        }
    }
}

let list = new List(); 

list.add(5); 

list.add(6); 

list.add(7); 

console.log(list.get(1));  

list.remove(1); 

console.log(list.get(1)); 