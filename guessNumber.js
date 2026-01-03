let RandomNumber=parseInt(Math.random()*100)+1;
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessesSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrH1 = document.querySelector(".lowOrH1")
const startOver= document.querySelector(".resultParas")

const p = document.createElement("p");

let preGuess = []
let numGuess = 1;

let playGame = true

if (playGame){
    submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess<1){
        alert("Please enter a valid number");
    }
    else if(guess>100){
        alert("Please enter a valid number");
    }
    else{
        preGuess.push(guess);
        if(numGuess === 11){
            cleanupGuess(guess);
            displayMessage(`game over random number was ${RandomNumber}`)
            endGame()
        }else{
            cleanupGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){//high ka low check
    if(guess === RandomNumber){
        displayMessage("you guessed it right")
        endGame()
    }else if(guess < RandomNumber){
        displayMessage("number too low");
    }
    else if(guess > RandomNumber){
        displayMessage("number too HIGH");
    }
}
function cleanupGuess(guess){
    userInput.value = "";
    guessesSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message){
    lowOrH1.innerHTML = `<h2>${message}</h2>`;

}
function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled',"")
    p.classList.add('button')
   p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

   playGame = false;
   newGame();
}
function startGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click",()=>{
    RandomNumber=parseInt(Math.random()*100)+1;
  preGuess = [];
  numGuess = 1;
  guessesSlot.innerHTML = " "
 remaining.innerHTML = `${11 - numGuess}`;
 userInput.removeAttribute("disabled");

 startOver.removeChild(p);

})
}
