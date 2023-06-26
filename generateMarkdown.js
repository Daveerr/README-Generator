// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "GPL v3":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "APACHE 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "BSD 3-Clause":
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      default:
        return "";
    }
  } else {
    return "";
  }
}
//function that returns the license link
// If no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case "MIT":
        return "https://opensource.org/licenses/MIT";
      case "GPL v3":
        return "https://www.gnu.org/licenses/gpl-3.0";
      case "APACHE 2.0":
        return "https://opensource.org/licenses/Apache-2.0";
      case "BSD 3-Clause":
        return "https://opensource.org/licenses/BSD-3-Clause";
      default:
        return "";
    }
  } else {
    return "";
  }
}

// returns the license section of README
// If no license, return an empty string
function renderLicenseSection(license) {
  function renderLicenseSection(license) {
    if (license) {
      return `## License\n\nThis project is licensed under the [${license}](${renderLicenseLink(
        license
      )}) license.`;
    } else {
      return "";
    }
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## license
  ${data.license}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Name
  ${data.name}
 

`;
}

module.exports = generateMarkdown;
