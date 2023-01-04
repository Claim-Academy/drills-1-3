const TAX_RATE = 0.08;
const SERVICE_FEE = 24.99;

export const addOccupation = (person, occupation) => ({
  ...person,
  occupation,
});

export const isLegal2Drink = (person) => person.age >= 21;
