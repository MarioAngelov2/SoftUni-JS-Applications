const section = document.getElementById('detailsView');
const main = document.getElementsByTagName('main')[0];
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let id;
section.remove();

export async function showDetails(ev) {
    if (!ev) {
        return
    }
    if (ev.target.tagName == 'H2') {
        id = ev.target.parentElement.id
    } else if (ev.target.tagName == 'A') {
        id = ev.target.id
    }

    const topic = await loadTopic(id)
    const comments = await loadComment(id)

    const res = topicTemplate(topic, comments);
    //section.replaceChildren(res)

    main.replaceChildren(section);
}

function topicTemplate(topic, comments) {
    const topicContainer = document.createElement('div');
    topicContainer.classList.add('theme-title');
    topicContainer.innerHTML = `
                        <div class="theme-name-wrapper">
                            <div class="theme-name">
                                <h2>${topic.topicName}</h2>
                            </div>
                        </div>`
}

function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const { postText, username } = Object.fromEntries(formData);
    createPost({ postText, username, id });
}

async function createPost(body) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    const response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
    const data = await response.json();
    clearForm();
}

function clearForm() {
    form.reset();
}

async function loadComment(id) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments' // id?
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function loadTopic(id) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
}