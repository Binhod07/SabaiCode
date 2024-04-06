//* 1

// function square(num) {
//   return num ** 2;
// }

// function processArray(arr, callback) {
//   return arr.map(callback);
// }

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = processArray(numbers, square);
// console.log(squaredNumbers);

//* 2

// function isEven(num) {
//   return num % 2 === 0;
// }

// function filterArray(arr, callback) {
//   const filteredArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       filteredArray.push(arr[i]);
//     }
//   }
//   return filteredArray;
// }

// const numbers = [1, 2, 3, 5, 4, 6, 7, 9, 8, 10];
// const evenNumbers = filterArray(numbers, isEven);
// console.log(evenNumbers);

//* 3

// const fs = require("fs");

// function readFileContents(filePath, callback) {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       callback(err); // Pass error to callback if there is one
//       return;
//     }
//     callback(null, data); // Pass file contents to callback
//   });
// }

// const filePath = "start.txt"; // Path to the file you want to read
// readFileContents(filePath, (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File contents:", data);
// });

//*  4
// const fs = require("fs");

// function writeFileContents(filePath, fileContents, callback) {
//   fs.writeFile(filePath, fileContents, (err) => {
//     if (err) {
//       callback(err); // Pass error to callback if there is one
//       return;
//     }
//     callback(null); // Indicate successful write by passing null to callback
//   });
// }

// const filePath = "end.txt"; // Path to the file you want to write
// const fileContents = "This is the content of the file.";
// writeFileContents(filePath, fileContents, (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//     return;
//   }
//   console.log("File has been written successfully.");
// });

//* 5

const fs = require("fs");

// Function to read file contents
function readFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
}

// Function to write file contents
function writeFile(filePath, fileContents, callback) {
  fs.writeFile(filePath, fileContents, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
}

// Read input.txt, append "First modification" to the content, and write it to output1.txt
readFile("input.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const modifiedContent = data + "First modification\n";
  writeFile("output1.txt", modifiedContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    console.log("First modification done.");

    // Read output1.txt, append "Second modification" to the content, and write it to output2.txt
    readFile("output1.txt", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }

      const modifiedContent2 = data + "Second modification\n";
      writeFile("output2.txt", modifiedContent2, (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }

        console.log("Second modification done.");

        // Read output2.txt and print its content to the console
        readFile("output2.txt", (err, data) => {
          if (err) {
            console.error("Error reading file:", err);
            return;
          }

          console.log("Content of output2.txt:\n", data);
        });
      });
    });
  });
});
