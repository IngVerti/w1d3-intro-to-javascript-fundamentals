// if () {
//   //run this code if it's true
//   console.log("true statement");
// }

// console.log("outside of the if statement");
const position = 2;
const runner = "john";
let medal;

if (position === 1) {
  console.log("Gold");
} else if (position === 2) {
  medal = "Silver";
} else if (position === 2) {
  medal = "Silver";
} else {
  medal = "Bronze";
}

// console.log(runner + " received a " + medal + " medal.");

if (true && true) {
  console.log("hey im printed");
}

if (false || false) {
  console.log("hey im printed");
}

if (!false) {
  console.log("this is true");
} else {
  console.log("this is false");
}

//if/else syntax
//if(condition){ true }else{ false }

//ternary operator syntax
// condition ? true : false

const myNumber = 1

myNumber > 5 ?
  console.log("number is greater than 5")
  :
  console.log("number is lesser than 5")


//switch statement

const medal1 = "qweqweqweqweqew";

switch (medal1) {
  case "Silver":
    console.log("Silver medal");
    break;
  case "Bronze":
    console.log("Bronze medal");
    break;
  case "Gold":
    console.log("Gold medal");
    break;
  default:
    console.log("No medal");
}
