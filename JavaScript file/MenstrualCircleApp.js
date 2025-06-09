const prompt = require('prompt-sync')();

function date_validation(date) {
    let [year, month, day] = date.replace(/[-/,_]/g, " ").split(" ").map(Number);

    if (year !== 2025) return "Invalid year";
    if (month < 1 || month > 12) return "Invalid month";
    if (day < 1 || day > 31) return "Invalid day";

    return new Date(year, month - 1, day); 
}

function add_days(date, days) {
    let new_date = new Date(date);
    new_date.setDate(new_date.getDate() + days);
    return new_date;
}

let exit = true;
while (exit) {
    let menu = `
===========================================
    Welcome To Menstrual Cycle Calculator

    Press:
    1. Check your Menstrual Cycle
    0. Exit
===========================================
    `;
	console.log(menu);
    let menu_input = prompt();
    switch(menu_input){
        case "0":
            exit = false;
            break;
        case "1":
            let start_date = date_validation(prompt("Enter Last Date Period Started (YYYY MM DD): "));

            if (typeof start_date === "string") {
                console.log(start_date);
                continue;
            }

            let cycle_length = Number(prompt("Enter Cycle Length (21-35): "));
            let bleeding_length = Number(prompt("Enter Bleeding Length (1-7): "));
            
            let next_period_date = add_days(start_date, cycle_length);
            let ovulation_day = add_days(next_period_date, -14);
            let fertile_window_start = add_days(ovulation_day, -5);
            let fertile_window_end = add_days(ovulation_day, 1);
            let first_safe_day_start = add_days(start_date, +(bleeding_length + 1));
            let first_safe_day_end = add_days(fertile_window_start, -1);
            let second_safe_day_start = add_days(fertile_window_end, +1);
            let second_safe_day_end = add_days(next_period_date, -1);

            

            let exit1 = true;
            while (exit1) {
                let inner_menu = `
===========================================
    Menstrual Cycle Result Menu

    Press:
    1. View all the Results
    2. View Your Next Period Date
    3. View Your Ovulation Date
    4. View Your Safe Day
    5. View Your Fertile Window
    0. <= Back
===========================================
                `;
			console.log(inner_menu);
                let inner_menu_input = prompt();

                switch (inner_menu_input) {
                    case "0":
                        exit1 = false;
                        break;
                    case "1":
                        let exit2 = true;
                        while (exit2) {
                            console.log("Your next period date:", next_period_date.toISOString().split("T")[0]);
                            console.log("Your estimated ovulation date:", ovulation_day.toISOString().split("T")[0]);
                            console.log(`Your First Estimated Safe Day before fertile window: 
${first_safe_day_start.toISOString().split("T")[0]} to ${first_safe_day_end.toISOString().split("T")[0]}`);
                            console.log(`Your Second Estimated Safe Day before fertile window: 
${second_safe_day_start.toISOString().split("T")[0]} to ${second_safe_day_end.toISOString().split("T")[0]}`);

                            console.log("Your fertile window starts:", fertile_window_start.toISOString().split("T")[0]);
                            console.log("Your fertile window ends:", fertile_window_end.toISOString().split("T")[0]);
                            console.log(`
=============
  Press:
  0. <= Back
=============
                            `);
                            let back_input = prompt();
                            if (back_input === "0") exit2 = false;
                            else  console.log(`
                            *************
                            invalid input
                            *************
                            `);

                        }
                        break;
                    case "2":
                        let exit3 = true;
                        while (exit3) {
                            console.log("Your next period date:", next_period_date.toISOString().split("T")[0]);
                            console.log(`
 =============
  Press:
  0. <= Back
 =============
                            `);
                            let back_input = prompt();
                            if (back_input === "0") exit3 = false;
                            else  console.log(`
                            *************
                            invalid input
                            *************
                            `);

                        }
                        break;
                    case "3":
                        let exit4 = true;
                        while (exit4) {
                            console.log("Your estimated ovulation date:", ovulation_day.toISOString().split("T")[0]);
                            console.log(`
 =============
  Press:
  0. <= Back
 =============
                            `);
                            let back_input = prompt();
                            if (back_input === "0") exit4 = false;
                            else  console.log(`
                            *************
                            invalid input
                            *************
                            `);

                        }
                        break;
                    case "4":
                        let exit5 = true;
                        while (exit5) {
                            console.log(`Your First Estimated Safe Day before fertile window: 
${first_safe_day_start.toISOString().split("T")[0]} to ${first_safe_day_end.toISOString().split("T")[0]}`);
                            console.log(`Your Second Estimated Safe Day before fertile window: 
${second_safe_day_start.toISOString().split("T")[0]} to ${second_safe_day_end.toISOString().split("T")[0]}`);

                            console.log(`
 =============
  Press:
  0. <= Back
 =============
                            `);
                            let back_input = prompt();
                            if (back_input === "0") exit5 = false;
                            else console.log(`
                            *************
                            invalid input
                            *************
                            `);
                        }
                        break;
                    case "5":
                        let exit6 = true;
                        while (exit6) {
                            console.log("Your fertile window starts:", fertile_window_start.toISOString().split("T")[0]);
                            console.log("Your fertile window ends:", fertile_window_end.toISOString().split("T")[0]);
                            console.log(`
 =============
  Press:
  0. <= Back
 =============
                            `);
                            let back_input = prompt();
                            if (back_input === "0") exit6 = false;
                            else  console.log(`
                            *************
                            invalid input
                            *************
                            `);

                        }
                        break;
                }
            }
            break;
    }
}

