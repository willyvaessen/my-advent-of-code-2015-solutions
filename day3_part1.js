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
const input = "^>v<";
const houses = new Set();
const directions = input.split('');
let horizontal = 0;
let vertical = 0;
let house = horizontal + "x" + vertical;


//  Starting delivery
//  First house is at 0x0
horizontal = 0;
vertical = 0;
houses.add(house);
console.log(houses);

//  Next stop:
console.log(directions[0]);
horizontal += 1;
console.log(horizontal);
console.log(vertical);
house = horizontal + "x" + vertical;
console.log("Next house is: " + house);
houses.add(house);

//  Next stop:
console.log(directions[1]);
vertical += 1;
console.log(horizontal);
console.log(vertical);
house = horizontal + "x" + vertical;
console.log("Next house is: " + house);
houses.add(house);

//  Next stop:
console.log(directions[2]);
horizontal -= 1;
console.log(horizontal);
console.log(vertical);
house = horizontal + "x" + vertical;
console.log("Next house is: " + house);
houses.add(house);

//  Next stop:
console.log(directions[3]);
vertical -= 1;
console.log(horizontal);
console.log(vertical);
house = horizontal + "x" + vertical;
console.log("Next house is: " + house);
houses.add(house);
//
console.log(houses);
console.log("Total houses visited is: " + houses.size)
//
//

// console.log(directions);
// houses.add("0x0");
// console.log(houses);
// houses.add("1x0");
// console.log(houses);
// houses.add("1x1");
// console.log(houses);
// houses.add("0x1");
// console.log(houses);
// houses.add("0x0");
// console.log(houses);
// houses.add("1x0");
// console.log(houses);
// houses.add("1x1");
// console.log(houses);
// console.log(houses.size);