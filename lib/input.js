// input.js
const inquirer = require("inquirer");

async function getUserInput() {
  const userInput = await inquirer.prompt([
    {
      name: "text",
      message: "Enter up to three characters:",
    },
    {
      name: "textColor",
      message: "Enter text color:",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      name: "shapeColor",
      message: "Enter shape color:",
    },
  ]);

  return userInput;
}

module.exports = { getUserInput };
