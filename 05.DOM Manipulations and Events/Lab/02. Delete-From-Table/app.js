function deleteByEmail() {
    let input = document.querySelector('input[name=email]');
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let isFound = false;

    for (let row of rows) {
        if (row.children[1].textContent == input.value) {
            isFound = true;
            row.remove();
        }
    }

    let result = document.getElementById('result');
    result.textContent = isFound ? 'Deleted.' : 'Not found.';
}