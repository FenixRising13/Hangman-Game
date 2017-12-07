// This is game.js linked to index.html for Hangman-Game

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
var emptyArray = [];
var userGuess = document.getElementById("user-guess");
var words = ["Chewbacca", "Han", "Rey", "Leia"]
var computerGuess = words[Math.floor(Math.random() * words.length)];
var wins = 0;
var losses = 0;
var chances = 15;

document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable. Logs to console.
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    var userPress = event.key;
    console.log(userPress);
    // result = chances --1;
    console.log(chances);
    // Appends value of userPress to userGuess array
    emptyArray.push(userPress);
    console.log(emptyArray);
    chances--;

    // else if (userGuess !== computerGuess) {
    //     losses++;
    //     chances--;
    //     console.log("Losses: " + losses);
    // }
    if (userPress === computerGuess) {
        wins++;
    }
    else {
        losses++;
    }
    // Chances = 0
    if (chances === 0) {
        alert("You're out of chances. The force is not strong with you");
        // "<p>The computer was thinking: " + computerGuess + "</p>" +
        location.reload();
    }

    // Losses Reaches 10
    else if (losses === 10) {
        alert("You have lost 10 times. Gooood. Let the hate flow through you!!");
        location.reload();
    }

    // Wins Reaches 10
    else if (wins === 10) {
        alert("You will become a padawan yet.");
        location.reload();
    };

   


    var html =
        "<p>You've chosen: " + emptyArray + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>chances: " + chances + "</p>";

    // Update stats to id="game" via html variable
    document.querySelector("#game").innerHTML = html;
}
// Compares userPress to computerGuess "word"
