//* 1

// for (let i = 1; i <= 10; i++) {
//   console.log("i" + i);
// }

//* 2

// for (let i = 10; i >= 1; i--) {
//   console.log("i" + i);
// }

//* 3

// function numericalToLetterGrade(grade) {
//   let letterGrade;
//   if (isNaN(grade) || grade < 0 || grade > 100) {
//     letterGrade = "Invalid grade";
//   } else if (grade >= 90) {
//     letterGrade = "A";
//   } else if (grade >= 80) {
//     letterGrade = "B";
//   } else if (grade >= 70) {
//     letterGrade = "C";
//   } else if (grade >= 60) {
//     letterGrade = "D";
//   } else if (grade >= 50) {
//     letterGrade = "E";
//   } else {
//     letterGrade = "F";
//   }
//   return letterGrade;
// }

// var numericalGrade = prompt("Enter your numerical grade:");
// var letterGrade = numericalToLetterGrade(parseInt(numericalGrade));
// alert("Your letter grade is: " + letterGrade);

//* 4

// let employees = ["Lara", "Evee", "Simi"];
// let salary = [1000, 2000, 120.9];

// for (let i = 0; i < employees.length; i++) {
//   console.log(`${employees[i]}: $${salary[i]}`);
// }

//* 5

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//* 6

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const { evenCount, oddCount } = numbers.reduce(
//   (counts, number) => {
//     const type = number % 2 === 0 ? "even" : "odd";
//     console.log(`${number} is an ${type} number`);
//     counts[type + "Count"]++;
//     return counts;
//   },
//   { evenCount: 0, oddCount: 0 }
// );

// console.log(`Total even numbers: ${evenCount}`);
// console.log(`Total odd numbers: ${oddCount}`);

//* 7

// for (let i = 1; i <= 100; i++) {
//   const fizz = i % 3 === 0,
//     buzz = i % 5 === 0;
//   console.log(fizz ? (buzz ? "FizzBuzz" : "Fizz") : buzz ? "Buzz" : i);
// }

//* 8

// function SumAllNumber(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// let numbers = [1, 2, 3, 4, 5];
// let totalSum = SumAllNumber(numbers);
// console.log("The sum of the numbers is: " + totalSum);

//* 9

// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

//* 10

// function findLargestNumber(arr) {
//   if (arr.length === 0) {
//     return "Array is empty";
//   }

//   return Math.max(...arr);
// }

// const numbers = [3, 7, 2, 10, 5];
// const largestNumber = findLargestNumber(numbers);
// console.log("The largest number is:", largestNumber);
