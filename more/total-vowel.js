function totalVowel(str) {
  const vowel = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("The total vowel in this string is: ", totalVowel("Rahat Alam "));
