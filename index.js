let randomNumber = parseInt(Math.random() * 100 + 1);
const UserInput = document.querySelector('.userinput');
const SubmitBTn = document.querySelector('.submit');
const GuessSLot = document.querySelector('.previousguess');
const Remaining = document.querySelector('.remainingguess');
const hint = document.querySelector('.hint');
const Info = document.querySelector('.info');

const p = document.createElement('p');

const previousGuess=[];
let NumberOfGuess= 1 ; 
let play=true;
 
if(play){
    SubmitBTn.addEventListener('click',function(e){
        e.preventDefault();
    
    const guess= parseInt(UserInput.value);
    console.log(guess);
    ValidateInput(guess);
    });
    
}

function ValidateInput(guess){
    if( guess < 1 || guess > 100 ||  isNaN(guess)){
       DisplayMessage(`${guess} is not in Valid Range  `)
    } else{
       
        
        if(NumberOfGuess=== 6){
        DisplayMessage(`Limit Exceed ,  The number was ${randomNumber}`);
         endgame();
        }
        else{
            previousGuess.push(guess);
            
            
            CleanupInfo(guess);
            CheckGuess(guess);


        }
    }
        
};
function CheckGuess(guess) {
    if (guess === randomNumber) {
        DisplayMessage(`Congratulation , You guessed it right!`);
        endgame();
    } else if (guess < randomNumber) {
        DisplayMessage(`Too low`);
    } else if (guess > randomNumber) {
        DisplayMessage(`Too High`);
    }
}
function DisplayMessage(message){
    hint.innerHTML =`<h2>${message}</h2>`;

};
function CleanupInfo(guess){
    UserInput.value = "";
    GuessSLot.innerHTML +=`${guess} ,`; 
    NumberOfGuess++;
    life=6;
    Remaining.innerHTML = `Remaining Guess:${life-NumberOfGuess}`

};
function endgame() {
    UserInput.value = "";
    UserInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Click Here Start New Game</h2>`;
    Info.appendChild(p);
    play = false;
    newgame();
}

function newgame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess.length = 0;
        NumberOfGuess = 1;
        GuessSLot.innerHTML = 'Previous Guess:';
        Remaining.innerHTML = `Remaining Guess: ${6-NumberOfGuess}`;
        UserInput.removeAttribute('disabled');
        Info.removeChild(p);
        play = true;
    });
}

