function addItem() {
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    let input = document.getElementById('newItemText');
    li.textContent = input.value;

    let button = document.createElement('a');
    button.textContent = '[Delete]';
    button.href = '#';
    button.addEventListener('click', removeElement)

    li.appendChild(button);
    ul.appendChild(li);

    function removeElement(ev) {
        let parent = ev.target.parentNode;
        parent.remove();
    }

    input.value = '';
}