//Destructuring : --------------------
// is creating variables from nested properties in objects or elements in arrays
const person = {
  name: "ali",
  age: 22,
  city: "Kabul",
};

// one way of retrieving of a property of an obj
const personName = person.name;
const personAge = person.age;

// destructuring way:
const { pName, pAge } = person;

console.log(pName);
console.log(pAge);
