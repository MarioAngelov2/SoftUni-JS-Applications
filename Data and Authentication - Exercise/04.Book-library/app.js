function attachEvents() {
    document.getElementById('loadBooks').addEventListener('click', getData);
    document.querySelector('form button').addEventListener('click', onCreate)
}

function onLoad(data) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    Object.values(data).forEach(book => {
        const tr = document.createElement('tr');
        tr.setAttribute('id', book._id);
        tbody.appendChild(tr);

        const tdAuthor = document.createElement('td');
        tdAuthor.textContent = book.author;
        tr.appendChild(tdAuthor);

        const tdTitle = document.createElement('td');
        tdTitle.textContent = book.title;
        tr.appendChild(tdTitle);

        const tdButtons = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete);
        tdButtons.appendChild(editBtn);
        tdButtons.appendChild(deleteBtn);
        tr.appendChild(tdButtons);
    });
}

function onCreate(ev) {
    ev.preventDefault();

    const titleInput = document.querySelector('input[name="title"]');
    const authorInput = document.querySelector('input[name="author"]');

    if (titleInput.value !== '' || authorInput.value !== '') {
        const body = {
            title: titleInput.value,
            author: authorInput.value
        }
        postData(body);
    } else {
        alert('Empty input field!')
    }

    titleInput.value = '';
    authorInput.value = '';
}

function onDelete(ev) {
    const tr = ev.target.parentElement.parentElement;
    const id = tr.getAttribute('id');

    deleteData(id);
    tr.remove();
}

async function getData() {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const response = await fetch(url);
    const data = await response.json();

    return onLoad(data)
}

async function postData(body) {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const response = await fetch(url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
}

async function deleteData(id) {
    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    const response = await fetch(url, {
        method: 'delete',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(null)
    });
    const data = await response.json();
    return data; 
}

attachEvents()