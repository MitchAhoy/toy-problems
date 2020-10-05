// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

const validatePIN = (pin) => {
  const trimedPin = pin.trim()
  if (trimedPin.length === 4 || trimedPin.length === 6 && Number.isInteger(Number(pin))) {
    // return trimedPin.split('').every((num) => !isNaN(num) && Number(pin) >= 0)
    return /^(\d{4}|\d{6})$/.test(pin)
  }

  return false

}

console.log(validatePIN('098765'))
