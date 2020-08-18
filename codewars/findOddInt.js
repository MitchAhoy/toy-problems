// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

const A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

const findOdd = (A) => {
    const count = {}
    A.forEach(num => count[num] ? count[num]++ : count[num] = 1 )
    return parseInt(Object.keys(count).filter(number => count[number] % 2 !== 0))
}
console.log(findOdd(A))


