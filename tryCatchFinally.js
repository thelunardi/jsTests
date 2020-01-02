//return statement inside try-catch-finally
test = () => {
    try {
        console.log("1")
        throw new Error('Oooops!');        
    } catch(e) {
        console.log("2")
        return 2
    } finally {
        console.log("3")
        return 3
    }
}

console.log("Aqui está o retorno: " + test())

//try-catch in setTimeOut - error
callback = () => {
    throw new Error("Epaaa!")
}

test2 = () => {
    try {
        setTimeout(callback, 1000);
    } catch(e) {
        console.log("Cheguei aqui?")
    }
}

//console.log("Aqui está o retorno do segundo teste - não entra no catch: " + test2())

//try-catch in setTimeOut - ok - try...catch inside setTimeOut callback
callback2 = () => {
    try {
        throw new Error("Epaaa!")    
    } catch(e) {
        console.log("Cheguei aqui?")       
    }    
}

test3 = () => {
    return setTimeout(callback2, 1000);
}

console.log("Aqui está o terceiro teste - entra no catch")
test3()