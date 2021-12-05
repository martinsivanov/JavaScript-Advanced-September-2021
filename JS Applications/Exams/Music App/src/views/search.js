import { searchAlbum } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

let searchTemplate = (onSearch,albums) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">
        ${albums.length == 0 || albums == undefined 
            ? html`<p class="no-result">No result.</p>` 
            : albums.map(cardAlbum)}
    </div>
</section>`;

let cardAlbum = (album) => html`
<div class="card-box">
    <img src=${album.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${album.isUser ? html`<div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>` : null}
    </div>
</div>`

let albums = [];

export async function searchPage(ctx) {

    ctx.render(searchTemplate(onSearch,albums));

    async function onSearch(event) {
        event.preventDefault();
    
        let query = document.querySelector('#search-input').value;
        if(query == ''){
            alert('Search field is required!')
        } else {
            let albums = await searchAlbum(query);
            let userData = getUserData();
            let isUser = userData != null;
                albums.forEach(element => {
                element.isUser = isUser
                });
            ctx.render(searchTemplate(onSearch,albums));
        }
    }
}