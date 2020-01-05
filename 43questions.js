//questões respondidas em JavaScript
//https://github.com/lydiahallie/javascript-questions

//1 - imprimir as variáveis antes de declarar - var e let
sayHy = () => {
    console.log("1 - var e let ~>", name)
    //console.log(age) - ReferenceError
    var name = "Lele"
    let age = 21
}
sayHy()

//2 - var e let no for - setTimeout
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("2 - var e let ~>", i))
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("2 - var e let ~>", i))
}

//3 - this em uma arrow function
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2
    },
    perimeter: () => 2 * Math.PI * this.radius
}

console.log("3 - this ~>", shape.diameter())
console.log("3 - this ~>", shape.perimeter())

//4 - true, false NaN?
console.log("4 - true, false NaN ~>", +true)
console.log("4 - true, false NaN ~>", !"Lydia")