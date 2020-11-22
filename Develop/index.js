const fs = require('fs');
const inquirer = require('inquirer')

// this is the function needed to generate the ReadMe file
const generateReadMe = require('./src/generateReadMe.js')

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: nameInput => {
      if (nameInput){
        return true;
      } else {
        console.log("Please enter the title of your project!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe the project. What was the motivation for making it? How does it work, and what does it do? (Required)',
    validate: nameInput => {
      if (nameInput){
        return true;
      } else {
        console.log("Please describe the project!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
    validate: nameInput => {
      if (nameInput){
        return true;
      } else {
        console.log("Please include the steps required to install your project!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. (Required)',
    validate: nameInput => {
      if (nameInput){
        return true;
      } else {
        console.log("Please provide instructions and examples for use!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'Provide the file name of a screenshot of your functional application. Make sure it is located in the assets/images folder. (Required)',
    validate: nameInput => {
      if (nameInput){
        return true;
      } else {
        console.log("Please provide a screenshot!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'credits',
    message: 'If you collaborated with anyone on this project, link their github profiles here.'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Which license would you like to use for your project? Pick one.',
    choices: []
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for developers who want to contribute to this project in the future. (Required)',
    validate: nameInput => {
      if (nameInput){
        return true;
      } else {
        console.log("Please enter contribution guidelines!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username. (Required)',
    validate: nameInput => {
      if (nameInput){
        return true;
      } else {
        console.log("Please enter your github username!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address. (Required)',
    validate: nameInput => {
      if (nameInput){
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    }
  },
];

// function to write README file
const writeToFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', data, err => {
      if (err) {
        reject(err);
        return
      }
      resolve({
        ok: true,
        message: 'File created!'
      })
    })
  })
}

// function to initialize program
const init = () => {
  return inquirer.prompt(questions)
  .then(data => {
    return generateReadMe(data)
  })
  .then(data => {
    return writeToFile(data)
  })
}

// function call to initialize program
init();
