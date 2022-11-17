const routes = {
    '/': homePage,
    '/login': loginPage
}

document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.href) {
        event.preventDefault();
        const url = new URL(event.target.href);
    }
})

const homeSection = document.getElementById('home-lage');
const loginSection = document.getElementById('form-login');

function homePage() {
    showView(homeSection)
}

function loginPage() {
    showView(loginSection)
}