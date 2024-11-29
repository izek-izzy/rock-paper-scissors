let humanScore=0;
let computerScore=0;

function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}

let compChoice;
if (getComputerChoice(3)===0){
    compChoice='Rock';
    console.log('Computer chose Rock!')
}else if(getComputerChoice(3)===1){
    compChoice='Paper';
    console.log('Computer chose Paper!')
}else{
    compChoice='Scissors';
    console.log('Computer chose Scissors');
}

function getHumanChoice(){
    return prompt('Rock, Paper or Scissors?');
}
const MY_CHOICE=getHumanChoice();
const CAPITALIZED_CHOICE=MY_CHOICE.charAt(0).toUpperCase() +MY_CHOICE.slice(1);
console.log('You chose '+CAPITALIZED_CHOICE);
