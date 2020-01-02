const makeIterator = (array) => {
    let nextIndex = 0;

    return {
        next: () => {
            return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {done:true};
        }
    }
};

let it = makeIterator(['ya', 'ya', 'oh']);
console.log(it.next().value);
console.log(it.next().value);
//console.log(it.next().value);
console.log(it.next().done);