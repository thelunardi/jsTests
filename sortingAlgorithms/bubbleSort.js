const list = [7, 5, 1, 8, 3, 2, 3, 45, 6, 1, 5]
//const list = [1, 2, 3, 4, 5, 6, 7]
//const list = [7, 6, 5, 4, 3, 2, 1]
//troca os adjacents se eles estiverem na ordem errada
// [ 3, 7, 1, 5 ]
// [ 3, 1, 7, 5 ]
// [ 3, 1, 5, 7 ]
// [ 1, 3, 5, 7 ]
// [ 1, 3, 5, 7 ]
// [ 1, 3, 5, 7 ]
// [ 1, 3, 5, 7 ]
// [ 1, 3, 5, 7 ]
// [ 1, 3, 5, 7 ]
// [ 1, 3, 5, 7 ]
function bubbleSort (list) {
    listLength = list.length
    for (j = 0; j < listLength - 1; j++) {
        for (i = 0; i < listLength - 1; i++) {
            if (list[i] > list[i + 1]) {
                let aux = list[i]
                list[i] = list[i + 1]
                list[i + 1] = aux
            }
        }
        console.log(list)
    }
    return list
}


const sortedList = bubbleSort(list)
console.log(sortedList)