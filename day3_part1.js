/*  --- Day 3: Perfectly Spherical Houses in a Vacuum ---
Santa is delivering presents to an infinite two-dimensional grid of houses.

He begins by delivering a present to the house at his starting location, and
then an elf at the North Pole calls him via radio and tells him where to move next.
Moves are always exactly one house to the north (^), south (v), east (>), or west (<).
After each move, he delivers another present to the house at his new location.

However, the elf back at the north pole has had a little too much eggnog, and so his
directions are a little off, and Santa ends up visiting some houses more than once.
How many houses receive at least one present?

For example:

    > delivers presents to 2 houses: one at the starting location, and one to the east.
    ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
    ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.
 */

const input = "^v^v^v^v^v";
const houses = [
    [0,0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6]];

// console.log(input.length);
// console.log(houses);

let current_house = houses[0];
// let house_horizontal = houses[0, 0];
// let house_vertical = houses[0, 1];
console.log(houses[4][1]);


// for (i = 0; i < input.length; i++) {
//
//     console.log("Current house horizontal coordinate is " + house_horizontal + " and vertical coordinate is " + house_vertical);
//     console.log(current_house);
    // if (input[i] === "^") {
    //     houses.push(houses[i][])
    //     console.log("Leaving from house " + houses[i]);
    //     console.log("Moving NORTH to house " + houses[i]);
    //     console.log(houses[i])
    // }
    // else if (input[i] === "v") {
    //     console.log("Leaving from house " + houses[i]);
    //     console.log("Moving SOUTH");
    // } else if (input[i] === ">") {
    //     console.log("Leaving from house " + houses[i]);
    //     console.log("Moving EAST");
    // } else if (input[i] === "<") {
    //     console.log("Leaving from house " + houses[i]);
    //     console.log("Moving WEST");
    // } else {
    //     console.log("Weird input, not sure what to do.")
    // }
// }