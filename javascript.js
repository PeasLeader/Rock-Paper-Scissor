
let humanScore = 0 ;
let computerScore = 0;
let Choice;



function getComputerChoice() {
     const randomNumber = Math.random()

     if (randomNumber>0 && randomNumber<1/3){
        return "ROCK" ; 
     } else if (randomNumber>1/3 && randomNumber < 2/3){
       return "PAPER" ;
     } else if (randomNumber>2/3 && randomNumber <1) {
      return "SCISSOR"; 
     }  
}



function getHumanChoice() {
    Choice = prompt("Rock,Paper,Scissor").toUpperCase()
     
    if (Choice === "ROCK"){
        return "ROCK";
    } else if (Choice === "SCISSOR"){
        return "SCISSOR";
    } else {
        return "PAPER"
    }    
}





function playRound(getHumanChoice,getComputerChoice){

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanSelection === computerSelection){
        console.log("Tie!")
    } else if (humanSelection === "ROCK" && computerSelection === "SCISSOR"){
        humanScore++
        console.log("You get a Point!")
    } else if (humanSelection === "SCISSOR" && computerSelection === "PAPER"){
        humanScore++
        console.log("You win! Scissor beats Paper")
    } else if (humanSelection === "PAPER" && computerSelection === "ROCK"){
        humanScore++
        console.log("You Win!")
    } else {
        computerScore++
        console.log("You lose!")
    }
}

playRound(getHumanChoice,getComputerChoice);

function playGame(){
    playRound(getHumanChoice,getComputerChoice);
    playRound(getHumanChoice,getComputerChoice);
    playRound(getHumanChoice,getComputerChoice);
    playRound(getHumanChoice,getComputerChoice);
}
playGame()

if (humanScore>computerScore){
    console.log(`Human ${humanScore} and Machine ${computerScore} congrats Human`)
} else if (computerScore>humanScore){
    console.log(`Human ${humanScore} and computer ${computerScore} congrats machine`)
} else {
    console.log("Tie! hahah")
}