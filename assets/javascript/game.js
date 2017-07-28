
// List choices
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Set start of game
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// an array of the guesses picked
var guessesSoFar = [];

// computer picks random letter then stores it
var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + compGuess);

// when a button is pushed
document.onkeyup = function(event) {

	// letter chosen is stored in userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// store user's guess into guessesSoFar array, check if already been picked and if it's a letter
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;

		// if new letter is chosen, guesses go down one
		guessesLeft--;
	}

	//  Win: if user's guess is the same as computer: add to win total, reset game, and computer chooses another letter
	if (compGuess == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + compGuess);
	}

	// Lose: guesses left are zero: add to lose total, reset game, computer chooses another letter
	if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + compGuess);
	}

	// html on page
	var html = "<p><h1>The Psychic Game</h1></p>" + 
	"<p><h4>Guess what letter I'm thinking of</h4></p>" + 
	"<p><h4>Wins: " + wins + "</h4></p>" + 
	"<p><h4>Losses: " + losses + "</h4></p>" + 
	"<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + 
	"<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	
	// helps bring html onto page 
	document.querySelector("#game").innerHTML = html;

}
