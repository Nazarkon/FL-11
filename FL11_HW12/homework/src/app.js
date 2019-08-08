const containerNode = document.getElementById('container');

let Pages = {

   mainPage: function(){

    let header = createElement('h1','title','main-title','SIMPLE TODO Aplication');
    let mainbutton = createElement('button','main-button','main-button','add task');
    let footer = createElement('h3','footer-text','footer-text','TODO is empty');

    containerNode.appendChild(header);
    containerNode.appendChild(mainbutton);
    containerNode.appendChild(footer);

     mainbutton.addEventListener('click', function () {
        window.location.hash = '/add';
    });
   },
   addPage: function(){
     containerNode.innerHTML = '';
     let header = createElement('h1','title','add-title','Add task');
     let input = createElement('input','add-input','todo-input');
     let cancelButton = createElement('button','btn','cancel-btn','Cancel');
     let SaveButton = createElement('button','btn','add-btn','Save changes');

     containerNode.appendChild(header);
     containerNode.appendChild(input);
     containerNode.appendChild(cancelButton);
     containerNode.appendChild(SaveButton);
   
   },
   appPage: function() {
     containerNode.innerHTML = '';
       let header = createElement('h1','title','app-title','Simple TODO application');
       let buttonAdd = createElement('button','btn','add-btn','Add new task');

       containerNode.appendChild(header);
       containerNode.appendChild(buttonAdd);
   
   } 
}

function createElement(elTag,elclass,elid,elcontent){
    let element = document.createElement(elTag);
		element.className = elclass;
		element.id = elid;
		element.innerHTML = elcontent;

	return element;
}

const routes = {
	init: () => {
		if(window.location.hash.endsWith('')) {
			Pages.mainPage();
		}

		if(window.location.hash.endsWith('/add')) {
			Pages.addPage();
		}

		if(window.location.hash.endsWith('/edit')) {
			Pages.applicationPage();
		}
	}
}

window.onload = window.onhashchange = function() {
	routes.init();
}