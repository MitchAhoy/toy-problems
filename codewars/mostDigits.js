// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

const findLongest = (array) => {

  const reducer = (acc, val) => val.toString().length > acc.toString().length ? val : acc
  return array.reduce(reducer, 0)
}

console.log(findLongest([1, 432, 14534544345033, 100, 43, 546, 45345]))