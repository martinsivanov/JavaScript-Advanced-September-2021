function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', onChange);

    function onChange(e) {
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let valid = regex.test(email.value);

        if (!valid) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    }
}