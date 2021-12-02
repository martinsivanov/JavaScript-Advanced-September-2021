let element = document.querySelector('#errorBox');
let output = element.querySelector('span');

export function notify(msg) {
    output.textContent = msg;
    element.style.display = 'block';
}