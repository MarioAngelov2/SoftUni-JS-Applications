const url = 'http://localhost:3030/jsonstore/advanced/table'

export async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}