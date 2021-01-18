'use strict';

// console.log('Greetings Earthlings!');

// ask for user name and return response with greeting and their name

var userName = prompt('Greetings! What is your name?');
alert('Welcome to my page ' + userName + '!');

var score = 0;

// prompt user with five yes or no questions
// answers can be yes, no, y, n - IN ANY CASE
// alert response back to user with correct or incorrect message

// question one
var homeLocation = prompt('Do I live in Queen Anne?').toLowerCase();

if(homeLocation === 'yes' || homeLocation === 'y') {
  // console.log('You are correct!');
  alert('You are correct!');
  score++;
} else {
  alert('Sorry, that is wrong.');
}

// question two
var tattoo = prompt('Do I have a tattoo?').toLowerCase();

if(tattoo === 'no' || tattoo === 'n') {
  // console.log('Yes, that is correct!');
  alert('Yes, that is correct!');
  score++;
} else {
  alert('Nope, wrong.');
}

// question three
var siblings = prompt('Do I have siblings?').toLowerCase();

if(siblings === 'yes' || siblings === 'y') {
  // console.log('Yes!');
  alert('Yes!');
  score++;
} else {
  alert('Oops! No.');
}

// question four
var petType = prompt('Do I have a dog?').toLowerCase();

if(petType === 'no' || petType === 'n') {
  // console.log('Great job!');
  alert('Great job!');
  score++;
} else {
  alert('Oh, no.');
}

// question five
var crafts = prompt('Do I love crafting?').toLowerCase();

if(crafts === 'yes' || crafts === 'y') {
  // console.log('Yes, ' + userName + '! Good answer!');
  alert('Yes, ' + userName + '! Good answer!');
  score++;
} else {
  alert('Sorry, ' + userName + '. Incorrect.');
}

var plantGuesses = 4;
var myPlants = 9; 

var plantQuestion = parseInt(prompt('Enter a number. How many houseplants do I have?'));

for (var i = 1; i < plantGuesses; i++){

  if (plantQuestion === myPlants){
    alert(`${myPlants} is the correct number!`);
    score++;
    break;
  } else if(plantQuestion < myPlants){
    plantQuestion = parseInt(prompt('Sorry, too low.'));
  } else if(plantQuestion > myPlants){
    plantQuestion = parseInt(prompt('Oops, too high.'));
  } else {
    plantQuestion = parseInt(prompt('Try again. Enter a number.'));
  }
}
if(i === plantGuesses){
    alert(`Wrong! ${myPlants} was the right answer.`);
  }

var foodGuesses = 6;
var favoriteFoods = ['sushi', 'mac and cheese', 'pho', 'pizza'];
  // console.log(favoriteFoods);
var foodQuestion = prompt('What is a favorite food of mine?').toLowerCase();
  // console.log(foodQuestion);

for (var i = 1; i < foodGuesses; i++){

  if (favoriteFoods[i] === foodQuestion){
    alert(`Yes, ${foodQuestion} is delicious!`);
    score++;
    break;
  } else if (favoriteFoods[i] !== foodQuestion){
    prompt('Try again.');
  }
}

if(i === foodGuesses){
  alert(`No, ${favoriteFoods} were the right options.`);
  }

alert(`Enjoy my page, ${userName}! Your score is ${score} out of 7.`);
console.log(score);
