const numbers = [4, 9, 16, 25, 36, 49];

function calculateSquareRoots(numbers) {
  // Calculate the square roots
  // The 'map()' method will call `Math.sqrt` on each element of the (numbers) array.
  const squareRoots = numbers.map(Math.sqrt);

  // Print each number and its square root in the specified format
  //'sqrt' represents the current element in the squareRoots array.
  //' index' represents the index of the current element in the (squareR oots) array.
  squareRoots.forEach((sqrt, index) => {
    //${numbers[index]} gets the value from the (numbers) array at the current 'index'.
    //${sqrt} an expression that represents the current element (square root) in the squareRoots array.
    console.log(`${numbers[index]}: ${sqrt}`);
  });

  // Return the array of square roots
  return squareRoots;
}
const squareRoots = calculateSquareRoots(numbers);

// Alternatively;
// function calculateSquareRootsForLoop(numbers) {
//   an empty array
//   const squareRoots = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const sqrt = Math.sqrt(numbers[i]);
//     The push() method adds new items to the end of an array returning the new length of the array.
//     squareRoots.push(sqrt);
//     console.log(`${numbers[i]}: ${sqrt}`);
//   }
//   return squareRoots;
// }

// const numbers = [4, 9, 16, 25];
// const squareRoots = calculateSquareRootsForLoop(numbers);
