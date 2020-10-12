function getArrayIntersection(array1, array2) {
    const hash = array1.filter((item, index) => {
        return array1.indexOf(item) == index
    }, [])
    return hash.filter(it =>  array2.includes(it))
}

const finalArray = getArrayIntersection([2, 3, 4, 4, 3, 4, 5], [4, 4, 5, 6])
console.log(finalArray)