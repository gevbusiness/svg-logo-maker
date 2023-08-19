class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}<text>${this.textElement}</text></svg>`;
    }

    setText(text, color) {
        this.textElement = `<tspan x="50" y="50" fill="${color}">${text}</tspan>`;
    }

    setShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;