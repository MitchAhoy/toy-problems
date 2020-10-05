// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

const capitalize = (s) => {
  const keyword = s.toLowerCase().split('')
  const word1 = []
  const word2 = []

  keyword.forEach((letter, idx) => {
    if (idx % 2 === 0 || idx === 0) {
      word1.push(letter.toUpperCase())
    } else {
      word1.push(letter)
    }
  })

  keyword.forEach((letter, idx) => {
    if (idx % 2 !== 0) {
      word2.push(letter.toUpperCase())
    } else {
      word2.push(letter)
    }
  })


  return [word1.join(''), word2.join('')];
};

console.log(capitalize('abcde'))