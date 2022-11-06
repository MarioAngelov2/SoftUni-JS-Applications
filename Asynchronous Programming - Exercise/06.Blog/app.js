function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}

attachEvents();

async function getAllPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';
    const response = await fetch(url);
    const data = await response.json();

    
    const selectElement = document.getElementById('posts');
    selectElement.replaceChildren();

    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;

        selectElement.appendChild(optionElement);
    }) 
}

async function displayPost() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const selectedOption = document.getElementById('posts').selectedOptions[0].value;
    const titleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const postCommentsElement = document.getElementById('post-comments');
    postCommentsElement.replaceChildren();

    const postResponse = await fetch(postsUrl);
    const postData = await postResponse.json();

    const commentsResponse = await fetch(commentsUrl);
    const comentsData = await commentsResponse.json();

    const selectedPost = Object.values(postData).find(post => post.id === selectedOption);
    titleElement.textContent = selectedPost.title;
    postBodyElement.textContent =  selectedPost.body;

    const comments = Object.values(comentsData).filter(c => c.postId === selectedOption);
    
    comments.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c.text;
        postCommentsElement.appendChild(li);
    })
}



