const { createCanvas, loadImage, registerFont } = reuire('canvas');
const faker = require('faker');
const path = require('path');

// Set the font path
registerFont(path.join(__dirname, 'fonts', 'Roboto-Regular.ttf'), 
{ family: 'Roboto'});