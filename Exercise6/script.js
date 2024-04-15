//! 1

// create users data
const mockDatabase = [
  { id: 1, name: "sok" },
  { id: 2, name: "sao" },
  { id: 3, name: "pisey" },
];

// Function to get user info by id
function getUserInfoById(id, callback) {
  setTimeout(() => {
    const user = mockDatabase.find((user) => user.id === id);
    if (user) {
      callback(null, user);
    } else {
      callback("User not found");
    }
  }, 2000);
}

// Function to process user data by capitalizing the name
function processUserData(user, callback) {
  setTimeout(() => {
    user.name = user.name.toUpperCase();
    callback(null, user);
  }, 1500);
}

// Execute and process
function executeAndProcess() {
  const userId = parseInt(prompt("Enter user ID:"));

  if (!isNaN(userId)) {
    getUserInfoById(userId, (error, user) => {
      if (error) {
        console.error(error);
      } else {
        processUserData(user, (error, processedUser) => {
          if (error) {
            console.error(error);
          } else {
            console.log("Processed user data:", processedUser);
          }
        });
      }
    });
  } else {
    console.error("Invalid user ID");
  }
}
// executeAndProcess();

//! 2

// Read

// const fs = require("fs").promises;
// function readFileContents(filePath) {
//   return fs
//     .readFile(filePath, "utf8")
//     .then((data) => Promise.resolve(data))
//     .catch((error) => Promise.reject(error));
// }

// const filePath = "read.txt";
// readFileContents(filePath)
//   .then((data) => console.log("File contents:", data))
//   .catch((error) => console.error("Error reading file:", error));

// Write

// const fs = require("fs").promises;

// function writeFileContents(filePath, data) {
//   return fs
//     .writeFile(filePath, data, "utf8")
//     .then(() => Promise.resolve())
//     .catch((error) => Promise.reject(error));
// }

// const filePath = "write.txt";
// const fileData = "This is the data to write into the file.";

// writeFileContents(filePath, fileData)
//   .then(() => console.log("File has been successfully written."))
//   .catch((error) => console.error("Error writing file:", error));

//! 3

// Read  and Write

// const fs = require("fs").promises;

// Function to read file contents
// function readFileContents(filePath) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fs.readFile(filePath, "utf8")
//         .then((data) => {
//           console.log(`Reading ${filePath}...`);
//           resolve(data);
//         })
//         .catch((error) => reject(error));
//     }, 2000);
//   });
// }

// Function to write data to a file
// function writeFileContents(filePath, data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fs.writeFile(filePath, data, "utf8")
//         .then(() => {
//           console.log(`Writing to ${filePath}...`);
//           resolve();
//         })
//         .catch((error) => reject(error));
//     }, 2000);
//   });
// }

// readFileContents("read.txt")
//   .then((data) => {
//     const modifiedData = data + "How\n";
//     return writeFileContents("output1.txt", modifiedData);
//   })
//   .then(() => {
//     console.log("First modification done.");
//     return readFileContents("output1.txt");
//   })
//   .then((data) => {
//     const modifiedData = data + "Are you?\n";
//     return writeFileContents("output2.txt", modifiedData);
//   })
//   .then(() => {
//     console.log("Second modification done.");
//     return readFileContents("output2.txt");
//   })
//   .then((data) => {
//     console.log("Content of output2.txt:");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
