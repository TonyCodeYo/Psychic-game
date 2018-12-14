// make array with letters of the alphabet (user & computer choices)
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// establish variables for Wins, Losses, Guesses Left, and Your Guesses so far along with their respective starting values.
var wins = 0;
var losses = 0;
var GuessesLeft = 9;
var YourGuesses = [];
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("Computer Guess: ", computerGuess);

$(document).ready(function(){
  var leftGuess = document.getElementById("GuessesLeft")
  leftGuess.textContent = GuessesLeft;
  //Create an event with an onclick function to represent the userGuesses
  
  document.onkeyup = function (event) {
    
    var userGuess = event.key.toUpperCase();
    var guessWord = document.createTextNode(" " + userGuess + " ");
  document.getElementById("YourGuesses").appendChild(guessWord);
  if (GuessesLeft > 0) {
    if (userGuess === computerGuess) {
      wins++;
      document.getElementById("wins").textContent = wins;
      GuessesLeft = 9;
      leftGuess.textContent = GuessesLeft;
      document.getElementById("YourGuesses").textContent = "";
      alert("You Won!!!");
      computerGuess = letters[Math.floor(Math.random() * letters.length)];
      console.log("Computer Guess: ", computerGuess);
    } else {
      GuessesLeft--;
      leftGuess.textContent = GuessesLeft;
    }
  } else {
    losses++;
    document.getElementById("losses").textContent = losses;
    alert("You Lost!!!");
    document.getElementById("YourGuesses").textContent = "";
    GuessesLeft = 9;
    leftGuess.textContent = GuessesLeft;
  }

  


  //Create a function that represents the random compGuess and logs that value


  // Create a function that grabs the onclick key info and places in the yourGuesses value

  // Create a loop that runs the userGuesses up to nine or until the letter matches compChoice value

  // Somewhere in the function it establishes that the same letter can't be chosen more than once

  // Create a function or a loop that evaluates whether the user won or not

  // Create functions that add to the wins and losses variables

  // Created function that the reducing amount of userGuesses along with illustrating the specific choices the user made and place that value in YourGuesses

  // Create a function that inputs the games results live to the assigned html tags


}
});