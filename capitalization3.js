/* const capitalization = "nirajan";

const parFirst = capitalization.substring(0, capitalization.indexOf("j"));
const parSec = capitalization
  .substring(capitalization.indexOf("j"), capitalization.lastIndexOf("j") + 2)
  .toUpperCase();

const parLast = capitalization.substring(capitalization.indexOf("j") + 2);
const parNewName = parFirst + parSec + parLast;
console.log(parFirst);
console.log(parSec);
console.log(parLast);
console.log(parNewName);

const name3 = "jaMes";
const correctName = name3[0].toUpperCase() + name3.substring(1).toLowerCase();
console.log(correctName);
 */
"use strict";
document.addEventListener("DOMContentLoaded", capitalize);
const str1 = "harry";
capitalize(str1);
function capitalize(str) {
  console.log(capitalize);

  const capiF = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  console.log(capiF);
}
