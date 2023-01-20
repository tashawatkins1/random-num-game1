// Create a new Replit project called random-number-game
// Declare a let variable called num and set it to a value of 0
// Create a function called generateRandomNumber that takes no parameters. It should return a random number using Math.random() and Math.floor. You will need to look into what these methods do to work out how to use them correctly.
// Create a function called differenceFromAnswer that takes two parameters, guess and answer and returns "Correct" if they guessed correctly, "Too low" if the guess was too low ( guess < answer ) and "Too high" if the guess was too high ( guess > answer ).

console.log('Welcome to random number game!');
let num = 0;

function generateRandomNumber(){
  num = Math.floor(Math.random() * 10);
  return num;
}

function differenceFromAnswer(guess, answer){
  if(guess = answer)
    console.log("Woohoo, you are correct");
  else(console.log("You are wrong"));
  
}

guess = prompt("Guess a num? ")
console.log(differenceFromAnswer(guess,generateRandomNumber()));