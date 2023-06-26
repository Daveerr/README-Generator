const { default: inquirer } = require("inquirer");

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
    name: "instalation",
    message: "how did you install your project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
