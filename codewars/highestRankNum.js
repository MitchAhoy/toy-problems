// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

const highestRank = (arr) => {
  const count = {}
  arr.forEach((num) => {
    count[num] ? count[num]++ : count[num] = 1
  })
  let output = [0, 0]
  for (let [key, value] of Object.entries(count)) {
    if (value > output[1]) {
      output = [key, value]
    }
    if (value === output[1]) {
      key > output[0] ? output = [key, value] : output = output
    }
    continue
  }
  return Number(output[0])
}

console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))