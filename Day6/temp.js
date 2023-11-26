function createGridOfLights(rows, cols) {
    const lights = [];
    let status = 0;
    for (let i = 0; i < rows; i++) {
        lights[i] = [];
        for (let j = 0; j < cols; j++) {
            lights[i][j] = status;
        }
    }
    return lights;
}
let totalBrightness = 0;
const x3Grid = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]


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



totalBrightness = getTotalBrightness(x3Grid);
console.log("Total brightness is: " + totalBrightness);