const section = document.getElementById('detailsView');
const main = document.getElementsByTagName('main')[0];
const form = section.querySelector('form');
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
    const topic = loadTopic(id)
    //const comments = loadComment(id);
    //const res = topicTemplate(topic, comments);
    //section.replaceChildren(res)

    main.replaceChildren(section);
}

function topicTemplate(data) {

}

function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const {postText, username} = Object.fromEntries(formData);
    createPost({postText, username, id});
}

async function createPost(body) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    const response = await fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })
    const data = await response.json();
    clearForm();
}

function clearForm() {
    form.reset();
}

async function loadTopic(id) {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
}