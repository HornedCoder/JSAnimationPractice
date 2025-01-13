let input = document.getElementById('input');
let submit = document.getElementById('submit');
let output = document.getElementById('output');
let guess = document.getElementById('guess');

let answer = Math.floor(Math.random()*100)+1;
console.log(answer)
let noOfGuess = 0
submit.addEventListener("click", ()=>{
    guessNumber();
})

function guessNumber(){
    if (input.value < 1 || input.value > 100 || isNaN(input.value)){
        output.innerHTML = "Enter a number between 1 and 100";
    }
    else{
        noOfGuess ++;
        guess.innerHTML = "No of guesses : " + noOfGuess;
        if (input.value < answer){
            output.innerHTML = "Your Guess is Lower than the answer";
        }
        else if(input.value > answer){
            output.innerHTML = "Your Guess is Higher than the answer";
        }
        else{
            output.innerHTML = "Congratulations! You guessed it right!";
            setTimeout(()=>{
                resetGame()
            }, 5000)
        }
    }
}
function resetGame(){
    noOfGuess = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value = "";
    output.innerHTML = "";
    guess.innerHTML = "No. of guesses : 0";

}