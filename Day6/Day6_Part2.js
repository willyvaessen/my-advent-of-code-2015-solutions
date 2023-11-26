/*  --- Day 6: Probably a Fire Hazard (part 2) ---

You just finish implementing your winning light pattern when you realize you mistranslated
Santa's message from Ancient Nordic Elvish.

The light grid you bought actually has individual brightness controls;
each light can have a brightness of zero or more. The lights all start at zero.

The phrase turn on actually means that you should increase the brightness of those lights by 1.

The phrase turn off actually means that you should decrease the brightness of those lights by 1, to a minimum of zero.

The phrase toggle actually means that you should increase the brightness of those lights by 2.

What is the total brightness of all lights combined after following Santa's instructions?

For example:

    turn on 0,0 through 0,0 would increase the total brightness by 1.
    toggle 0,0 through 999,999 would increase the total brightness by 2000000.

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

const smallGrid = [];
let totalBrightness = 0;
//  Create a function that counts the total brightness"
function getTotalBrightness(lights){
  totalBrightness = 0;
  console.log(lights);
  for (let i = 0; i <lights.length; i++) {
    for (let j = 0; j < lights[i].length; j++) {
      console.log(lights[i][j]);
      totalBrightness += lights[i][j];
    }
  } return totalBrightness;
}


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
    let fromRow = parseInt(from.slice(0, from.indexOf(",")), 10);
    let fromCol = parseInt(from.slice((from.indexOf(",")+1), (from.length)), 10);
    let to = getToCoord(inputLine);
    let toRow = parseInt(String(to.slice(0, to.indexOf(","))), 10);
    let toCol = parseInt(String(to.slice((to.indexOf(",")+1), (to.length))), 10);
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
                lights[i][j] += 1;
            } else if (command === "tof".toLowerCase()) {
                lights[i][j] -= 1;
            } else if (command === "tog".toLowerCase()) {
                lights[i][j] += 2;
            }
        }
    }
    console.log(getTotalBrightness(lights));
}

example1 = 'turn on 0,0 through 0,0';
exampleAll = 'toggle 0,0 through 999,999';

// operate(example1);
// operate(exampleAll);


//  Final Answer - Uncomment below to run the program with the input file.
for (let i = 0; i < INPUT.length; i++) {
    operate(INPUT[i])
}
