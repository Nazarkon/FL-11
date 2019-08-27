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
// function callComments(){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
//     xhr.responseType = 'json';
//     xhr.send();
//     xhr.onload = function () {
//         if (xhr.status !== 200) {
//             console.log('Connect Error!!!')
//         } else {
//             let responceObj = xhr.response;
//             alert(`Done,${xhr.status}`);
//             hide();
//         }
//     } 
// }
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

function getResponseEdit(userId) {
    showSpinner()
    const request = new XMLHttpRequest();

    request.open('PUT', 'https://jsonplaceholder.typicode.com/users/' + userId,true);
    request.send();
    request.onload = function () {
        if (request.status === 200) {
            hide()
            alert(`Edited, ${request.status}`);
            console.log(target.parentElement)
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
        newSp.innerHTML = `${post[i].title}`;
        let secSp = document.createElement('p');
        secSp.setAttribute('id', 'main__txt');
        secSp.innerHTML = `${post[i].body}`

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
        delbtn.setAttribute('class', 'deleteBtn')
        delbtn.innerHTML = 'Delete'
        let edtBtn = document.createElement('button')
        edtBtn.setAttribute('class', 'editBtn')
        edtBtn.innerHTML = 'Edit'
        let uId = document.createElement('span');
        uId.innerHTML = ` id: ${person[i].id}`
        uId.setAttribute('id', `${person[i].id}`)
        let uName = document.createElement('span')
        uName.innerHTML = ` Name:${person[i].name}`
        uName.setAttribute('id', `name`);

        newli.appendChild(uId)
        newli.appendChild(uName);
        newDiv.appendChild(newli);
        newDiv.appendChild(delbtn);
        newDiv.appendChild(edtBtn);
        list.appendChild(newDiv);
    }
    deleteButton();
    editButton();
    activePost();
}

function activePost() {
    let name = document.getElementById('name');
    name.addEventListener('click', function () {
        list.style.display = 'none';
        callPost();
        // callComments();
    })
}

function deleteButton() {
    list.addEventListener('mouseover', function (event) {
        const target = event.target;
        let delBtn = document.querySelectorAll('.deleteBtn');
        if (target.innerHTML === 'Delete') {
            let liElem = document.querySelector('#li_elem1');
            target.addEventListener('click', function () {
                const userId = liElem.firstChild.getAttribute('id')
                let child = this.parentNode;
                let parent = child.parentNode;
                parent.removeChild(child);
                getResponseDelete(userId);
            });
        }
    });
}

function editButton() {
    list.addEventListener('mouseover', function (event) {
        const target = event.target;
        const spawn = target.parentElement
        const userid = target.parentElement.firstChild.firstChild.getAttribute('id');
        console.log(userid)
        let editBtn = document.querySelectorAll('.editBtn')
            target.addEventListener('click', function () {
                if(target.innerHTML === 'Edit'){
                createField(spawn);
                }
                savebutton(userid);
            });
        });
    }





function createField(value) {
    let Newform = document.createElement('form');
    let inputName = document.createElement('input');
    let nameLabel = document.createElement('label');
    nameLabel.innerHTML = 'Name:'
    let inputUserName = document.createElement('input');
    let UserName = document.createElement('label');
    UserName.innerHTML = 'Username'
     let saveBtn = document.createElement('input');
    saveBtn.setAttribute('type', 'button');
    saveBtn.value = 'Save changes';
    saveBtn.setAttribute('id', 'savebtn')

    Newform.appendChild(nameLabel);
    Newform.appendChild(inputName);
    Newform.appendChild(UserName);
    Newform.appendChild(inputUserName);
    Newform.appendChild(saveBtn);
    value.appendChild(Newform);
}
function savebutton(value){
    let userID = value;
    let savebtn = document.getElementById('savebtn');
    savebtn.addEventListener('click',function(){
    
        getResponseEdit(userID);
    })
}

function showSpinner() {

    spiner.style.display = 'block';
}

function hide() {
    spiner.style.display = 'none';
}