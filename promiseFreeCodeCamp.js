//Link: https://www.freecodecamp.org/news/master-promise-async-await-in-20-minutes/
//Author: Thu Nghiem

//Task 1: Promise basics explained using my birthday
//Promise
const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2)
                return;
            }
            reject(new Error("I am sad"))
        }, 2000)
    })
}

//Kayo is not sick
onMyBirthday(false)
    .then(result => {
        console.log(`I have ${result} cakes`)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Party!")
    })

//Kayo is sick
onMyBirthday(true)
    .then(result => {
        console.log(`I have ${result} cakes`)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Party!")
    })


//Task 2: Build a guessing game
const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt("Enter a number (1 - 6):"))
        const randomNumber = Math.floor(Math.random() * 6 + 1)

        if (isNaN(userNumber)) {
            reject(new Error("Wrong input type!"))
        }

        if (userNumber === randomNumber) {
            resolve({
                points: 2,
                randomNumber
            })
            return
        }
        if (userNumber === randomNumber + 1 || userNumber === randomNumber - 1) {
            resolve({
                points: 2,
                randomNumber
            })
            return
        }
        resolve({
            points: 0,
            randomNumber
        })
    })
}

const continueGame = () => {
    return new Promise(resolve => {
        if (window.confirm("Do you want to continue?")) {
            resolve(true)
            return
        }
        resolve(false)
    })
}

/*const handleGuess = () => {
    enterNumber()
        .then(result => {
            alert(`Dice: ${result.randomNumber}: you got ${result.points} points`)

            continueGame().then(result => {
                if (result) {
                    handleGuess()
                    return
                }
                alert("Game ends!")
            })
        })
        .catch(error => alert(error))
}*/

//handleGuess with async/await
const handleGuess = async () => {
    try {
        const result = await enterNumber()

        alert(`Dice: ${result.randomNumber}: you got ${result.points} points`)

        const isContinuing = await continueGame()

        if (isContinuing) {
            handleGuess()
            return
        }
        alert("Game ends!")
    } catch (error) {
        alert(error)
    }
}

handleGuess()

