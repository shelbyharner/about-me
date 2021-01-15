'use strict';

// console.log('Greetings Earthlings!');

// ask for user name and return response with greeting and their name

var userName = prompt('Greetings! What is your name?');
alert('Welcome to my page ' + userName + '!');

// prompt user with five yes or no questions
// answers can be yes, no, y, n - IN ANY CASE
// alert response back to user with correct or incorrect message

// question one
var homeLocation = prompt('Do I live in Queen Anne?').toLowerCase();

if(homeLocation === 'yes' || homeLocation === 'y') {
  // console.log('You are correct!');
  alert('You are correct!');
} else {
  alert('Sorry, that is wrong.');
}

// question two
var tattoo = prompt('Do I have a tattoo?').toLowerCase();

if(tattoo === 'no' || tattoo === 'n') {
  // console.log('Yes, that is correct!');
  alert('Yes, that is correct!');
} else {
  alert('Nope, wrong.');
}

// question three
var siblings = prompt('Do I have siblings?').toLowerCase();

if(siblings === 'yes' || siblings === 'y') {
  // console.log('Yes!');
  alert('Yes!');
} else {
  alert('Oops! No.');
}

// question four
var petType = prompt('Do I have a dog?').toLowerCase();

if(petType === 'no' || petType === 'n') {
  // console.log('Great job!');
  alert('Great job!');
} else {
  alert('Oh, no.');
}

// question five
var crafts = prompt('Do I love crafting?').toLowerCase();

if(crafts === 'yes' || crafts === 'y') {
  // console.log('Yes, ' + userName + '! Good answer!');
  alert('Yes, ' + userName + '! Good answer!');
} else {
  alert('Sorry, ' + userName + '. Incorrect.');
}