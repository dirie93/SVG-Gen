class Shape {
  constructor() {
    this.color = "black";
  }

  setColor(color) {
    this.color = color;
  }

  centerX() {
    throw new Error(
      "The centerX method must be implemented in the child class."
    );
  }

  centerY() {
    throw new Error(
      "The centerY method must be implemented in the child class."
    );
  }

  render() {
    throw new Error(
      "The render method must be implemented in the child class."
    );
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }

  centerX() {
    return (150 + 244 + 56) / 3;
  }

  centerY() {
    return (18 + 182 + 182) / 3;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }

  centerX() {
    return 150;
  }

  centerY() {
    return 100;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }

  centerX() {
    return 150;
  }

  centerY() {
    return 150;
  }
}

module.exports = { Shape, Triangle, Circle, Square };
