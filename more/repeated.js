function countOccurrences(numbers, find) {
  let count = 0;
  for (const number of numbers) {
    if (number === find) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const find = 25;

console.log(countOccurrences(numbers, find));
