/* CLASS EXAMPLES
- Deifine a number
- Get the square root of the number and round to 3 digits after comma
- Output with console.log()
*/

let firstNumber = 2.344
alert(Math.round(firstNumber));

// Console the square of a  number
let myNumber = 5.233;
let sqrtOfNumber = Math.sqrt(myNumber);
let roundedNumber = sqrtOfNumber.toFixed(3) 
console.log("The square of", myNumber, "is", sqrtOfNumber);
console.log("The roundded number is: ", roundedNumber);


// console.log(Math.sqrt(myNumber).toFixed(3))

// Excercise
/**
 * Get the distance between two points
 * Use the Math function for sqrt and power
 * Output with console.log
 * Round to 1 digit and check with different points
 */