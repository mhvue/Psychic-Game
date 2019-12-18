//create variables of letters computer could choose: 

var alphabet =["a","b", "c", "d", "e","f", "g", "h","i","j", "k", "l","m","n","o", "p", "q",
                        "r", "s","t","u", "v", "w", "x", "y", "z"];

 //this the array in which user's guess of letters will go into
 var userGuess= [];

//variables scoreboard 
var win=0;
var losses=0;
var guesses= 11;
var computerGuess = "";


 //computer randomly chooses a letter  //set up a function to reset random letter picked 

 var generateGuess = function() {
        computerGuess= alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess);

 }


 
//to start a new game aka reset  
var newGame= function () {
        guesses =10;
        userGuess = [];
        generateGuess();

}




//calling  computer guess
generateGuess();

//user needs to type a letter to guess if that's the letter computer chooses 
document.onkeydown= function(event) {
    //var letterGuess= String.fromCharCode(event.keyCode).toLowerCase(); //obtained String.fromCharcode on code.io/alibar/pen/MvPgbx
    var letterGuess = event.key;
    console.log(letterGuess);

    userGuess.push(letterGuess);

//if user guesses correct letter then user wins go up by 1
//wins+
        if (letterGuess === computerGuess) {
        win++;
        alert("You Win!");
        newGame();
        }

      
//repeated letters scenarios
       else if (letterGuess !== computerGuess && guesses < 1 ) {
        losses++;
        alert("too many tries..game over")
        newGame();
       //this is for letters to be listed 
        }

//lose a guess if guessed incorrectly 
        else {
        guesses--;
         }

//on html
        var winsText = document.getElementById("winsContent"); 
        winsText.innerHTML = "Wins: " + win;
        var  guessSoFarText =document.getElementById("guessSoFarContent");
        guessSoFarText.innerHTML = "Your Guessed Letter(s): " + userGuess;
        var lossText=document.getElementById("lossContent");
        lossText.innerHTML = "Losses: " + losses;
        var guessLeftText=document.getElementById("guessLeftContent")
        guessLeftText.innerHTML= "Guesses Left: " + guesses;

};


    
