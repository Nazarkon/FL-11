const buttonContainer = document.getElementById('battle_buttons');

let paper = document.createElement('button');
paper.setAttribute('class','button papper-button');
paper.innerHTML = 'Paper';
buttonContainer.appendChild(paper);

let rock = document.createElement('button');
rock.setAttribute('class','button rock-button');
rock.innerHTML = 'Rock';
buttonContainer.appendChild(rock);

let scisors = document.createElement('button');
scisors.setAttribute('class','button scisors-button');
scisors.innerHTML = 'Scissors';
buttonContainer.appendChild(scisors);

