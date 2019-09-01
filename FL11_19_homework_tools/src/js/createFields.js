const battleContainer = document.getElementById('battle')
let battleField1 = document.createElement('div');
battleField1.setAttribute('class', 'field1');
battleField1.setAttribute('id', 'field1');
battleContainer.appendChild(battleField1);

let battleField2 = document.createElement('div');
battleField2.setAttribute('class', 'field2');
battleField2.setAttribute('id', 'field2');
battleContainer.appendChild(battleField2)

let battlelog = document.createElement('div');
battlelog.setAttribute('class', 'battlelog');
battlelog.setAttribute('id', 'battlelog');
battleContainer.appendChild(battlelog);