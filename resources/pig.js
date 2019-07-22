var scores, roundScore, activePlayer, dice, gamePlaying;

resetBoard();
//dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying){
    
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
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying){
    
        //on click add the roundScore to score
        scores[activePlayer] += roundScore;

        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        //reset the board
        document.querySelector('.dice').style.display = 'none';

        //check to see if they wont
        if(scores[activePlayer] >= 30) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
        nextPlayer();
        }
    }
})


document.querySelector('.btn-new').addEventListener('click', resetBoard);

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

function resetBoard() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    //set the board
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
};