const fs = require('fs');
const repl = require("repl");
const INPUT = fs.readFileSync('./Day7_Input', 'utf-8').split('\n');
// const INPUT = fs.readFileSync('./Day7_Input_Example', 'utf-8').split('\n');
// console.log(INPUT);

const COMMAND_REGEX = /[A-Z]+/g;
const ARGUMENTS_REGEX = /[a-z0-9]+/g;

const WIRES = new Map();

// Dictionary of our bitwise methods
const BITWISE_METHODS = {
    AND: (a, b) => a & b,
    OR: (a, b) => a | b,
    NOT: a => ~a,
    LSHIFT: (a, b) => a << b,
    RSHIFT: (a, b) => a >> b
};

// Parse instruction from input and return object with command, arguments and destination wire
const parseInstruction = instruction => {
    const command = instruction.match(COMMAND_REGEX);
    const args = instruction.match(ARGUMENTS_REGEX);
    const destination = args.pop();
    console.log("--------------------");
    console.log(command);
    console.log(args);
    console.log(destination);
    console.log("--------------------");
    return {
        command: command && command[0],
        args: args.map(arg => isNaN(Number(arg)) ? arg : Number(arg)),
        destination: destination
    };
};
// Calculate value for one of the wires (recursively)
const calculateWire = wireName => {
  const wire = WIRES.get(wireName);

  // If wire already calculated, return value
  if (typeof wireName === 'number') return wireName;
  if (typeof wire === 'number') return wire;
  if (typeof wire === 'undefined') return undefined;

  if (!wire.command) {
    WIRES.set(wireName, calculateWire(wire.args[0]));
  } else {
    WIRES.set(wireName, BITWISE_METHODS[wire.command](calculateWire(wire.args[0]), calculateWire(wire.args[1])));
  }

  return WIRES.get(wireName);
};

// Fill WIRES with parsed instructions and their future values
INPUT.forEach(instruction => {
  const parsedInstruction = parseInstruction(instruction);
  WIRES.set(parsedInstruction.destination, {command: parsedInstruction.command, args: parsedInstruction.args});
});

// Set already known value to specific wire
WIRES.set('b', 16076);  //  This triggers the answer for part 2 of Day 7. Comment out to get the answer for day 1.

console.log(calculateWire('a'));