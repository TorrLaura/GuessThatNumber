

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
    
    ramdomNum = Math.floor(Math.random() * rangeNuM)+ 1 ;

    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

    while (!attempts || attempts < 1){
        attempts = parseInt(prompt(enterNumText));
    }
    

    guess = prompt (`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);

    while (true){
        
        // Attempts to convert the users guess into a number
        guess = parseInt(guess);
        
        while (!guess || guess < 1 || guess > rangeNum){
            guess = parseInt(prompt(`Please Enter a number from 1 to ${rangeNum}`));
        }
        

        attempts--;
        
        if (guess === randomNum){
            alert (`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break;
        
        } else if (attempts === 0){
            alert(`Sorry, but you have run out of attempts. The number was ${randomNum}`);

            break;
        }
         else if (guess < randomNum){
             guess = prompt (`Too low. You have ${attempts} 
             attempts(s) left`);
        
        } else{
            guess = prompt(`Too high. you have ${attempts} attempts left`);
        }


        
        
    }
    
    break;
}

