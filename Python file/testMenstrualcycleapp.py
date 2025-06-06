from datetime import datetime, timedelta

import menstrualcycleapp.py

from unittest import TestCase

class TestMenstrualcycleapp(TestCase):

	def test_that_year_is_valid(self):
		response = menstrualcycleapp.valid_year(2026)
		self.assertEqual(response, "Invalid year")
		
	def test_that_month_is_valid(self):
		response = menstrualcycleapp.valid_month(13)
		self.assertEqual(response, "Invalid month")


	def test_that_day_is_valid(self):
		response = menstrualcycleapp.valid_day(11)
		self.assertEqual(response, "Invalid day")

	def test_that_first_day_function_works(self):
		response = menstrualcycleapp.first_day(2025, 5, 11)
		self.assertEqual(response, "2025, 5, 11")
		
	def test_that_last_day_function_works(self):
		response = menstrualcycleapp.last_day(2025, 5, 12)
		self.assertEqual(response, "2025, 5, 11")
	
	def test_that_calculate_cycle_length_works(self):
		response = menstrualcycleapp.calculate_cycle_length(2025, 5, 11, 2025, 5, 12)
		self.assertEqual(response, "valid input")

	
	#def test_that_answer_list_function_works(self):
		response = menstrualcycleapp.answer_list([1][1])
		self.assertEqual(response, "lagos")

	#def test_that_question_list_function_exists(self):
		response = menstrualcycleapp.first_day(10)
		self.assertEqual(response, "valid input")


