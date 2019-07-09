var scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
//dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
    //bring the dice back
    document.querySelector('.dice').style.display = 'block';
    
    //add the value of dice to current score
    dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#current-' + activePlayer).textContent += dice;
});

