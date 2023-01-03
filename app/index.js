// NAMED EXPORTS use curly braces
// We need the file extension, '.js', when importing a file
// unless we are using a bundler like Webpack or Vite.
import { isLegal2Drink } from "./lib.js";

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 3,
};

console.log(isLegal2Drink(person));
