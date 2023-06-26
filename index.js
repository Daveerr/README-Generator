const { default: inquirer } = require("inquirer");

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "enter title of project",
  },
  {
    type: "input",
    name: "name",
    message: "whats your name?",
  },
  {
    type: "input",
    name: "github",
    message: "whats your github username",
  },
  {
    type: "input",
    name: "email",
    message: "whats your email?",
  },
  {
    type: "input",
    name: "usage",
    message: "usage instructions",
  },
  {
    type: "input",
    name: "description",
    message: "short description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "how did you install your project?",
  },
  {
    type: "input",
    name: "test",
    message: "what testing has been done on the project?",
  },
  {
    type: "input",
    name: "contributions",
    message: "project contributors if any?",
  },
  {
    type: "list",
    name: "license",
    message: "choose license for repo",
    choices: ["MIT", "GPL v3", "APACHE 2.0", "BSD 3-Clause", "NONE"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(' File name "${filename}" has been succesfully done');
  });
}

// TODO: Create a function to initialize app
function init(generateMarkdown) {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile("README.md", markdown);
  });
}

// Function call to initialize app
init(generateMarkdown);
