// concat - não altera os iniciais
const vetor1 = [1, 2, 3]
const vetor2 = [4, 5, 6]
const vetor3 = [7, 8, 9]

const result = vetor1.concat(vetor2, vetor3)
console.log(`concat ~> ${result}`)

// indexOf - retorna a posição no array, -1 se não existir
const indice = vetor1.indexOf(1)
console.log(`indexOf¹ ~> ${indice}`)

const indice2 = vetor1.indexOf(1, 1)
console.log(`indexOf² ~> ${indice2}`)

// join - retorna uma string com o seprador indicado (vírgula se não existir)
const elementos = vetor1.join()
console.log(`join¹ ~> ${elementos}`)

const elementos2 = vetor1.join(' é bom ')
console.log(`join² ~> ${elementos2}`)

// lastIndexOf - retorna a última posição no array, -1 se não existir
const vetor4 = [10, 11, 10, 12, 13]
const ultimoIndice = vetor4.lastIndexOf(10)
console.log(`lastIndexOf¹ ~> ${ultimoIndice}`)

const ultimoIndice2 = vetor4.lastIndexOf(10, 0)
console.log(`lastIndexOf² ~> ${ultimoIndice2}`)

// pop - remove o último e o retorna - MODIFICA o array
const vetor5 = [12, 12, 13, 23, 12]
const ultimoElemento = vetor5.pop()
console.log(`pop ~> ${ultimoElemento}`)

// push - adiciona um ou mais elementos ao final do array - MODIFICA o array
const vetor6 = [12, 12, 13, 23, 12]
vetor6.push(13, 14)
console.log(`push ~> ${vetor6}`)

// reverse - inverte os elementos do array - MODIFICA o array
const vetor7 = [1, 2, 3, 4, 5]
vetor7.reverse()
console.log(`reverse ~> ${vetor7}`)

// shift - remove o primeiro e o retorna como resultado - MODIFICA o array
const vetor8 = [1, 2, 3, 4, 5]
console.log(`shift ~> ${vetor8}`)

// sort - ordena o array - MODIFICA o array
const vetor9 = [1, 3, 2, 5, 4]
vetor9.sort()
console.log(`sort¹ ~> ${vetor9}`)

vetor9.sort((a, b) => a + b)
console.log(`sort² ~> ${vetor9}`)

// unshift - adiciona um ou mais elementos ao inicio do array - MODIFICA o array
const vetor10 = [12, 12, 13, 23, 12]
vetor10.unshift(13, 14)
console.log(`unshift ~> ${vetor10}`)

// valueOf ou toString - representação em texto do array
const vetor11 = [1, 2, 3, 4, 5]
console.log(`valueOf ~> ${vetor11}`)
console.log(`toString ~> ${vetor11}`)

// flatMap - first mapping and then flat
const vetor12 = ['Dick', 'Jane']
console.log('flat ~>', vetor12.flatMap((name, index) => [name, index]))
