const section = document.getElementById('homeView');
section.remove();

export function showHome() {
    document.getElementById('main').replaceChildren(section);
} 