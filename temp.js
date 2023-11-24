//  Declare variables
const fs = require('fs');
const INPUT = fs.readFileSync('./Day5_Input', 'utf-8').split('\n');
// const INPUT = fs.readFileSync('./Day5_Lines_Missed', 'utf-8').split('\n');


let nice_strings_amount = 0;
const nice_strings = [];
const naught_strings = [];


//  Check for 3 vowels
const regExp3Vowels = /(?=(.*[aeiou]){3})\w+/;
//  Check for double letters
// const regExpDoubleLetters = /(.)\1\w+/;
const regExpDoubleLetters = /(.)\1/;
//  Check for (absence of) 'ab', 'cd', 'pq' and 'xy'
const regExpExludePatterns = /(ab|cd|pq|xy)/;

function checkString(string_to_check) {
    if (regExp3Vowels.test(string_to_check) && regExpDoubleLetters.test(string_to_check) && !regExpExludePatterns.test(string_to_check)) {
        nice_strings.push(string_to_check);
        nice_strings_amount++;
    } else {
        naught_strings.push(string_to_check);
    }
    console.log("The amount of nice strings is " + nice_strings_amount);
}


for (let i = 0; i < INPUT.length; i++) {
    console.log(i+1 + ":" + INPUT[i]);
    checkString(INPUT[i]);
}
