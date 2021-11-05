function solve(numStr,op1,op2,op3,op4,op5) {
    let num = Number(numStr);
    
    function operate(arg) {
        if (arg === 'chop') {
           return num /= 2;
        }
        else if (arg === 'dice') {
            return num = Math.sqrt(num);
        } 
        else if (arg === 'spice') {
            return num += 1;
        }
        else if (arg === 'bake') {
            return num *= 3;
        }
        else if (arg === 'fillet') {
            return num *= 0.8;
        }
    }

    console.log(operate(op1));
    console.log(operate(op2));
    console.log(operate(op3));
    console.log(operate(op4));
    console.log(operate(op5));
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');