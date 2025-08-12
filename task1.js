// convert inch to feet
function inchToFeet(inch) {
  const feetFraction = inch / 12;
  const feet = parseInt(feetFraction);
  const inchValue = inch % 12;
  return feet + " Feet " + inchValue + " Inch.";
}
const inch = 76;
const convert = inchToFeet(inch);
console.log(convert);
