const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

//Link text
playerLivesCount.textContent = playerLives;

//Generate the data 
const getData = () => [
    {imgSrc: './images/beatles.jpeg', name: 'Beatles'},
    {imgSrc: './images/devils-walk.jpg', name: 'devils-walk'},
    {imgSrc: './images/fkatwigs.jpeg', name: 'fkatwigs'},
    {imgSrc: './images/igor.jpg', name: 'igor'},
    {imgSrc: './images/orca.jpg', name: 'Orca'},
    {imgSrc: './images/pinkfloyd.jpeg', name: 'pinkfloyd'},
    {imgSrc: './images/random-image.jpg', name: 'random-image'},
    {imgSrc: './images/you-think-youre-comic.jpg', name: 'Youre-comic'},
    {imgSrc: './images/beatles.jpeg', name: 'Beatles'},
    {imgSrc: './images/devils-walk.jpg', name: 'devils-walk'},
    {imgSrc: './images/fkatwigs.jpeg', name: 'fkatwigs'},
    {imgSrc: './images/igor.jpg', name: 'igor'},
    {imgSrc: './images/orca.jpg', name: 'Orca'},
    {imgSrc: './images/pinkfloyd.jpeg', name: 'pinkfloyd'},
    {imgSrc: './images/random-image.jpg', name: 'random-image'},
    {imgSrc: './images/you-think-youre-comic.jpg', name: 'Youre-comic'},
];

//Randomize
const randomize = () => {
    const cardData = getData();
    console.log(cardData)
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//Card generator function
const cardGenerator = () => {
    const cardData = randomize();
    //generate the HTML
    cardData.forEach((item) => {

        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');

        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        //Attach the info to the cards
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        //Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            CheckCards(e);
        });

    });
};

//Check cards 
const CheckCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    console.log(clickedCard);
    const flippedCards = document.querySelectorAll('.flipped')
    //logic
    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            })

        } else {
            console.log('wrong')
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;

            if(playerLives === 0) {
                restart();
            }
        }
    }   
};

//restart
const restart = () => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        //randomize
        cards[index].style.pointerEvents = 'all';
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
}

cardGenerator();