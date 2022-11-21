import * as api from './api.js';

const endpoint = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
    'getAllTeams': 'data/teams',
    'getAllMembers': 'data/members?where=status%3D%22member%22',
    'createTeam': 'data/teams',
    'teamsInfo': 'data/teams',
    'memberRequest': 'data/members'
}

export async function login(email, password) {
    const response = await api.post(endpoint.login, {email, password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    return response;
}

export async function register(email, username, password) {
    const response = await api.post(endpoint.register, {email, username, password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    return response;
}

export async function logout() {
    const response = await api.get(endpoint.logout);
    return response;
}

export async function getAllTeams() {
    const response = await api.get(endpoint.getAllTeams);
    return response;
}

export async function getAllMembers() {
    const response = await api.get(endpoint.getAllMembers);
    return response;
}

export async function createTeam(name, imageUrl, description) {
    const response = await api.post(endpoint.createTeam, {name, imageUrl, description});
    return response;
}

export async function getTeamInfo(id) {
    const response = await api.get(endpoint.teamsInfo + id);
    return response;
}

export async function updateTeamInfo(id, name, imageUrl, description) {
    const response = await api.put(endpoint.getTeamInfo + id, {name, imageUrl, description});
    return response;
}

export async function requestMember(teamId) {
    const response = await api.post(endpoint.memberRequest, {teamId});
    return response;
}

