import { deleteBookById, getBookById, getTotalLikesForBook, likeBookById, likedByUser } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

let detailsTemplate = (book, isOwner, isUser, onDelete, onLike, totalLikes, hasLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            ${isOwner ? html`<a class="button" href="/edit/${book._id}">Edit</a>
            <a class="button" @click=${onDelete} href="/books">Delete</a>` : null}

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            ${!isUser || isOwner || hasLike ? null : html`<a class="button" @click=${onLike} href="">Like</a>`}

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${totalLikes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

export async function detailsPage(ctx) {
    let userData = getUserData();

    let book = await getBookById(ctx.params.id);
    let totalLikes = await getTotalLikesForBook(ctx.params.id);
    let hasLike = userData ? await likedByUser(ctx.params.id, userData.id) : 0;

    let isOwner = false;
    let isUser = false;
    if (userData) {
        let userId = userData.id;
        let ownerId = book._ownerId;
        isOwner = userData && userId == ownerId;
        if (!isOwner) {
            isUser = true;
        }
    }

    ctx.render(detailsTemplate(book, isOwner, isUser, onDelete, onLike, totalLikes, hasLike));

    async function onDelete() {
        let isConfirm = confirm('Are you sure?');
        if (isConfirm) {
            await deleteBookById(ctx.params.id);
            ctx.page.redirect('/books');
        }
    }

    async function onLike() {
        await likeBookById(ctx.params.id);
    }

}