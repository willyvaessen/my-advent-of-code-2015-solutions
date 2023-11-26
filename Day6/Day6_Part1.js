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

SOLUTION: 569999
 */

const fs = require('fs');
const INPUT = fs.readFileSync('./Day6_Input', 'utf-8').split('\n');

//  Create the array with all the lights
function createGridOfLights() {
    const lights = [];
    const rows = 1000;
    const cols = 1000;
    let status = 0;
    for (let i = 0; i < rows; i++) {
        lights[i] = [];
        for (let j = 0; j < cols; j++) {
            lights[i][j] = status;
        }
    }
    return lights;
}
const lights = createGridOfLights();

//  Create a function that counts the lights, split by "ON" and "OFF"
function count(lights) {
    return lights.reduce((acc, arr) => {
        for (const item of arr) {
            acc[item] = acc[item] !== undefined ? acc[item] + 1 : 1
        }

        return acc
    }, {})
}

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

//  Determining the Start Coordinate of a line:

function getFromCoord(inputLine) {
    let fromCoord = "";
    let fromCoordStart = 0;
    // console.log("The input line is: " + inputLine);
    // console.log(inputLine.slice(0, 7));
    if (inputLine.slice(0, 7) === "turn on".toLowerCase()) {
        fromCoordStart = inputLine.indexOf("on".toLowerCase()) + 3;
        // console.log("From Coord starts with: " + fromCoordStart);
    } else if (inputLine.slice(0, 7) === "turn of".toLowerCase()) {
        fromCoordStart = inputLine.indexOf("off".toLowerCase()) + 4;
        // console.log("From Coord starts with: " + fromCoordStart);
    } else if (inputLine.slice(0, 7) === "toggle ".toLowerCase()) {
        fromCoordStart = inputLine.indexOf("toggle".toLowerCase()) + 7;
        // console.log("From Coord starts with: " + fromCoordStart);
    } else {
        console.log("not recognized");
    }

    let fromCoordEnd = inputLine.indexOf("through".toLowerCase()) - 1;
    fromCoord = inputLine.slice(fromCoordStart, fromCoordEnd);
    return fromCoord;
}


//  Determining the end coordinate of a line:
function getToCoord(inputLine) {
    let toCoordStart = inputLine.indexOf("through".toLowerCase()) + 8;
    let toCoordFinish = inputLine.length;
    toCoord = inputLine.slice(toCoordStart, toCoordFinish)
    return toCoord;
}

const example123 = 'turn on 123,456 through 987,654';

function operate(inputLine){
    let command = checkCommand(inputLine);
    let from = getFromCoord(inputLine);
    let fromRow = parseInt(from.slice(0, from.indexOf(",")), 10);                     //  from.slice(0, from.indexOf(","))
    let fromCol = parseInt(from.slice((from.indexOf(",")+1), (from.length)), 10);     //  from.slice((from.indexOf(",")+1), (from.length))
    let to = getToCoord(inputLine);
    let toRow = parseInt(String(to.slice(0, to.indexOf(","))), 10);                   //  to.slice(0, to.indexOf(","))
    let toCol = parseInt(String(to.slice((to.indexOf(",")+1), (to.length))), 10);             //  to.slice((to.indexOf(",")+1), (to.length))
    let numberOfRows = toRow - fromRow + 1;
    let numberOfColumns = toCol - fromCol + 1;
    let total = numberOfRows * numberOfColumns;
    console.log(numberOfRows + " Rows x " + numberOfColumns + " Columns  = Total: " + total + " lights");
    //  Iterate through the rows:
    for (let i = fromRow; i <= toRow; i++) {
        //  Iterate through the columns
        for (let j = fromCol; j <= toCol; j++){
            // console.log(i + "," + j + ":" +lights[i][j]);
            if (command === "ton".toLowerCase()) {
                lights[i][j] = 1;
            } else if (command === "tof".toLowerCase()) {
                lights[i][j] = 0;
            } else if (command === "tog".toLowerCase()) {
                // console.log("Toggling status")
                if (lights[i][j] === 1) {
                    lights[i][j] = 0;
                } else if (lights[i][j] === 0) {
                    lights[i][j] = 1;
                }
            }
        }
    } console.log(count(lights))
}

for (let i = 0; i < INPUT.length; i++) {
    operate(INPUT[i])
}

//  Final Answer

console.log("The final answer is: ")
// console.log(count(lights))