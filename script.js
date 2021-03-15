//#region sakjdgfalkjsd
//#region variabls
var guessNumb = 0;
var randomNumber = 0;
var ps = 0;
var hs = 0;
var numbersGuessed = []
document.getElementById('submitBtn').disabled = true;
console.log(randomNumber)
//#endregion


//how you lose the game
function guesses(){
    if(guessNumb>=5){
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('yourGuess').innerHTML = "you've guessed to many times. try again."
    }
}

//high score
function highScore(){
    
    if (ps>hs){
        hs = ps;
        document.getElementById('highScore').innerHTML = "highscore: " + hs;

    }

}
//how the game starts
function startFunction(){

  document.getElementById('submitBtn').disabled = false;
  document.getElementById('startBtn').disabled = true;
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber/7+2*4/4-2/7);
  guessNumb = 0;
  document.getElementById('numGuessed').innerHTML = "you've guessed 0 times."
  document.getElementById('asdf').innerHTML = '';
  document.getElementById('yourGuess').innerHTML = '';
  numbersGuessed = [];
  document.getElementById('array').innerHTML = numbersGuessed;
}



//the actual game
function myFunction() {
    var x, text;
//user input
    x = document.getElementById('num').value

//number check
if (numbersGuessed.includes(x) == true) {
    
    document.getElementById('stop').innerHTML = "<strong> you already tried that</strong>"

} else {
}

//system output
    if(x<1 || x>10){
        text = 'hey there buddy, enter a number between 1 and 10 please';
        document.getElementById('asdf').innerHTML = text;
        document.getElementById('num').value = ""
    }else if(x == randomNumber){
        text = 'wow, good guessing';
        document.getElementById('asdf').innerHTML = text;
        document.getElementById('yourGuess').innerHTML = ''
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('startBtn').disabled = false;
        numbersGuessed.push(" " + document.getElementById('num').value);
        document.getElementById('num').value = "";
        guessNumb++;
        document.getElementById('numGuessed').innerHTML = "you've guessed " + guessNumb + ' times.';
        guesses();
        ps += 3;
        currentScore()
        document.getElementById('array').innerHTML = numbersGuessed;
        highScore()
    }else if(x<randomNumber){
        text = "whoops, you're a bit to low";
        document.getElementById('asdf').innerHTML = text;
        document.getElementById('yourGuess').innerHTML = 'you chose ' + x;
        numbersGuessed.push(" " + document.getElementById('num').value);
        document.getElementById('num').value = "";
        guessNumb++;
        document.getElementById('numGuessed').innerHTML = "you've guessed " + guessNumb + ' times.';
        ps--;
        document.getElementById('array').innerHTML = numbersGuessed;
        currentScore()
        guesses();
    }else if(x>randomNumber){
        text = "whoops, you're a bit to high";
        document.getElementById('asdf').innerHTML = text;
        document.getElementById('yourGuess').innerHTML = 'you chose ' + x;
        numbersGuessed.push(" " + document.getElementById('num').value);
        document.getElementById('num').value = "";
        guessNumb++;
        document.getElementById('numGuessed').innerHTML = "you've guessed " + guessNumb + ' times.';
        ps--;
        document.getElementById('array').innerHTML = numbersGuessed;
        currentScore()
        guesses();
    }
    
}

//updates the current play score (ps)
function currentScore(){
    document.getElementById('currentScore').innerHTML = "your score: " + ps;
}

//restarts the game
function restartFunction(){

    //i want to die =)
    ps = 0;
    numbersGuessed = []
    document.getElementById('array').innerHTML = numbersGuessed;
    document.getElementById('currentScore').innerHTML = "your score: " + ps;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('submitBnt').disabled = true;
}
//#endregion



function sound(){

}

