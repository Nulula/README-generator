// function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license.replace(/ /g, '%20');
  return `
  # ${data.title}

  ![](https://img.shields.io/badge/license-${license}-green)
  
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
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Repository adress: https://github.com/${data.username}
  
  Please direct questions to ${data.email}
`;
}

module.exports = generateMarkdown;
