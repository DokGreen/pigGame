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
    //Generate random num for dice
    dice = Math.floor(Math.random() * 6) + 1;
    
    //bring the dice back
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    
    //change dice img to reflect dice var
    diceDOM.src = 'resources/media/dice-' + dice + '.png';
    
    //if dice isnt 1 add to score
    if(dice !== 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        
        //else reset score to 0 and change the player
    } else {
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        //if the player is 0 make it 1, if its anything else rewind to 0
        activePlayer === 0? activePlayer = 1: activePlayer = 0;
    }
   
    
    
    
});

