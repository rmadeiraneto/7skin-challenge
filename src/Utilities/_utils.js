/**
 * Converts a camelCase, snake_case and kebab-case strings to a human readable string.
 * @param { string } str - The camel case string to be converted.
 * @param { boolean } capitalizeFirst - Whether or not should the result string have the first letter capitalized.
 * @return { string } The given string converted in human readable
 * @function
 */
function stringToHuman(str, capitalizeFirst) {
  // insert a space before all caps
  let newStr = str.replace(/([A-Z])/g, ' $1')
  // capitalize first letter and remove underscores and dashes
  if (capitalizeFirst) {
    newStr =
      newStr.charAt(0).toUpperCase() +
      newStr.slice(1).replace(/[_-]/gi, ' ').toLowerCase()
  } else {
    newStr = newStr.replace(/[_-]/gi, ' ').toLowerCase()
  }
  return newStr
}

const exports = {
  stringToHuman,
}

export default exports
