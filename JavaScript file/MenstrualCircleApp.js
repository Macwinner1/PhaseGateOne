

let cycle_length = 0;

function date_validation(date){
	let [year, month, day] = map(int, date.replace(",", "").split());
	if (year > 2025 | year < 2025){
		return "Invalid year";
		}
	else if (month > 12 | month < 1){
		return "Invalid month";
	}
	else if (day > 31 | day < 1)
		return "Invalid day";
	else{
		date = datetime(year, month, day);
	return date;
	}
}
function first_day(date){
	let start_date = date_validation(date);
	return start_date;
	}
function calculate_cycle_length(start_date){
	cycle_length = start_date;
	return cycle_length;
	}

let menu = `
===========================================
	Welcome To Menstrual Cycle Calculator
	
	Press:
	1. Check your Menstrual Cycle
	0. Exit
===========================================
	`;
const prompt = require('prompt-sync')();
let exit = true;
while(exit){
	let menu_input = prompt(menu);
	switch (menu_input){
		case '0':
			exit = false; break;
		case '1':{
			let inner_menu = 
			`
===========================================
	Menstrual Cycle Result Menu
	
	Press:
	1. View all the Result
	2. View Your Next Period Date
	3. View Your Ovulation Date
	4. View Your Safe Day
	5. View Your Fertile Window
	0. <= Back
	
===========================================
					`;
			let exit1 = true;
			while (exit1){
				console.log("Enter Last Date Period Started (eg. 2025, 1, 5) : ");
				start_date = first_day(input());
				console.log("Enter Cycle length (1 - 35):");
				calculate_cycle_length(int(input()));
				let next_period_date = start_date + timedelta(days= cycle_length);
				let ovulation_day = next_period_date - timedelta(days=14);
				let fertile_window_start = ovulation_day - timedelta(days=5);
				let fertile_window_end = ovulation_day + timedelta(days=1);
				let inner_menu_input = prompt(inner_menu);
				switch(inner_menu_input){
					case '0':
						exit1 = False;
					case '1':
						console.log("Your next period date: ", next_period_date);
						console.log("Your estimated ovulation date:", ovulation_day);
						console.log("Your fertile window date starts: ", fertile_window_start);
						console.log("Your fertile window date ends: ", fertile_window_end);
					case '2':
						console.log("Your next period date: ", next_period_date);
					case '3':
						console.log("Your estimated ovulation date:", ovulation_day);
					case '4':
						console.log("Your estimated Safe date:", ovulation_day);
					case '5':
						console.log("Your fertile window date starts: ", fertile_window_start);
						console.log("Your fertile window date ends: ", fertile_window_end);
				}
		}
	}			
}

