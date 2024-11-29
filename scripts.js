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
