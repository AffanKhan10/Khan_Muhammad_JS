"use strict";

game();

//create a function for the game
function game() {
  //create the variables for the score
  let userScore = 0;
  let computerScore = 0;
  let winner;

  //create the for loop
  for (let i = 1; i < 6; i++) {
    //create the variables
    const computerChoice = computerSelect();
    const userChoice = userSelect();

    console.log(`Round ${i} Results:`);
    //call the play round function
    winner = playRound(userChoice, computerChoice);

    //create an if statements depending on who won
    if (winner === 1) {
      userScore = userScore + 1;
    } //end of user winning
    else if (winner === 2) {
      computerScore = computerScore + 1;
    } //end of computer

    //create a line between each round
    console.log("");
  } //end of for loop

  //print out the winner
  //if statemet for user winning
  if (userScore > computerScore) {
    console.log("You have WON!");
    console.log(`Your Score ${userScore}`);
    console.log(`Computer's Score ${computerScore}`);
  } //end of user winning

  //if statement for computer winning
  if (computerScore > userScore) {
    console.log("You have LOST!");
    console.log(`Your Score ${userScore}`);
    console.log(`Computer's Score ${computerScore}`);
  } //end of computer winning

  //else statement for draw
  else {
    console.log("There is a DRAW!");
    console.log(`Your Score ${userScore}`);
    console.log(`Computer's Score ${computerScore}`);
  }
} //game function

//create the function that selects from computer
function computerSelect() {
  //generate random numbers
  const randNumber = Math.floor(Math.random() * 3) + 1;
  let computerSelection;

  //create if statements for each outcome
  if (randNumber === 1) {
    computerSelection = "rock";
  } //rock statement
  else if (randNumber === 2) {
    computerSelection = "paper";
  } //paper statement
  else {
    computerSelection = "scissors";
  } //Scissors statement

  return computerSelection;
} //end of the computer select function

//create a function that lets user make selection
function userSelect() {
  //declare the variable
  let userSelection;

  //create a while loop
  while (true) {
    userSelection = prompt("Choose your pick:").toLowerCase();
    //make sure that the values are valid
    if (
      userSelection === "rock" ||
      userSelection === "paper" ||
      userSelection === "scissors"
    ) {
      //exit the loop
      break;
    } //correct choice if statement
    else {
      alert("Invalid Input: Try Again!");
    } //else statement end
  } //while loop end
  return userSelection;
} //end of user input function

//create a function to play a round
function playRound(userChoice, computerChoice) {
  //create a variable to determine who won
  let winner;
  //create if statements for when the user wins
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    //print out that the user has won
    console.log("You are victorious!");
    winner = 1;
  } //user winning if statement

  //create if statements for when the computer wins
  else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    console.log("You have lost");
    winner = 2;
  } //end of the computer winning if statements

  //else statement for the draw
  else {
    console.log("Draw!");
    winner = 3;
  }

  //return the winner
  return winner;
} //end of the playround function
