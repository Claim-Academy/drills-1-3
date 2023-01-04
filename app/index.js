// NAMED EXPORTS use curly braces
// We need the file extension, '.js', when importing a file
// unless we are using a bundler like Webpack or Vite.
import { isLegal2Drink } from "./lib.js";

const persons = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 3,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    firstName: "Jack",
    lastName: "Doe",
    age: 35,
  },
];

console.log(isLegal2Drink(persons[1]));

const legalDrinkers = persons.map(isLegal2Drink);
