let getBtn = document.getElementById('show_button');
let rootDiv = document.getElementById('root');
let list = document.getElementById('list');

function callServer() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.log('Connection Error!!!')
        } else {
            let responceObj = xhr.response;
            console.log(responceObj)
            createElement(responceObj);

        }
    }
}


getBtn.addEventListener('click', function () {
    callServer();
});

function createElement(value) {
    let person = value;
    for (let i = 0; i < person.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('li_container')
        let newli = document.createElement('li');
        newli.classList.add('li_elem');
        newli.innerHTML = `<span class='unique_id' id='UID'>Id: ${person[i].id}</span> 
        <span>Name: ${person[i].name}</span>
        <button class='deleteBtn'>Delete</button>
        <button class='editBtn'>Edit</button>`
        newDiv.appendChild(newli)
        list.appendChild(newDiv);
    }
    editButtons()
}

function editButtons() {
    document.querySelector('ul').addEventListener('click', function (e) {
        const target = e.target;
        if (target.innerHTML === 'Delete') {
            console.log('Delete')

        }

        if (target.innerHTML === 'Edit') {
            console.log('Edit')
            createEdit()
        }
    });
}

function createEdit() {

    let editField = document.createElement('div');
    editField.classList.add('hover_div');

    let idField = document.createElement('div');
    let title = document.createElement('label');
    title.innerHTML = 'id'
    let input = document.createElement('input');

    idField.appendChild(title)
    idField.appendChild(input)
    editField.appendChild(idField);

    let nameField = document.createElement('div');
    let nameTitle = document.createElement('label');
    nameTitle.innerHTML = 'name'
    let inputName = document.createElement('input');

    nameField.appendChild(nameTitle)
    nameField.appendChild(inputName)
    editField.appendChild(nameField);

    let usernameField = document.createElement('div');
    let usernameTitle = document.createElement('label');
    usernameTitle.innerHTML = 'username'
    let inputUsername = document.createElement('input');

    usernameField.appendChild(usernameTitle)
    usernameField.appendChild(inputUsername)
    editField.appendChild(usernameField);

    let emailField = document.createElement('div');
    let emailTitle = document.createElement('label');
    emailTitle.innerHTML = 'Email'
    let inputEmail = document.createElement('input');

    let saveButton = document.createElement('button');
    saveButton.classList.add('saveBtn')
    saveButton.innerHTML = 'Save changes';
    emailField.appendChild(emailTitle)
    emailField.appendChild(inputEmail)
    editField.appendChild(emailField);
    editField.appendChild(saveButton)
    rootDiv.appendChild(editField)

}

