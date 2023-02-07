import {   v4 as uuidv4} from "uuid";
import faker from 'faker';

export function createDate(dateInfo) {
  const customDate = new Date(dateInfo);
  const date = customDate.getFullYear()+'-'+(customDate.getMonth()+1)+'-'+customDate.getDate();
  return date
}

export const fakeIncome = faker.finance.amount(20000, 100000, 0);
export const fakeDate = faker.date.past();

export const departmentData = [
  {
    // dateRandom:faker.date.past(),
    // date:"Oct",
    date:createDate("2022, 9, 4"),
    Department: "Room",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 9, 4"),
    Department: "Swimming",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 9, 4"),
    Department: "Restaurant",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 9, 4"),
    Department: "Spar",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 9, 4"),
   Department: "Gym",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 9, 4"),
   Department: "Bar",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  

  {
    // date:faker.date.past(),
    date:createDate("2022, 10, 4"),
    Department: "Room",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 10, 4"),
    Department: "Swimming",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 10, 4"),
    Department: "Restaurant",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 10, 4"),
    Department: "Spar",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 10, 4"),
   Department: "Gym",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 10, 4"),
   Department: "Bar",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },

  {
    // date:faker.date.past(),
    date:createDate("2022, 11, 4"),
    Department: "Room",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 11, 4"),
    Department: "Swimming",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 11, 4"),
    Department: "Restaurant",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 11, 4"),
    Department: "Spar",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 11, 4"),
   Department: "Gym",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
  {
    date:createDate("2022, 11, 4"),
   Department: "Bar",
    Income: faker.finance.amount(20000, 100000, 0),
    id: uuidv4(),
  },
];
