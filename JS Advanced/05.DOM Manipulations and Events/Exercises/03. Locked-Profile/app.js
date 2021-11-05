function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onClick));

    function onClick(ev) {
        let profile = ev.target.parentElement
        let infoDiv = profile.querySelector('div');

        let isCheck = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        if (isCheck) {
            if (ev.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                ev.target.textContent = 'Hide it'
            } else {
                infoDiv.style.display = '';
                ev.target.textContent = 'Show more'
            }
        }
    }
}