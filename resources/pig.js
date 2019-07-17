var scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
//dice = Math.floor(Math.random() * 6) + 1;


//set the board
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    //add the value of dice to current score
    dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#current-' + activePlayer).textContent += dice;
    
    //bring the dice back
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    
    //change dice img to reflect dice var
    diceDOM.src = 'resources/media/dice-' + dice + '.png';
   
    
    
    
});

