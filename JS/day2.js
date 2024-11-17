console.log("Hello World")

//CONDITIONAL STATEMENTS


const userAge = 26;

if (userAge >= 18) {
    console.log("You are eligible for CNIC " + userAge)
} else {
    console.log(`You are not eligible for CNIC ${userAge}`)
}













const userMarks = prompt("Enter your marks");



if (userMarks > 100 || userMarks < 0) {


    console.log("Invalid marks. Please enter marks between 0 and 100.");



} else if (userMarks >= 90) {
    console.log(`User marks are ${userMarks} and grade is A+`);
} else if (userMarks >= 80) {
    console.log(`User marks are ${userMarks} and grade is A`);
} else if (userMarks >= 70) {
    console.log(`User marks are ${userMarks} and grade is B+`);
} else {
    console.log(`User marks are ${userMarks} and grade is FAIL`);
}

