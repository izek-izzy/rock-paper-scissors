function playGame(){       
    let humanScore=0;
    let computerScore=0;
    for(let i=0;i<5;i++){
        function getComputerChoice(max){
            return Math.floor(Math.random() * max);
        }
        function getHumanChoice(){
            return prompt('Rock, Paper or Scissors?');
        }
        const MY_CHOICE=getHumanChoice();
        const CAPITALIZED_CHOICE=MY_CHOICE.charAt(0).toUpperCase() +MY_CHOICE.slice(1);
        console.log('You chose '+CAPITALIZED_CHOICE);

        let compChoice;
        if (getComputerChoice(3)===0){
            compChoice='Rock';
            console.log('Computer chose Rock!')
        }
        else if(getComputerChoice(3)===1){
            compChoice='Paper';
            console.log('Computer chose Paper!')
        }
        else{
            compChoice='Scissors';
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

        const HUMAN_SELECTION=CAPITALIZED_CHOICE;
        const COMPUTER_SELECTION=compChoice;
        playRound(HUMAN_SELECTION,COMPUTER_SELECTION);
        console.log("Computer's score: "+computerScore);
        console.log('Your score: '+humanScore);
    }
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
    
}
playGame();

