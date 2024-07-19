const addUserBtn = document.getElementById('addUserBtn');
const newUserForm = document.getElementById('newUserForm');
const submitUserBtn = document.getElementById('submitUserBtn');
const userList = document.getElementById('userList');

addUserBtn.addEventListener('click', () => {
    newUserForm.style.display = 'block';
});

submitUserBtn.addEventListener('click', () => {
    let name = document.getElementById('userName').value;
    let email = document.getElementById('userEmail').value;

    if (name && email) {
        addUser(name, email);
        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
        newUserForm.style.display = 'none';
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

function addUser(name, email) {
    let userDiv = document.createElement('div');
    userDiv.className = 'user';

    let userInfoDiv = document.createElement('div');
    userInfoDiv.className = 'user-info';

    let userImg = document.createElement('img');
    userImg.src = 'https://e7.pngegg.com/pngimages/858/581/png-clipart-profile-icon-user-computer-icons-system-chinese-wind-title-column-miscellaneous-service.png';
    userImg.alt = 'User Avatar';

    let userNameEmail = document.createElement('div');
    userNameEmail.innerHTML = `<strong>${name}</strong><br>${email}`;

    let assignmentsDiv = document.createElement('div');
    assignmentsDiv.className = 'assignments';
    assignmentsDiv.innerHTML = `<span>0</span> <button class="addAssignmentBtn">Agregar Asignación</button>`;

    userInfoDiv.appendChild(userImg);
    userInfoDiv.appendChild(userNameEmail);

    userDiv.appendChild(userInfoDiv);
    userDiv.appendChild(assignmentsDiv);

    userList.appendChild(userDiv);

    let addAssignmentBtn = userDiv.querySelector('.addAssignmentBtn');
    addAssignmentBtn.addEventListener('click', () => {
        let assignments = assignmentsDiv.querySelector('span');
        let count = parseInt(assignments.textContent);
        count++;
        assignments.textContent = count;

        let newAssignment = document.createElement('button');
        newAssignment.textContent = `Asignación ${count}`;
        assignmentsDiv.insertBefore(newAssignment, addAssignmentBtn);
    });
}
