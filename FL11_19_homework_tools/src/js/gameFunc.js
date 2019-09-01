let btnPaper = document.getElementById('papper-button');
let btnRock = document.getElementById('rock-button');
let btnScisor = document.getElementById('scisors-button')
let battleField1 = document.getElementById('field1');
let battleField2 = document.getElementById('field2');
let battleLog = document.getElementById('battlelog');
let btnReset = document.getElementById('reset-button');
let choiceStack = ['paper', 'rock', 'scissors'];
let checkTry = 0;

btnReset.addEventListener('click',function(){
    checkTry=0;
    battleField1.innerHTML = '';
    battleField2.innerHTML = '';
    battleLog.innerHTML='';
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
    if(checkTry < 3){
        if (userChoice === computerChoice) {
            battleLog.innerHTML = `<p class='res'>Oh!!You Tie!</p>`;
            checkTry+=1;
        } else if (userChoice === 'paper' && computerChoice === 'rock') {
            battleLog.innerHTML = `<p class='res'>You win!${userChoice} better ${computerChoice}</p>`;
            checkTry+=1;
            console.log("You win!");
        } else if (userChoice === 'rock' && computerChoice === 'scissors') {
            battleLog.innerHTML = `<p class='res'>You win!${userChoice} better ${computerChoice}</p>`;
            checkTry+=1;
            console.log("You win!");
        } else if (userChoice === 'scissors' && computerChoice === 'rock') {
            battleLog.innerHTML = `<p class='res'>You lose!${computerChoice} better ${userChoice}</p>`;
            checkTry += 1;
            console.log("You lose!");
        } else if (userChoice === 'rock' && computerChoice === 'paper') {
            battleLog.innerHTML = `<p class='res'>You lose!${computerChoice} better ${userChoice}</p>`;
            checkTry += 1;
            console.log("You lose!");
        } else if (userChoice === 'paper' && computerChoice === 'scissors') {
            battleLog.innerHTML = `<p class='res'>You lose!${computerChoice} better ${userChoice}</p>`;
            checkTry += 1;
            console.log("You lose!");
        } else if (userChoice === 'scissors' || computerChoice === 'paper') {
            battleLog.innerHTML = `<p class='res'>You win!${userChoice} better ${computerChoice}</p>`;
            checkTry += 1;
            console.log("You win!");
        }
    }else{
        alert('Sorry Game Ends');
        // doYouWannaPlay();
    }
}
// function doYouWannaPlay(){
//     let question = confirm("Do you wanna play more?");
//     if(question == true){
//        alert("Okey Let's go again");
//        checkTry = 0;
//     }else if(question == false){
//         alert('Why you sooo boring....');
//     }

// }