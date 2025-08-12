function findLongestWord(sentence) {
  let longestWord = "";
  const words = sentence.split(" ");
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
const sentence = "i am learning programming to became a programmer";
console.log(findLongestWord(sentence));
