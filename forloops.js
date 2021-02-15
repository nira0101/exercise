"use strict";

let num;
let numDec;
let numOdd;
let numDob;
let numThree;
let numSub;
//add
console.log("add");
for (num = 1; num < 11; num++) {
  console.log(num);
}
//subtract
console.log("subtract");
for (numDec = 10; numDec > 0; numDec--) {
  console.log(numDec);
}
console.log(`liftoff:${numDec}`);

//odd number
console.log("odd");
for (numOdd = 1; numOdd < 20; numOdd += 2) {
  console.log(numOdd);
}

//double
console.log("double");
for (numDob = 1; numDob < 16777216; numDob *= 2) {
  console.log(numDob);
}

//add 3
console.log("add3");
for (numThree = 111; numThree < 139; numThree += 3) {
  console.log(numThree);
}

//subtarct 10
console.log("subtract10");
for (numSub = 100; numSub > 0; numSub -= 10) {
  console.log(numSub);
}
