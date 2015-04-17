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

playToFive();