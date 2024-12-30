     
    let humanScore=0;
    let computerScore=0;
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const resultDisp = document.getElementById('results');

    rockBtn.addEventListener('click', () => getHumanChoice('Rock'));
    paperBtn.addEventListener('click', () => getHumanChoice('Paper'));
    scissorsBtn.addEventListener('click', () => getHumanChoice('Scissors'));

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
                humanScore++;
            }else{
                console.log('You lose!');
                resultDisp.textContent = 'You lose!';
                computerScore++;
            }
            playerScoreDisplay.textContent = `Player Score: ${humanScore}`;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        }
        if(currentRound > totalRounds){
            concludeGame();
        }
    }

    function concludeGame() {
        const gameContainer = document.getElementById('rps-game');
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
        <p>${finalMessage}</p>
        <p>Player Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p>
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
        const gameInfo = docume
        
    }
    function getComputerChoice(max){
            return Math.floor(Math.random() * max);
        }
        
        
        const MY_CHOICE=getHumanChoice();

        let compChoice;
        if (getComputerChoice(3)===0){
            compChoice='Rock';
            document.querySelector("#aiChoice").innerText =
            "Computer chose: Rock!";
            console.log('Computer chose Rock!')
        }
        else if(getComputerChoice(3)===1){
            compChoice='Paper';
            document.querySelector("#aiChoice").innerText =
            "Computer chose: Paper!";
            console.log('Computer chose Paper!')
        }
        else{
            compChoice='Scissors';
            document.querySelector("#aiChoice").innerText =
            "Computer chose: Scissors!";
            console.log('Computer chose Scissors');
        }

        

        function playRound(humanChoice,computerChoice){
            if(humanChoice === computerChoice){
                console.log('Its a tie!');
            }
            else if(humanChoice==='Rock' && compChoice==='Paper'){
                console.log('You lose!, Paper covers Rock!');
                computerScore++;
            }
            else if(humanChoice==='Paper' && compChoice==='Rock'){
                console.log('You win!, Paper covers Rock!');
                humanScore++;
            }
            else if(humanChoice==='Paper' && compChoice==='Scissors'){
                console.log('You lose! Scissors cuts Paper!');
                computerScore++;
            }
            else if(humanChoice==='Scissors' && compChoice==='Paper'){
                console.log('You Win! Scissors cuts Paper!');
                humanScore++;
            }
            else if(humanChoice==='Rock' && compChoice==='Scissors'){
                console.log('You win! Rock breaks Scissors!');
                humanScore++;
            }
            else if(humanChoice==='Scissors' && compChoice==='Rock'){
                console.log('You lose! Rocks breaks Scissors!');
                computerScore++;
            }
            else{
                console.log('Oooops, something went wrong! Make sure to only type Rock or Paper or Scissors without spaces.')
            }
        }

        const HUMAN_SELECTION=MY_CHOICE;
        const COMPUTER_SELECTION=compChoice;
        playRound(HUMAN_SELECTION,COMPUTER_SELECTION);
        console.log("Computer's score: "+computerScore);
        console.log('Your score: '+humanScore);
    
        console.log('Game Over!')
        if(humanScore>computerScore){
            console.log('Great game! You win!!!');
        }
            else if(humanScore<computerScore){
                console.log('You lose. Better luck next time!');
            }
            else{
                console.log('Its a tie! Play again.')
            }




