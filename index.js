const fs = require("fs");
const path = require("path");
const { getUserInput } = require("./lib/input");
const { Triangle, Circle, Square } = require("./lib/shapes");

(async () => {
  const userInput = await getUserInput();

  let selectedShape;
  switch (userInput.shape) {
    case "circle":
      selectedShape = new Circle();
      break;
    case "triangle":
      selectedShape = new Triangle();
      break;
    case "square":
      selectedShape = new Square();
      break;
  }

  selectedShape.setColor(userInput.shapeColor);

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="150" y="30" text-anchor="middle" fill="${userInput.textColor}">${
    userInput.text
  }</text>
    </svg>
  `;

  const svgFilePath = path.join("examples", "logo.svg");

  fs.writeFileSync(svgFilePath, svgContent);

  console.log(`Generated ${svgFilePath}`);
})();
