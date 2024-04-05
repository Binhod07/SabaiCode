//* 1

// function greet(name) {
//   return `Hello, ${name} how are you ?`;
// }
// const greeting = greet("Sara");
// console.log(greeting);

//* 2

// const sum = (num1, num2) => num1 + num2;
// const result = sum(5, 2);
// console.log(`The sum is: ${result}`);

//*3

// const average = (numbers) =>
//   numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
// const numbers = [1, 2, 3, 4, 5];
// const avg = average(numbers);
// console.log(` Average number is: ${avg}`);

/*
!  IMPORTANT !

* The reduce method is called on the numbers array.
* sum: Represents the accumulated sum of numbers as we iterate through the array.
* number: Represents the current number being processed in the array during each iteration.
* Initially, sum starts with the initial value of 0. It gets updated with each iteration by adding the current number to it.

*/

//* 4

// const calculateBMI = function (weight, height) {
//   return weight / (height * height);
// };
// const weight = 55;
// const height = 1.67;
// const bmi = calculateBMI(weight, height);
// console.log("Your body mass index :", bmi);

//* 5

// function filterProductsByQuantity(products) {
//   return products.filter(({ quantity }) => quantity > 0);
// }

// const products = [
//   { name: "Mango", price: 5, quantity: 5 },
//   { name: "Grape", price: 15, quantity: 0 },
//   { name: "Banana", price: 10, quantity: 5 },
//   { name: "Apple", price: 25, quantity: 0 },
// ];

// const filteredProducts = filterProductsByQuantity(products);

// filteredProducts.forEach((product) => {
//   console.log(`${product.name}, Price: $${product.price}`);
// });

//* 6

// function isPasswordStrong(password) {
//   return password.length >= 8;
// }
// const userPassword = prompt("Enter your password:");
// const isStrong = isPasswordStrong(userPassword);

// if (isStrong) {
//   alert("Your password is strong!");
// } else {
//   alert(
//     "Your password is not strong! Please make sure it has at least 8 characters."
//   );
// }

//* 7

// function countVowels(str) {
//   str = str.toLowerCase();
//   let count = 0;
//   let vowels = '';

//   // Iterate through each character of the string
//   for (let char of str) {
//     // Check if the character is a vowel
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// const inputString = prompt("Enter a string:");

// // Check the count of vowels in the provided string
// const vowelCount = countVowels(inputString);
// alert(`Number of vowels in the string: ${vowelCount}`);

//* 8

// const sortAscending = (numbers) => numbers.sort((a, b) => a - b);
// const numbers = [10, 8, 9, 5, 6, 3, 1, 2, 0, 4, 7];
// const sortedNumbers = sortAscending(numbers);
// console.log("Sorted numbers:", sortedNumbers);

/*
! Explanation !

* The `sortAscending` function takes an array of numbers (`numbers`) as input.
* Inside the function, we call the sort() method on the array. The sort() method sorts the elements of the array in place and returns the sorted array.
* We provide a comparator function to sort() which compares two elements a and b.
* The comparator function subtracts b from a. If the result is negative, a comes before b in the sorted array, if it's positive, b comes before a, and if it's zero, the order remains unchanged.
* By subtracting b from a, we achieve ascending order.

*/

//* 9 // not understand yet​​ lol

// function median(arr) {
//   let len = arr.length;
//   let mid = Math.floor(len / 2);

//   if (len % 2 != 0) {
//     return arr[mid];
//   } else {
//     return (arr[mid - 1] + arr[mid]) / 2.0;
//   }
// }
// console.log(median([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//* 10

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1; // Factorial of 0 and 1 is 1
//   } else {
//     return n * factorial(n - 1); // Recursive call to calculate factorial
//   }
// }

// // Ask user for input
// const userInput = prompt("Enter a non-negative number:");

// // Convert user input to a number
// const number = parseInt(userInput);

// // Check if input is valid
// if (!isNaN(number) && number >= 0) {
//   // Calculate factorial if input is non-negative
//   const result = factorial(number);
//   alert(`Factorial of ${number} is ${result}`);
// } else {
//   // Display error message for invalid input
//   alert("Invalid input. Please enter a non-negative number.");
// }

/*

* We check if the input is a non-negative number using `isNaN` and `>= 0`.

*/
