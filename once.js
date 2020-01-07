const once = (fn, context) => {
  var result
  return () => {
    if (fn) {
      console.log('fn ~>', fn)
      // eslint-disable-next-line no-undef
      result = fn.apply(context || this, arguments)
      fn = null
    }
    return result
  }
}

const canOnlyFireOnce = once(() => {
  console.log('Disparou!')
})

canOnlyFireOnce()
canOnlyFireOnce()
