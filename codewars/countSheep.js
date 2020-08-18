// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const num = 20

const countSheep = (num) => {
    return new Array(num).fill().map((_, idx) => `${idx += 1} sheep...`).toString().replace(/,/g, '')
}

console.log(countSheep(num))