import { get, post, put, del } from "./api.js";

//***************** create application service ****************/

export async function getAll() {
    return get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function createItems(data) {
    return post('/data/shoes', data);
}

export async function itemDetailById(id) {
    return get('/data/shoes/' + id);
}

export async function deleteItemById(id) {
    return del('/data/shoes/' + id)
}

export async function editItem(id) {
    return put('/data/shoes/' + id)
}

