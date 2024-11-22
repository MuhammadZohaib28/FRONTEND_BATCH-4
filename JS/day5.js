//ARRAYS IN JS

const frontendClassData = [
    "Zohaib",
    "Fahad",
    "Sami",
    "Ali",
    "Bilal",
    "Ahsan",
    "Zohaib",
    "Fahad",
    "Sami",
    "Ali",
    "Bilal",
    "Ahsan",
    "Zohaib",
    "Fahad",
    "Sami",
    "Ali",
    "Bilal",
    "Ahsan",
    "Zohaib",
    "Fahad",
    "Sami",
    "Ali",
    "Bilal",
    "Ahsan",
]

frontendClassData.push("Muzammil")

frontendClassData.pop();
frontendClassData.pop();
frontendClassData.pop();

// console.log(frontendClassData[1])



// for (let i = 0; i < frontendClassData.length; i++) {
//     console.log(frontendClassData[i])
// }


console.log(frontendClassData.length, "LENGTH OF ARRAY")




frontendClassData.map((kjcaskjdbdskfbansdbasdb, index) => {
    return console.log(kjcaskjdbdskfbansdbasdb)
})






const studentsData = [


    {
        name: "Zohaib",
        age: 28,
        height: 5.9,
        weight: 70,
    },
    {
        name: "Fahad",
        age: 28,
        height: 5.9,
        weight: 70,
    },
    {
        name: "Sami",
        age: 28,
        height: 5.9,
        weight: 70,
    },
    {
        name: "Ali",
        age: 28,
        height: 5.9,
        weight: 70,
    },
    {
        name: "Bilal",
        age: 28,
        height: 5.9,
        weight: 70,
    },
    {
        name: "Ahsan",
        age: 28,
        height: 5.9,
        weight: 70,
    },
]


studentsData.map((student, index) => {
    return console.log(student, "STUDENTS NAME")
})