// Calculating the avg of odd numbers in an array
function avgOddNumber(numbers) {
  let sum = 0;
  let count = 0;
  for (const number of numbers) {
    if (number % 2 !== 0) {
      sum = sum + number;
      count++;
    }
  }
  const avg = sum / count;
  return avg;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12];
console.log("Average of Odd  Numbers is: ", avgOddNumber(numbers));
