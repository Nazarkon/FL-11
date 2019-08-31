let btnPaper = document.getElementById('papper-button');
let btnRock = document.getElementById('rock-button');
let btnScisor = document.getElementById('scisors-button')
let battleField1  = document.getElementById('field1');
let battleField2 = document.getElementById('field2')
let choiceStack = ['paper', 'rock', 'scissors'];
let userChoice = btnPress();

function computerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum];
    battleField2.innerHTML = `${computerChoice}`;
}
function checkResult(){
    if (userChoice === computerChoice){
        console.log("Tie!");
        }else if (userChoice === 'paper' && computerChoice === 'rock'){
        console.log("You win!");
        }else if (userChoice === 'rock' && computerChoice === 'scissors'){
        console.log("You win!");
        }else if (userChoice === 'scissors' && computerChoice === 'rock'){
        console.log("You lose!");
        }else if (userChoice === 'rock' && computerChoice === 'paper'){
        console.log("You lose!");
        }else if (userChoice === 'paper' && computerChoice === 'scissors'){
        console.log("You lose!");
        }else if (userChoice === 'scissors' || computerChoice === 'paper'){
        console.log("You win!");
        }
}

function btnPress(){
btnPaper.addEventListener('click',function(){
    console.log(choiceStack[0]);
    battleField1.innerHTML = `Paper`;
    computerChoice();
    checkResult();
});

btnRock.addEventListener('click',function(){
    console.log(choiceStack[1]);
    battleField1.innerHTML = `Rock`;
    computerChoice();
    checkResult();
});

btnScisor.addEventListener('click',function(){
    console.log(choiceStack[2]);
    battleField1.innerHTML = `Scissor`;
    computerChoice();
    checkResult();
});
}