let getBtn = document.getElementById('show_button');
let rootDiv = document.getElementById('root');
let list = document.getElementById('list');

function callServer() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.responseType = 'json';
    xhr.send();
    let responceObj = xhr.response;
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

function getResponseDelete(userId){
    const request = new XMLHttpRequest();

    request.open('DELETE', `https://jsonplaceholder.typicode.com/users/${userId}`);
    request.send();
    request.onload = function () {
        if (request.status === 200) {
            alert(`Deleted, ${request.status}`);
          } else {
            alert(request.statusText);
          }
    }
    
}

function getResponseEdit(userid){
    const request = new XMLHttpRequest();

    request.open('PUT', `https://jsonplaceholder.typicode.com/users/${userId}`);
    request.send();
    request.onload = function () {
        if (request.status === 200) {
            alert(`Edited, ${request.status}`);
          } else {
            alert(request.statusText);
          }
    }
    
}
function createElement(value) {
    let person = value;
    for (let i = 0; i < person.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class','li_elem1')
        let newli = document.createElement('li');
        newli.classList.add('li_elem');
        newli.innerHTML = `<span class='unique_id' id='${person[i].id}'>Id: ${person[i].id}</span> 
        <span>Name: ${person[i].name}</span>
        <button id='deleteBtn'>Delete</button>
        <button id='editBtn'>Edit</button>`
        newDiv.appendChild(newli)
        list.appendChild(newDiv);
    }
    editButtons()
}

function editButtons() {
    document.querySelector('ul').addEventListener('click', function (e) {
        const target = e.target;
        if (target.innerHTML === 'Delete') {
            let delBtn = document.querySelector('#deleteBtn');
            let liElem =document.querySelector('.li_elem');
            delBtn.addEventListener('click',function(){
                const userId = liElem.firstChild.getAttribute('id');
                console.log(delBtn)
                let child  = this.parentNode;
                console.log(child)
                let parent = child.parentNode;
                parent.removeChild(child);
                getResponseDelete(userId);
            })      
        }

        if (target.innerHTML === 'Edit') {
           let editBtn = document.getElementById('editBtn')
           editBtn.addEventListener('click',function(){
            console.log(editBtn)
            let child  = this.parentNode;
                let parent = child.parentNode;
                console.log(parent)
                createEditField(parent)
           })
        }
    });
}

function createEditField(value) {
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
    value.appendChild(editField)

}
