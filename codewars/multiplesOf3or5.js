// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

const solution = (number) => {

    const baseNums = [3, 5]
    let multiples = []

    baseNums.forEach((num) => {
        for (let i = num; i < number; i += num) {
            multiples.push(i)
        }
    })

    const uniqueMultiples = [...new Set(multiples)]

    return uniqueMultiples.reduce((acc, val) => {
        return acc + val
    }, 0)
}

console.log(solution(10))