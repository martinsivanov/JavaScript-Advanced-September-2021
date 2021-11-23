import * as api from './api.js';

export let login = api.login;
export let register = api.register;
export let logout = api.logout;

export async function 
getAllIdeas() {
    return api.get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}

export async function getIdeaById(id) {
    return api.get('/data/ideas/' + id);
}

export async function createIdea(idea) {
    return api.post('/data/ideas', idea);
}

export async function deleteById(id) {
    return api.del('/data/ideas/' + id);
}