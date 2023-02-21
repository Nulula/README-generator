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
    message: 'What is your email address?',
    name: 'email',
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
    type: 'list',
    message: 'Please choose the license type',
    name: 'license',
    choices: ['afl-.0','apache-2.0','artistic-2.0','bsl-1.0','bsd-2-clause','bsd-3-clause','bsd-3-clause-clear','cc','cc0-1.0','cc-by-4.0','cc-by-sa-4.0','wtfpl','ecl-2.0','epl-1.0','epl-2.0','eupl-1.1','agpl-3.0','gpl','gpl-2.0','gpl-3.0','lgpl','lgpl-2.1','lgpl-3.0','isc','lppl-1.3c','ms-pl','mit','mpl-2.0','osl-3.0','postgresql','ofl-1.1','ncsa','unlicense','zlib']
    },
    {
    type: 'input',
    message: 'How can people contribute to your project?',
    name: 'contributing'
    },
    {
    type: 'input',
    message: 'How did you test your application?',
    name: 'tests'
    },

];

// // function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName,`
    # ${data.title}

    ![](https://img.shields.io/badge/license-${data.license}-green)
    
    ## Description
    ${data.description}
    ## Table of contents
    [Installation](#installation)
    
    [Usage](#usage)
    
    [License](#license)
    
    [Contribution](#contribution)
    
    [Tests](#tests)
    
    [Questions](#questions)
    
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ## Contribution
    ${data.contribution}
    ## Tests
    ${data.tests}
    ## Questions
    Repository adress: https://github.com/${data.username}
    Please direct questions to ${data.email}
    `,(err) =>
    err ? console.error(err) : console.log('Something went wrong, please try again')
  );
};

// // function to initialize program
function init() {
    console.log(`
    README generator
    
    Welcome to README file generator. Please answer a couple of questions,
    and your README file will be automatically generated. Let's go!
    `);
};


// // function call to initialize program
init();
inquirer.prompt(
    questions
    ).then((responses) => {
    if (questions.validate === false) {
        console.log("This is no a valid email address, please start again");
        init()
    } else {
        writeToFile('README-example.md',responses)
    }
})