console.log("TESTING")


// SWITCH CASE

const userInput = ("PePsi").toLowerCase();

console.log(userInput, "TESTTTTTTT")



switch (userInput) {
    case "pepsi":
        console.log("PEPSI REQUESTED")
        break;

    case "Coca Cola":
        console.log("COCA COLA REQUESTED")
        break;

    case "Sprite":
        console.log("SPRITE REQUESTED")
        break;

    case "Pakola":
        console.log("PAKOLA REQUESTED")
        break;

    default:
        console.log("INVALID REQUEST")
        break;

}




const userName = "zohaib_1"

if (userName === "zohaib_") {
    console.log("WELCOME TO FACEBOOK")
} else {
    console.log("INVALID USERNAME")
}


// OBJECTS IN JS

// Fahad
// 28
// 5.9
// 70
// 1234567


const nsfStudentData = {
    name: "Sami",
    age: 28,
    height: 5.9,
    weight: 70,
    cnic: 1234567,
    isStudent: true,
    picture: "https://www.google.com/images",
    link: "https://www.google.com",

}

nsfStudentData["marks"] = 872;
nsfStudentData.bloodGroup = "B+";

console.log(Object.keys(nsfStudentData), "YEH OBJECT KI KEYS HAIN")


console.log(Object.values(nsfStudentData), "YEH OBJECT KI VALUES HAIN")


console.log(Object.entries(nsfStudentData), "YEH OBJECT KI ENTRIES HAIN")