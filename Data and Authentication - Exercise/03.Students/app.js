async function getData() {
    const table = document.querySelector('#results tbody');
    document.getElementById('submit').addEventListener('click', onSubmit)

    const firstNameInput = document.querySelector('input[name="firstName"]');
    const lastNameInput = document.querySelector('input[name="lastName"]');
    const facultyNumberInput = document.querySelector('input[name="facultyNumber"]');
    const gradeInput = document.querySelector('input[name="grade"]');

    const url = 'http://localhost:3030/jsonstore/collections/students';
    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(s => {
        const firstName = s.firstName;
        const lastName = s.lastName;
        const fcNumber = s.facultyNumber;
        const grade = Number(s.grade);

        const tr = document.createElement('tr');

        const firstNameCell = tr.insertCell(0);
        firstNameCell.textContent = firstName;

        const lastNameCell = tr.insertCell(1);
        lastNameCell.textContent = lastName;

        const fcNumberCell = tr.insertCell(2);
        fcNumberCell.textContent = fcNumber;

        const gradeCell = tr.insertCell(3);
        gradeCell.textContent = grade;


        
        table.appendChild(tr)
    });

    function onSubmit(ev) {
        ev.preventDefault();

        if (isNaN(facultyNumberInput.value) || isNaN(gradeInput.value)) {
            return alert('Wrong input data!');
        }

        if (firstNameInput.value === '' || lastNameInput.value === '' || facultyNumberInput.value === '' || gradeInput.value === '') {
            return alert('Empty input!')
        }

        const tr = document.createElement('tr');

        const firstNameCell = tr.insertCell(0);
        firstNameCell.textContent = firstNameInput.value;

        const lastNameCell = tr.insertCell(1);
        lastNameCell.textContent = lastNameInput.value;

        const fcNumberCell = tr.insertCell(2);
        fcNumberCell.textContent = facultyNumberInput.value;

        const gradeCell = tr.insertCell(3);
        gradeCell.textContent = gradeInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';

        table.appendChild(tr)
    }
}
getData()

