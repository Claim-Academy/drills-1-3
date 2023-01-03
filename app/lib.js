/**
 * FUNCTION DECLARATION
 * function isLegal2Drink(person) {
 *  return person.age >= 21;
 * }
 */

// FUNCTION EXPRESSION
// The parameter, 'person', is any object with a property, 'age'.
// We are exporting this out as a named export (ESM).
export const isLegal2Drink = (person) => person.age >= 21;
