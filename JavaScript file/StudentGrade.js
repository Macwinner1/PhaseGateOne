const prompt = require('prompt-sync')();

function numberOfStudents() {
    let number_of_students = parseInt(prompt("How many students do you have? "));
    return number_of_students;
}

function numberOfSubjects() {
    let number_of_subjects = parseInt(prompt("How many subjects do they offer? "));
    return number_of_subjects;
}

function scoreRange(score) {
    while (score < 1 || score > 100 || isNaN(score)) {
        console.log("Invalid score! Please enter a value between 1 and 100.");
        score = parseFloat(prompt("Retry score input: "));
    }
    return score;
}

function headerStyle(number_of_subjects) {
let header = "Student\t\t";
for(let count = 1; count <= number_of_subjects; count++){
	header += `Sub${ count}\t`;
}
	header += "TOT\tAve\tPOS";

 return header;
}

function collectStudentsDetails(number_of_students, number_of_subjects) {
    let studentScores = [];

    for (let count = 1; count <= number_of_students; count++) {
        let totalScore = 0;
        let scoresList = [];
        for (let counter = 1; counter <= number_of_subjects; counter++) {
            console.log(`Entering score for Student ${count}, Subject ${counter}:`);
            let score = scoreRange(parseFloat(prompt()));
            totalScore += score;
            scoresList.push(score);
            console.log("Saving >>>>>>>>>>>>>>>>>>>>>");
            console.log("Saved successfully");
        }
        let averageScore = (totalScore / number_of_subjects).toFixed(2);
        scoresList.push(totalScore, averageScore);
        studentScores.push({ name: `Student ${count}`, scores: scoresList, total: totalScore });
    }

    return studentScores;
}
function calculatePositions(studentScores) {
    studentScores.sort((a, b) => b.total - a.total);
    for (let count = 0; count < studentScores.length; count++) {
        studentScores[count].scores.push(count + 1);
    }
}




let number_of_students = numberOfStudents();
let number_of_subjects = numberOfSubjects();
let studentData = collectStudentsDetails(number_of_students, number_of_subjects);
calculatePositions(studentData);
console.log("=======================================================");
console.log(headerStyle(number_of_subjects));
console.log("=======================================================");
for (let student of studentData) {
    console.log(`${student.name}\t${student.scores.join("\t")}`);
}
