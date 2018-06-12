// require the Word.js file
var word = require('Word.js');

//require the prompt package
var prompt = require('prompt');

// array of possible words to guess
var guessWords = ['word1', 'word2', 'word3'];

// randomly pick a word from the above array
var randomWord = guessWords[Math.floor(Math.random()*guessWords.length)];

// starts the prompt
prompt.start();

// prompts the user to make a guess
prompt.get(['userGuess'], function(err, result) {
    console.log('Guess a letter: ' + result.userGuess)
})