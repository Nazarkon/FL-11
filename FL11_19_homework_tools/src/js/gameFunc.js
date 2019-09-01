let btnPaper = document.getElementById('papper-button');
let btnRock = document.getElementById('rock-button');
let btnScisor = document.getElementById('scisors-button')
let battleField1  = document.getElementById('field1');
let battleField2 = document.getElementById('field2');
let battleLog = document.getElementById('battlelog');
let choiceStack = ['paper', 'rock', 'scissors'];

btnPaper.addEventListener('click',function(){
    console.log(choiceStack[0]);
    let userChoice = choiceStack[0];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum];
    battleField2.innerHTML = `${computerChoice}`;
    battleField1.innerHTML = `Paper`;
    checkResult(userChoice,computerChoice);
});

btnRock.addEventListener('click',function(){
    console.log(choiceStack[1]);
    let userChoice = choiceStack[1];
    battleField1.innerHTML = `Rock`;
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum];
    battleField2.innerHTML = `${computerChoice}`;
    checkResult(userChoice,computerChoice)
});

btnScisor.addEventListener('click',function(){
    console.log(choiceStack[2]);
    let userChoice = choiceStack[2];
    battleField1.innerHTML = `Scissor`;
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum];
    battleField2.innerHTML = `${computerChoice}`;
    checkResult(userChoice,computerChoice)
});

function checkResult(userChoice,computerChoice){
    if (userChoice === computerChoice){
        battleLog.innerHTML =  `Oh!!You Tie!`
        }else if (userChoice === 'paper' && computerChoice === 'rock'){
        battleLog.innerHTML = `You win!${userChoice} better ${computerChoice}`;
        console.log("You win!");
        }else if (userChoice === 'rock' && computerChoice === 'scissors'){
            battleLog.innerHTML = `You win!${userChoice} better ${computerChoice}`;
        console.log("You win!");
        }else if (userChoice === 'scissors' && computerChoice === 'rock'){
        battleLog.innerHTML = `You lose!${computerChoice} better ${userChoice}`;
        console.log("You lose!");
        }else if (userChoice === 'rock' && computerChoice === 'paper'){
            battleLog.innerHTML = `You lose!${computerChoice} better ${userChoice}`;
        console.log("You lose!");
        }else if (userChoice === 'paper' && computerChoice === 'scissors'){
            battleLog.innerHTML = `You lose!${computerChoice} better ${userChoice}`;
        console.log("You lose!");
        }else if (userChoice === 'scissors' || computerChoice === 'paper'){
            battleLog.innerHTML = `You win!${userChoice} better ${computerChoice}`;
        console.log("You win!");
        }
}

