function getRandomNumber(max, min) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}
const randomNumber = getRandomNumber(20, 10);
console.log(randomNumber);
