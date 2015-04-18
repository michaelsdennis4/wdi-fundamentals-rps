////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var roundsToWin = null;

function playTo() {
    //get user to enter number of wins (rounds) required to win game
    //check that entry is a valid positive integer, return null if not.
    var wins;
    wins = prompt();
    if ((wins > 0) && ((wins * 10) % 10 === 0)) { 
        return wins;
    } else
    { console.log('Please enter an integer greater than zero.');
      return null;
    }
}

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if ((move !== "rock") && (move !== "paper") && (move !== "scissors")) {
       console.log('Invalid entry');
       return 'getInput()'; } else { return move } 
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || 'randomPlay()';
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove) { winner = "tie" } else {
      winner = "player";
      switch (playerMove) {
        case "rock": 
          if (computerMove == "paper") {
            winner = "computer"
          }
          break;
        case "paper":
          if (computerMove == "scissors") {
            winner = "computer"
          }
          break;
        case "scissors":
          if (computerMove == "rock") {
            winner = "computer"
          }
          break;
        default :
          winner = "invalid";
      }
    }  
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var round = 1;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins < 5) && (computerWins < 5)) {
      console.log('Round '+round);
      switch (getWinner(getPlayerMove(getInput()),getComputerMove(randomPlay()))) {
        case "player":
           playerWins += 1;
           round += 1;
           console.log('Player won ['+playerWins+']');
           break;
        case "computer":
           computerWins += 1;
           round += 1;
           console.log('Computer won ['+computerWins+']');
           break;
        case "tie":
           round += 1;
           console.log('Tie');
           break;
        default:
           break;
      }
    }
    return [playerWins, computerWins];
}

function play(wins) {
    var playerWins = 0;
    var computerWins = 0;
    var round = 1;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won specified (wins) times.
    while ((playerWins < wins) && (computerWins < wins)) {
      console.log('Round '+round);
      switch (getWinner(getPlayerMove(getInput()),getComputerMove(randomPlay()))) {
        case "player":
           playerWins += 1;
           round += 1;
           console.log('Player won ['+playerWins+']');
           break;
        case "computer":
           computerWins += 1;
           round += 1;
           console.log('Computer won ['+computerWins+']');
           break;
        case "tie":
           round += 1;
           console.log('Tie');
           break;
        default:
           break;
      }
    }
    return [playerWins, computerWins];
}

console.log("Let's play Rock, Paper, Scissors");
console.log("Please enter how many wins required to win game.");  
while (roundsToWin === null) { roundsToWin = playTo() }
play(roundsToWin);

//playToFive();
