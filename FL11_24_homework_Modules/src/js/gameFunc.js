const btnPaper = document.getElementById('papper-button');
const btnRock = document.getElementById('rock-button');
const btnScisor = document.getElementById('scisors-button')
const battleField1 = document.getElementById('field1');
const battleField2 = document.getElementById('field2');
const battleLog = document.getElementById('battlelog');
const btnReset = document.getElementById('reset-button');
const Round = document.getElementById('countRound');
const Win = document.getElementById('countWins');
const Lose = document.getElementById('countLose');
const choiceStack = ['paper', 'rock', 'scissors'];
let checkTry = 0;
let countRounds = 0;
let fLose = 0;
let fWin = 0;
let Loses = 0;
let Wins = 0;

btnReset.addEventListener('click', function () {
    checkTry = 0;
    battleField1.innerHTML = '';
    battleField2.innerHTML = '';
    battleLog.innerHTML = '';
    Round.innerHTML = '';
    countRounds = 0;
})
btnPaper.addEventListener('click', function () {
    console.log(choiceStack[0]);
    let userChoice = choiceStack[0];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum];
    battleField2.innerHTML = `<p class='res'>${computerChoice}</p>`;
    battleField1.innerHTML = `<p class='res'>Paper</p>`;
    checkResult(userChoice, computerChoice);
});

btnRock.addEventListener('click', function () {
    console.log(choiceStack[1]);
    let userChoice = choiceStack[1];
    battleField1.innerHTML = `<p class='res'>Rock</p>`;
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum];
    battleField2.innerHTML = `<p class='res'>${computerChoice}</p>`;
    checkResult(userChoice, computerChoice)
});

btnScisor.addEventListener('click', function () {
    console.log(choiceStack[2]);
    let userChoice = choiceStack[2];
    battleField1.innerHTML = `<p class='res'>Scissor<p/>`;
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum];
    battleField2.innerHTML = `<p class='res'>${computerChoice}</p>`;
    checkResult(userChoice, computerChoice)
});

function checkResult(userChoice, computerChoice) {
    if (checkTry <= 2) {
        if (userChoice === computerChoice) {
            battleLog.innerHTML = `<p class='res'>Oh!!You Tie!</p>`;
            checkTry += 1;
             countRounds +=1;
             Round.innerHTML= `${countRounds}`
        } else if (userChoice === 'paper' && computerChoice === 'rock') {
            battleLog.innerHTML = `<p class='res'>You win!${userChoice} better ${computerChoice}</p>`;
            checkTry += 1;
            countRounds +=1;
             Round.innerHTML= `${countRounds}`
            console.log("You win!");
            Wins += 1;
        } else if (userChoice === 'rock' && computerChoice === 'scissors') {
            battleLog.innerHTML = `<p class='res'>You win!${userChoice} better ${computerChoice}</p>`;
            checkTry += 1;
            countRounds +=1;
             Round.innerHTML= `${countRounds}`
            console.log("You win!");
            Wins += 1;
        } else if (userChoice === 'scissors' && computerChoice === 'rock') {
            battleLog.innerHTML = `<p class='res'>You lose!${computerChoice} better ${userChoice}</p>`;
            checkTry += 1;
            countRounds +=1;
             Round.innerHTML= `${countRounds}`
            console.log("You lose!");
            Loses += 1;
        } else if (userChoice === 'rock' && computerChoice === 'paper') {
            battleLog.innerHTML = `<p class='res'>You lose!${computerChoice} better ${userChoice}</p>`;
            countRounds +=1;
             Round.innerHTML= `${countRounds}`

            checkTry += 1;
            Loses += 1;
            
            console.log("You lose!");
        } else if (userChoice === 'paper' && computerChoice === 'scissors') {
            battleLog.innerHTML = `<p class='res'>You lose!${computerChoice} better ${userChoice}</p>`;
            countRounds +=1;
             Round.innerHTML= `${countRounds}`
            checkTry += 1;
            Loses += 1;
            console.log("You lose!");
        } else if (userChoice === 'scissors' || computerChoice === 'paper') {
            battleLog.innerHTML = `<p class='res'>You win!${userChoice} better ${computerChoice}</p>`;
            countRounds +=1;
             Round.innerHTML= `${countRounds}`
            checkTry += 1;
            console.log("You win!");
            Wins += 1;
        }
    } else {
        alert('Game End,press Reset button to start this game again!')
        showResult();
    }
}

function showResult() {
    let countLoses = Loses;
    let countWins = Wins;
    if (countLoses > countWins) {
        battleLog.innerHTML = `<p class='res'>Result: You lose! Loser</p>`;
        battleField1.innerHTML = '';
        battleField2.innerHTML = '';
        fLose+=1;
        Lose.innerHTML=`${fLose}`;
    } else if (countLoses < countWins) {
        battleLog.innerHTML = `<p class='res'>Result: You Win!Pretty boy</p>`;
        battleField1.innerHTML = '';
        battleField2.innerHTML = '';
        fWin+=1;
        Win.innerHTML=`${fWin}`;
    } else {
        battleLog.innerHTML = `<p class='res'>Result: Are you kidding me!It's Tie((</p>
            <p style='text-align:center font-size:30px;'>Jesus</p>`;
        battleField1.innerHTML = '';
        battleField2.innerHTML = '';
    }
}