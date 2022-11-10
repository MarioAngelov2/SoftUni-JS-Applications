// async function lockedProfile() {
   
//     const url = 'http://localhost:3030/jsonstore/advanced/profiles';
//     const main = document.getElementById('main');

//     try{
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Error');
//         }

//         const data = await response.json();
//         let id = 1;
    
//         for (let element of Object.values(data)) {
//             const divConteinter = createElement('div', '', main);
//             divConteinter.className = 'profile';
    
//             const img = createElement('img', '', divConteinter);
//             img.className = 'userIcon';
//             img.setAttribute('src', './iconProfile2.png');
    
//             createElement('label', 'Lock', divConteinter);
//             const inputLock = createElement('input', '', divConteinter);
//             inputLock.type = 'radio';
//             inputLock.name = `user${id}Locked`;
//             inputLock.value = 'lock';
//             inputLock.setAttribute('checked', 'checked');
    
//             createElement('label', 'Unlock', divConteinter);
//             const inputUnlock = createElement('input', '', divConteinter);
//             inputUnlock.type = 'radio';
//             inputUnlock.name = `user${id}Locked`;
//             inputUnlock.value = 'unlock';
    
//             createElement('br', '', divConteinter);
//             createElement('hr', '', divConteinter);
    
//             createElement('label', 'Username', divConteinter);
    
//             const username = createElement('input', '', divConteinter);
//             username.type = 'text';
//             username.name = `user${id}Username`;
//             username.value = element.username;
//             username.disabled = true;
//             username.readonly = true;
    
//             const hidenDiv = createElement('div', '', divConteinter);
//             hidenDiv.id = `userHiddenFields`
//             hidenDiv.style.display = 'none';
    
//             createElement('hr', '', hidenDiv);
//             createElement('label', 'Email:', hidenDiv);
    
//             const inputEmail = createElement('input', '', hidenDiv);
//             inputEmail.type = 'email';
//             inputEmail.name = `user${id}Email`
//             inputEmail.value = element.email;
//             inputEmail.disabled = true;
//             inputEmail.readonly = true;
    
//             createElement('label', 'Age:', hidenDiv);
    
//             const inputAge = createElement('input', '', hidenDiv);
//             inputAge.type = 'email';
//             inputAge.name = `user${id}Age`
//             inputAge.value = element.age;
//             inputAge.disabled = true;
//             inputAge.readonly = true;
    
//             id++
    
//             let button = createElement('button', 'Show more', divConteinter);
//             button.addEventListener('click', (ev) => {
//                 if (inputUnlock .checked && ev.target.textContent === 'Show more') {
//                     hidenDiv.style.display = 'block';
//                     button.textContent = 'Hide it'
//                 } else if (inputUnlock.checked && ev.target.textContent === 'Hide it') {
//                     hidenDiv.style.display = 'none';
//                     button.textContent = 'Show more';
//                 }
//             })
//         }
//     } catch(error) {
//         console.log(error.message)
//     }


//     // create dynamic dom elements
//     function createElement(type, content, parent) {
//         let element = document.createElement(type);
//         element.textContent = content;

//         if (parent) {
//             parent.appendChild(element);
//         }
//         return element;
//     }
// }

