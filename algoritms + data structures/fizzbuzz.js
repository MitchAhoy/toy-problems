const fizzBuzz = (num) => {
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} FizzBuzz`)
            continue
        }

        if (i % 5 === 0) {
            console.log(`${i} Buzz`)
            continue
        }

        if (i % 3 === 0) {
            console.log(`${i} Fizz`)
            continue
        }

        console.log(i)
        
    }
}

fizzBuzz(100)