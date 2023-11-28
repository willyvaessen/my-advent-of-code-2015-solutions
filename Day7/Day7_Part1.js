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
// const INPUT = fs.readFileSync('./Day7_Input', 'utf-8').split('\n');
const INPUT = fs.readFileSync('./Day7_Input_Example', 'utf-8').split('\n');
const WIRES = new Map();
const COMMAND_Sequence = new Map();
const LOGIC_GATES = ["AND", "OR", "LSHIFT", "RSHIFT", "NOT"];
let signal = 0;
// console.log(INPUT_XMPL)
let integerCount = 0;

//  Define BitWise functions
function bitwiseNOT(value) {
    // console.log("Value entered is: " + value);
    return ~value & 0xFFFF; // Apply bitwise NOT and mask with 0xFFFF
}

for (let i = 0; i < INPUT.length; i++) {
    // console.log(INPUT[i]);
    let outputWire = INPUT[i].split(' -> ')[1];
    let inputCommandString = INPUT[i].split(' -> ')[0];
    // console.log(outputWire + " = " + inputCommandString);
    WIRES.set(outputWire, inputCommandString);
}
let runCounter = 1;
// First run
console.log("--- Start Run " + runCounter + " -------------------------------------")
integerCount = 0;
console.log("Starting run " + runCounter);
console.log("There are " + WIRES.size + " entries in the map.");
console.log("There are now " + integerCount + " integers in the map");
runCounter++;
let commandToRun;
for (const [outputWire, inputCommandString] of WIRES.entries()) {
    // console.log(`${outputWire} = ${inputCommandString}`);
    // console.log(inputCommandString);
    if (parseInt(inputCommandString)) {
        // console.log("Parsed Integer is: " + parseInt(inputCommandString));
        // WIRES.set(outputWire, parseInt(inputCommandString))
        signal = parseInt(inputCommandString);
        COMMAND_Sequence.set(outputWire, signal)
        integerCount++;
    } else {
        console.log(inputCommandString + " is not an Integer, processing command.");
        // console.log("----------------------------------------")
        // console.log("Outcome for wire " + outputWire + " is: " + parseCommand(inputCommandString));
        // console.log("----------------------------------------")
        // commandToRun = parseCommand(inputCommandString);
        // WIRES.set(outputWire, commandToRun);
    }
}

console.log(integerCount);  // Counts the amount of integers in the WIRES map.
console.log(WIRES);
console.log("----------------------------------------")
console.log(COMMAND_Sequence)
console.log("----------------------------------------")
console.log("--- End Run " + runCounter + " ---------------------------------------")
//  ---------------------------------------------------------------------------------------------------------------- //


function parseCommand(inputCommand) {
    const GATE_PATTERN = new RegExp(`(${LOGIC_GATES.join("|")})`, "i"); // Add capturing groups//  "i" flag or case-insensitivity
    const match = inputCommand.match(GATE_PATTERN);
    const result = GATE_PATTERN.test(inputCommand);
    // console.log(result);
    if (match) {
        const operator = match[1];
        // console.log(`Found a match: Operator=${operator}`);
        if (operator === "NOT") {
            return bitwiseNOT(inputCommand.split(' ')[1])
        } else if (operator === "AND") {
            // console.log("AND Operator found");
            // console.log(inputCommand);
            // console.log(inputCommand.length);
            let arg1 = inputCommand.split(' ')[0];
            let arg2 = inputCommand.split(' ')[2];
            console.log("Operand 1 is: " + arg1);
            console.log("Operand 2 is: " + arg2);
            // console.log("First operand is '" + WIRES.get(arg1) + "' and second operand is '" + WIRES.get(arg2) + "'");
            return WIRES.get(arg1) & WIRES.get(arg2);

        } else if (operator === "OR") {
            // console.log("OR Operator found.")
            let arg1 = inputCommand.split(' ')[0];
            let arg2 = inputCommand.split(' ')[2];
            // console.log("First operand is '" + arg1 + "' and second operand is '" + arg2 + "'");
            return WIRES.get(arg1) | WIRES.get(arg2);

        } else if (operator === "LSHIFT") {
            let arg1 = inputCommand.split(' ')[0];
            let arg2 = inputCommand.split(' ')[2];
            // console.log("First operand is '" + arg1 + "' and second operand is '" + arg2 + "'");
            return WIRES.get(arg1) << WIRES.get(arg2);

        } else if (operator === "RSHIFT") {
            // console.log("RSHIFT Operator found");
            let arg1 = inputCommand.split(' ')[0];
            let arg2 = parseInt(inputCommand.split(' ')[2]);
            // console.log("First operand is '" + arg1 + "' and second operand is '" + arg2 + "'");
            return WIRES.get(arg1) >>> WIRES.get(arg2);

        } else {
            // console.log("No match found. Check if it is a number.");
            if (isNaN(parseInt(inputCommand))) {
                // console.log(inputCommand + "Is a wire");
            } else return parseInt(inputCommand);
        }
    }
}


//  Each line has an input part and an output part.
//  The input is left of the ->
//  The output is right of the ->
//  With that, we can split each line in an output component and an input component.
//  Each output is a wire.

