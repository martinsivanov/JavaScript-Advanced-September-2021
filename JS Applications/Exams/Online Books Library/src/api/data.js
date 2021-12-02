import * as api from './api.js';

export let login = api.login;
export let register = api.register;
export let logout = api.logout;

export function getAllBooks() {
    return api.get('/data/books?sortBy=_createdOn%20desc');
}
export function createBook(book) {
    return api.post('/data/books', book);
}

export function getBookById(id) {
    return api.get('/data/books/' + id);
}

export function deleteBookById(id) {
    return api.del('/data/books/' + id);
}

export function editBookById(id, book) {
    return api.put('/data/books/' + id, book);
}

export function myBooks(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export function likeBookById(bookId) {
    return api.post('/data/likes', {
        bookId
    });
}

export function getTotalLikesForBook(bookId) {
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
}

export function likedByUser(bookId, userId) {
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}