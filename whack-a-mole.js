const containers = document.querySelectorAll('.container');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;

const resetGame = () => {
    result = 0;
    score.textContent = result;
    currentTime = 60;
}

const randomContainer = () => {
    containers.forEach(e => {
        e.classList.remove('mole');
    });

    let randomPosition = containers[Math.floor(Math.random() * 9)]

    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;

}

containers.forEach(e => {
    e.addEventListener('mousedown', () => {

        if(e.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        } 
    })
});

let moveMole = () => {
    timerId = setInterval(randomContainer, 500);
}

moveMole(); 

function countDown () {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0) {
        /* clearInterval(countDownTimerId); */
        alert(`¡TIEMPO! Tu puntaje final es: ${result}`);
        resetGame();
    }
}

let countDownTimerId = setInterval(countDown, 1000);