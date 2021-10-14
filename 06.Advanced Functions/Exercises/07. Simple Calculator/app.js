function calculator() {
    let firstInput;
    let secondInput;
    let resultOutput;
    function init(num1,num2,result) {
        firstInput = document.querySelector(num1);
        secondInput = document.querySelector(num2);
        resultOutput = document.querySelector(result);
    }
    function add() {
        resultOutput.value = Number(firstInput.value) + Number(secondInput.value);
    }
    function subtract() {
        resultOutput.value = Number(firstInput.value) - Number(secondInput.value);
    }
    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




