const list = [7, 5, 1, 8, 3, 2, 3, 45, 6, 1, 5]
//const list = [1, 2, 3, 4, 5, 6, 7]
//const list = [7, 6, 5, 4, 3, 2, 1]

//escolhe um pivô
//passa para a direita todos os maiores e para a esquerda, os menores
//repetir o passo algumas vezes com sublistas até q o princípio do algoritmo se aplique a todos os elementos
function quickSort (list, inicio = 0, fim = null) {
    if (fim === null) {
        fim = list.length - 1
    }
    if (inicio < fim) {
        let pivot = partition(list, inicio, fim)
        quickSort(list, inicio, pivot - 1)
        quickSort(list, inicio + 1, fim)
    }
    return list
}

function partition (list, inicio, fim) {
    pivot = list[fim]
    i = inicio
    for (let j = inicio; j < fim; j++) {
        if (list[j] <= pivot) {
            let aux = list[j]
            list[j] = list[i]
            list[i] = aux
            i++
        }
    }
    let auxPivot = list[i]
    list[i] = list[fim]
    list[fim] = auxPivot
    return i
}

const sortedList = quickSort(list)
console.log(sortedList)