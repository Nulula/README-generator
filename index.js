const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
    },
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
    },
    {
    type: 'input',
    message: 'Can you provide a short description of your project?',
    name: 'description'
    },
    {
    type: 'input',
    message: 'Can you provide the installation instructions?',
    name: 'installation'
    },
    {
    type: 'input',
    message: 'Can you provide the usage information?',
    name: 'usage'
    },
    {
    type: 'input',
    message: 'Can you provide the usage information?',
    name: 'usage'
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
