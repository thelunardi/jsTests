//const list = [7, 5, 1, 8, 3, 2, 3, 45, 6, 1, 5]
//const list = [1, 2, 3, 4, 5, 6, 7]
const list = [7, 6, 5, 4, 3, 2, 1]

//cria um array ordenado por etapas
//ordena um range de 2 elementos
//a partir de um range com 3 elementos, compara para saber onde encaixar o proximo
//[5, 3, 7, 1]
//[[3, 5], 7, 1]
//[[3, 5, 7], 1]
//[[1, 3, 5, 7]
function insertionSort (list) {
    listLength = list.length

    for (i = 1; i < listLength; i++) {
        let key = list[i]
        let positionToStop = i - 1
        while (positionToStop >= 0 && list[positionToStop] > key) {
            list[positionToStop + 1] = list[positionToStop]
            positionToStop--
        }
        list[positionToStop + 1] = key
    }
    return list
}

const sortedList = insertionSort(list)
console.log(sortedList)
