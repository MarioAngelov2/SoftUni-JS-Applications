import * as api from './api.js';

const endpoint = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'createItem': 'data/catalog',
    'getAllItem': 'data/cagalog',
    'getItemByID': 'data/catalog',
    'myItem': 'data/catalog?where=_ownerId%3D%22'
}

export async function login(email, password) {
    const response = await api.post(endpoint.login, {email, password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    return response;
}

export async function register(email, password) {
    const response = await api.post(endpoint.register, {email, password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    return response;
}

export async function logout() {
    const response = await api.get(endpoint.logout);
    sessionStorage.clear();
    return response;
}

export async function createItem(data) {
    const response = await api.post(endpoint.createItem, data);
    return response;
}

export async function getAllItems() {
    const response = await api.get(endpoint.getAllItem);
    return response;
}

export async function getItemDetail(id) {
    const response = await api.get(endpoint.getItemByID + id);
    return response;
}

export async function updateByID(id, data) {
    const response = await api.put(endpoint.getItemByID + id, data);
    return response;
}

export async function deleteItem(id) {
    const response = await api.del(endpoint.getItemByID + id);
    return response;
}

export async function getMyItems() {
    //{userId}%22
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    const userID = userData._id;
    let id = `${userID}%22`
    const response = await api.get(endpoint.myItem + id)
    return response;
}
