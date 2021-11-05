function addItem() {
    let input = document.getElementById('newItemText');
   
    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    let ul = document.getElementById('items');
    ul.appendChild(liElement);
    input.value = '';
}