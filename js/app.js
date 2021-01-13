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

var questionTwo = prompt('').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y') {
  // console.log('Yes, that is correct!')
  alert('Yes, that is correct!')
} else {
  alert('Nope, wrong.')
}

var questionThree = prompt('').toLowerCase();

if(questionThree === 'yes' || questionThree === 'y') {
  // console.log('Yes!')
  alert('Yes!')
} else {
  alert('Oops! No.')
}

var questionFour = prompt('').toLowerCase();

if(questionFour === 'yes' || questionFour === 'y') {
  // console.log('Great job!')
  alert('Great job!')
} else {
  alert('Oh, no.')
}

var questionFive = prompt('').toLowerCase();

if(questionFive === 'yes' || questionFive === 'y') {
  // console.log('Great job!')
  alert('Yes, ' + userName + '! Good answer!')
} else {
  alert('Sorry, ' +userName + '. Incorrect.')
}