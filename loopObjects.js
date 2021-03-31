//https://medium.com/javascript-in-plain-english/loop-through-an-object-the-right-way-in-javascript-400ab752340b

const person = {
    name: 'Alexandre Lunardi',
    age: 28,
}

const fruits = ['Apple', 'Banana', 'Mango']

console.log(Object.entries(person))

console.log(Object.entries(fruits))

//old browsers
if (!Object.entries) {
    Object.entriesAlternative = function (_object) {
        let ownProps = Object.keys(_object)
        let i = ownProps.length
        let resArray = new Array(i)
        while (i--) {
            resArray[i] = [ownProps[i], _object[ownProps[i]]]
        }

        return resArray
    }
}

//console.log(Object.entriesAlternative(fruits))

//callback approach
const vehicles = {
    vans: [
        {
            make: "Dodge",
            model: "Caravan",
        },
        {
            make: "Honda",
            model: "Odyssey",
        },
    ],
    trucks: [
        {
            make: "Ford",
            model: "F-150",
        },
        {
            make: "Toyota",
            model: "Tundra",
        },
    ],
    sedans: [
        {
            make: "Honda",
            model: "Civic",
        },
        {
            make: "Ford",
            model: "Fiesta",
        },
    ],
}

Object.entries(vehicles)
    .forEach(([vehicleType, vehicleEntries]) => {
        console.log(vehicleType)
        console.log(vehicleEntries)
    })

Object.entries(vehicles)
    .forEach(function ([vehicleType, vehicleEntries]) {
        console.log(vehicleType)
        console.log(vehicleEntries)
    })

Object.entries(vehicles)
    .map(([vehicleType, vehicleEntries]) =>
        ([
            vehicleType,
            vehicleEntries.filter(v => v.make === 'Honda')
        ])
    )
    .filter(([vehicleType, vehicleEntries]) => vehicleEntries.length > 0)
    .forEach(([vehicleType, vehicleEntries]) => {
        console.log(vehicleType)
        console.log(vehicleEntries)
    });