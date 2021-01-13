'use strict';

// console.log('Greetings Earthlings!')

// ask for user name and return response with greeting and their name

var userName = prompt('Greetings! What is your name?');
alert('Welcome to my page ' + userName + '!');

// prompt user with five yes or no questions
// answers can be yes, no, y, n - IN ANY CASE
// alert response back to user with correct or incorrect message

var questionOne = prompt('Do I live in Queen Anne?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y') {
  // console.log('You are correct!')
  alert('You are correct!')
} else {
  alert('Sorry, that is wrong.')
}

var questionTwo = prompt('Do I have a tattoo?').toLowerCase();

if(questionTwo === 'no' || questionTwo === 'n') {
  // console.log('Yes, that is correct!')
  alert('Yes, that is correct!')
} else {
  alert('Nope, wrong.')
}

var questionThree = prompt('Do I have siblings?').toLowerCase();

if(questionThree === 'yes' || questionThree === 'y') {
  // console.log('Yes!')
  alert('Yes!')
} else {
  alert('Oops! No.')
}

var questionFour = prompt('Do I have a dog?').toLowerCase();

if(questionFour === 'no' || questionFour === 'n') {
  // console.log('Great job!')
  alert('Great job!')
} else {
  alert('Oh, no.')
}

var questionFive = prompt('Do I love crafting?').toLowerCase();

if(questionFive === 'yes' || questionFive === 'y') {
  // console.log('Yes, ' + userName + '! Good answer!')
  alert('Yes, ' + userName + '! Good answer!')
} else {
  alert('Sorry, ' +userName + '. Incorrect.')
}