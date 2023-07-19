const inquirer = require('inquire');
const fs = require('fs');

function promptManager() {
    inquireer
    .prompt([
        // Prompt for manager's information
        // (name, employee ID, email address, and office number)
    ])
    .then((managerData) => {
        // Create the manager object
        // Add the manager to the team roster
        // Call the function to display the menu
    });
}

function displayMenu () {
    inquirer
    .prompt([
        // Prompt for the user's choice (engineer, intern, or finish building the team)
    ])
    .then((menuChoice) => {
        // Based on the choice, prompt for the corresponding team member's information
        // (engineer: name, ID, email, GitHub username)
        // (intern: name, ID, email, school)
        // (finish building the team: generate HTML and exit the application)
    });
}

// Create engineer object and add it to the team roster
function addEngineer() {
    // Prompt for engineer's information
    // Create the engineer object
    // Add the engineer to the team roster
    // Call the function to display the menu
}

// Create intern object, add to roster
function addIntern() {
    // Prompt for intern's information
    // Create the intern object
    // Add the intern to the team roster
    // Call the function to display the menu
}

// Generate HTML for roster
function generateHTML() {
    // Read the contents of the HTML template file
    // Replace placeholders in the template with the actual team information
    // Write theCanICan  generated HTML to a new file
}

promptManager();