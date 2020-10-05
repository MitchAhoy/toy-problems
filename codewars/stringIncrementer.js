// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

const incrementString = (strng) => {
  const stringNum = strng.split('').map((char) => { if (!isNaN(char)) { return char } }).join('')
  const incrementNum = (parseInt(stringNum) + 1).toString().padStart(stringNum.length, 0)

  const stringLetters = strng.split('').map((char) => { if (isNaN(char)) { return char } }).join('');
  if (!stringNum) return strng + '1';

  return stringLetters + incrementNum

}

console.log(incrementString('foo001'))


