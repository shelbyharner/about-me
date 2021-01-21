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
function homeLocation() {
    var response = prompt('Do I live in Queen Anne?').toLowerCase();

    if (response === 'yes' || response === 'y') {
        // console.log('You are correct!');
        alert('You are correct!');
        score++;
    } else {
        alert('Sorry, that is wrong.');
    }
}
homeLocation();

// question two
function tattoo() {
    var response = prompt('Do I have a tattoo?').toLowerCase();

    if (response === 'no' || response === 'n') {
        // console.log('Yes, that is correct!');
        alert('Yes, that is correct!');
        score++;
    } else {
        alert('Nope, wrong.');
    }
}
tattoo();

// question three
function siblings() {
    var response = prompt('Do I have siblings?').toLowerCase();

    if (response === 'yes' || response === 'y') {
        // console.log('Yes!');
        alert('Yes!');
        score++;
    } else {
        alert('Oops! No.');
    }
}
siblings();

// question four
function petType() {
    var response = prompt('Do I have a dog?').toLowerCase();

    if (response === 'no' || response === 'n') {
        // console.log('Great job!');
        alert('Great job!');
        score++;
    } else {
        alert('Oh, no.');
    }
}
petType();


// question five
function crafts() {
    var response = prompt('Do I love crafting?').toLowerCase();

    if (response === 'yes' || response === 'y') {
        // console.log('Yes, ' + userName + '! Good answer!');
        alert('Yes, ' + userName + '! Good answer!');
        score++;
    } else {
        alert('Sorry, ' + userName + '. Incorrect.');
    }
}
crafts();

var plantGuesses = 4;
var myPlants = 9;

function plantQuestion() {
    var response = parseInt(prompt('Enter a number. How many houseplants do I have?'));

    for (var i = 1; i < plantGuesses; i++) {

        if (response === myPlants) {
            alert(`${myPlants} is the correct number!`);
            score++;
            break;
        } else if (response < myPlants) {
            response = parseInt(prompt('Sorry, too low.'));
        } else if (response > myPlants) {
            response = parseInt(prompt('Oops, too high.'));
        } else {
            response = parseInt(prompt('Try again. Enter a number.'));
        }
    }
    if (i === plantGuesses) {
        alert(`Wrong! ${myPlants} was the right answer.`);
    }
}
plantQuestion();

var foodGuesses = 6;
var favoriteFoods = ['sushi', 'mac and cheese', 'pho', 'pizza'];
// console.log(favoriteFoods);
var rightAnswer = false;

function foodQuestion() {
    var response = prompt('What is a favorite food of mine?').toLowerCase();
    for (var j = 0; j < 6; j++) {

        for (var k = 0; k < favoriteFoods.length; k++) {
            if (favoriteFoods[k] === response) {
                alert(`Yes, ${favoriteFoods} is delicious!`);
                rightAnswer = true;
                score++;
                break;
            }
        }
        if (rightAnswer) {
            break;
        } else {
            alert(`Guess again. You have ${foodGuesses} chances left.`)
        }
        foodGuesses--;
    }

    if (foodGuesses === 0) {
        alert(`No, you are out of guesses. ${favoriteFoods} were the right options.`);
    }
}
foodQuestion();

alert(`Enjoy my page, ${userName}! Your score is ${score} out of 7.`);
console.log(score);