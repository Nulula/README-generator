const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: function(input) {
        return input !== '';
      }
    },
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
    validate: function(input) {
        return input !== '';
      }
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: function(input) {
        return input !== '';
      }
    },
    {
    type: 'input',
    message: 'Can you provide a short description of your project?',
    name: 'description',
    validate: function(input) {
        return input !== '';
      }
    },
    {
    type: 'input',
    message: 'Can you provide the installation instructions?',
    name: 'installation',
    validate: function(input) {
        return input !== '';
      }
    },
    {
    type: 'input',
    message: 'Can you provide the usage information?',
    name: 'usage',
    validate: function(input) {
        return input !== '';
      }
    },
    {
    type: 'list',
    message: 'Please choose the license type',
    name: 'license',
    choices: ['afl 1.0','apache 2.0','artistic 2.0','bsl 1.0','bsd 2 clause','bsd 3 clause','bsd 3 clause clear','cc','cc 1.0','cc by 4.0','cc by sa 4.0','wtfpl','ecl 2.0','epl 1.0','epl 2.0','eupl 1.1','agpl 3.0','gpl','gpl 2.0','gpl 3.0','lgpl','lgpl 2.1','lgpl 3.0','isc','lppl 1.3c','ms pl','mit','mpl 2.0','osl 3.0','postgresql','ofl 1.1','ncsa','unlicense','zlib']
    },
    {
    type: 'input',
    message: 'How can people contribute to your project?',
    name: 'contributing',
    validate: function(input) {
        return input !== '';
      }
    },
    {
    type: 'input',
    message: 'How did you test your application?',
    name: 'tests',
    validate: function(input) {
        return input !== '';
      }
    },

];

// // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data),(err) =>{
        if (err) {
            console.error(err);
        } else {
            console.log(`File '${fileName}' has been created.`);
        }
    });
};

// // function to initialize program
function init() {
    console.log(`
    README generator
    
    Welcome to README file generator. Please answer a couple of questions,
    and your README file will be automatically generated. Let's go!
    `);
    inquirer.prompt(
        questions
        ).then((responses) => {
        writeToFile('README-example.md',responses)
        })
        .catch((err) => {
            console.error(err);
        });
    };


// // function call to initialize program
init();