function solve() {
  let input = document.getElementById('text').value;
  let naming = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let stringResult = '';

  let inputArr = input.split(' ');
  if (naming == 'Pascal Case') {
    let word = '';
    for (let i = 0; i < inputArr.length; i++) {
      word = inputArr[i];
      stringResult += word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
    }
  }
  else if (naming == 'Camel Case') {
    for (let i = 0; i < inputArr.length; i++) {
      word = inputArr[i];
      if (i == 0) {
        stringResult += word[0].toLowerCase() + word.slice(1, word.length).toLowerCase();
      } else {
        stringResult += word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
      }
    }
  } else {
    stringResult = 'Error!';
  }

  result.textContent = stringResult;
}
