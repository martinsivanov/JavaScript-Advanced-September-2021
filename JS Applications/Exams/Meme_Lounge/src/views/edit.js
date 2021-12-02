import { editMeme, getMemeById } from '../api/data.js';
import { notify } from '../api/notify.js';
import { html } from '../lib.js';

let editTemplate = (meme, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"
                .value=${meme.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;


export async function editPage(ctx) {

    let meme = await getMemeById(ctx.params.id);

    ctx.render(editTemplate(meme, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        let title = formData.get('title').trim();
        let description = formData.get('description').trim();
        let imageUrl = formData.get('imageUrl').trim();


        if (title == '' || description == '' || imageUrl == '') {
            notify('All fields are required!');
        } else {
            await editMeme(ctx.params.id, {
                title,
                description,
                imageUrl
            });
            ctx.page.redirect('/details/' + ctx.params.id);
        }
    }
}