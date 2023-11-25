/*  --- Day 6: Probably a Fire Hazard ---

Because your neighbors keep defeating you in the holiday house decorating contest year after year, you've decided to
deploy one million lights in a 1000x1000 grid.

Furthermore, because you've been especially nice this year, Santa has mailed you instructions on how to display the
ideal lighting configuration.

Lights in your grid are numbered from 0 to 999 in each direction;
the lights at each corner are at
    0,0,
    0,999,
    999,999, and
    999,0.

The instructions include whether to turn on, turn off, or toggle various inclusive ranges given as coordinate pairs.
Each coordinate pair represents opposite corners of a rectangle, inclusive;
    a coordinate pair like 0,0 through 2,2 therefore refers to 9 lights in a 3x3 square.
    The lights all start turned off.

To defeat your neighbors this year, all you have to do is set up your lights by doing the instructions Santa sent you in order.

For example:

    turn on 0,0 through 999,999 would turn on (or leave on) every light.
    toggle 0,0 through 999,0 would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
    turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights.

After following the instructions, how many lights are lit?
 */

const fs = require('fs');
const INPUT = fs.readFileSync('./Day6_Input', 'utf-8').split('\n');
// console.log(INPUT);
// console.log(INPUT.length);

//  There are three different commands in the INPUT file: Turn on, Turn off and Toggle.
//  At first I'll distinguish which one is the current command.

const example1 = 'turn on 0,0 through 999,999';
const example2 = 'toggle 0,0 through 999,0';
const example3 = 'turn off 499,499 through 500,500';
const example4 = 'Jibberish which does nothing at all!!!';


function checkCommand(inputLine) {
    let command = '';
    let fromCoordStart = 0;
    // console.log("The input line is: " + inputLine);
    if (inputLine.slice(0, 7) === "turn on".toLowerCase()) {
        command = "ton";
    } else if (inputLine.slice(0, 7) === "turn of".toLowerCase()) {
        command = "tof";
    } else if (inputLine.slice(0, 7) === "toggle ".toLowerCase()) {
        command = "tog";
    } else {
        command = "not recognized";
    }
    // console.log("The command given in this line is: " + command);
    return command;
}

// checkCommand(example1);
// checkCommand(example2);
// checkCommand(example3);
// checkCommand(example4);

//  Determining the Start Coordinate of a line:

function getFromCoord(inputLine) {
    let fromCoord = "";
    let fromCoordStart = 0;
    // console.log("The input line is: " + inputLine);
    // console.log(inputLine.slice(0, 7));
    if (inputLine.slice(0, 7) === "turn on".toLowerCase()) {
        fromCoordStart = inputLine.indexOf("on".toLowerCase())+3;
        // console.log("From Coord starts with: " + fromCoordStart);
    } else if (inputLine.slice(0, 7) === "turn of".toLowerCase()) {
        fromCoordStart = inputLine.indexOf("off".toLowerCase())+4;
        // console.log("From Coord starts with: " + fromCoordStart);
    } else if (inputLine.slice(0, 7) === "toggle ".toLowerCase()) {
        fromCoordStart = inputLine.indexOf("toggle".toLowerCase())+7;
        // console.log("From Coord starts with: " + fromCoordStart);
    } else {
        console.log("not recognized");
    }
    // console.log("From Coord starts with: " + fromCoordStart);

    // console.log("Inputline is: " + inputLine)
    let fromCoordEnd = inputLine.indexOf("through".toLowerCase()) - 1;
    // console.log("From Coord ends at: " + fromCoordEnd + " // " + inputLine[fromCoordEnd]);
    // console.log("Last char of the start coord is: " + inputLine[fromCoordEnd]);
    // console.log(inputLine[fromCoordEnd]);
    fromCoord = inputLine.slice(fromCoordStart, fromCoordEnd);
    // console.log("From Coordinate is: " + fromCoord);
    // console.log("From Coordinate is: " + inputLine.slice(fromCoordStart, fromCoordEnd));
    return  fromCoord;
}

// getFromCoord(example1);
// getFromCoord(example2);
// getFromCoord(example3);
// getFromCoord(example4);


//  Determining the end coordinate of a line:
function getToCoord(inputLine) {
    // console.log(inputLine.length);
    // console.log(inputLine[inputLine.length-1]);
    // console.log(inputLine.indexOf("through".toLowerCase()));
    let toCoordStart = inputLine.indexOf("through".toLowerCase()) + 8;
    let toCoordFinish = inputLine.length;
    // console.log("End coordinate starts at: " + toCoordStart + " and ends at " + toCoordFinish);
    // console.log("End Coordinate is: " + endCoord);
    toCoord = inputLine.slice(toCoordStart, toCoordFinish)
    // console.log(toCoord);
    return toCoord;
}

// getToCoord(example1);
// getToCoord(example2);
// getToCoord(example3);
// getToCoord(example4);
//

console.log("The assignment is to do " + checkCommand(example1) + " and start on " + getFromCoord(example1) + " all the way to " + getToCoord(example1));
console.log("The assignment is to do " + checkCommand(example2) + " and start on " + getFromCoord(example2) + " all the way to " + getToCoord(example2));
console.log("The assignment is to do " + checkCommand(example3) + " and start on " + getFromCoord(example3) + " all the way to " + getToCoord(example3));