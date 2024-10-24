// Function to simulate rolling a dice
function rollDice() {
    // Generate a random number between 1 and 6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    // Return the random number as the result of the dice roll
    return randomNumber;
}

// Call the rollDice function and store the result in a variable
var diceRollResult = rollDice();

// Print the result to the console
console.log("Tilfeldig tall: " + diceRollResult)