     
    let playerScore = 0;
    let computerScore = 0;
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const resultDisp = document.getElementById('results');

    rockBtn.addEventListener('click', () => playRound('Rock'));
    paperBtn.addEventListener('click', () => playRound('Paper'));
    scissorsBtn.addEventListener('click', () => playRound('Scissors'));

    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');

    let currentRound = 1;
    let totalRounds = 5;

    const roundDisplay = document.getElementById('round');
    
    function playRound(playerChoice) {
        if (currentRound <= totalRounds){
            roundDisplay.textContent = `Round: ${currentRound} of ${totalRounds}`;
            currentRound++;
            console.log(currentRound);

            const choices = ['rock','paper','scissors'];
            const computerChoice = choices[Math.floor(Math.random()*choices.length)];
            if(playerChoice===computerChoice) {
                console.log('It\'s a tie!');
                resultDisp.textContent = 'It\'s a tie!';
            }else if(
                (playerChoice==='Rock' && computerChoice==='scissors') ||
                (playerChoice==='paper' && computerChoice==='rock') ||
                (playerChoice==='scissors' && computerChoice==='paper')
            )
            {
                console.log('You win!');
                resultDisp.textContent = 'You win!';
                playerScore++;
            }else{
                console.log('You lose!');
                resultDisp.textContent = 'You lose!';
                computerScore++;
            }
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        }
        if(currentRound > totalRounds){
            concludeGame();
        }
    }

    function concludeGame() {
        const gameContainer = document.getElementById('rps-app');
        const choices = document.getElementById('choices');
        const gameInfo = document.getElementById('game-info');
        const roundRes = document.getElementById('result');
        if (choices) {
            choices.style.display = 'none';
        }
        if (gameInfo) {
            gameInfo.style.display = 'none';
        }
        if (roundRes) {
            roundRes.style.display = 'none';
        }
        const gameOver = document.createElement('div');
        gameOver.setAttribute('id','game-over');

        let finalMessage = "";
        if (playerScore > computerScore) {
            finalMessage = 'Congratulations, You won!';
        }else if (playerScore < computerScore) {
            finalMessage = 'Computer won!';
        }else{
            finalMessage = 'It\'s a tie!';
        }
        gameOver.innerHTML = 
        `<h2>Game Over</h2>
        <h3>${finalMessage}</h3>
        <h3>Player Score: ${playerScore}</h3>
        <h3>Computer Score: ${computerScore}</h3>
        <button id="restart-btn">Play Again</button>`;
        gameContainer.appendChild(gameOver);
        document.getElementById('restart-btn').addEventListener('click', restartGame
        );

    }

    function restartGame() {
        playerScore = 0;
        computerScore = 0;
        currentRound = 1;

        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        roundDisplay.textContent = `Round: ${currentRound} of ${totalRounds}`;

        const choices = document.getElementById('choices');
        const gameInfo = document.getElementById('game-info');
        const roundRes = document.getElementById('result');
        if(choices) {
            choices.style.display = '';
        }
        if(gameInfo) {
            gameInfo.style.display = '';
        }
        if(roundRes) {
            roundRes.style.display = '';
        }
        const gameOver = document.getElementById('game-over');
        if(gameOver) {
            gameOver.remove();
        }
        document.getElementById('choices').style.display ='';
        resultDisp.textContent='Lets Go!'
        
    }
    

