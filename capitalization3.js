const capitalization = "nirajan";

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
