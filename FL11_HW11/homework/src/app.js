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
      editbutton(firstline)
      minvalue++;
   } else {
      console.log('You create max value of action');
   }

});

function deletebutton(firstline) {
   let deletebutton = firstline.querySelector('.delete2');
   deletebutton.addEventListener('click', function () {
      let child = this.parentNode;
      let parent = child.parentNode;
      parent.removeChild(child);
   })
}

function editbutton(firstline) {
   firstline.addEventListener('click', function () {
      let inputValues = document.querySelector('.second_form').value;
      let editLi = document.createElement('li');
      editLi.classList.add('editmode')
      editLi.innerHTML = `<input type="text" class="second_form">
        <button class='material-icons save'>
      <span class="label">${inputValues}</span>
          <i class='material-icons'>save</i>
        </button>`;
      queryNavigation.appendChild(editLi);
      document.querySelector('.main_form').value = '';
   });

}