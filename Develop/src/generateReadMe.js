const generateContributors = credits => {
  if (!credits) {
      return '';
  }

  return `## Credits

${credits}
    `
}

// This function will create a link to the contributors section if there is one.
const generateContributorSection = credits => {
  if (!credits) {
    return '';
  }
  return `
* [Credits](#credits)<br>`
}

// This function will check for a link to the deployed application and provide it if there is one.
const deployedLink = link => {
  if (!link) {
    return '';
  }
  return `<${link}>`
}

module.exports = data => {
  return `
# ${data.title}

## Description

${data.description}
${deployedLink(data.link)}

## Table of Contents

* [Installation](#installation)<br>
* [Usage](#usage)<br>${generateContributorSection(data.credits)}
* [Contributing](#contributing)<br>
* [Tests](#tests)<br>
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

<img src ='assets/images/${data.screenshot}' height = 450px>
${generateContributors(data.credits)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, contact me at <${data.email}>.

You can also check out my github profile at [Github](https://github.com/${data.github})
    `
}