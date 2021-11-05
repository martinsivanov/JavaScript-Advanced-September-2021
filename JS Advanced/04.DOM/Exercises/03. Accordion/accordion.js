function toggle() {
    let btn = document.getElementsByClassName('button');
    let text = document.getElementById('extra');

    btn[0].textContent = btn[0].textContent == 'More' ? 'Less' : 'More';
    text.style.display = text.style.display == 'none' || text.style.display == '' ? 'block' : 'none';
}