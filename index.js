const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');

const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to add to the SVG?'
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like the text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to add to the SVG?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?'
    }
]).then((answers) => {
    const svg = new SVG();
    svg.setText(answers.text, answers.color);
    switch (answers.shape) {
        case 'Circle':
            const circle = new Circle();
            circle.setColor(answers.shapeColor);
            svg.setShape(circle);
            break;
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(answers.shapeColor);
            svg.setShape(triangle);
            break;
        case 'Square':
            const square = new Square();
            square.setColor(answers.shapeColor);
            svg.setShape(square);
            break;
    }
    fs.writeFile('output.svg', svg.render(), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
