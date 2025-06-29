from datetime import datetime, timedelta 

cycle_length = 0
bleeding_length = 0

def date_validation(date):
	date = date.replace(",", " ").replace("-", " ").replace("/", " ").replace("_", " ")
	date_divid = date.split()
	if len(date_divid) < 3:
		raise ValueError("Invalid date format")
	for count in range(3):
		if not date_divid[count].isdigit():
			raise ValueError("Invalid date format: Non-numeric values detected")
	year, month, day = int(date_divid[0]), int(date_divid[1]), int(date_divid[2])
	if year != 2025:
		raise ValueError("Invalid year")	
	elif month > 12 or month < 1:
		raise ValueError("Invalid month")
	elif day > 31 or day < 1:
		raise ValueError("Invalid day")
	else:
		date = datetime(year, month, day)
	return date


def first_day(date):
	start_date = date_validation(date)
	return start_date
	
def calculate_cycle_length(start_date):
	if start_date > 35 or start_date < 21:
		return "invalid input"
	global cycle_length
	cycle_length = start_date	
	return cycle_length

def calculate_bleeding_length(number):
	global bleeding_length
	if number > 7 or number < 1:
		return "invalid input"
	bleeding_length = number
	return bleeding_length

def calculate_next_day(first_day, calculate_cycle_length):
	next_period_date = start_date + timedelta(days= cycle_length)
	return next_period_date

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
				print("Enter Last Date Period Started (eg. 2025-01-05) : ")
				start_date = first_day(input())
				print("Enter Cycle length (21 - 35):")
				calculate_cycle_length(int(input()))
				print("Enter bleeding length (1 - 7):")
				calculate_bleeding_length(int(input()))
				calculate_next_day(first_day, calculate_cycle_length)
				ovulation_day = calculate_next_day(first_day, calculate_cycle_length) - timedelta(days=14)
				fertile_window_start = ovulation_day - timedelta(days=5)
				fertile_window_end = ovulation_day + timedelta(days=1)
				first_safe_day_start = start_date + timedelta(days= bleeding_length + 1)
				first_safe_day_end = fertile_window_start - timedelta(days=1)
				second_safe_day_start = fertile_window_end + timedelta(days=1)
				second_safe_day_end = calculate_next_day(first_day, calculate_cycle_length) - timedelta(days=1)

				
				print(inner_menu)
				inner_menu_input = input()
				match inner_menu_input:
					case '1':
						print("Your next period date: ", calculate_next_day(first_day, calculate_cycle_length))
						print("Your estimated ovulation date:", ovulation_day)
						print("Your estimated First Safe date:", first_safe_day_start, "to", first_safe_day_end)
						print("Your estimated Second Safe date:", second_safe_day_start, "to", second_safe_day_end)
						print("Your fertile window date starts: ", fertile_window_start)
						print("Your fertile window date ends: ", fertile_window_end)
						break
					case '2':
						print("Your next period date: ", calculate_next_day(first_day, calculate_cycle_length))
						break
					case '3':
						print("Your estimated ovulation date:", ovulation_day)
						break
					case '4':
						print("Your estimated First Safe date:", first_safe_day_start, "to", first_safe_day_end)
						print("Your estimated Second Safe date:", second_safe_day_start, "to", second_safe_day_end)
						break
					case '5':
						print("Your fertile window date starts: ", fertile_window_start)
						print("Your fertile window date ends: ", fertile_window_end)
						break
					case '0':
						exit1 = False
						
		case '0':
			exit = False

# handle your validation properly,
# what happens if i dont enter date in your format
# your test are not testing functionalities, just validation
