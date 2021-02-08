"use strict";
const naame = "Peter Heronimous Lind";
const initialName = naame.substring(0, naame.indexOf(" "));
const middleName = naame.substring(naame.indexOf(" "), naame.lastIndexOf(" "));
const lastName = naame.substring(naame.lastIndexOf(" "), naame.length);
console.log(`the first name is ${initialName}`);
console.log(`the middle name is ${middleName}`);
console.log(`the middle name is ${lastName}`);

const naame2 = "Albus Percival Wulfric Brian Dumbledore";
const initialName2 = naame2.substring(0, naame2.indexOf(" "));
const middleName2 = naame2.substring(
  naame2.indexOf(" "),
  naame2.lastIndexOf(" Dumbledore")
);
const lastName2 = naame2.substring(naame2.lastIndexOf(" "));

console.log(initialName2);
console.log(middleName2);
console.log(lastName2);
