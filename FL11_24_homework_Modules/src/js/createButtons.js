const buttonContainer = document.getElementById('battle_buttons');

let paper = document.createElement('button');
paper.setAttribute('class', 'button');
paper.setAttribute('id', 'papper-button');
paper.innerHTML = `<img src='./img/paper.png' alt='paper'>`;
buttonContainer.appendChild(paper);

let rock = document.createElement('button');
rock.setAttribute('class', 'button rock-button');
rock.setAttribute('id', 'rock-button');
rock.innerHTML = `<img src='./img/Rock.png' alt='rock'>`;
buttonContainer.appendChild(rock);

let scisors = document.createElement('button');
scisors.setAttribute('class', 'button scisors-button');
scisors.setAttribute('id', 'scisors-button');
scisors.innerHTML = `<img src='./img/cutting.png' alt='cutting'>`;
buttonContainer.appendChild(scisors);

let reset = document.createElement('button');
reset.setAttribute('class', 'button reset-button');
reset.setAttribute('id', 'reset-button');
reset.innerHTML = `<img src='./img/reset.png' alt='reset'>`;
buttonContainer.appendChild(reset);