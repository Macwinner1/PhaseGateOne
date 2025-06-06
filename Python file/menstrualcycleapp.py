from datetime import datetime, timedelta 

cycle_length = 0
months = 0
estimate_ovulation = 0
fertile_days = 0

def valid_year(year):
	return year

def valid_month(month):
	return month 

def valid_day(day):
	return day 

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
	'''
	
exit = True
while exit:
	print(menu)
	menu_input = input()
	match menu_input:
		case '1':
			print("Enter Last Date Period Started (eg. 2025, 1, 5) : ")
			start_date = first_day(input())
			print("Enter Cycle length (1 - 35):")
			calculate_cycle_length(int(input()))
			next_period_date = start_date + timedelta(days= cycle_length)
			ovulation_day = next_period_date - timedelta(days=14)
			fertile_window_start = ovulation_day - timedelta(days=5)
			fertile_window_end = ovulation_day + timedelta(days=1)
			print(next_period_date)
			print(ovulation_day)
			print(fertile_window_start)
			print(fertile_window_end)
						
		case '0':
			exit = False


