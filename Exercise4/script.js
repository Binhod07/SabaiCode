// //* 1

const filterAdults = (students) =>
  students.filter((students) => students.age > 18);

const students = [
  { name: "Virak", age: 22 },
  { name: "Bunthorn", age: 22 },
  { name: "Bonath", age: 24 },
  { name: "Chamnas", age: 17 },
];

const adultsList = filterAdults(students);
// console.log(adultsList);

//* 2

const numbers = [1, 1, 2, 2, 3, 3, 5, 5, 4, 7, 8, 9, 7, 6];

const uniqueNumbers = numbers
  .filter((value, index, array) => array.indexOf(value) === index)
  .sort((a, b) => a - b);

// console.log(uniqueNumbers);

//* 3
// Define the constructor function for User objects
function User(name, age) {
  this.name = name;
  this.age = age;
}

// Create user objects
const users = [
  new User("Virak", 22),
  new User("Bunthorn", 23),
  new User("Bonath", 25),
];

// Use map method to extract just the names
const names = users.map((user) => user.name);

// console.log(names);

//* 4
const dateArray = ["2024-01-01", "2024-02-02", "2024-04-04"];

const transformDateFormat = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};

const transformedArray = dateArray.map(transformDateFormat);

// console.log(transformedArray);

//* 5
const numbers2 = [10, 5, 8, 20, 3];

const maxNumber = numbers2.reduce((max, current) => {
  return Math.max(max, current);
}, numbers2[0]);

// console.log(maxNumber);

//* 6
const items = [
  { name: "Bread", category: "Grocery" },
  { name: "Butter", category: "Grocery" },
  { name: "Shampoo", category: "Personal Care" },
];

const groupedItems = items.reduce((acc, item) => {
  const { name, category } = item;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(name);
  return acc;
}, {});

// console.log(groupedItems);
