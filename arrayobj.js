/* let person1 = {
  firstName: "peter",
  Age: 29,
  student: false,
};

person1.lastName = "lind";
delete person1.lastName;

console.log(
  person1.firstName + person1.lastName + person1.Age + person1.student
);
 */

/* const person1 = {
  firstName: "peter",
  Age: 29,
  student: false,
};
person1.Age++;
console.log(person1);
 */
/* const person2 = {
  firstName: "_your name_",
  Age: 23,
  student: true,
};

person1 = person2; */

/* const person2 = person1;
person2.firstName = "other peter";
console.log(person1.firstName); */

let person1 = {
  firstName: "peter",
  Age: 29,
  student: false,
};

let person2 = {
  firstName: " other peter",
  Age: 26,
  student: false,
};

let person3 = person1;

person3.firstName = "changed";
person1 = person3;
console.log(person1.firstName);

person2.firstName = "also changed";
person3 = person2;

const student1 = {
  firstName: "harry",
  laastName: "potter",
};
const student2 = {
  firstName: "harry",
  laastName: "potter",
};

student1.firstName = "potty";
student1.firstName = student2.firstName;
student1.laastName = student2.laastName;
console.log(student1);
console.log(student2);
/* const student2 = student1;
console.log(student2); */

if (student1 == student2) {
  console.log("they are");
} else {
  console.log("they are not");
}
