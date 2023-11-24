// const fs = require('fs');
// const INPUT = fs.readFileSync('./Day5_Input', 'utf-8').split('\n');
//
// // Dictionary of letters that need to be checked against the rules
// const VOWELS = ['a', 'e', 'i', 'o', 'u'];
// const DOUBLE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('').map(item => item + item);
// const RESTRICTED_LETTERS = ['ab', 'cd', 'pq', 'xy'];
//
// // Methods to check the rules
// const isContainThreeVowels = string => string.split('').reduce((vowels, char) => VOWELS.indexOf(char) === -1 ? vowels : ++vowels, 0) >= 3;
// const isContainDoubleLetter = string => DOUBLE_LETTERS.some(item => string.indexOf(item) !== -1);
// const isContainRestrictedLetters = string => RESTRICTED_LETTERS.some(item => string.indexOf(item) !== -1);
//
// // Composition of all methods above
// const isNiceString = string => !!(isContainThreeVowels(string) && isContainDoubleLetter(string) && !isContainRestrictedLetters(string));
//
// const result = INPUT.reduce((total, string) => isNiceString(string) ? ++total : total, 0);
//
// console.log(result);

const fs = require('fs');
const INPUT = fs.readFileSync('./Day5_Input', 'utf-8').split('\n');

// Dictionary of letters that need to be checked against the rules
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const DOUBLE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('').map(item => item + item);
const RESTRICTED_LETTERS = ['ab', 'cd', 'pq', 'xy'];

// Methods to check the rules
const isContainThreeVowels = string => string.split('').reduce((vowels, char) => VOWELS.indexOf(char) === -1 ? vowels : ++vowels, 0) >= 3;
const isContainDoubleLetter = string => DOUBLE_LETTERS.some(item => string.indexOf(item) !== -1);
const isContainRestrictedLetters = string => RESTRICTED_LETTERS.some(item => string.indexOf(item) !== -1);

// Composition of all methods above
const isNiceString = string => isContainThreeVowels(string) && isContainDoubleLetter(string) && !isContainRestrictedLetters(string);

// Array to store nice strings
const niceStrings = [];

// Iterate through each string in INPUT and check if it's nice
INPUT.forEach(string => {
  if (isNiceString(string)) {
    niceStrings.push(string);
  }
});

// Output the number of nice strings
console.log("Number of nice strings:", niceStrings.length);

// Output the nice strings themselves
console.log("Nice strings:", niceStrings);

// Write the niceStrings array to an external file
fs.writeFileSync('./niceStringsOutput_right_solution.txt', niceStrings.join('\n'), 'utf-8');
