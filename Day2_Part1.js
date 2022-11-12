// --- Day 2: I Was Told There Would Be No Math ---
//
// The elves are running low on wrapping paper, and so they need to submit an order for more. They have a list of the dimensions (length l, width w, and height h) of each present, and only want to order exactly as much as they need.
//
//     Fortunately, every present is a box (a perfect right rectangular prism), which makes calculating the required wrapping paper for each gift a little easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. The elves also need a little extra paper for each present: the area of the smallest side.
//
//     For example:
//
//     A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
//     A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.
//     All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?

// First, let's create an object with the dimensions of all those presents. These are now stored in the Day2_Input file as 29x13x26.
// Every line represents a present, with its length, width and height properties:

const presents = [
    {
        l: 2,
        w: 3,
        h: 4,
    },
    {
        l: 1,
        w: 1,
        h: 10,
    },
    {
        l: 29,
        w: 13,
        h: 26,
    },
    {
        l: 11,
        w: 11,
        h: 14,
    },
    {
        l: 27,
        w: 2,
        h: 5,
    },
    {
        l: 6,
        w: 10,
        h: 13,
    }]

//  A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper
//  plus 6 square feet of slack, for a total of 58 square feet.
//  With this information we can create a formula, that calculates the wrapping paper needed.
//  But first, we're building a loop to iterate through the array.
//  Create an empty array for the
let paperNeededArray = [];

for (let i=0; i < presents.length; i++){
//  Let's declare some variables for the sides, by multiplying their values.

let sideOneArea = presents[i].l * presents[i].w;
// console.log(sideOneArea);
let sideTwoArea = presents[i].w * presents[i].h;
// console.log(sideTwoArea);
let sideThreeArea = presents[i].l * presents[i].h;
// console.log(sideThreeArea);

//  Each of these values are multiplied by 2 (since we have six sides (3 equal pairs) so:

let slackPaper = presents[i].l * presents[i].w;
// console.log(slackPaper);
//  2 * length * width, 2 * width * height and 2 * length * height

let paperNeeded = (2 * sideOneArea) + (2 * sideTwoArea) + (2 * sideThreeArea) + slackPaper;
// console.log(paperNeeded);
paperNeededArray.push(paperNeeded);
    // console.log(paperNeededArray);
}
//  Now that we have an array with all the paper needed, PER present, it's time to add all those numbers together.
console.log("We are now going to find a wat to add all numbers in the array, to get a grand total.");
//  Let's see if I can do that with a For .. loop as well.
let result = 0;
for (let i=0; i < paperNeededArray.length; i++) {
    result = result + paperNeededArray[i];
}
console.log("The total amount of wrapping paper needed is: " + result + " square feet.");