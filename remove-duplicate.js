// Removing duplicate item from an array
function removeDuplicate(arrays) {
  let unique = [];
  for (const array of arrays) {
    if (unique.includes(array) === false) {
      unique.push(array);
    }
  }
  return unique;
}
const arrays = ["Rahat", "Rahat", "Rahat", "alam", "alam"];
console.log(removeDuplicate(arrays));
