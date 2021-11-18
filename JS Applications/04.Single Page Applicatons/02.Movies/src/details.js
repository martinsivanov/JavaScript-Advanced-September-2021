import { e, showView } from './dom.js';


let section = document.getElementById('movie-details');
section.remove();

export function showDetails(movieId) {
    showView(section);
    getMovie(movieId);
}

async function getMovie(id) {

    let request = [
        fetch('http://localhost:3030/data/movies/' + id),
        fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)
    ];

    let userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        request.push(fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`));
    }

    let [movieRes, likesRes, hasLikesRes] = await Promise.all(request);

    let [movieData, likes, hasLiked] = await Promise.all([
        movieRes.json(),
        likesRes.json(),
        hasLikesRes && hasLikesRes.json()
    ])

    section.replaceChildren(createDetails(movieData, likes, hasLiked));
}

function createDetails(movie, likes, hasLiked) {

    let controls = e('div', { className: 'col-md-4 text-center' },
        e('h3', { className: 'my-3' }, 'Movie Description'),
        e('p', {}, movie.description)
    );

    let userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        if (userData.id == movie._ownerId) {
            controls.appendChild(e('a', { className: 'btn btn-danger', href: '#' }, 'Delete'));
            controls.appendChild(e('a', { className: 'btn btn-warning', href: '#' }, 'Edit'));
        } else {
            if (hasLiked.length > 0) {
                controls.appendChild(e('a', { className: 'btn btn-primary', href: '#', onClick: onUnlike }, 'Unlike'));
            } else {
                controls.appendChild(e('a', { className: 'btn btn-primary', href: '#', onClick: onLike }, 'Like'));
            }
        }
    }

    controls.appendChild(e('span', { className: 'enrolled-span', href: '#' }, `Liked ${likes}`));

    let element = e('div', { className: 'container' },
        e('div', { className: 'row bg-light text-dark' },
            e('h1', {}, `Movie title: ${movie.title}`),
            e('div', { className: 'col-md-8' },
                e('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })
            ),
            controls
        )
    )
    return element;

    async function onLike() {
        await fetch('http://localhost:3030/data/likes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                movieId: movie._id
            })
        });

        showDetails(movie._id);
    }
    async function onUnlike() {

        let likeId = hasLiked[0]._id;

        await fetch('http://localhost:3030/data/likes/' + likeId, {
            method: 'delete',
            headers: {
                'X-Authorization': userData.token
            }
        });

        showDetails(movie._id);
    }
}