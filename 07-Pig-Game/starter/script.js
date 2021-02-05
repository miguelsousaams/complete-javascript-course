'use strict';

// Elements
const newGame_btn = document.querySelector('.btn--new');
const rollDice_btn = document.querySelector('.btn--roll');
const hold_btn = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

let playing;

// Functions
const initGame = () => {
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
}

const rollDice = () => {
    if(playing){
        // Generate random number
        let randomNumber = Math.trunc(Math.random() * 6) + 1;

        // Change dice img srf
        diceEl.src = `dice-${randomNumber}.png`;
        diceEl.classList.remove('hidden');

        // Handle with logic
    }
}

// Event Listeners
rollDice_btn.addEventListener('click', rollDice);

// Init the game
initGame();