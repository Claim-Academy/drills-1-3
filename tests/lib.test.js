// '../' means go up one directory
import { expect, it } from "vitest";
import { isLegal2Drink } from "../app/lib.js";

it("returns true if person is 21 or older", () => {
  // Arrange
  const input = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
  };
  const expected = true;

  // Act
  const actual = isLegal2Drink(input);

  // Assert
  expect(actual).toBe(expected);
});

it("returns false if person is under 21", () => {
  // Arrange
  const input = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
  };
  const expected = false;

  // Act
  const actual = isLegal2Drink(input);

  // Assert
  expect(actual).toBe(expected);
});
