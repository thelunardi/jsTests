//const list = [7, 5, 1, 8, 2, 4, 6, 12, 53, 6, 1, 1, 1, 23]
//const list = [1, 2, 3, 4, 5, 6, 7]
const list = [7, 6, 5, 4, 3, 2, 1]

//modelo de dividir para conquistar
//divide as listas até que seja possível ordenar
//depois "volta" juntando a lista e ordenando os elementos
function mergeSort(list, inicio, fim = 0) {
    if (fim === 0) {
        fim = list.length
    }
    let c = fim - inicio
    if (c > 1) {
        let meio = Math.floor((fim + inicio) / 2)
        mergeSort(list, inicio, meio)
        mergeSort(list, meio, fim)
        merge(list, inicio, meio, fim)
    }
}

function merge(list, inicio, meio, fim) {
    leftList = list.slice(inicio, meio)
    rightList = list.slice(meio, fim)
    let topLeft = 0
    let topRight = 0
    const leftListLength = leftList.length
    const rightListLength = rightList.length
    for (k = inicio; k < fim; k++) {
        if (topLeft >= leftListLength) {
            list[k] = rightList[topRight]
            topRight++
            continue
        }
        if (topRight >= rightListLength) {
            list[k] = leftList[topLeft]
            topLeft++
            continue
        }
        if (leftList[topLeft] < rightList[topRight]) {
            list[k] = leftList[topLeft]
            topLeft++
        } else {
            list[k] = rightList[topRight]
            topRight++
        }
    }
}

mergeSort(list, 0)
console.log(list)