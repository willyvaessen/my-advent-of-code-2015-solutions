// const input = [
//   'turn on 489,959 through 759,964',
//   'turn off 820,516 through 871,914',
//   'turn off 427,423 through 929,502',
//   'turn on 774,14 through 977,877',
//   'turn on 410,146 through 864,337',
//   'turn on 931,331 through 939,812',
//   'turn off 756,53 through 923,339'
// ];
const fs = require('fs');
const INPUT = fs.readFileSync('./Day6_Input', 'utf-8').split('\n');


// Initialize a 2D array representing lights
const lights = Array.from({ length: 1000 }, () => Array(1000).fill(0));

// Process each operation from the input
INPUT.forEach(operation => {
  const [, command, fromX, fromY, toX, toY] = operation.match(/(turn on|turn off) (\d+),(\d+) through (\d+),(\d+)/);

  for (let i = +fromX; i <= +toX; i++) {
    for (let j = +fromY; j <= +toY; j++) {
      if (command === 'turn on') {
        lights[i][j] = 1;
      } else if (command === 'turn off') {
        lights[i][j] = 0;
      }
    }
  }
});

// Count the overlapping lights
const overlappingLights = lights.reduce((count, row) => count + row.reduce((acc, light) => acc + light, 0), 0);

console.log('Number of overlapping lights:', overlappingLights);
