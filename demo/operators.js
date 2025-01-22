var num1 = 5;
var num2 = "5";

//arithmetic operators
console.log(num1 + num2); //addition
console.log(num1 - num2); //subtraction
console.log(num1 * num2); //multiplication
console.log(num1 / num2); //division
console.log(num1 % num2); //modulus
console.log(num1 ** num2); //exponentiation

console.log("=====================");

//Assignment operators
var num3 = 4

console.log("num3", num3);
num3 += 5; // num3 = num3 + 5
console.log("num3", num3);
num3 -= 5; // num3 = num3 - 5
console.log("num3", num3);
num3 *= 5; // num3 = num3 * 5
console.log("num3", num3);
num3 /= 5; // num3 = num3 / 5
console.log("num3", num3);
num3 %= 5; // num3 = num3 % 5
console.log("num3", num3);
num3 **= 5; // num3 = num3 ** 5

console.log("=====================");

//Comparison operators
console.log(num1 == num2); //equal to
console.log(num1 != num2); //not equal to ! = = <--- no spaces please
console.log("strict equal to: ", num1 === num2); //strict equal to
console.log("strict not equal to: ", num1 !== num2); //strict not equal to
console.log(num1 > num2); //greater than
console.log(num1 < num2); //less than
console.log(num1 >= num2); //greater than or equal to
console.log(num1 <= num2); //less than or equal to

console.log("=====================");
//Logical operators
console.log(true && true); //and
console.log(true || false); //or
console.log(!true); //not

console.log("=====================");
//Increment and Decrement operators
var num4 = 10;
num4++; //post increment (num4 = num4 + 1)
console.log(num4);
++num4; //pre increment
console.log(num4);
num4--; //post decrement (num4 = num4 - 1)
console.log(num4);
--num4; //pre decrement

let x = 5;
console.log("value of x: ", x);
console.log("value of x: ", x++);
console.log("value of x: ", x);

