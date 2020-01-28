
const addOne = (x) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`I added one! Now it's ${x + 1}.`)
      resolve()
    }, 2000)
  })
}

async function addAsync () {
  console.log('I have 10')
  await addOne(10)
  console.log('Now I\'m done!')
}

addAsync()
