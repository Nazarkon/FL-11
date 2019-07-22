let rootNode = document.getElementById("root");
let mainTaskButton = document.getElementById('submit_button');
let queryNavigation = document.querySelector('.shedule');
let maxvalue = 10 , minvalue = 0;

mainTaskButton.addEventListener('click',function(){
let inputValues = document.querySelector('.main_form').value; 
if(minvalue < maxvalue){
let firstline = document.createElement('li');
   firstline.innerHTML =`<label><input type="checkbox" name="check" class="checkbox">
   <span class="checkbox_custom"></span><span class="label">${inputValues}
     <i class="material-icons pen">create</i>
   </span></label><i  class="material-icons delete2">
     delete
     </i>` ;
   queryNavigation.appendChild(firstline);
   document.querySelector('.main_form').value = '';
   deletebutton(firstline);
   editbutton(firstline)
   minvalue++;
}else{
   console.log('You create max value of action');
}

});
function deletebutton(firstline){
   let deletebutton = firstline.querySelector('.delete2');
   deletebutton.addEventListener('click',function (){
      let child = this.parentNode;
      let parent = child.parentNode;
      parent.removeChild(child);
   })
}
function editbutton(firstline){
   let editbutton = document.querySelector('.pen');
   editbutton.addEventListener('click',function() {
           let inputel = document.createElement('input'); 
           inputel.after(firstline)
   })
}

