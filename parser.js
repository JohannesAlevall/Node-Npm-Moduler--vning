import fs from "fs";
import chalk from "chalk";

let insideTag = false;

fs.readFile("index.html", "utf8", function (error, data) {
  if (!error) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === "<") {
        process.stdout.write(chalk.bgRed(data[i]));
        insideTag = true;
      } else if (data[i] === ">") {
        process.stdout.write(chalk.bgRed(data[i]));
        insideTag = false;
      } else if (insideTag) {
        process.stdout.write(chalk.bgRed(data[i]));
      } else {
        process.stdout.write(data[i]);
      }
    }
  } else {
    console.log("Something went wrong.");
  }
});
