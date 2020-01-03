//comma operator
let test = (99, 88, 77)
console.log(test)

const lb = (a, b, arr) => (arr.push(a*b), a*b)
arrayTest = [2, 3]
console.log("result ~>", lb(1, 2, arrayTest))
console.log("final array ~>", arrayTest)

//function constructor
const mul = new Function("a", "b", "return a * b")
console.log("function constructor ~>", mul(2, 3))

//destructuring array
const arrayTest2 = [99, 88, 77]
const { 1: secA } = arrayTest2
console.log("destructuring array ~>", secA)

//reducing array with length
const arrayTest3 = [90, 90, 22]
console.log("initial array length ~>", arrayTest3.length)
arrayTest3.length = 1
console.log("final array ~>", arrayTest3)

//arguments
function sa() {
    console.log("arguments ~>", arguments)
    console.log("function name ~>", arguments.callee.name)
    console.log("function that called ~>", arguments.callee.caller.name)
}
test = () => sa(12, 13)
test()

//void keyword
testVoid = () => {
    return 99
}
console.log("initial return ~>", testVoid())
console.log("void nullifies ~>", (void testVoid()))

//var e let no for - setTimeout
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var e let ~>", i))
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("var e let ~>", i))
}

//imprimir as variáveis antes de declarar - var e let
sayHy = () => {
    console.log("var e let ~>", name)
    //console.log(age) - ReferenceError
    var name = "Lele"
    let age = 21
}
sayHy()