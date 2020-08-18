// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

const words = "is2 Thi1s T4est 3a"

const order = (words) => {
    const output = []

    words.split(' ').forEach(word => {
        if (word){
            const indexofWord = word.match(/\d/)
            output[indexofWord - 1] = word
        }

    })
    return output.toString(',').replace(/,/g, ' ')
}

console.log(order(words))
