console.log("potpourri and madlibs");

//=================================================
// Set Alarm
//=================================================

function setAlarm(employed, vacationing) {
  return employed && !vacationing;
}

console.log(setAlarm(true, true)); // false
console.log(setAlarm(true, false)); // true
console.log(setAlarm(false, true)); // false
console.log(setAlarm(true, false)); // true

//=================================================
// Odd Numbers
//=================================================

// define a function of oddNumCount with a argument of number

// we define a function oddNumCount with a argument of num
const oddNumCount = (num) => {
  //we declare a count variable that will store how many odd numbers later on
  let count = 0;
  console.log(count);
  // we loop through the num we decare when invoking the function
  for (let i = 0; i < num; i++) {
    // if the initial value of i (0) modulo 2 is not equal to 0 it is odd
    if (i % 2 !== 0) {
      // we add one to the count for each odd number
      count = count + 1;
    }
  }
  // we return count
  return count;
};

console.log(oddNumCount(7)); // will log 3 -> [1,3,5] = 3

//=================================================
// Disemvoweling Trolls
//=================================================

// Define a function trollsBegone with a argument of string passed in
const trollsBegone = (str) => {
  // Declare a new variable that will replace and remove all the vowels in the string
  let newStr = str.replace(/[aeiou]/gi, "");
  // Return the new string
  return newStr;
};

console.log(trollsBegone("You guys are losers, your website sucks LOL")); // prints 'y gys r lsrs, yr wbst scks ll'
console.log(trollsBegone("Can you bring me a can of soda?")); // prints 'cn y brng m  cn f sd?'

//=================================================
// Bank Account Summary
//=================================================

// Declare an object of bankInfo
let bankInfo = {
  savings: 70,
  checking: -193,
  moneyMarket: 200,
  creditCard: -1200,
};

// declare a variable that stores the key values in one
let summary = 0;

// define a function that creates a summary of all the key values added into one
function bankAccountSummary() {
  for (let balances in bankInfo) {
    summary += bankInfo[balances];
  }
  return summary;
}

// declare a variable that stores the sum of all the object values
let bankTotal = bankAccountSummary(summary);

// define a function that determines if the value of the bank info is less than zero
function inTheRed() {
  if (bankTotal < 0) {
    return true;
  } else {
    return false;
  }
}
console.log(inTheRed());

// rest of homework in mad-libs directory