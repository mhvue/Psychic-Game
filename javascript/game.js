//create variables of letters computer could choose: 

var alphabet =["a","b", "c", "d", "e","f", "g", "h","i","j", "k", "l","m","n","o", "p", "q",
                        "r", "s","t","u", "v", "w", "x", "y", "z"];

 //this the array in which user's guess of letters will go into
 var userGuess= []

//variables scoreboard 
var win=0
var losses=0
var guesses= 10


 //computer randomly chooses a letter 
 var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
 console.log(computerGuess);


//user needs to type a letter to guess if that's the letter computer chooses 

document.onkeydown= function(event) {
    var letterGuess= String.fromCharCode(event.keyCode).toLowerCase(); //obtained String.fromCharcode on code.io/alibar/pen/MvPgbx
    gameStarts();
    console.log(letterGuess);



//if user guesses correct letter then user wins go up by 1
//wins+
        if (letterGuess === computerGuess) {
        win++;
        userGuess=[];
        document.getElementById("wins-content").innerHTML = "Wins:" + win;
        alert("You Win!");
        resetGame();
        }


//lose a guess if guessed incorrectly 
        else {
        guesses--;
        userGuess=[];
        document.getElementById("guessLeft-content").innerHTML= "Guesses Left: " + guesses;
        attempts=10;
        
        }

 // when guesses =0 then game over 
        if (guesses<0) {
        alert("Sorry. You are out of guesses");
        losses++;
        resetGame();
        }


//repeated letters *wll have reference back to array of listed letters? 
        /*if (letterGuess !== computerGuess && letterGuess === letterGuess) {
        alert("already guessed");
        }*/

//this is for letters to be listed 
        userGuess.push(letterGuess);
        document.getElementById("guessSoFar-content").innerHTML = "Your Guessed Letter(s): "+ userGuess;
        
        


//functions
        function gameStarts(){
                document.getElementById("wins-content").innerHTML = "Wins:";
                document.getElementById("guessSoFar-content").innerHTML = "Your Guessed Letter(s): ";
        }
        function resetGame() {
                 document.getElementById("wins-content").innerHTML = "Wins:" + win;
                 document.getElementById("loss-content").innerHTML = "Losses: " + losses;
                 document.getElementById("guessSoFar-content").innerHTML = "Your Guessed Letter(s):" ;
                 document.getElementById("guessLeft-content").innerHTML= "Guesses Left: " + 10;
                 
                
        }


    //};
}
