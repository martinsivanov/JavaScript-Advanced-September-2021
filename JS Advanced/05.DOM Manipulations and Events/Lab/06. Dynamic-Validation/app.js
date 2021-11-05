function validate() {
    let input = document.getElementById('email').addEventListener('change', onChange);

    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function onChange(ev) {
        if (pattern.test(ev.target.value)) {
            ev.target.classList.remove('error');
        } else {
            ev.target.classList.add('error');
        }
    }
}