const generateContributors = credits => {
  if (!credits) {
      return '';
  }

  return `
## Credits

${credits}
    `
}

// This function will create a link to the contributors section if there is one.
const generateContributorSection = credits => {
  if (!credits) {
    return '';
  }
  return `[Credits](#credits)<br>`
}

module.exports = data => {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

[Installation](#installation)<br>
[Usage](#usage)<br>
${generateContributorSection(data.credits)}
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}
![This is a screenshot of the application.](assets/images/${data.screenshot})
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