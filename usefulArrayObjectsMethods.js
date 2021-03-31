/*
By Robert Cooper
https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230
 */

//filter
const studentsAge = [12, 23, 34, 21, 15, 28]
const ableToDrink = studentsAge.filter(age => age > 18)
console.log("filter", ableToDrink)

//map
const numbers = [12, 23, 34, 21, 15, 28]
const newNumbers = numbers.map(number => number * 2)
console.log("map", newNumbers)

//reduce
const numbersToReduce = [12, 23, 34, 21, 15, 28]
const total = numbersToReduce.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log("reduce", total)

//forEach
const emotions = ["sad", "happy", "angry"]
emotions.forEach(emotion => console.log("forEach", emotion))

//some - any item passes the condition
const userPrivilegies = ["user", "user", "admin"]
const isAdmin = userPrivilegies.some(privilegie => privilegie === "admin")
console.log("some", isAdmin)

//every - all items pass the condition
const ratings = [3, 5, 4, 3, 5];
const goodOverallRating = ratings.every(rating => rating >= 3)
console.log("every", goodOverallRating)

//includes
const names = ['sophie', 'george', 'waldo', 'stephen', 'henry']
const includesWaldo = names.includes('waldo')
console.log("includes", includesWaldo)

//Array.from
const newArray = Array.from('thelunardi')
console.log("Array.from", newArray)

//Object.values
const icecreamColors = {
    chocolate: 'brown',
    vanilla: 'white',
    strawberry: 'red',
}

const colors = Object.values(icecreamColors)
console.log("Object.values", colors)

//Object.keys
const keys = Object.keys(icecreamColors)
console.log("Object.keys", keys)

//Object.entries
const weather = {
    rain: 0,
    temperature: 24,
    humidity: 33,
}

const entries = Object.entries(weather)
console.log("Object.entries", entries)

//Array spread operator
const spreadableOne = [1, 2, 3, 4]
const spreadableTwo = [5, 6, 7, 8]

const combined = [...spreadableOne, ...spreadableTwo]
console.log("Array spread", combined)

//Object spread
const spreadableObject = {
    name: 'Robert',
    phone: 'iPhone'
};

const newObject = {
    ...spreadableObject,
    carModel: 'Volkswagen'
}

console.log("Object spread", newObject)

//Function rest
function displayArgumentsArray(...theArguments) {
    console.log("Function rest", theArguments)
}

displayArgumentsArray('hi', 'there', 'bud')

//Object freeze
const frozenObject = {
    name: 'Robert'
}

Object.freeze(frozenObject)

frozenObject.name = 'Henry'
console.log("Object.freeze", frozenObject)

//Object.seal
const sealedObject = {
    name: 'Robert'
}

Object.seal(sealedObject)

sealedObject.name = 'Bob'
sealedObject.wearsWatch = true
console.log("Object.seal", sealedObject)

//Object.assign
const firstObject = {
    firstName: 'Robert'
}

const secondObject = {
    lastName: 'Cooper'
}

const combinedObject = Object.assign(firstObject, secondObject)
console.log("Object.assign", combinedObject)


