class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
    }
    
    class Circle extends Shape {
        render() {
            return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`;
        }
    }
    
    class Triangle extends Shape {
        render() {
            return `<polygon points="50,0 100,100 0,100" stroke="black" stroke-width="3" fill="${this.color}" />`;
        }
    }
    
    class Square extends Shape {
        render() {
            return `<rect width="100" height="100" stroke="black" stroke-width="3" fill="${this.color}" />`;
        }
    
    }
    
    module.exports = {Circle, Triangle, Square};