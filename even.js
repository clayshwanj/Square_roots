const numbers = [4, 9, 16, 25, 36, 49];

function calculateSquareRoots(numbers) {
  // Filter the array to include only even numbers
  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  // Calculate the square roots of the even numbers
  const squareRoots = evenNumbers.map(Math.sqrt);

  // Print each even number and its square root in the specified format
  squareRoots.forEach((sqrt, index) => {
    console.log(`${evenNumbers[index]}: ${sqrt}`);
  });

  // Return the array of square roots of the even numbers
  return squareRoots;
}

const squareRoots = calculateSquareRoots(numbers);
