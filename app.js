const fs = require("fs");

// read from a file
// fs.readFile("./note.txt", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data.toString());
// });

// write to a file - override
// fs.writeFile("./note.txt", "A new line", (err, data) => {
//   if (err) console.log(err);
//   else console.log("A new line has been added");
// });

// append to a file - add line to an existing file
// fs.appendFile("./note.txt", "A new line\r\n", (err, data) => {
//   if (err) console.log(err);
//   else console.log("A new line has been added");
// });

// make new folder
// fs.mkdir("newFolder", (err, data) => {
//   if (err) console.log(err);
//   else console.log("A new folder has been created");
// });

// check if file already exists
// if (!fs.existsSync("newFolder")) {
//   fs.mkdir("newFolder", (err, data) => {
//     if (err) console.log(err);
//     else console.log("A new folder has been created");
//   });
// } else {
//   console.log("The folder already exists!!!");
// }

// Delete folder
// if (fs.existsSync("newFolder")) {
//   fs.rmdir("newFolder", (err, data) => {
//     if (err) console.log(err);
//     else console.log("The folder has been deleted");
//   });
// } else {
//   console.log("The folder already deleted!!!");
// }

// Delete file
if (fs.existsSync("./note.txt")) {
  fs.unlink("./note.txt", (err, data) => {
    if (err) console.log(err);
    else console.log("The file has been deleted");
  });
} else {
  console.log("The file already deleted!!!");
}
