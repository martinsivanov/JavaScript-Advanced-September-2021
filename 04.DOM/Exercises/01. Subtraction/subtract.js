function subtract() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;

    let sum = first - second;
    document.getElementById('result').textContent = sum;
    console.log(sum);
}