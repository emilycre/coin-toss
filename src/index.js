import coinToss from './coin-toss.js';

const coinForm = document.getElementById('coin-form');
const image = document.getElementById('coin-image');
const result = document.getElementById('result');
const headsCount = document.getElementById('head-count');
const tailsCount = document.getElementById('tail-count');

let heads = 0;
let tails = 0;

coinForm.addEventListener('submit', function(event) {
    event.preventDefault();
    //console.log('Click!');

    const randomNumber = Math.random();
    //console.log('Random num!');

    const coin = coinToss(randomNumber);
    //console.log(coin);

    let imageSource = '';
    if(coin === 'heads') {
        imageSource = './assets/heads.jpg';
        result.textContent = 'Heads!';
        heads++;
        headsCount.textContent = 'Heads: ' + heads;
    }
    else {
        imageSource = './assets/tails.jpg';
        result.textContent = 'Tails!';
        tails++;
        tailsCount.textContent = 'Tails: ' + tails;
    }

    image.src = imageSource;
    image.classList.remove('hidden');
});

