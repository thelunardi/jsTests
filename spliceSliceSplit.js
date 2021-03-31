// splice - CHANGE the content in the input array
const example = ['A', 'B', 'C', 'D']
example.splice(2, 0, 'E')

console.log("1 - add with splice", example)

// remove 1 item a partir da posição 2 (2 incluído)
// copyExample recebe o resultado e example é modificado
const copyExample = example.splice(2, 1)

console.log("2 - modified array splice", example)
console.log("3 - new array splice", copyExample)

// slice - DON'T CHANGE the input and return a new copy
const exampleTwo = ['A', 'B', 'C', 'D']

// copia do item 1 (incluído) ao item 3 (não incluído)
// copyExample recebe o resultado e example não é modificado
const copyExampleTwo = exampleTwo.slice(1, 3)

console.log("4 - not modified with slice", exampleTwo)
console.log("5 - new array slice", copyExampleTwo)

// split - SPLITS a string using a separator e, como opcional, o número de vezes que buscará o separator
const text = 'Olá, Mundo! Olá, Mundo! Olá, Mundo!'

// cria um array
// não modifica o array
const newText = text.split(',', 3)

console.log("6 - not modified with split", text)
console.log("7 - new array split", newText)
