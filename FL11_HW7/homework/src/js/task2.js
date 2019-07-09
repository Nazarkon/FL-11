let minNumber = 1;
let maxNumber = 8;
let startGame = confirm('Do you want to play a game?');
let maxSumma = 100;
let currentSumma = 0;
let finalSumma = 0;
const additionRandom = 4;
const multiplierSummu = 2;

if (startGame === true) {
    for (let tentative = 3; tentative > 0; tentative--) {
        let randomize = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
        let userPrediction = +prompt('Choose a roulette pocket number from 0 to' + maxNumber + '\nAttempts left: ' +
            tentative + '\nTotal prise: $' + finalSumma +
            '\nPossible prize on current attempt: $' + maxSumma, '');
        if (userPrediction === randomize) {
            currentSumma = currentSumma + maxSumma;
            finalSumma = currentSumma;
            alert(`Congratulation, you won!   Your prize is: ${finalSumma}$.`);
            if (tentative > 1) {
                startGame = confirm('Do you want to continue?');
            } else {
                alert(`Thank you for your participation. Your prize is:${finalSumma}$`);
                break;
            }
            if (startGame === true) {
                maxNumber = maxNumber + additionRandom;
                maxSumma = maxSumma * multiplierSummu;
            } else if (startGame === false) {
                alert(`Thank you for your participation. Your prize is:${finalSumma}`);
                break;
            }
        } else if (userPrediction !== randomize || null) {
            alert(`Thank you for your participation. Your prize is:${finalSumma}`);
            maxSumma = maxSumma / multiplierSummu;
            while (tentative < 1) {
                startGame = confirm('Do you want to continue?');
            }
            if (startGame === false) {
                alert(`Thank you for your participation. Your prize is:${finalSumma}`);
                break;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can');
}