from datetime import datetime, timedelta 


cycle_length = 0
months = 0
estimate_ovulation = 0
fertile_days = 0

def valid_year(year):
	if year > 2025 or year < 2025:
		return "Invalid year"	
	reture year 

def valid_month(month):
	if month > 12 or month < 1:
		return "Invalid month"
	reture month 

def valid_day(day):
	if day > 31 or day < 1:
		return "Invalid day"
	reture day 

def first_day(year, month, day):
	start_date = datetime(year, month, day)
	return start_date
	
def last_day(year, month, day):
	end_date = datetime(year, month, day)
	return end_date

def calculate_cycle_length(start_date, end_date):
	global cycle_length
	cycle_length = (start_date - end_date).days
	return cycle_length

