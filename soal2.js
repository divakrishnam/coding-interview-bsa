const array3D = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, 12]
]

const array4D = [
  [11, 2, 4, 1],
  [4, 5, 6, 1],
  [10, 8, 12, 1],
  [1, 1, 1, 1]
]

let total = 0

// Cara pertama

// for (let i = 0; i < array4D.length; i++) {
//   let temp = 0
//   for (let j = 0; j < array4D[i].length; j++) {
//     temp += array4D[i][i]
//     break;
//   }
//   total += temp
// }


// for (let i = 0; i < array4D.length; i++) {
//   let temp = 0
//   for (let j = array4D[i].length - 1; j > 0; j--) {
//     temp += array4D[i][j - i]
//     break;
//   }
//   total += temp
// }

// Cara kedua

// for (let i = 0; i < array4D.length; i++) {
//   let temp = 0
//   for (let j = 0; j < array4D[i].length; j++) {
//     temp += array4D[i][i]
//     temp += array4D[i][array4D[i].length - 1 - i]
//     break;
//   }
//   total += temp
// }

// Cara ketiga

for (let i = 0; i < array4D.length; i++) {
  total += array4D[i][(array4D[i].length - 1) - (array4D[i].length - 1 - i)]
  total += array4D[i][(array4D[i].length - 1 - i)]
}

console.log(total)