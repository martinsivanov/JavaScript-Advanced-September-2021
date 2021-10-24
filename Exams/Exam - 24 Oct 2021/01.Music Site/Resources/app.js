window.addEventListener('load', solve);

function solve() {
    let genreInput = document.querySelector('#genre');
    let nameInput = document.querySelector('#name');
    let authorInput = document.querySelector('#author');
    let dateInput = document.querySelector('#date');

    let collectionSongs = document.querySelector('.all-hits-container');
    console.log(collectionSongs);

    let addButton = document.querySelector('#add-btn');
    addButton.addEventListener('click', add);

    let counter = 0;


    function add(ev) {
        ev.preventDefault();
        let genre = genreInput.value;
        let name = nameInput.value;
        let author = authorInput.value;
        let date = dateInput.value;
        if (genre.length > 0 && name.length > 0 && author.length > 0 && date.length > 0) {
            let div = document.createElement('div');
            div.classList.add("hits-info");
            div.innerHTML =
                `<img src="./static/img/img.png">
            <h2>Genre: ${genre}</h2>
            <h2>Name: ${name}</h2>
            <h2>Author: ${author}</h2>
            <h3>Date: ${date}</h3><button class="save-btn">Save song</button><button class="like-btn">Like song</button><button class="delete-btn">Delete</button>`;

            collectionSongs.appendChild(div);
            genreInput.value = '';
            nameInput.value = '';
            authorInput.value = '';
            dateInput.value = '';

            let likeButton = div.querySelector('.like-btn');
            likeButton.addEventListener('click', liked);

            let saveButton = div.querySelector('.save-btn');
            saveButton.addEventListener('click', save);

            let deleteButton = div.querySelector('.delete-btn');
            deleteButton.addEventListener('click', deleted);

            function deleted(e) {
                div.remove();
            }

            function save(e) {
                let saveContainer = document.querySelector('.saved-container');
                div.removeChild(likeButton);
                div.removeChild(saveButton);

                saveContainer.appendChild(div);
            }

            function liked() {
                let p = document.querySelector('#total-likes p');
                counter++;
                p.textContent = `Total Likes: ${counter}`;
                likeButton.disabled = true;
            }
        }
    }

}