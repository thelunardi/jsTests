//const list = [7, 5, 1, 8, 3, 2, 3, 45, 6, 1, 5]
//const list = [1, 2, 3, 4, 5, 6, 7]
const list = [7, 6, 5, 4, 3, 2, 1]

//sempre passa o menor valor do vetor em análise para a menor posição do array
//passa o segundo menor para a segunda posiçao
//...
//[5, 3, 7, 1]
//[1, 3, 7, 5]
//[1, 3, 5, 7]
function selectionSort (list) {
    const lengthList = list.length
    for (let actualPosition = 0; actualPosition < lengthList - 1; actualPosition++) {
        let minimumIndex = actualPosition

        for (let i = minimumIndex; i < lengthList; i++) {
            if (list[i] < list[minimumIndex]) {
                minimumIndex = i
            }
        }
        if (list[actualPosition] > list[minimumIndex]) {
            let aux = list[actualPosition]
            list[actualPosition] = list[minimumIndex]
            list[minimumIndex] = aux
        }
    }
    return list
}

const sortedList = selectionSort(list)
console.log(sortedList)
