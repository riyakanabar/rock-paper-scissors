let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();


function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function pickComputerMove(){
    const randomNumber = Math.random();
    if(randomNumber < 1/3){
        return 'rock';
    }
    else if(randomNumber < 2/3){
        return 'paper';
    }
    else{
        return 'scissors';
    }
} 
function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result;
    if(playerMove === computerMove){
        result = 'Draw!'
        score.ties++;
    }
    else if(
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ){
        result = 'You Win!'
        score.wins++;
    }else{
        result = 'You Lose!'
        score.losses++;
    }
    localStorage.setItem('score', JSON.stringify(score))
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-moves').innerHTML = `You <img class="move-icon moves" src="images/${playerMove}.png"> <img class="move-icon moves" src="images/${computerMove}.png"> Computer`;
    updateMovesElement(playerMove, computerMove);
}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}  