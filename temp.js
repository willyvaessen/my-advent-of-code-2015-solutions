// const lights = [['OFF', 'ON', 'OFF'], ['OFF', 'OFF', 'OFF'], ['OFF', 'OFF', 'OFF']]
const lights = [
  [ 'OFF', 'OFF', 'OFF' ],
  [ 'OFF', 'OFF', 'OFF' ],
  [ 'OFF', 'OFF', 'OFF' ]
]


function count (lights) {
  return lights.reduce((acc, arr) => {
      for (const item of arr) {
	  acc[item] = acc[item] !== undefined ? acc[item] + 1 : 1
      }

      return acc
  }, {})
}

console.log(count(lights))