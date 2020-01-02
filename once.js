let once = (fn, context) => {
    var result
    return () => {
        if (fn) {
            console.log("fn ~>", fn)            
            result = fn.apply(context || this, arguments)
            fn = null
        }
        return result
    }
}

let canOnlyFireOnce = once(() => {
    console.log("Disparou!")
})

canOnlyFireOnce()
canOnlyFireOnce()