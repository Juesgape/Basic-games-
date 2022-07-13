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

    //call all the inner functions
    startGame();
    updateScore();
};

//start the game function
game();