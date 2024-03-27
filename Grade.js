function calculateGrade(marks) {
    //lets create an if statement to check thtough
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E";
    }
}
//prompt user for input
let marks = prompt("please enter your marks: ")
console.log(marks)
console.log("Your grade is:", calculateGrade(marks));