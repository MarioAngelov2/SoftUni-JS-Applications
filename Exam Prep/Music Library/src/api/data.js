import { get, post, put, del } from "./api.js";

//***************** create application service ****************/

export async function getDashboard() {
    return get('/data/albums?sortBy=_createdOn%20desc');
}

export async function createAlbum(data) {
    return post('/data/albums', data);
}

export async function albumDetail(id) {
    return get('/data/albums/' + id);
}

export async function deleteAlbum(id) {
    return del('/data/albums/' + id);
}

export async function editAlbum(id, data) {
    return put('/data/albums/' + id, data);
}