const buttonContainer = document.getElementById('battle_buttons');

let paper = document.createElement('button');
paper.setAttribute('class','button');
paper.setAttribute('id','papper-button');
paper.innerHTML = 'Paper';
buttonContainer.appendChild(paper);

let rock = document.createElement('button');
rock.setAttribute('class','button rock-button');
rock.setAttribute('id','rock-button');
rock.innerHTML = 'Rock';
buttonContainer.appendChild(rock);

let scisors = document.createElement('button');
scisors.setAttribute('class','button scisors-button');
scisors.setAttribute('id','scisors-button');
scisors.innerHTML = 'Scisors';
buttonContainer.appendChild(scisors);

