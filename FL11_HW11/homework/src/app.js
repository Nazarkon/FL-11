let rootNode = document.getElementById('root');
let mainTaskButton = document.getElementById('submit_button');
let queryNavigation = document.querySelector('.shedule');
let editselector = document.querySelector('.edit')
let maxvalue = 10,
   minvalue = 0;

mainTaskButton.addEventListener('click', function () {
   let inputValues = document.querySelector('.main_form').value;
   if (minvalue < maxvalue) {
      let firstline = document.createElement('li');
      firstline.innerHTML = `<div class = "actionWindow">
      <input type="checkbox" name="check" class="checkbox">
      <span class="checkbox_custom"></span>
      <span class="label">${inputValues}
        <i class="material-icons pen">create</i>
      </span>
    <i  class="material-icons delete2">delete</i>
  </div>
  <div class="hidden editWindow"><input type="text" name="action" class="second_form" placeholder="Add new action">
    <i class="material-icons save">save</i></li></div>`;
      queryNavigation.appendChild(firstline);
      document.querySelector('.main_form').value = '';
      deletebutton(firstline);
      edutTask()
      minvalue++;
   } else {
      console.log('You create max value of action');
   }
   let list = document.querySelector('ul');
   list.addEventListener('click', function(ev) {
     if (ev.target.tagName === 'LI') {
       ev.target.classList.toggle('checked');
     }
   }, false);
});

function deletebutton(firstline) {
   let deletebutton = firstline.querySelector('.delete2');
   deletebutton.addEventListener('click', function () {
      let child = this.parentNode;
      let parent = child.parentNode;
      parent.removeChild(child);
   })
}

// function editbutton(firstline) {
//    firstline.addEventListener('click', function () {
//       let inputValues = document.querySelector('.second_form').value;
//       let editLi = document.createElement('li');
//       editLi.classList.add('editmode')
//       editLi.innerHTML = `<input type="text" class="second_form">
//         <button class='material-icons save'>
//       <span class="label">${inputValues}</span>
//           <i class='material-icons'>save</i>
//         </button>`;
//       queryNavigation.appendChild(editLi);
//       document.querySelector('.main_form').value = '';
//    });

// }
// function edutTask(){
//    console.log(2);
//    let editButton = this;
//    let listItem = this.parentNode;
//    let span = listItem.querySelector('span');
//    let input = listItem.querySelector('input[type=text]');

//    let containsClass= listItem.classList.contains('editMode');
//    if(containsClass){
//       span.innerHTML=input.value;
//       editButton.className = 'edit';
//       editButton.innerHTML ="<i class='material-icons>edit</i>";
//    }else{
//       input.value = span.innerText;
//       editButton.className='material-icons save';
//       editButton.innerHTML = "<i class='material-icons'>save</i>";
//    }
//    listItem.classList.toggle('editMode');
// }