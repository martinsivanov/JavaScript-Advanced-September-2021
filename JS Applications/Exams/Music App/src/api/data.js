import * as api from './api.js';

export let login = api.login;
export let register = api.register;
export let logout = api.logout;

export async function getAllAlbums() {
    return api.get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function createAlbum(album) {
    return api.post('/data/albums', album);
}

export async function getAlbumById(id) {
    return api.get('/data/albums/' + id);
}

export async function deleteAlbumById(id) {
    return api.del('/data/albums/' + id);
}

export async function editAlbumById(id, album) {
    return api.put('/data/albums/' + id, album);
}

export async function searchAlbum(query) {
    return api.get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}