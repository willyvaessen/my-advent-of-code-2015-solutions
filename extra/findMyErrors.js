const fs = require('fs');
const INPUT = fs.readFileSync('./Day5_Lines_Missed', 'utf-8').split('\n');
console.log(INPUT);
let nice_strings_amount = 0;
const nice_strings = [];
const naught_strings = [];
//  Below are my 3 regular expressions. I will test each line separately against each regex.
//  Check for 3 vowels
const regExp3Vowels = /(?=(.*[aeiou]){3})\w+/;
//  Check for double letters
const regExpDoubleLetters = /(.)\1\w+/;
//  Check for (absence of) 'ab', 'cd', 'pq' and 'xy'
const regExpExludePatterns = /(ab|cd|pq|xy)/;

// for (let i = 0; i < INPUT.length; i++) {
//     console.log(regExp3Vowels.test(INPUT[i]));
// }
//
// for (let i = 0; i < INPUT.length; i++) {
//     console.log(regExpDoubleLetters.test(INPUT[i]));
// }
//
// for (let i = 0; i < INPUT.length; i++) {
//     console.log(!regExpExludePatterns.test(INPUT[i]));
// }


function checkString(string_to_check) {
    if (regExp3Vowels.test(string_to_check) && regExpDoubleLetters.test(string_to_check) && !regExpExludePatterns.test(string_to_check)) {
        console.log("The string " + string_to_check + " is a NICE string");
        nice_strings.push(string_to_check);
        nice_strings_amount++;
    } else {
        naught_strings.push(string_to_check);
        console.log("The string " + string_to_check + " is a NAUGHTY string");
    }
    console.log("The amount of nice strings is " + nice_strings_amount);
}

for (let i = 0; i < INPUT.length; i++) {
    console.log(i+1 + ":" + INPUT[i]);
    checkString(INPUT[i]);
}