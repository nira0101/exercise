"use strict";

const longLine = "this  is a very vey very very long \
line";

/* const name = "peter";
const called = "Mandu";

console.log(
  "hello my name is " + name + ", \n i have a cat called " + called + " "
); */

/* const theName = "sammmmmmm";
const len = theName.length;
console.log(" " + theName + " is " + len + " characters long ");
 */

const newName = "Alvus Pervical wulfris Dumbledore";
const total = newName.length;
const chrac2 = newName[2];
const charc6 = newName[6];
const charc23 = newName[23];

//character of index//
console.log(`the length of the character is ${total}`);
console.log(`the  charcter 0f index 2 is ${chrac2}`);
console.log(`the  charcter of index 6 is ${charc6}`);
console.log(`the  charcter of index 6 is ${charc23}`);

//index of character//
console.log(newName.indexOf("D"));
console.log(newName.lastIndexOf("e"));

//space of charcter//
const str1 = " there is  space here \n ";
const str2 = str1.trim();
console.log(str2);

//substring//
const firstName = newName.substring(0, 5);
const midNamr = newName.substring(23);
const wulf = newName.substring(15, 22);
const wu = newName.substring(14, 23);
const ris = newName.substring(19, 23);
const vus = newName.substring(2, 5);

console.log(`first name: ${firstName}`);
console.log(midNamr);
console.log(wulf);
console.log(wu);
console.log(ris);
console.log(vus);


//8 feb