/**
 * Link: https://blog.whereisthemouse.com/loop-over-arrays-in-javascript
 */

const array = [4, 6, 8, 10, 8, 12, 6, 45, 8]

const resultMap = array.map(item => item * 2)
console.log("multiply by 2", resultMap)

array.forEach(item => item * 2)
console.log("multiply by 2 - same array", array)

const newArray = [4, 6, 8, 10, 8, 12, 6, 45, 8]

const resultFilter = newArray.filter(item => item !== 8)
console.log("filter out 8", resultFilter)

for (let i = newArray.length - 1; i > 0; i--) {
    if (newArray[i] === 8) {
        newArray.splice(i, 1)
    }
}
console.log("filter out 8 - same array", newArray)

const anotherArray = [4, 6, 8, 10, 8, 12, 6, 45, 8]

const occurenceofEight = anotherArray.reduce((count, item) => {
    if (item === 8) {
        count++
    }
    return count
}, 0)
console.log("counting the occurrences of 8", occurenceofEight)

const index = anotherArray.indexOf(6)
console.log("index of 6", index)

const lastIndex = anotherArray.lastIndexOf(6)
console.log("last index of 6", lastIndex)

const containSix = anotherArray.includes(6)
console.log("exists in array", containSix)

const greaterThanFive = anotherArray.find(item => item > 6)
console.log("greater than 5", greaterThanFive)

const areAllNumbersOdd = anotherArray.every(item => item % 2 === 1)
console.log("every number is an odd number", areAllNumbersOdd)

const isThereAnOddNUmber = anotherArray.some(item => item % 2 === 1)
console.log("there is an odd number", isThereAnOddNUmber)

let count = 0
const resultLargerThanFive = []

for (let number of anotherArray) {
    if (number > 5) {
        resultLargerThanFive.push(number)
        count++
    }
    if (count === 3) {
        break
    }
}
console.log("first three numbers larger than 5", resultLargerThanFive)

let countIndexes = 0
const resultLargerThanFiveIndex = []

for (let i = 0; i< anotherArray.length; i++) {
    if (anotherArray[i] > 5) {
        resultLargerThanFiveIndex.push(i)
        countIndexes++
    }
    if (countIndexes === 3) {
        break
    }
}
console.log("first three indexes of numbers larger than 5", resultLargerThanFiveIndex)