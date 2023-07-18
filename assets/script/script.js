const { createCanvas, loadImage, registerFont } = require('canvas');
const faker = require('faker');
const path = require('path');

// Set the font path
registerFont(path.join(__dirname, 'fonts', 'Roboto-Regular.ttf'), 
{ family: 'Roboto'});

// configure the card dimensions
const cardWidth = 400;
const cardHeight = 200;
const textColor = '#000000';

// generate random name
const name = faker.name.findName();

// Create a new canvas
const canvas = createCanvas(cardWidth, cardHeight);
const ctx = canvas.getContext('2d');

// Set the background color
ctx.fillStyle = textColor;
ctx.fillRect(0, 0, cardWidth, cardHeight);

// Set the text properties
ctx.fillStyle = textColor;
ctx.font = '24px Robot';

// Draw the name
ctx.fillText(name, 20, 50);

// Save the image as a PNG file
const imageBuffer = canvas.toBuffer('image/png');
const fileName = '${name.toLowerCase().replace(' ' ,'-',)}_card.png;
const filePath = path.join(__dirname, 'output', fileName);

require('fs').writeFileSync(filePath, imageBuffer);

console.log('Name card generated: ${fileName}');
