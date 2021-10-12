function solve() {
  let [input, output] = Array.from(document.querySelectorAll('textarea'));
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  let table = document.querySelector('table.table tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy)
  function generate(e) {
    let data = JSON.parse(input.value);

    for (let item of data) {

      let row = document.createElement('tr');

      let imgCell = document.createElement('td');
      let nameCell = document.createElement('td');
      let priceCell = document.createElement('td');
      let defCell = document.createElement('td');
      let checkCell = document.createElement('td');

      let img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);

      let nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);

      let priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);

      let decP = document.createElement('p');
      decP.textContent = item.decFactor;
      defCell.appendChild(decP);

      let inputCheck = document.createElement('input');
      inputCheck.type = 'checkbox';
      checkCell.appendChild(inputCheck);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(defCell);
      row.appendChild(checkCell);

      table.appendChild(row);
    }
  }
  function buy(e) {
    let mebels = Array
      .from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(b => b.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactory: Number(r.children[3].textContent)
      }));
    let names = [];
    let totalPrice = 0;
    let decFactorAvarage = 0;
    for (let mebel of mebels) {
      names.push(mebel.name);
      totalPrice += mebel.price;
      decFactorAvarage += mebel.decFactory;
    }

    output.value = `Bought furniture: ${names.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${decFactorAvarage / mebels.length}`;
  }
}