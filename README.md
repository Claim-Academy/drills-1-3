# People

---

1. Back in `app/lib.js`, write a new function called `assignOccupation`. It should take in a `person` object and a `string` representing an occupation. It should add a new property to the `person` object called `occupation` and set it to the `string` that was passed in. Use the **spread operator** to avoid mutating the original `person` object.

1. Export this function as a **default export (ESM)**. Import it into `app/index.js` and invoke it with the `person` object you created in step 1 and a string representing your occupation. Log the result to the console.

---

1. Create a new directory inside of `app` called `components`. Inside of this directory, create a file, `Heading.js`. This function should take in two parameters: `firstName` and `lastName`. It should return an HTML string: `<h1>Welcome,` followed by the `firstName` and `lastName` parameters, followed by `</h1>` (e.g. `<h1>Welcome, John Doe</h1>`).

Note that we are not using JSX as this is Node, not React. We are just returning a string of HTML.

Naturally, we want to export this function so that we can import it into `app/index.js`. Export it as a **named export (ESM)**. Then, once again, import it in `app/index.js` and invoke it with the `firstName` and `lastName` properties of the `person` object you created in step 1. Log the result to the console.

---

Create a new file in `app` called `fleet.js`. This file will represent a fleet of cars. Create an **array literal** called `fleet` that contains 3 objects. Each object should represent a car and have the following properties:

- `make`
- `model`
- `year`
- `color`
- `dailyRate`

Export this array as a **default export (ESM)**.

---

Go back to `app/lib.js`. Add some variables in SCREAMING_SNAKE_CASE at the top of the file. These variables should represent the following:

- `TAX_RATE`
- `SERVICE_FEE`

Note that these will not be exported. They are just variables that we will use in our functions within `lib.js`.

Create a new function called `calcRentalCarCost`. This one will be another named export. It will take in three parameters (Hint: Clean Code! Use object destructuring!): `car`, `person`, `days`. It should return the total cost of renting the car for the number of days specified. The total cost should be calculated as follows:

- The daily rate of the car multiplied by the number of days
- Plus the service fee
- Plus the tax rate
- If the person's age is under 25, add an additional $10 per day. Hint: You could create a separate function for this. No need to export it. It would just be called by `calcRentalCarCost`.

Back in `app/index.js`, import the `calcRentalCarCost` function and invoke it with the first car in the `fleet` array, the `person` object, and a number of days. Log the result to the console.
