const prompt = require('prompt-sync')();

let countA = 0;
let countB = 0;
let pickedOption = [];

console.log( `
==================================
Welcome to MBTI Personality TEST
==================================
`);


let name = prompt("What is your Name: ");
let questions = [
		    ["A. Expend energy, enjoy groups", "B. Conserve energy, enjoy one-on-one"],
		    ["A. Interpret literally", "B. Look for meaning and possibilities"],
		    ["A. Logical, thinking, questioning", "B. Empathetic, feeling, accommodating"],
		    ["A. Organized, orderly", "B. Flexible, adaptable"],
		    ["A. More outgoing, think out loud", "B. More reserved, think to yourself"],
		    ["A. Practical, realistic, experiential", "B. Imaginative, innovative, theoretical"],
		    ["A. Candid, straight forward, frank", "B. Tactful, kind, encouraging"],
		    ["A. Plan, schedule", "B. Unplanned, spontaneous"],
		    ["A. Seek many tasks, public activities, interaction with others", "B. Seek private, solitary activities with quiet to concentrate"],
		    ["A. Standard, usual, conventional", "B. Different, novel, unique"],
		    ["A. Firm, tend to criticize, hold the line", "B. Gentle, tend to appreciate, conciliate"],
		    ["A. Regulated, structured", "B. Easy-going, live and let live"],
		    ["A. External, communicative, express yourself", "B. Internal, reticent, keep to yourself"],
		    ["A. Focus on here-and-now", "B. Look to the future, global perspective, big picture"],
		    ["A. Tough-minded, just", "B. Tender-hearted, merciful"],
		    ["A. Preparation, plan ahead", "B. Go with the flow, adapt as you go"],
		    ["A. Active, initiate", "B. Reflective, deliberate"],
		    ["A. Facts, things, what is", "B. Ideas, dreams, what could be philosophical"],
		    ["A. Matter of fact, issue-oriented", "B. Sensitive, people-oriented, compassionate"],
		    ["A. Control, govern", "B. Latitude, freedom"]
];
let options = [['E', 'I'],
			['S', 'N'],
			['T', 'F'],
			['J', 'P']
];
let optionsCount = 0;
let optionsList = [];

for(let count = 0; count < questions.length; count++){
if(optionsCount === 4){
optionsCount = 0;
}
console.log(questions[count].join("\t"));
let wrongInput = true;
while(wrongInput){
let answer = prompt().toUpperCase();
switch(answer){
	case 'A':
		pickedOption.push(questions[count][0]);
		optionsList.push(options[count % 4][0]);
		countA++;
		optionsCount++;
		wrongInput = false;
		break;
	case 'B':
		pickedOption.push(questions[count][1]);
		optionsList.push(options[count % 4][1]);
		countB++;
		optionsCount++;
		wrongInput = false;
		break;
	default:
		console.log("Expected A or B as Response");
		console.log("I know this is an error, Please retry again");
		console.log(questions[count].join("\t"));
}
}
}
console.log("Number of A selected: " + countA);
console.log("Number of B selected: " + countB);
console.log(pickedOption.join(" \n"));
console.log(optionsList.join(" "));
