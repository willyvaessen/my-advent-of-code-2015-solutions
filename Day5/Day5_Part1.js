/*  --- Day 5: Doesn't He Have Intern-Elves For This? ---

Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

    It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
    It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
    It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

For example:

    ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
    aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
    jchzalrnumimnmhp is naughty because it has no double letter.
    haegwjzuvuyypxyu is naughty because it contains the string xy.
    dvszwmarrgswjxmb is naughty because it contains only one vowel.

How many strings are nice?
 */

//  Declare variables
const fs = require('fs');
const INPUT = fs.readFileSync('./Day5_Input', 'utf-8').split('\n');
// console.log(INPUT);
// console.log(INPUT[0]);
let nice_strings_amount = 0;
const nice_strings = [];
const naught_strings = [];

/*  Tests
const input_test_nice1 = 'ugknbfddgicrmopn';      //  this string should return NICE (see examples)
const input_test_nice2 = 'aaa';                   //  this string should return NICE (see examples)
const input_test_naughty1 = 'jchzalrnumimnmhp';   //  this string should return NAUGHTY (see examples)
const input_test_naughty2 = 'haegwjzuvuyypxyu';   //  this string should return NAUGHTY (see examples)
const input_test_naughty3 = 'dvszwmarrgswjxmb';   //  this string should return NAUGHTY (see examples)
*/

//  Since we're working with strings, I figured I'd test the string using regular expressions.
//  Not my favorite, but good practice in this case.

//  Check for 3 vowels
const regExp3Vowels = /(?=(.*[aeiou]){3})\w+/;
//  Check for double letters
const regExpDoubleLetters = /(.)\1/;   //  Removed the w+
//  Check for (absence of) 'ab', 'cd', 'pq' and 'xy'
const regExpExludePatterns = /(ab|cd|pq|xy)/;


//  Define a function to check a string against the 3 regular expressions.
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
//
// console.log(nice_strings.length);
// console.log(naught_strings.length);

// Write the niceStrings array to an external file
fs.writeFileSync('./niceStringsOutput_wrong_solution.txt', nice_strings.join('\n'), 'utf-8');

//  Check the test strings
// checkString(input_test_nice1);
// checkString(input_test_nice2);
// checkString(input_test_naughty1);
// checkString(input_test_naughty2);
// checkString(input_test_naughty3);

//  Checking string aaa
// console.log("Checking String " + input_test_nice2);
// console.log(regExp3Vowels.test(input_test_nice2));
// console.log(regExp3Vowels.test('aaa'));
// console.log(regExpDoubleLetters.test(input_test_nice2));
// console.log(regExpExludePatterns.test(input_test_nice2));

/*  Below are tests for the Regular Expressions that I've found.
console.log("Testing for vowels:")
console.log(regExp3Vowels.test(input_test_nice1));
console.log(regExp3Vowels.test(input_test_nice2));
console.log(regExp3Vowels.test(input_test_naughty1));
console.log(regExp3Vowels.test(input_test_naughty2));
console.log(regExp3Vowels.test(input_test_naughty3));
console.log("----------------------------------------")
console.log("Testing for double letters")

console.log(regExpDoubleLetters.test(input_test_nice1));
console.log(regExpDoubleLetters.test(input_test_nice2));
console.log(regExpDoubleLetters.test(input_test_naughty1));
console.log(regExpDoubleLetters.test(input_test_naughty2));
console.log(regExpDoubleLetters.test(input_test_naughty3));
console.log("----------------------------------------")
console.log("Testing for forbidden strings")
console.log(!regExpExludePatterns.test(input_test_nice1));
console.log(!regExpExludePatterns.test(input_test_nice2));
console.log(!regExpExludePatterns.test(input_test_naughty1));
console.log(!regExpExludePatterns.test(input_test_naughty2));
console.log(!regExpExludePatterns.test(input_test_naughty3));
console.log("----------------------------------------")
*/