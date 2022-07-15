const game = () => {
    let pScore = 0;
    let mScore = 0;

    //start the game

    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //play match


    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const machineHand = document.querySelector('.machine-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        })

        //computer options
        const machineOptions = ["Piedra", "Papel", "Tijeras"];

        options.forEach(option => {
            option.addEventListener('click', function() {

                playerHand.src = `./images/Piedra.png`
                machineHand.src = `./images/Piedra.png`;

                const machineRandomNumber = Math.floor(Math.random() * 3);
                const machineChoice = machineOptions[machineRandomNumber];

                setTimeout(() => {
                    compareHands(this.textContent, machineChoice);

                    //update Images
                    playerHand.src = `./images/${this.textContent}.png`;
                    machineHand.src = `./images/${machineChoice}.png`;
                }, 2000);
                
                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                machineHand.style.animation = "shakeMachine 2s ease";
            });
        });

    };

    //Update score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const machineScore = document.querySelector('.machine-score p')

        playerScore.textContent = pScore;
        machineScore.textContent = mScore;
    }



    const compareHands = (playerChoice, machineChoice) => {
        const winner = document.querySelector('.winner');
        if(playerChoice === machineChoice) {
            winner.textContent = 'Empate';
            return;
        }
        //check for rock
        if(playerChoice === 'Piedra') {
            if(machineChoice === 'Tijeras') {
                winner.textContent = 'Tú ganas 🥳';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Perdiste 😭';
                mScore++;
                updateScore();
                return;
            }
        }

        //check for paper
        if(playerChoice === 'Papel') {
            if(machineChoice === 'Tijeras') {
                winner.textContent = 'Perdiste 😭';
                mScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Tú ganas 🥳';
                pScore++;
                updateScore();
                return;
            }
        }

        //check for scissors 
        if(playerChoice === 'Tijeras') {
            if(machineChoice === 'Piedra') {
                winner.textContent = 'Perdiste 😭';
                mScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Tú ganas 🥳';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //call all the inner functions
    startGame();
    updateScore();
    playMatch();
};

//start the game function
game();