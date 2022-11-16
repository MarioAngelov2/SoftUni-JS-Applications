export function solve() {
    const tRows = document.querySelector('.container tbody').children
    const inputField = document.getElementById('searchField');
    let match = inputField.value;
    inputField.value = '';

    for (let row of tRows) {

        row.classList.remove('select');

        if (match && row.textContent.toLowerCase().includes(match.toLowerCase())) {
            row.classList.add('select');
        }
    }
}