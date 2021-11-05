function solve() {
    let prev = 0;
    let cur = 1;

    function fib() {
        let next = prev + cur;
        prev = cur;
        cur = next;
        return prev;
    }

    return fib;
}
let fib = solve(); 

console.log(fib()); // 1 

console.log(fib()); // 1 

console.log(fib()); // 2 

console.log(fib()); // 3 

console.log(fib()); // 5 

console.log(fib()); // 8 

console.log(fib()); // 13 