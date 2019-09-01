let btnPaper = document.getElementById('papper-button');
let btnRock = document.getElementById('rock-button');
let btnScisor = document.getElementById('scisors-button')
let battleField1 = document.getElementById('field1');
let battleField2 = document.getElementById('field2');
let battleLog = document.getElementById('battlelog');
let btnReset = document.getElementById('reset-button');
let choiceStack = ['paper', 'rock', 'scissors'];
let checkTry = 0;
let Loses = 0;
let Wins = 0;

btnReset.addEventListener('click', function () {
    checkTry = 0;
    battleField1.innerHTML = '';
    battleField2.innerHTML = '';
    battleLog.innerHTML = '';
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

        } else if (userChoice === 'paper' && computerChoice === 'rock') {
            battleLog.innerHTML = `<p class='res'>You win!${userChoice} better ${computerChoice}</p>`;
            checkTry += 1;
            console.log("You win!");
            Wins += 1;
        } else if (userChoice === 'rock' && computerChoice === 'scissors') {
            battleLog.innerHTML = `<p class='res'>You win!${userChoice} better ${computerChoice}</p>`;
            checkTry += 1;
            console.log("You win!");
            Wins += 1;
        } else if (userChoice === 'scissors' && computerChoice === 'rock') {
            battleLog.innerHTML = `<p class='res'>You lose!${computerChoice} better ${userChoice}</p>`;
            checkTry += 1;
            console.log("You lose!");
            Loses += 1;
        } else if (userChoice === 'rock' && computerChoice === 'paper') {
            battleLog.innerHTML = `<p class='res'>You lose!${computerChoice} better ${userChoice}</p>`;
            checkTry += 1;
            Loses += 1;
            console.log("You lose!");
        } else if (userChoice === 'paper' && computerChoice === 'scissors') {
            battleLog.innerHTML = `<p class='res'>You lose!${computerChoice} better ${userChoice}</p>`;
            checkTry += 1;
            Loses += 1;
            console.log("You lose!");
        } else if (userChoice === 'scissors' || computerChoice === 'paper') {
            battleLog.innerHTML = `<p class='res'>You win!${userChoice} better ${computerChoice}</p>`;
            checkTry += 1;
            console.log("You win!");
            Wins += 1;
        }
    } else {
        showResult();
        alert("Game End")
    }
}

function showResult() {
    let countLoses = Loses;
    let countWins = Wins;
    if (countLoses > countWins) {
        battleLog.innerHTML = `<p class='res'>Result: You lose! Loser</p>`;
        battleField1.innerHTML = '';
        battleField2.innerHTML = '';
    } else if (countLoses < countWins) {
        battleLog.innerHTML = `<p class='res'>Result: You Win!Pretty boy</p>`;
        battleField1.innerHTML = '';
        battleField2.innerHTML = '';
    } else {
        battleLog.innerHTML = `<p class='res'>Result: Are you kidding me!It's Tie((</p>
            <p style='text-align:center font-size:30px;'>Jesus</p>`;
        battleField1.innerHTML = '';
        battleField2.innerHTML = '';
    }
}