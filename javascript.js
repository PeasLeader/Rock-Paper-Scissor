
let humanScore = 0 ;
let computerScore = 0;
let Choice;



function getComputerChoice() {
     const randomNumber = Math.random()

     if (randomNumber>0 && randomNumber<1/3){
        return "Rock" ; 
     } else if (randomNumber>1/3 && randomNumber < 2/3){
       return "Paper" ;
     } else if (randomNumber>2/3 && randomNumber <1) {
      return "Scissor"; 
     }  
}



function getHumanChoice() {
    Choice = prompt("Rock,Paper,Scissor").toLocaleUpperCase
     
    if (Choice === "Rock"){
        return "Rock";
    } else if (Choice === "Scissor"){
        return "Scissor";
    } else {
        return "Paper"
    }    
}





function playRound(getHumanChoice,getComputerChoice){

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanSelection === computerSelection){
        console.log("Tie!")
    } else if (humanSelection === "Rock" && computerSelection === "Scissor"){
        humanScore++
        console.log("You get a Point!")
    } else if (humanSelection === "Scissor" && computerSelection === "Paper"){
        humanScore++
        console.log("You lose , Computer gets a point!")
    } else if (humanSelection === "Paper" && computerSelection === "Rock"){
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