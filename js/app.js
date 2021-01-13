'use strict'

console.log('Greetings Earthlings!')

// ask for user name and return respons with greeting

var userName = prompt('Greetings! What is your name?');
alert('Welcome to my page ' + userName + '!');

// prompt user with five yes or no questions
// answers can be yes, no, y, n - IN ANY CASE

var questionOne = prompt('Do I live in Queen Anne?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y') {
  // console.log('You are correct!')
  alert('You are correct!')
} else {
  alert('Sorry, that is wrong.')
}