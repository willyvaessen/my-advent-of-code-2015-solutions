/*  --- Day 7: Some Assembly Required ---

This year, Santa brought little Bobby Tables a set of wires and bitwise logic gates!
Unfortunately, little Bobby is a little under the recommended age range, and he needs help assembling the circuit.

Each wire has an identifier (some lowercase letters) and can carry a 16-bit signal (a number from 0 to 65535).
A signal is provided to each wire by a gate, another wire, or some specific value. Each wire can only get a signal from
one source, but can provide its signal to multiple destinations. A gate provides no signal until all of its inputs have
a signal.

The included instructions booklet describes how to connect the parts together: x AND y -> z means to connect wires
x and y to an AND gate, and then connect its output to wire z.
 */

/*  --- Example
For example:

    123 -> x means that the signal 123 is provided to wire x.
    x AND y -> z means that the bitwise AND of wire x and wire y is provided to wire z.
    p LSHIFT 2 -> q means that the value from wire p is left-shifted by 2 and then provided to wire q.
    NOT e -> f means that the bitwise complement of the value from wire e is provided to wire f.
    Other possible gates include OR (bitwise OR) and RSHIFT (right-shift).
    If, for some reason, you'd like to emulate the circuit instead, almost all programming languages
    (for example, C, JavaScript, or Python) provide operators for these gates.

 */



//  Get the input from external file.
const fs = require('fs');
const INPUT = fs.readFileSync('./Day7_Input', 'utf-8').split('\n');
const INPUT_XMPL = fs.readFileSync('./Day7_Input_Example', 'utf-8').split('\n');


console.log(INPUT_XMPL);
const LOGIC_GATES = ["AND", "OR", "LSHIFT", "RSHIFT", "NOT"];

function bitwiseNOT(value) {
    return ~value & 0xFFFF; // Apply bitwise NOT and mask with 0xFFFF
}
// const GATE_PATTERN = new RegExp(`(\\w+)\\s+(${LOGIC_GATES.join("|")})\\s+(\\w+)\\s*->\\s*(\\w+)`, "i");



const GATE_PATTERN = new RegExp(`(${LOGIC_GATES.join("|")})`, "i"); // Add capturing groups//  "i" flag or case-insensitivity

const test_string = "x AND y -> d";
const test_stringNot = "NOT y -> i";
const match = test_string.match(GATE_PATTERN);


const result = GATE_PATTERN.test(test_stringNot);
console.log(result);

if (match) {
    const operator = match[1];

    console.log(`Found a match: Operator=${operator}`);
} else {
    console.log("No match found");
}


// /*  --- Below is how the example can be worked out in code.
let x = 123;
let y = 456;
let d = x & y;
let e = x | y;
let f = x << 2;
let g = y >>> 2;
let h = bitwiseNOT(x);
let i = bitwiseNOT(y);
console.log("--------------------------------------------------------------------------------");
console.log("D: " + d);
console.log("E: " + e);
console.log("F: " + f);
console.log("G: " + g);
console.log("H: " + h);
console.log("I: " + i);
console.log("X: " + x);
console.log("Y: " + y);
console.log("--------------------------------------------------------------------------------");
*/














//  Line 79: lx -> a






/*  --- Below are examples provided by ChatGPT in order to better understand the Bitwise Operations

//  Bitwise AND (&):
let a = 5;    // Binaire representatie: 0101
let b = 3;    // Binaire representatie: 0011

let resultAnd = a & b;  // Resultaat: 0001, overeenkomstige bits zijn alleen waar als beide waar zijn.
console.log(resultAnd);


//  Bitwise OR (|):

let c = 5;    // Binaire representatie: 0101
let d = 3;    // Binaire representatie: 0011

let resultOr = c | d;  // Resultaat: 0111, bits zijn waar als ten minste één van beide waar is.
console.log(resultOr);


//  Bitwise XOR (^):

let e = 5;    // Binaire representatie: 0101
let f = 3;    // Binaire representatie: 0011

let resultXor = e ^ f;  // Resultaat: 0110, bits zijn alleen waar als slechts één van beide waar is.
console.log(resultXor);


//  Bitwise NOT (~):

let g = 5;    // Binaire representatie: 0101

let resultNot = ~g;  // Resultaat: 1010, alle bits worden omgekeerd.
console.log(resultNot);


//  Logische verschuiving naar links (<<): (LSHIFT)

let numL = 0b1010101010101010;  // 16-bit binaire representatie

let resultLeft = numL << 2;  // Logische verschuiving naar links met 2 posities: 1010101010101000 = 43688
console.log(resultLeft);


//  Logische verschuiving naar rechts (>>>): (RSHIFT)

let numR = 0b1010101010101010;  // 16-bit binaire representatie

let resultRight = numR >>> 3;  // Logische verschuiving naar rechts met 3 posities: 0001010101010101  = 5461
console.log(resultRight);



let num1 = 0b1010101010101010;  // 16-bit binaire representatie

let result = num1 << 2;  // Logische verschuiving naar links met 2 posities

console.log("LSHIFT Example: " + result.toString(2));  // Uitkomst: "10101010101010000"
*/