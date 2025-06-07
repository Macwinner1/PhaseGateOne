#from datetime import datetime, timedelta

import menstrualcycleapp

from unittest import TestCase

class TestMenstrualcycleapp(TestCase):

	def test_that_year_is_valid(self):
		response = menstrualcycleapp.date_validation(2026)
		self.assertEqual(response, "Invalid year")
		
	def test_that_month_is_valid(self):
		response = menstrualcycleapp.date_validation(13)
		self.assertEqual(response, "Invalid month")

	def test_that_day_is_valid(self):
		response = menstrualcycleapp.date_validation(0)
		self.assertEqual(response, "Invalid day")

	def test_that_first_day_function_works(self):
		year,month,day = 2025, 5, 11
		response = menstrualcycleapp.first_day(year,month,day)
		self.assertEqual(response, "2025, 5, 11")
			
	def test_that_calculate_cycle_length_works(self):
		response = menstrualcycleapp.calculate_cycle_length(2025, 5, 11, 2025, 5, 12)
		self.assertEqual(response, "valid input")


