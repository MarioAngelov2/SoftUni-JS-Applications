import { get, post, put, del } from "./api.js";

//***************** create application service ****************/

export async function getAll() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function createAlbum(data) {
    return post('/data/albums', data);
}

export async function getDetails(id) {
    return get('/data/albums/' + id);
}

export async function deleteAlbumById(id) {
    return del('/data/albums/' + id);
}

