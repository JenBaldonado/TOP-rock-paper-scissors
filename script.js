function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];

  const computerChoiceIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[computerChoiceIndex];

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'You win! ' + playerSelection + ' beats ' + computerSelection;
  } else {
    return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
  }
}

/* function gameScore(playerScore, compScore) {
  //this function will keep track of the score
  //if the player wins the score goes to the player so there will be an increment of score on the player
  //if the computer wins the score goes to the computer and increment it's score by one
  //there should be checking of whom wins
  //when the checking is true in favor of the winner the score is added by
  //if the playRound function returns You win thw winner adds score of 1
  //if the playRound function retursn You lose the computer adds score of 1
  //basically player and computer will be comparing scores
  //if the return is You win the player get a score

  if (
    playRound.startsWith(
      'You win! ' + playerSelection + ' beats ' + computerSelection
    )
  ) {
    playerScore++;
  } else if (
    playRound.startsWith(
      'You lose! ' + computerSelection + ' beats ' + playerSelection
    )
  ) {
    compScore++;
  }

  if (playerScore > compScore) {
    console.log('You win the game!');
  } else if (playerScore < compScore) {
    console.log('You lose the game!');
  } else {
    console.log("It's a tie game!");
  }

  return playerScore && compScore;
}

gameScore(playerSelection, computerSelection); */

function game() {
  //keep track of the score for player and computer
  //
  for (let i = 0; i <= 5; i++) {
    const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log('Player: ' + playerSelection);
    console.log('Computer: ' + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
