let getBtn = document.getElementById('show_button');
let rootDiv = document.getElementById('root');
let list = document.getElementById('list');
let spiner = document.getElementById('cube-loader');
let postContainer = document.getElementById('post_list__items');

function callServer() {
    showSpinner()
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.log('Connection Error!!!')
        } else {
            let responceObj = xhr.response;
            alert(`Done,${xhr.status}`)
            hide();
            createElement(responceObj);
        }
    }
}

function callPost() {
    showSpinner()
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.log('Connect Error!!!')
        } else {
            let responceObj = xhr.response;
            alert(`Done,${xhr.status}`);
            hide();
            createPost(responceObj)
        }
    }
}
getBtn.addEventListener('click', function () {
    callServer();
});

function getResponseDelete(userId) {
    showSpinner()
    const request = new XMLHttpRequest();

    request.open('DELETE', `https://jsonplaceholder.typicode.com/users/${userId}`);
    request.send();
    request.onload = function () {
        if (request.status === 200) {
            alert(`Deleted, ${request.status}`);
            hide()
        } else {
            alert(request.statusText);
        }
    }

}

function getResponseEdit(userid) {
    showSpinner()
    const request = new XMLHttpRequest();

    request.open('PUT', `https://jsonplaceholder.typicode.com/users/${userId}`);
    request.send();
    request.onload = function () {
        if (request.status === 200) {
            hide()
            alert(`Edited, ${request.status}`);
        } else {
            alert(request.statusText);
        }
    }

}

function createPost(value) {
    let post = value;
    for (let i = 0; i < post.length; i++) {
        let newli = document.createElement('li');
        newli.style.width = 250 + 'px';
        newli.setAttribute('id', 'p__items');
        let newSp = document.createElement('h1');
        newSp.setAttribute('id', 'title');
        newSp.style.fontSize = 20 + 'px';
        newSp.style.textAlign = 'center';
        newSp.innerHTML = `${post[0].title}`;
        let secSp = document.createElement('p');
        secSp.setAttribute('id', 'main__txt');
        secSp.innerHTML = `${post[0].body}`

        newli.appendChild(newSp);
        newli.appendChild(secSp)
        postContainer.appendChild(newli);

    }
}

function createElement(value) {
    let person = value;
    for (let i = 0; i < person.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'li_elem1')
        let newli = document.createElement('li');
        newli.classList.add('li_elem');
        let delbtn = document.createElement('button')
        delbtn.setAttribute('id', 'deleteBtn')
        delbtn.innerHTML = 'Delete'
        let edtBtn = document.createElement('button')
        edtBtn.setAttribute('id', 'editBtn')
        edtBtn.innerHTML = 'Edit'
        let uName = document.createElement('span')
        uName.innerHTML = ` Name:${person[i].name}`
        uName.setAttribute('id', `name`);
        newli.appendChild(uName);
        let uId = document.createElement('span');
        uId.innerHTML = ` id: ${person[i].id}`
        uId.setAttribute('id', `${person[i].id}`)
        newli.appendChild(uId)
        newDiv.appendChild(newli);
        newDiv.appendChild(delbtn);
        newDiv.appendChild(edtBtn);
        list.appendChild(newDiv);
    }
    editButtons()
    activePost()
}

function activePost() {
    let name = document.getElementById('name');
    name.addEventListener('click', function () {
        list.style.display = 'none';
        callPost()
    })
}

function editButtons() {
    document.querySelector('ul').addEventListener('click', function () {
        let delBtn = document.getElementById('deleteBtn');
        if (delBtn.innerHTML === 'Delete') {
            let liElem = document.querySelector('#li_elem1');
            delBtn.addEventListener('click', function () {
                const userId = liElem.firstChild.getAttribute('id')
                let child = this.parentNode;
                let parent = child.parentNode;
                parent.removeChild(child);
                getResponseDelete(userId);
            })
        }
        let editBtn = document.getElementById('editBtn')
        if (editBtn.innerHTML === 'Edit') {
            editBtn.addEventListener('click', function () {
                createEditField(userId);
            })
        }
    });
}

function createEditField(el) {
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
    document.getElementById(el).appendChild(editField)

}

function showSpinner() {

    spiner.style.display = 'block';
}

function hide() {
    spiner.style.display = 'none';
}