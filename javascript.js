
let humanScore = 0 ;
let computerScore = 0;
let gameChoice;
let personChoice ;
let buttons = document.querySelectorAll('.btn')
let Result = document.querySelector(".result")
let Win = document.querySelector(".Win")
let Lose = document.querySelector(".Lose")
let gamesPlayed = 0 ; 
let roundResult = document.querySelector('.roundResult')
let text = document.querySelector(".text")

function getComputerChoice() {
     const randomNumber = Math.random()

     if (randomNumber>=0 && randomNumber<1/3){
        return "ROCK"
     } else if (randomNumber>=1/3 && randomNumber < 2/3){
       return "PAPER" 
     } else if (randomNumber>=2/3 && randomNumber <1) {
      return "SCISSOR"
     }      
}




function getHumanChoice(e){
   personChoice = e.target.textContent
   gamesPlayed++;
   playRound(personChoice,getComputerChoice)
   fiveTimes()
} 


function playRound(getHumanChoice,getComputerChoice){

    const computerSelection = getComputerChoice();

    if (gamesPlayed >= 5){
        text.textContent = "Round ended"

        return false;
    } else if (personChoice === computerSelection){
        Result.textContent = "Tie!"   
    } else if (personChoice === "ROCK" && computerSelection === "SCISSOR"){
        humanScore++
        Win.textContent = `${humanScore}`
       Result.textContent = "You Win! Rock beats Scissor"
    } else if (personChoice === "SCISSOR" && computerSelection === "PAPER"){
        humanScore++
         Win.textContent = `${humanScore}`
        Result.textContent = "You win! Scissor beats Paper"
    } else if (personChoice === "PAPER" && computerSelection === "ROCK"){
        humanScore++
         Win.textContent = `${humanScore}`
        Result.textContent = "You Win! Paper beats Rock"
    } else {
        computerScore++
        Lose.textContent = `${computerScore}`
        Result.textContent = `You lose! ${computerSelection} beats ${personChoice} `
    }
}

function fiveTimes(){
    if (gamesPlayed===5 && humanScore > computerScore){
        roundResult.textContent = "You win!"
    } else if (gamesPlayed === 5 && computerScore > humanScore){
        roundResult.textContent = "You lose!"
    } else if (gamesPlayed === 5 && humanScore === computerScore){
        roundResult.textContent = "Tie!" 
}
}
// if (humanScore>computerScore){
//      console.log(`Human ${humanScore} and Machine ${computerScore} congrats Human`)
//  } else if (computerScore>humanScore){
//      console.log(`Human ${humanScore} and computer ${computerScore} congrats machine`)
//  } else {
//      console.log("Tie! hahah")
// }

buttons.forEach(button =>{
    button.addEventListener("click",getHumanChoice)
})