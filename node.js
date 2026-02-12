const numbers = [1, 5, 8, 12, 3, 15, 7, 20]
const words = ['cat', 'dog', 'mouse', 'parrot', 'hamster']
const longWords = countItems(words, word => word.length > 5)
const greaterThanTen = countItems(numbers, n => n > 10)

function countItems(array, condition) {
    let count = 0

    for(const element of array) {
        if(condition(element)){
            return count++
        }
    }

    return count
}

const isEven = num => num % 2 === 0
console.log(isEven)
console.log(longWords)
console.log(greaterThanTen)


const calcuate = (a, b, operation) => operation(a, b)

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => b!== 0 ? a / b : "error"

console.log(add)
console.log(subtract)
console.log(multiply)
console.log(divide)

function repeatMessage(times, messageCreator) {
    for(let i = 0;i < times.length;i++){
        return messageCreator[i]
    }
}

console.log(repeatMessage)
