//* 1

const colors = ["Red", "Blue", "Green"];
const [firstColor, , thirdColor] = colors;
// console.log(`${firstColor}, ${thirdColor}`);

//* 2

const person = { name: "Alice", age: 25, job: "Developer" };
const { name, age } = person;
// console.log(`My name is ${name} and ${age} years old`);

//* 3

const user = {
  id: 1,
  name: "Sok",
  address: {
    street: "123 Main St",
    city: "PP",
  },
};
const {
  address: { street, city },
} = user;
// console.log(`User lives at ${street} in ${city}.`);

//* 4

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const mergedArray = [...nums1, ...nums2];
// console.log(mergedArray);

//* 5

function sumAll(...args) {
  return args.reduce((sum, num) => sum + num, 0);
}

// console.log(sumAll(1, 2));
// console.log(sumAll(1, 2, 3, 4, 5));

//* 6

const points = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
];
const [firstPoint, ...otherPoints] = points;

// console.log(firstPoint);
// console.log(otherPoints);

//* 7

function filterProps(obj, ...propsToFilter) {
  const filteredObj = {};
  for (let prop in obj) {
    if (!propsToFilter.includes(prop)) {
      filteredObj[prop] = obj[prop];
    }
  }
  return filteredObj;
}

const object = { a: 1, b: 2, c: 3, d: 4 };
// console.log(filterProps(object, "b", "d"));
