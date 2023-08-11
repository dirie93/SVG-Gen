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
    <text x="${selectedShape.centerX()}" y="${selectedShape.centerY()}" text-anchor="middle" fill="${
    userInput.textColor
  }"> 
      <tspan font-weight="bold">${userInput.text}</tspan>
    </text>
  </svg>
`;

  const svgFilePath = path.join("examples", "logo.svg");

  fs.writeFileSync(svgFilePath, svgContent);

  console.log(`Generated ${svgFilePath}`);
})();
