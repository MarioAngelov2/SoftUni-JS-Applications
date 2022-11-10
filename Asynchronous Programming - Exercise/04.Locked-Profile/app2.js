async function lockedProfile() {
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error');
        }

        const data = await response.json();
    
        let id = 1;
    
        Object.values(data).forEach(e => {
            const div = generateHtml('div', '', main);
            div.classList.add('profile');
    
            const img = generateHtml('img', '', div);
            img.src = './iconProfile2.png';
            img.classList.add('userIcon');
    
            const labelLock = generateHtml('label', 'Lock', div);
            const lockInfo = generateHtml('input', '', div);
            lockInfo.type = 'radio';
            lockInfo.name = `user${id}Locked`;
            lockInfo.value = 'lock';
            lockInfo.setAttribute('checked', 'checked');
    
            const labelUnlock = generateHtml('label', 'Unlock', div);
            const unlockInfo = generateHtml('input', '', div);
            unlockInfo.type = 'radio';
            unlockInfo.name = `user${id}Locked`;
            unlockInfo.value = 'unlock';
    
            generateHtml('br', '', div);
            generateHtml('hr', '', div);
    
            generateHtml('label', 'Username', div);
            
            const userNameInfo = generateHtml('input', '', div);
            userNameInfo.type = 'text';
            userNameInfo.name = `user${id}Username`
            userNameInfo.value = e.username;
            userNameInfo.disabled = true;
            userNameInfo.readonly = true;
    
            const divHiddenInfo = generateHtml('div', '', div);
            divHiddenInfo.id = `user${id}HiddenFields`;
            divHiddenInfo.style.display = 'none';
    
            generateHtml('hr', '', divHiddenInfo);
    
            generateHtml('label', 'Email:', divHiddenInfo);
            const emailInfo = generateHtml('input', '', divHiddenInfo);
            emailInfo.type = 'email';
            emailInfo.name = `user${id}Email`;
            emailInfo.value = e.email;
            emailInfo.disabled = true;
            emailInfo.readonly = true;
    
            generateHtml('label', 'Age:', divHiddenInfo);
            const ageInfo = generateHtml('input', '', divHiddenInfo);
            ageInfo.type = 'email';
            ageInfo.name = `user${id}Age`;
            ageInfo.value = e.age;
            ageInfo.disabled = true;
            ageInfo.readonly = true;
    
            id++;
    
            const button = generateHtml('button', 'Show more', div);
            button.addEventListener('click', (ev) => {
                if (unlockInfo.checked && ev.target.textContent === 'Show more') {
                   divHiddenInfo.style.display = 'block';
                   button.textContent = 'Hide it'
                } else if (unlockInfo.checked && ev.target.textContent === 'Hide it') {
                    divHiddenInfo.style.display = 'none';
                    button.textContent = 'Show more';
                }
            })
        })
    } catch (error) {
        console.log(error.message);
    }
    
    function generateHtml(type, content, parent) {
        const element = document.createElement(type);
        
        if (type) {
            element.textContent = content;
        }
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }

}