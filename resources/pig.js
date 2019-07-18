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
        nextPlayer();
    }
    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    //on click add the roundScore to score
    scores[activePlayer] += roundScore;
    document.getElementById('#name-' + activePlayer).textContent = 'Winner!';
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
    //reset the board
    document.querySelector('.dice').style.display = 'none';
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    //check to see if they wont
    if(scores[activePlayer] >= 30) {
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
    nextPlayer();
})

nextPlayer = function() {
        //if the player is 0 make it 1, if its anything else rewind to 0
        activePlayer === 0? activePlayer = 1: activePlayer = 0;
        //reset the scores to 0
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //change the active styles
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //final step to reset the scoreboard
        document.querySelector('.dice').style.display = 'none';
}
