

const enterNumText = 'Please enter a number greater than zero';

// For restarting the game
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum; 

// For storing the number to be guessed
let randomNum;

// for storing the number of attempts the user has
let attempts;

// For storing the users guess
let guess;

// Used for storing users response on playing again or not
let playAgain;

alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

while (restartGame){

    rangeNum = prompt (`Please enter a maximum number for the range:`);
    // Using parseInt to attempt to covert the users response into a number value(NOTE: The value returned from a prompt is a string value. Also, if the value cannot be converted then the value returned will be NaN (Not a Number))
    parseInt(rangeNum);

    // Verifies the users entry for the range number is a number greater than zero (NOTE: NaN has a default boolean value of false. Also, all numbers, positive and negative, ha vea default boolean value of true, except for zero which has a default boolean value of false. )
    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt (enterNumText);
        rangeNum = parseInt(rangeNum);
    }
    
    ramdonNum = Math.floor(Math. random() * rangeNuM)+ 1 ;

    break;
}

