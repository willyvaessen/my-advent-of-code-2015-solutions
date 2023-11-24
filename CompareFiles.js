const fs = require('fs');
const INPUT_WRONG = fs.readFileSync('./niceStringsOutput_wrong_solution.txt', 'utf-8').split('\n');
const INPUT_RIGHT = fs.readFileSync('./niceStringsOutput_right_solution.txt', 'utf-8').split('\n');

console.log(INPUT_WRONG.length);
console.log(INPUT_RIGHT.length);
// Find the lines present in the second file but not in the first file
const extraLines = [];
for (let i = INPUT_WRONG.length; i < INPUT_RIGHT.length; i++) {
  extraLines.push({
    line: i + 1,
    file2: INPUT_RIGHT[i],
  });
}

// Output the extra lines
// console.log('Lines present in', INPUT_RIGHT, 'but not in', INPUT_WRONG + ':');
extraLines.forEach(extraLine => {
  console.log(`Line ${extraLine.line}: ${extraLine.file2}`);
  console.log('---');
});

console.log(extraLines);
