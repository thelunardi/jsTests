// comma operator
let test = (99, 88, 77)
console.log(test)

// eslint-disable-next-line no-sequences
const lb = (a, b, arr) => (arr.push(a * b), a * b)
const arrayTest = [2, 3]
console.log('result ~>', lb(1, 2, arrayTest))
console.log('final array ~>', arrayTest)

// function constructor
// eslint-disable-next-line no-new-func
const mul = new Function('a', 'b', 'return a * b')
console.log('function constructor ~>', mul(2, 3))

// destructuring array
const arrayTest2 = [99, 88, 77]
const { 1: secA } = arrayTest2
console.log('destructuring array ~>', secA)

// reducing array with length
const arrayTest3 = [90, 90, 22]
console.log('initial array length ~>', arrayTest3.length)
arrayTest3.length = 1
console.log('final array ~>', arrayTest3)

// arguments
function sa () {
  console.log('arguments ~>', arguments)
  // eslint-disable-next-line no-caller
  console.log('function name ~>', arguments.callee.name)
  // eslint-disable-next-line no-caller
  console.log('function that called ~>', arguments.callee.caller.name)
}
test = () => sa(12, 13)
test()

// void keyword
const testVoid = () => {
  return 99
}
console.log('initial return ~>', testVoid())
// eslint-disable-next-line no-void
console.log('void nullifies ~>', (void testVoid()))
