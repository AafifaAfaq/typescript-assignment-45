"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let person1 = "Aafifa";
let person2 = "Alina";
let num1 = 6;
let num2 = 8;
let price = [10, 20, 30, 40, 50];
// • Tests for equality and inequality with strings
console.log(person1 == person2); // returns false
console.log(person1 == "Aafifa"); // returns true
// • Tests using the lower case function
console.log(person1.toLowerCase() == "aafifa"); // returns true
console.log(person2.toLowerCase() !== "alina"); // returns false
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(num1 == num2); // returns false
console.log(num1 != num2); // returns true
console.log(num1 > num2); // returns false
console.log(num1 < num2); // returns true
console.log(num1 >= num2); // returns false
// • Tests using "and" and "or" operators
console.log(num1 == num2 && num1 > num2); // returns false
console.log(num1 == num2 || num1 > num2); // returns true
console.log(num1 == num2 && num1 < num2); // returns false
console.log(num1 == num2 || num1 < num2); // returns true
console.log(num1 == num2 && num1 >= num2); // returns false
// • Test whether an item is in a array
console.log(price.includes(10)); // returns true
console.log(price.includes(60)); // returns false
// • Test whether an item is not in a array
console.log(price.includes(60)); // returns false
console.log(price.includes(10)); // returns true
console.log(price.includes(100)); // returns false
