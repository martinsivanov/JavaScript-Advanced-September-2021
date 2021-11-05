function solve() {
  let inputText = document.getElementById('input').value;
  let splitedInput = inputText.split('.').filter(el => el != '');
  let output = document.getElementById('output');
  let result = '';
  let temp = '';
  let counter = 0;
  for (let i = 0; i < splitedInput.length; i++) {
    if (counter == 3 || i == splitedInput.length - 1) {
      result += `<p> ${temp} </p>`;
      temp = '';
      counter = 0;
    }
    temp += splitedInput[i].trim() + '.';
    counter++;
  };

  output.innerHTML = result;
}