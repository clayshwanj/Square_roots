function filterSquareRoots(numbers, x) {
  // Filter the numbers array to include only those numbers whose square roots are greater than x
  const result = numbers.filter((num) => Math.sqrt(num) > x);
  // Map the filtered numbers to their square roots
  return result.map((num) => Math.sqrt(num));
}

const numbers = [4, 9, 16, 25, 36, 49, 64];
const x = 3;
const result = filterSquareRoots(numbers, x);
console.log(result);
