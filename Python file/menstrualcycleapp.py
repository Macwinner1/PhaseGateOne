from datetime import datetime, timedelta 

cycle_length = 0

def date_validation(date):
	year, month, day = map(int, date.replace(",", "").split())
	if year > 2025 or year < 2025:
		return "Invalid year"	
	elif month > 12 or month < 1:
		return "Invalid month"
	elif day > 31 or day < 1:
		return "Invalid day"
	else:
		date = datetime(year, month, day)
	return date


def first_day(date):
	start_date = date_validation(date)
	return start_date
	
def calculate_cycle_length(start_date):
	global cycle_length
	cycle_length = start_date
	return cycle_length


menu = '''
===========================================
	Welcome To Menstrual Cycle Calculator
	
	Press:
	1. Check your Menstrual Cycle
	0. Exit
===========================================
	'''
	
exit = True
while exit:
	print(menu)
	menu_input = input()
	match menu_input:
		case '1':
			inner_menu = '''
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
			
					'''
			exit1 = True
			while exit1:
				print("Enter Last Date Period Started (eg. 2025, 1, 5) : ")
				start_date = first_day(input())
				print("Enter Cycle length (1 - 35):")
				calculate_cycle_length(int(input()))
				next_period_date = start_date + timedelta(days= cycle_length)
				ovulation_day = next_period_date - timedelta(days=14)
				fertile_window_start = ovulation_day - timedelta(days=5)
				fertile_window_end = ovulation_day + timedelta(days=1)
				print(inner_menu)
				inner_menu_input = input()
				match inner_menu_input:
					case '1':
						print("Your next period date: ", next_period_date)
						print("Your estimated ovulation date:", ovulation_day)
						print("Your fertile window date starts: ", fertile_window_start)
						print("Your fertile window date ends: ", fertile_window_end)
					case '2':
						print("Your next period date: ", next_period_date)
					case '3':
						print("Your estimated ovulation date:", ovulation_day)
					case '4':
						print("Your estimated Safe date:", ovulation_day)
					case '5':
						print("Your fertile window date starts: ", fertile_window_start)
						print("Your fertile window date ends: ", fertile_window_end)
					case '0':
						exit1 = False
						
		case '0':
			exit = False


