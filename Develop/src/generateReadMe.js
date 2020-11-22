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
  return `
  [Credits](#credits)`
}

const generateScreenshot = screenshot => {

}

const generateReadMe = data => {
  console.log(data.title)
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

[Installation](#installation)
[Usage](#usage)
${generateContributorSection}
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${generateContributors(data.credits)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, contact me at ${data.email}.

You can also check out my github profile at [Github](https://github.com/${data.github})
    `
}

module.exports = generateReadMe