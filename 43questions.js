// questões respondidas em JavaScript
// https://github.com/lydiahallie/javascript-questions

// 1 - imprimir as variáveis antes de declarar - var e let
const sayHy = () => {
  var name = 'Lele'
  console.log('1 - var e let ~>', name)
  // console.log(age) - ReferenceError
  // var name = 'Lele'
  // const age = 21
}
sayHy()

// 2 - var e let no for - setTimeout
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('2 - var e let ~>', i))
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log('2 - var e let ~>', i))
}

// 3 - this em uma arrow function
const shape = {
  radius: 10,
  diameter () {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}

console.log('3 - this ~>', shape.diameter())
console.log('3 - this ~>', shape.perimeter())

// 4 - true, false NaN?
console.log('4 - true, false NaN ~>', +true)
console.log('4 - true, false NaN ~>', !'Lydia')

// 5 - qual é verdadeiro?
const bird = {
  size: 'small'
}

const mouse = {
  name: 'Mickey',
  small: true
}

// console.log("5 - true ~>", mouse.bird.size)
console.log('5 - true ~>', mouse[bird.size])
console.log('5 - true ~>', mouse[bird.size])

// 6 - atribuição
const c = { greeting: 'Hey' }
const d = c

c.greeting = 'Hello'
console.log('6 - atribuição ~>', d.greeting)

// 7 - comparação em JS
const x = 3
// eslint-disable-next-line no-new-wrappers
const y = new Number(3)
const z = 3

// eslint-disable-next-line eqeqeq
console.log('7 - comparação em JS ==', x == y)
console.log('7 - comparação em JS ===', x === y)
console.log('7 - comparação em JS ===', y === z)

// 8 - static function
class Chameleon {
  static colorChange (newColor) {
    this.newColor = newColor
    return this.newColor
  }

  constructor ({ newColor = 'green' } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: 'purple' })
console.log('8 - static function', freddie)
// TypeError
// console.log('8 - static function', freddie.colorChange('orange'))
